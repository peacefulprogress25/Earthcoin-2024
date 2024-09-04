
const avatar = "/assets/icons/dapp-Avatar.png";
const copyIcon = "/assets/icons/copy-Icon.png";
const disconnetIcon = "/assets/icons/disconnet-Icon.png";
const sideIcon = "/assets/icons/side-Icon.png";
export default function AccountDapp() {
return(
    <div>
        <div  className="bg-[#3C42420F] px-6 py-4">
            <div className="flex flex-col mt-3 items-center">
                <img className="w-16 h-16" src={avatar} />
        <p className="font-inter font-semibold text-[18px] text-[#25292E]">0xhab.eth</p>
        <p className="text-[#3C424299] font-inter font-semibold text-[12px]">SOLARPUNKMAXI</p>
            </div>
        
        <div className="flex gap-2 mt-3 w-full">
            <div className="flex flex-col items-center px-4 py-2 w-[50%] rounded-lg  drop-shadow bg-white">
                <img className="w-6 h-6" src={copyIcon} />
                <p className="font-inter font-semibold text-[12px] text-[#25292E]">Copy</p>
            </div>
            <div className="flex flex-col items-center  px-4 py-2 w-[50%] rounded-lg drop-shadow bg-white">
                <img className="w-6 h-6" src={disconnetIcon} />
                <p className="font-inter font-semibold text-[12px] text-[#25292E]">Disconnect</p>
            </div>
        </div>
        <div className="flex gap-2 mt-2 w-full">
            <div className="flex flex-col items-center px-4 py-2 w-[50%] drop-shadow rounded-lg bg-white">
               <p className="font-inter font-semibold text-[18px] text-[#25292E]">42.069</p>
                <p className="font-inter font-semibold text-[12px] text-[#101828]">$EARTH Balance</p>
            </div>
            <div className="flex flex-col items-center px-4 py-2 w-[50%]  drop-shadow rounded-lg bg-white">
               <p className="font-inter font-semibold text-[18px] text-[#25292E]">10.28</p>
                <p className="font-inter font-semibold text-[12px] text-[#101828]">$DAI Balance</p>
            </div>
        </div>
        <div className="flex justify-between px-2 mt-4">
            <p className="text-[#C5C6C6] font-inter font-semibold text-[12px]">View More on Polygon Scan</p>
            <img className="w-6 h-6" src={sideIcon} />
        </div>
        </div>
        <div className="flex gap-2 w-full px-6 py-4">
            <div className="flex flex-col items-center px-4 py-2 w-[50%] border-[1px] border-[#EAECF0] drop-shadow rounded-lg">
               <p className="font-inter font-semibold text-[18px] text-[#25292E]">$10.00</p>
                <p className="font-inter font-semibold text-[12px] text-[#101828]">$EARTH Price</p>
            </div>
            <div className="flex flex-col items-center px-4 py-2 w-[50%] border-[1px] border-[#EAECF0] drop-shadow rounded-lg ">
               <p className="font-inter font-semibold text-[18px] text-[#25292E]">$8379.37</p>
                <p className="font-inter font-semibold text-[12px] text-[#101828]">Treasury Size</p>
            </div>
        </div>
    </div>
)
}