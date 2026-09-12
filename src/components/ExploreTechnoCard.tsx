import { type Dispatch, type SetStateAction } from "react";
import type { ITechnoCartType } from "../types/type";
import { Bounce, toast } from "react-toastify";

export interface ExploreTechnoCardProps {
  techno: ITechnoCartType;
  stack: ITechnoCartType[];
  setStack: Dispatch<SetStateAction<ITechnoCartType[]>>;
}

export default function ExploreTechnoCard({
  techno,
  stack,
  setStack,
}: ExploreTechnoCardProps) {
  const added = stack.some((elem) => elem.id === techno.id);

  const handeAddtoStack = (techno: ITechnoCartType) => {
    const alreadyAdded = stack.some((elem) => elem.id === techno.id);

    if (alreadyAdded) {
      toast.error(`${techno.name} already in stack!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    setStack([...stack, techno]);
    toast.success(`${techno.name} added to stack!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <div
        className={
          !added
            ? "bg-white border-1 border-[#F1F5F9] rounded-[14px] py-10 px-5 shadow-sm"
            : "bg-white border-1 border-[#890079] rounded-[14px] py-10 px-8 shadow-sm"
        }
      >
        <div className="flex justify-between gap-5 space-y-5 md:space-y-8 lg:space-y-8">
          <img
            className="w-[40px] rounded-[8px] py-2 px-2"
            style={{
              backgroundColor: techno.badgeBg,
              color: techno.badgeText,
              borderColor: techno.badgeBorder,
            }}
            src={techno.icon}
            alt={techno.id}
          />

          <div>
            <span
              className="rounded-3xl py-1.5 px-4 text-[12px] font-semibold"
              style={{
                backgroundColor: techno.badgeBg,
                color: techno.badgeText,
                borderColor: techno.badgeBorder,
              }}
            >
              {techno.badge}
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-[#0F172A] text-[18px] font-bold mb-4">
            {techno.name}
          </h2>
          <div className="pb-5 mb-3">
            <p className="text-[12px] text-[#64748B]">{techno.description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 mb-8">
          <span className="bg-[#F1F5F9] text-[#475569] text-[11px] font-medium rounded-[4px] py-1 px-3">
            {techno.category}
          </span>
          <span className="text-[#64748B] text-[11px] font-medium">
            {techno.difficulty}
          </span>
          <span className="text-[#334155] text-[11px] font-semibold">
            ⭐{techno.rating}
          </span>
        </div>

        <button
          onClick={() => handeAddtoStack(techno)}
          disabled={added}
          className="
          hoverStyle 
          w-full 
          text-[12px] 
          -mt-7 
          bg-[#0A0F1D] 
          text-[#ffffff]
          rounded-[8px] 
          py-3 
          cursor-pointer 
          hover:bg-[#3c3a3a] 
          disabled:cursor-not-allowed 
          disabled:bg-[#fef2fd] 
          disabled:text-[#890079] 
          disabled:font-extrabold"
        >
          {!added ? "Add to Stack" : "✓ Added to Stack"}
        </button>
      </div>
    </>
  );
}
