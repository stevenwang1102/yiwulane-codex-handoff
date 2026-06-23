export type ConsentChoice = "accepted" | "declined";

export const consentStorageKey = "yiwulane_cookie_consent";

export function canLoadAnalytics(choice: ConsentChoice | null) {
  return choice === "accepted";
}
