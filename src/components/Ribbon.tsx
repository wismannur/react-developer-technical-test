import clsx from "clsx";

const Ribbon = ({ text }: { text: string }) => {
  return (
    <div
      className={clsx([
        "absolute border-solid border-b-[30px] border-b-main-green border-l-[30px] border-l-[transparent] border-r-[30px] border-r-[transparent] h-[0px] w-[120px] text-center -rotate-45 -left-[40px] top-[5px]",
        "text-white text-xl font-bold shadow-xl uppercase",
        `before:content-[""] border-solid before:border-b-main-green before:border-b-[12px] before:border-l-[12px] before:border-l-[transparent] before:rotate-45 before:-left-[27px] before:top-[24px] before:absolute`,
        `after:content-[""] border-solid after:border-b-main-green after:border-b-[12px] after:border-l-[12px] after:border-l-[transparent] after:rotate-45 after:left-[76px] after:top-[24px] after:absolute`,
      ])}
    >
      {text}
    </div>
  );
};

export default Ribbon;
