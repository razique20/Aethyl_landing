"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { AmbientEngine } from "@/lib/ambient";
import { cn } from "./ui";

const PREF_KEY = "aethyl-sound";

function readPref() {
  try {
    return localStorage.getItem(PREF_KEY) === "on";
  } catch {
    return false;
  }
}
function writePref(on: boolean) {
  try {
    localStorage.setItem(PREF_KEY, on ? "on" : "off");
  } catch {
    /* storage unavailable: the toggle still works for this visit */
  }
}

/**
 * Background music toggle. Off by default. Browsers only allow audio after a
 * user gesture, so a visitor who turned sound on before gets it back on their
 * first click or key press, never on page load.
 */
export default function SoundToggle({ className }: { className?: string }) {
  const engine = useRef<AmbientEngine | null>(null);
  const [playing, setPlaying] = useState(false);

  const getEngine = useCallback(async () => {
    if (!engine.current) {
      const { AmbientEngine } = await import("@/lib/ambient");
      engine.current = new AmbientEngine();
    }
    return engine.current;
  }, []);

  const play = useCallback(async () => {
    const e = await getEngine();
    await e.start();
    setPlaying(true);
  }, [getEngine]);

  const pause = useCallback(() => {
    engine.current?.stop();
    setPlaying(false);
  }, []);

  const toggle = () => {
    if (playing) {
      pause();
      writePref(false);
    } else {
      play();
      writePref(true);
    }
  };

  // Resume a returning visitor's choice on their first interaction.
  useEffect(() => {
    if (!readPref()) return;
    const resume = (ev: Event) => {
      // Let the toggle's own click handle itself.
      if ((ev.target as Element | null)?.closest?.("[data-sound-toggle]")) return;
      play();
    };
    const opts = { once: true, capture: true } as const;
    window.addEventListener("pointerdown", resume, opts);
    window.addEventListener("keydown", resume, opts);
    return () => {
      window.removeEventListener("pointerdown", resume, opts);
      window.removeEventListener("keydown", resume, opts);
    };
  }, [play]);

  // Fade out while the tab is hidden, back in when it returns.
  useEffect(() => {
    const onVis = () => {
      const e = engine.current;
      if (!e || !playing) return;
      if (document.hidden) e.stop();
      else e.start();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [playing]);

  return (
    <button
      type="button"
      data-sound-toggle
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "Turn background music off" : "Turn background music on"}
      className={cn(
        "group inline-flex h-9 min-w-9 items-center justify-center gap-2.5 rounded-full border border-input px-3 sm:px-3.5 text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-foreground/60 hover:text-foreground",
        className
      )}
    >
      <span className="eq flex h-3 items-end gap-[3px]" data-playing={playing} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span aria-hidden="true" className="hidden sm:inline">Sound {playing ? "on" : "off"}</span>
    </button>
  );
}
