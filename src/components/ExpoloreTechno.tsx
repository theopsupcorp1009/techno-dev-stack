import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnoCartType } from "../types/type";
import ExploreTechnoCard from "./ExploreTechnoCard";
import Stack from "./Stack";
export interface ExploreTechnoProps {
  dataPromise: Promise<ITechnoCartType[]>;
  stack: ITechnoCartType[];
  setStack: Dispatch<SetStateAction<ITechnoCartType[]>>;
}


export default function ExploreTechno({
  dataPromise,
  stack,
  setStack,
}: ExploreTechnoProps) {
  const data = use(dataPromise);

  return (
    <div className="container mx-auto">
      <div className="-mt-30 md:-mt-40 lg:-mt-0">
        <div className="exploreSection text-center lg:text-left">
          <h2 className="fontType text-[24px] lg:text-[36px] font-extrabold">
            Explore The{" "}
            <span className="gradient-theme gradient-text">
              Technologies
            </span>
          </h2>
          <p className="text-[16px] text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        {/*Card*/}
        <div className="grid lg:grid-cols-12 lg:gap-5">
          <div className="lg:col-span-9">
            <div className="grid gap-5 md:grid-cols-2 md:gap-5 md:px-4 lg:grid-cols-3 px-4 lg:px-0 mt-10">
              {data.map((techno, index) => {
                return (
                  <ExploreTechnoCard
                    key={index}
                    techno={techno}
                    stack={stack}
                    setStack={setStack}
                  ></ExploreTechnoCard>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-3 mt-10 px-4 pb-5 lg:px-0">
            <Stack stack={stack} setStack={setStack}></Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
