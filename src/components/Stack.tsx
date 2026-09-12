import { type Dispatch, type SetStateAction } from "react";
import type { ITechnoCartType } from "../types/type";
import { RxCross1 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

export interface StackProps {
  stack: ITechnoCartType[];
  setStack: Dispatch<SetStateAction<ITechnoCartType[]>>;
}

export default function Stack({ stack, setStack }: StackProps) {
  const handleRemoveFromStack = (techno: ITechnoCartType) => {
    const newStack = stack.filter((elem) => elem.id !== techno.id);
    setStack(newStack);
    toast.error(`${techno.name} removed from stack!`, {
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
    if (newStack.length === 0) {
      toast.error(`Stack is Cleared`, {
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
  };

  const handleRemoveAllFromStack = () => {
    setStack([]);
    toast.error(`Stack is Cleared`, {
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
    <div className="border-1 border-[#F1F5F9] rounded-[14px] py-10 px-8 shadow-sm bg-white">
      {stack.length === 0 ? (
        <div>
          <h2 className="text-[#0F172A] text-[18px] font-bold">Your Stack</h2>
          <p className="text-[#94A3B8] text-[12px] mb-5">
            No technologies selected yet.
          </p>
          <p className="text-[#94A3B8] text-[12px] text-center py-5 border-2 border-dashed border-[#E2E8F0] rounded-[14px]">
            Your stack is empty
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-[#0F172A] text-[18px] font-bold">Your Stack</h2>
          <p className="text-[#94A3B8] text-[12px] mb-5">
            {stack.length} Technology Selected
          </p>
          {stack.map((techno) => {
            return (
              <div key={techno.id} className="mb-2">
                <div className="py-3 px-5 flex justify-between items-center border-2 border-[#E2E8F0] rounded-[8px]">
                  <div className="flex justify-between items-center gap-3">
                    <img
                      className="w-[30px] h-[40px]"
                      src={techno.icon}
                      alt={techno.id}
                    />
                    <div>
                      <h2 className="text-[#0F172A] text-[14px] font-bold">
                        {techno.name}
                      </h2>
                      <p className="text-[#94A3B8] text-[10px] font-bold">
                        {techno.category}
                      </p>
                    </div>
                  </div>

                  <div>
                    <RxCross1
                      onClick={() => handleRemoveFromStack(techno)}
                      className="hoverStyle text-[#94A3B8] text-2xl cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={handleRemoveAllFromStack}
            className="hoverStyle py-2 w-full mt-15 text-center text-[#D82C20] text-[14px] font-extrabold border-2 border-[#ED8C85] rounded-[8px] cursor-pointer hover:bg-[#fefafa]"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
