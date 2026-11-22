/** A tiny tap of vibration on phones that support it (Android); a no-op elsewhere. */
export function haptic(ms = 8) {
  try {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate(ms);
  } catch {
    /* unsupported: ignore */
  }
}
