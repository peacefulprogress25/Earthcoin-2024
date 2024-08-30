import ImageView from "../../Components/ImageView";
const community = "/assets/images/community.png";
const nature = "/assets/images/nature1.png";
const purge = "/assets/images/purge.png";
const partnership = "/assets/images/partnership.png";
const projects = "/assets/images/projects.png";
const policy = "/assets/images/policy.png";
import Video from '../../Components/Video'
import ResponsibilitiesOfNode from "../../Components/NodeResponsibilities";



export default function Network() {
  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
          Network
        </p>
        <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
          What are Nodes of $Earth?
        </p>
        <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
          From purging petro dollars to forming partnerships to policy making,
          these NODES keep <br /> the $EARTH network running
        </p>
      </div>
      
      <ResponsibilitiesOfNode />
    </div>
  );
}
