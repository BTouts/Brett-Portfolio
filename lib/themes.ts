export type ThemeId = "frost";

export interface Theme {
  id: ThemeId;
  name: string;
  swatch: string;
  secondarySwatch: string;
  description: string;
}

export const themes: Theme[] = [
  {
    id: "frost",
    name: "Frost",
    swatch: "#60A5FA",
    secondarySwatch: "#A78BFA",
    description: "Glassmorphism",
  },
];
