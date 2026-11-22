/**
 * Generative ambient score, synthesised in the browser with the Web Audio
 * API. No audio file to download or license: slow, warm chords through a
 * lowpass filter and a long synthetic reverb, with sparse bell-like notes
 * on top. One instance lives for the whole visit.
 */

const midiToHz = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

// D major, gently: Dmaj9 → Bm9 → Gmaj7(#11) → A6/9
const CHORDS = [
  [50, 57, 61, 64, 66],
  [47, 54, 57, 61, 62],
  [43, 50, 54, 57, 61],
  [45, 52, 54, 59, 61],
];
// D major pentatonic, upper register
const BELLS = [74, 76, 78, 81, 83, 86];

const CHORD_SECONDS = 9;
const MASTER_LEVEL = 0.16;

export class AmbientEngine {
  private ctx: AudioContext;
  private master: GainNode;
  private padBus: BiquadFilterNode;
  private reverb: ConvolverNode;
  private chordTimer?: ReturnType<typeof setTimeout>;
  private bellTimer?: ReturnType<typeof setTimeout>;
  private chordIndex = 0;
  private running = false;

  constructor() {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AC();

    this.master = this.ctx.createGain();
    this.master.gain.value = 0;

    const compressor = this.ctx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.ratio.value = 3;
    this.master.connect(compressor).connect(this.ctx.destination);

    this.reverb = this.ctx.createConvolver();
    this.reverb.buffer = this.impulse(5.5, 2.6);
    const wet = this.ctx.createGain();
    wet.gain.value = 0.7;
    this.reverb.connect(wet).connect(this.master);

    // Pads go through a slowly breathing lowpass.
    this.padBus = this.ctx.createBiquadFilter();
    this.padBus.type = "lowpass";
    this.padBus.frequency.value = 900;
    this.padBus.Q.value = 0.4;
    const lfo = this.ctx.createOscillator();
    const lfoDepth = this.ctx.createGain();
    lfo.frequency.value = 0.05;
    lfoDepth.gain.value = 350;
    lfo.connect(lfoDepth).connect(this.padBus.frequency);
    lfo.start();

    const dry = this.ctx.createGain();
    dry.gain.value = 0.45;
    this.padBus.connect(dry).connect(this.master);
    this.padBus.connect(this.reverb);
  }

  get playing() {
    return this.running;
  }

  async start() {
    if (this.running) return;
    this.running = true;
    await this.ctx.resume();
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(MASTER_LEVEL, t + 3);
    this.nextChord();
    this.scheduleBell();
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    clearTimeout(this.chordTimer);
    clearTimeout(this.bellTimer);
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0, t + 1.2);
    setTimeout(() => {
      if (!this.running) this.ctx.suspend();
    }, 1400);
  }

  private nextChord() {
    if (!this.running) return;
    const notes = CHORDS[this.chordIndex % CHORDS.length];
    this.chordIndex++;
    const t = this.ctx.currentTime;
    const hold = CHORD_SECONDS + 4; // overlap into the next chord
    notes.forEach((m, i) => this.padVoice(midiToHz(m), t + i * 0.12, hold));
    this.chordTimer = setTimeout(() => this.nextChord(), CHORD_SECONDS * 1000);
  }

  private padVoice(freq: number, at: number, hold: number) {
    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0, at);
    env.gain.linearRampToValueAtTime(0.06, at + 3.5);
    env.gain.setValueAtTime(0.06, at + hold - 4.5);
    env.gain.linearRampToValueAtTime(0, at + hold);
    env.connect(this.padBus);

    // Two slightly detuned oscillators per note for warmth.
    for (const [type, cents, level] of [
      ["sine", -5, 1],
      ["triangle", 6, 0.35],
    ] as const) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = cents;
      g.gain.value = level;
      osc.connect(g).connect(env);
      osc.start(at);
      osc.stop(at + hold + 0.1);
    }
  }

  private scheduleBell() {
    if (!this.running) return;
    const wait = 2200 + Math.random() * 4200;
    this.bellTimer = setTimeout(() => {
      if (!this.running) return;
      const m = BELLS[Math.floor(Math.random() * BELLS.length)];
      this.bell(midiToHz(m));
      this.scheduleBell();
    }, wait);
  }

  private bell(freq: number) {
    const t = this.ctx.currentTime;
    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(0.035, t + 0.02);
    env.gain.exponentialRampToValueAtTime(0.0001, t + 4);

    const pan = this.ctx.createStereoPanner();
    pan.pan.value = Math.random() * 1.2 - 0.6;
    env.connect(pan);
    pan.connect(this.reverb);
    const dry = this.ctx.createGain();
    dry.gain.value = 0.35;
    pan.connect(dry).connect(this.master);

    // Fundamental plus a soft inharmonic partial gives a glassy tone.
    for (const [ratio, level] of [
      [1, 1],
      [2.76, 0.18],
    ]) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq * ratio;
      g.gain.value = level;
      osc.connect(g).connect(env);
      osc.start(t);
      osc.stop(t + 4.2);
    }
  }

  /** Synthetic stereo reverb tail: exponentially decaying noise. */
  private impulse(seconds: number, decay: number) {
    const rate = this.ctx.sampleRate;
    const length = Math.floor(rate * seconds);
    const buf = this.ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      }
    }
    return buf;
  }
}
