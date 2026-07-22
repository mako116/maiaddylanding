export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.maiaddy.app";

export const APP_STORE_URL =
  "https://apps.apple.com/ng/app/maiaddy-get-your-loccode/id6737343500";

export function getAppStoreUrl(): string {
  if (typeof window === "undefined") return PLAY_STORE_URL;
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return isIOS ? APP_STORE_URL : PLAY_STORE_URL;
}
