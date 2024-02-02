import { sportHistory } from "@/data/sport/history";
import { IGym, IRun, ISport } from "@/types/sport";
import { Clock, Dumbbell, Gauge, LandPlot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ThemeSport() {
  return (
    <>
      <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">
        <span className="font-bold text-title mr-1 md:mr-0">{sportHistory.length}</span> exercises in 2024
      </h3>
      <div className="flex flex-col gap-10">
        {sportHistory
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((sport, index) => {
            if (sport.type === "gym") {
              return <ThemeSportGym key={index} gymExercise={sport} />;
            } else if (sport.type === "running") {
              return <ThemeSportRunning key={index} runningExercise={sport} />;
            }
          })}
      </div>
    </>
  );
}

const ThemeSportGym = ({ gymExercise }: { gymExercise: ISport & IGym }) => {
  return (
    <div className="transition group relative hover:cursor-default">
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="flex sm:flex-col gap-1 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2 whitespace-nowrap">
          <span>{gymExercise.date.toLocaleDateString("en-GB")}</span>
          <span className="sm:hidden">-</span>
          <span>
            {gymExercise.date.getHours()}:
            {gymExercise.date.getMinutes() > 10
              ? gymExercise.date.getMinutes()
              : "0" + gymExercise.date.getMinutes()}
          </span>
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <span className="text-zinc-800 dark:text-zinc-200 capitalize">
              {gymExercise.type}
            </span>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline">
                <Clock size={16} className="mr-1" />
                {convertSeconds(gymExercise.duration)}
              </Badge>
              <Badge variant="outline" className="capitalize">
                <Dumbbell size={16} className="mr-1" />
                {gymExercise.target}
              </Badge>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

const ThemeSportRunning = ({
  runningExercise,
}: {
  runningExercise: ISport & IRun;
}) => {
  return (
    <div className="transition group relative hover:cursor-default">
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="flex sm:flex-col gap-1 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2 whitespace-nowrap">
          <span>{runningExercise.date.toLocaleDateString("en-GB")}</span>
          <span className="sm:hidden">-</span>
          <span>
            {runningExercise.date.getHours()}:
            {runningExercise.date.getMinutes() > 10
              ? runningExercise.date.getMinutes()
              : "0" + runningExercise.date.getMinutes()}
          </span>
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <span className="text-zinc-800 dark:text-zinc-200 capitalize">
              {runningExercise.type}
            </span>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline">
                <Clock size={16} className="mr-1" />
                {convertSeconds(runningExercise.duration)}
              </Badge>
              <Badge variant="outline">
                <LandPlot size={16} className="mr-1" />
                {runningExercise.distance / 1000 + " km"}
              </Badge>
              <Badge variant="outline">
                <Gauge size={16} className="mr-1" />
                {calculatePace(
                  runningExercise.duration,
                  runningExercise.distance
                )}
              </Badge>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

const convertSeconds = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hourString = hours > 0 ? `${hours}h` : "";
  const minuteString = minutes > 0 ? `${minutes}m` : "";

  return hours > 0 ? `${hourString}${minuteString && ` ${minuteString}`}` : `${minuteString}`;
};

const calculatePace = (duration: number, distance: number): string => {
  const paceInSecondsPerKm = duration / (distance / 1000);
  const paceMinutes = Math.floor(paceInSecondsPerKm / 60);
  const paceSeconds = Math.round(paceInSecondsPerKm % 60);

  return `${paceMinutes}'${paceSeconds < 10 ? "0" : ""}${paceSeconds}"`;
};
