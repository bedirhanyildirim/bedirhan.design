import { ISport } from "@/types/sport";

export const sportHistory: ISport[] = [
  {
    date: new Date(2024, 0, 2, 19, 33),
    type: "running",
    distance: 2010,
    duration: 750,
  },
  {
    date: new Date(2024, 0, 4, 16),
    type: "gym",
    duration: 3200,
    target: "fullbody",
  },
  {
    date: new Date(2024, 0, 20, 15),
    type: "gym",
    duration: 4000,
    target: "fullbody",
  },
];
