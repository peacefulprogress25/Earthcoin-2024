const nodeResponsibilities = "/assets/images/Responsibilities-Node.png";
const nodeResponsibilities1 = "/assets/images/Responsibilities-Node1.png";
const nodeResponsibilities2 = "/assets/images/Responsibilities-Node2.png";
const nodeResponsibilities3 = "/assets/images/Responsibilities-Node3.png";
const nodeResponsibilities4 = "/assets/images/Responsibilities-Node4.png";
export default function ResponsibilitiesOfNode() {
    return (
        <div className=" px-4 sm:px-[6%]">
            <div className="flex justify-between shadow-lg w-full">
                <div className="relative w-full">
                    <img className="object-contain" src={nodeResponsibilities} alt="node" />
                    <div className="absolute top-10 left-10">
                        <p className="font-syne text-white font-semibold text-[35px]">Responsibilities<br />
                            of a Node</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-[100%]  border-b-[1px]  border-r-[1px] border-[#D0D5DD]">
                    <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%]  border-[#D0D5DD]">
                        <a><p className="font-syne h-full text-center   text-[#000000] font-semibold text-[26px]">Purge</p></a>
                    </div>

                    <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%] border-[#D0D5DD]">
                        <a > <p className="font-syne text-center   text-[#000000] font-semibold text-[26px]">Partnerships</p></a>
                    </div>
                    <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%] border-[#D0D5DD]">
                        <a ><p className="font-syne text-center   text-[#000000] font-semibold text-[26px]">Projects</p></a>
                    </div>
                    <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%] mt- border-[#D0D5DD]">
                        <a><p className="font-syne text-center    text-[#000000] font-semibold text-[26px]">Policy</p></a>
                    </div>

                </div>

            </div>


            {/* <div className=" mt-10">
                <div className="flex justify-between shadow-lg w-full">
                    <div className="relative w-full">
                        <img className="object-contain" src={nodeResponsibilities1} alt="node" />
                        <div className="absolute top-10 left-10">
                            <p className="font-syne text-white font-semibold text-[35px]">Responsibilities<br />
                                of a Node</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
                        <div className="flex px-10 py-5 flex-col ">
                            <p className="font-syne text-[#000000] font-semibold text-[30px]">Purge</p>
                            <p className="font-inter leading-5 mt-5 w-full font-light text-[#475467] text-[13px]">We envision $EARTH treasury to be a source of patient, aligned $$$ waiting to deployed towards projects that are building net zero infrastructure. Addressing climate change is no longer a technology, knowledge or feasibility problem but a finance problem. An absolute zero emission future is a function of millions of climate solutions (link) being deployed as quickly as possible. For this to be a reality we need ginormous amounts of capital. ($3-4 Trillion/Yr climate finance gap)
                            </p>
                            <p className="font-inter leading-5 mt-3 mb-4 w-full font-light text-[#475467] text-[13px]">Since Nodes are the only ones with permission to mint $EARTH and only when $EARTH is minted directly at the protocol do the $ flow into the treasury, it will be up to all the Nodes combined to ensure the treasury is equipped to do what's necessary at all times. We see this as a function of nodes personally purging their petro $ at regular intervals + seeking aligned capital from within their network.
                            </p>

                        </div>

                        <div style={{ cursor: "pointer" }} className=" border-t-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">Partnerships</p></a>

                        </div>
                        <div style={{ cursor: "pointer" }} className=" border-t-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Projects</p></a>
                        </div>
                        <div style={{ cursor: "pointer" }} className=" border-t-[1px] border-[#D0D5DD]">
                            <a><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Policy</p></a>
                        </div>

                    </div>

                </div>

            </div>

            <div className=" mt-10">
                <div className="flex justify-between shadow-lg w-full">
                    <div className="relative w-full">
                        <img className="object-contain" src={nodeResponsibilities2} alt="node" />
                        <div className="absolute top-10 left-10">
                            <p className="font-syne text-white font-semibold text-[35px]">Responsibilities<br />
                                of a Node</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
                        <div style={{ cursor: "pointer" }} className=" border-b-[1px] border-t-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">Purge</p></a>
                        </div>
                        <div className="flex px-10 py-5 flex-col ">
                            <p className="font-syne text-[#000000] font-semibold text-[30px]">Partnerships</p>
                            <p className="font-inter leading-5 mt-5 w-full font-light text-[#475467] text-[13px]">
                                We envision $EARTH treasury to be a source of patient, aligned $$$ waiting to deployed towards projects that are building net zero infrastructure. Addressing climate change is no longer a technology, knowledge or feasibility problem but a finance problem. An absolute zero emission future is a function of millions of climate solutions (link) being deployed as quickly as possible. For this to be a reality we need ginormous amounts of capital. ($3-4 Trillion/Yr climate finance gap)

                            </p>
                            <p className="font-inter leading-5 mt-3 mb-4 w-full font-light text-[#475467] text-[13px]">
                                Since Nodes are the only ones with permission to mint $EARTH and only when $EARTH is minted directly at the protocol do the $ flow into the treasury, it will be up to all the Nodes combined to ensure the treasury is equipped to do what's necessary at all times. We see this as a function of nodes personally purging their petro $ at regular intervals + seeking aligned capital from within their network.

                            </p>

                        </div>


                        <div style={{ cursor: "pointer" }} className=" border-t-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Projects</p></a>
                        </div>
                        <div style={{ cursor: "pointer" }} className=" border-t-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Policy</p></a>
                        </div>

                    </div>

                </div>

            </div>


            <div className=" mt-10">
                <div className="flex justify-between shadow-lg w-full">
                    <div className="relative w-full">
                        <img className="object-contain" src={nodeResponsibilities3} alt="node" />
                        <div className="absolute top-10 left-10">
                            <p className="font-syne text-white font-semibold text-[35px]">Responsibilities<br />
                                of a Node</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
                        <div style={{ cursor: "pointer" }} className=" border-b-[1px] border-t-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">Purge</p></a>
                        </div>
                        <div style={{ cursor: "pointer" }} className=" border-b-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Partnerships</p></a>
                        </div>
                        <div className="flex px-10 py-5 flex-col ">
                            <p className="font-syne text-[#000000] font-semibold text-[30px]">Projects</p>
                            <p className="font-inter leading-5 mt-5 w-full font-light text-[#475467] text-[13px]">
                                We envision $EARTH treasury to be a source of patient, aligned $$$ waiting to deployed towards projects that are building net zero infrastructure. Addressing climate change is no longer a technology, knowledge or feasibility problem but a finance problem. An absolute zero emission future is a function of millions of climate solutions (link) being deployed as quickly as possible. For this to be a reality we need ginormous amounts of capital. ($3-4 Trillion/Yr climate finance gap)


                            </p>
                            <p className="font-inter leading-5 mt-3 mb-4 w-full font-light text-[#475467] text-[13px]">
                                Since Nodes are the only ones with permission to mint $EARTH and only when $EARTH is minted directly at the protocol do the $ flow into the treasury, it will be up to all the Nodes combined to ensure the treasury is equipped to do what's necessary at all times. We see this as a function of nodes personally purging their petro $ at regular intervals + seeking aligned capital from within their network.


                            </p>

                        </div>



                        <div style={{ cursor: "pointer" }} className=" border-t-[1px]  border-[#D0D5DD]">
                            <a><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Policy</p></a>
                        </div>

                    </div>

                </div>

            </div>

            <div className=" mt-10">
                <div className="flex justify-between shadow-lg w-full">
                    <div className="relative w-full">
                        <img className="object-contain" src={nodeResponsibilities4} alt="node" />
                        <div className="absolute top-10 left-10">
                            <p className="font-syne text-white font-semibold text-[35px]">Responsibilities<br />
                                of a Node</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
                        <div style={{ cursor: "pointer" }} className=" border-b-[1px] border-t-[1px] border-[#D0D5DD]">
                            <a><p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">Purge</p></a>
                        </div>
                        <div style={{ cursor: "pointer" }} className=" border-b-[1px] border-[#D0D5DD]">
                            <a ><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Partnerships</p></a>
                        </div>
                        <div style={{ cursor: "pointer" }} className=" border-b-[1px]  border-[#D0D5DD]">
                            <a><p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">Policy</p></a>
                        </div>
                        <div className="flex px-10 py-5 flex-col ">
                            <p className="font-syne text-[#000000] font-semibold text-[30px]">Policy</p>
                            <p className="font-inter leading-5 mt-5 w-full font-light text-[#475467] text-[13px]">
                                Co-ordinating on monetary and fiscal policy for $EARTH to achieve its goals.

                            </p>
                            <p className="font-inter leading-5 mt-5 w-full font-light text-[#475467] text-[13px]">
                                Monetary policy will involve deciding on the premium $EARTH commands over the $ value of assets in our treasury to fulfil our goals. Controlling the supply of $EARTH in the secondary market for maintaining desired price levels.



                            </p>
                            <p className="font-inter leading-5 mt-3 mb-4 w-full font-light text-[#475467] text-[13px]">

                                Fiscal policy would involve deciding how best to deploy $EARTH that is in the treasury. Current usage is for APY, LP, DAO, Rewarding community, rewarding projects and partners.



                            </p>

                        </div>


                    </div>

                </div>

            </div> */}



        </div>

    )
}