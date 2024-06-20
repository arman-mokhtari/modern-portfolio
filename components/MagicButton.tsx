import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: Props) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Border Magic
      </span>
    </button>
  );
  // return (
  //   <button
  //     className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
  //     onClick={handleClick}
  //   >
  //     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  //     <span
  //       className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
  //            bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
  //     >
  //       {position === "left" && icon}
  //       {title}
  //       {position === "right" && icon}
  //     </span>
  //   </button>
  // );
};

export default MagicButton;
