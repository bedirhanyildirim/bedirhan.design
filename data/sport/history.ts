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
  {
    date: new Date(2024, 0, 25, 17),
    type: "gym",
    duration: 5100,
    target: "fullbody",
  },
  {
    date: new Date(2024, 0, 27, 12, 38),
    type: "running",
    distance: 3560,
    duration: 1286,
  },
  {
    date: new Date(2024, 0, 29, 12, 4),
    type: "running",
    distance: 3010,
    duration: 1125,
  },
  {
    date: new Date(2024, 0, 30, 19, 45),
    type: "gym",
    duration: 3000,
    target: "push",
  },
  {
    date: new Date(2024, 1, 2, 11, 0),
    type: "gym",
    duration: 3500,
    target: "pull",
  },
];
