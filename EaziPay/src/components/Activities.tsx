import SearchIcon from "../Assets/Magnifier.png";
import Filter from "../Assets/equalizer.png";
import Employee from "../Assets/Frame 861.png";
import style from "./style.module.css";


const Activities = () => {
     return (
          <section className={` bg-[#fff] relative p-4 right-0 my-6 font-face-ae`}>
               <div className={`${style.chat_scroll} overflow-x-scroll`}>
               <div className={`w-[1000px] p-4`}>
                    <h1 className={`font-[500] text-[2rem] leading-[40px] text-[#292a29] mb-8`}>Recent Activities</h1>
                    <div className={`flex gap-4 mb-4`}>
                         <div className={`relative`}>
                              <input type="text" name="search" id="search" placeholder="Search employee" className={`w-[855px] p-3 border border-[#b5b6b5] rounded-[16px] text-[.8rem] font-[400] leading-[16px] text-[#b9bbc0] outline-none`} />
                              <div className={`absolute w-[102px] bg-[#d9ebcd] py-2 px-6 rounded-r-[16px] flex justify-center items-center top-0 right-0 cursor-pointer`}>
                                   <img src={SearchIcon} alt="" />
                              </div>
                         </div>
                         <div className={`flex gap-2 w-[86px] rounded-[16px] border border-[#b5b6b5] py-2 px-4 justify-center items-center cursor-pointer`}>
                              <img src={Filter} alt="Filter" />
                              <p className={`font-[500] text-[.8rem] leading-[14px] text-[#8d8e8d]`}>Filter</p>
                         </div>
                    </div>
                    <div className={`${style.chat_scroll} bg-[#f2f1f1] rounded-[20px] w-[100%] p-4 h-[716px] overflow-y-scroll`}>
                         <h3 className={`font-[500] text-[1.1rem] leading-[24px] text-[#515251]`}>Wednesday, November 09, 2022</h3>

                         <div className={`w-full bg-white mt-8 mb-4 rounded-[16px] border border-[#e7e8e7] py-3 px-6 shadow-md`}>
                              <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-4`}>payroll</h3>
                              <div className={`flex gap-4 justify-between items-center`}>
                                   <div className={`flex gap-2 items-center justify-start`}>
                                        <div className={`flex items-center justify-center w-[40px] h-[40px] rounded-full p-2 bg-[#01aa8c] text-white`}>BM</div>
                                        <span className={`font-[500] text-[1rem] leading-[24px] text-[#515251]`}>Badmus Kemis</span>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>activity</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>Paid November 2022 salary</p>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>employee</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>52</p>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>time</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>16:15</p>
                                   </div>
                              </div>
                         </div>

                         <div className={`w-full bg-white mb-8 rounded-[16px] border border-[#e7e8e7] py-3 px-6 shadow-md`}>
                              <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-4`}>employee management</h3>
                              <div className={`flex gap-4 justify-between items-center`}>
                                   <div className={`flex gap-2 items-center justify-start`}>
                                        <div className={`flex items-center justify-center w-[40px] h-[40px] rounded-full`}>
                                             <img src={Employee} alt="employee" />
                                        </div>
                                        <span className={`font-[500] text-[1rem] leading-[24px] text-[#515251]`}>Kalu Abasiama</span>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>activity</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>Added mew employee</p>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>employee</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>04</p>
                                   </div>
                              </div>
                         </div>

                        <h3 className={`font-[500] text-[1.1rem] leading-[24px] text-[#515251]`}>Friday, November 04, 2022</h3>
                        <div className={`w-full bg-white mt-8 mb-4 rounded-[16px] border border-[#e7e8e7] py-3 px-6 shadow-md`}>
                              <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-4`}>binus</h3>
                              <div className={`flex gap-4 justify-between items-center`}>
                                   <div className={`flex gap-2 items-center justify-start`}>
                                        <div className={`flex items-center justify-center w-[40px] h-[40px] rounded-full p-2 bg-[#01aa8c] text-white`}>BM</div>
                                        <span className={`font-[500] text-[1rem] leading-[24px] text-[#515251]`}>Badmus Kemis</span>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>activity</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>Added new bonus</p>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>bonus name</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>XMAS Bonus</p>
                                   </div>
                              </div>
                         </div>

                         <div className={`w-full bg-white mb-4 rounded-[16px] border border-[#e7e8e7] py-3 px-6 shadow-md`}>
                              <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-4`}>wallet</h3>
                              <div className={`flex gap-4 justify-between items-center`}>
                                   <div className={`flex gap-2 items-center justify-start`}>
                                        <div className={`flex items-center justify-center w-[40px] h-[40px] rounded-full p-2 bg-[#01aa8c] text-white`}>BM</div>
                                        <span className={`font-[500] text-[1rem] leading-[24px] text-[#515251]`}>Badmus Kemis</span>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>activity</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>Paid November 2022 salary</p>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>amount</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#ea4e48] mb-6`}>11,1678,900.00</p>
                                   </div>
                                   <div className={`flex flex-col`}>
                                        <h3 className={`uppercase font-[400] text-[.7rem] leading-[1rem] text-[#8d8e8d] mb-6`}>time</h3>
                                        <p className={`font-[500] text-[1rem] leading-[24px] text-[#515251] mb-6`}>15:31</p>
                                   </div>
                              </div>
                         </div>
                         
                    </div>
                    
               </div>
               </div>
          </section>
     )
}

export default Activities;