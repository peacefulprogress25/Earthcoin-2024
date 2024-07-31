import { BtnLoader } from "../../Components/Loader";
import { title } from "process";

function Progress({ data, progress, loading, failed }) {
  return (
    <ul
      className='font-inter list-disc pl-4 caret-[#12B76A] text-[12px] font-normal text-[#12B76A]'
      style={{ color: "#12B76A" }}
    >
      {data.map((obj) => {
        const underProgress = loading[obj?.title];
        const pending = !progress[obj?.title] && !loading[obj?.title];
        const completed = !loading[obj?.title] && progress[obj?.title];

        return (
          <li
            className={`flex items-center gap-2 text-[${
              completed ? "#12B76A" : "#475467"
            }] font-inter  `}
            key={obj.title}
          >
            {obj?.text}{" "}
            {underProgress ? (
              <BtnLoader className={"!text-black"} />
            ) : pending ? (
              "(pending)"
            ) : (
              "(Complete)"
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Progress;
