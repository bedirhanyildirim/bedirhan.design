/**
 * new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 * duration: 3600 (seconds) **/
export type ISport = {
  date: Date;
  duration: number;
} & (IGym | IRun | IBox);

export type IGym = {
  type: "gym";
  target: "fullbody" | "pull" | "push" | "legs" | "core";
};

/**
 * distance: 3000 (meters)
 * mapURL: GPX-format **/
export type IRun = {
  type: "running";
  distance: number;
  mapURL?: "string";
};

export type IBox = {
  type: "boxing";
}