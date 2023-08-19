import style from "./style.module.css";
import Menu from "../Assets/Frame 48096049.png";
import Search from "../Assets/Search_Magnifying_Glass.png";
import Grid from "../Assets/Grid.png";
import { IoIosMenu } from "react-icons/io";
import Employee1 from "../Assets/Ellipse 30 (1).png";
import Employee2 from "../Assets/Ellipse 30.png";
import Employee3 from "../Assets/Ellipse 12.png";
import Employee4 from "../Assets/Frame 861.png";

const employeeList = [
     {
          img: Employee1,
          name: "Caleb Nwafor",
          occupation: "Accountant",
          gender: "female",
          duration: "monthly",
          payment: "N250,600.78"
     },
     {
          img: Employee2,
          name: "Wasiu Tiamiyu",
          occupation: "Product Designer",
          gender: "male",
          duration: "monthly",
          payment: "N550,600.78"
     },
     {
          img: Employee3,
          name: "Toyin Faleke",
          occupation: "Product Manager",
          gender: "Female",
          duration: "monthly",
          payment: "N700,600.78"
     },
     {
          img: Employee4,
          name: "Ada Okorie",
          occupation: "Customer Service",
          gender: "Female",
          duration: "monthly",
          payment: "N150,600.78"
     },
     {
          img: Employee3,
          name: "Bolade Ifedayo",
          occupation: "Data Analyst",
          gender: "Female",
          duration: "monthly",
          payment: "N250,600.78"
     },
]

const Employee = () => {
     return (
          <section className={`${style.resize_width} mb-[6rem] md:px-8 lg:px-[5rem] bg-[#fff]`}>
               <div>
                    <div className={`flex justify-center items-center mb-8 fixed z-20 bg-white top-0 right-0 left-0 md:left-[240px] p-4 shadow-sm`}
          >          
                         <div
                         className={`flex justify-center items-center relative`}
                         >
                              <h2 className={`font-[700] text-[1.2rem] leading-[24px] space-[.2px] text-[#292a29]`}>Eazipay's Team</h2>
                         </div>
                    </div>

                    <div className={`fixed bg-[#11453b] w-[52px] h-[52px] rounded-full z-20 cursor-pointer flex justify-center items-center text-white shadow-md text-[1rem] font-[700] leading-[24px] top-[50%] right-[16px]`}>+</div>

                    <div className={`relative top-[100px] my-6`}>
                         <div className={`flex flex-col gap-4 p-4`}>
                              <div className={`${style.wallet_balance} p-6 flex flex-col gap-5 border border-[#e7e8e7] lg:p-[2rem] lg:mb-0 rounded-[24px] shadow-md md:flex-row md:justify-between md:items-end mb-8`}>
                                   <div>
                                        <h3 className={`font-[500] text-[1rem] leading-[24px] text-[#d9ebcd] mb-6`}>
                                        Total Employee
                                        </h3>
                                        <div className={`flex gap-2 items-center`}>
                                             <p className={`font-[700] text-[1.5rem] md:text-[2rem] leading-[24px] text-[#fff]`}>
                                                  11264
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              <div className={`grid grid-cols-2 gap-4 rounded-[16px] border border-[#e7e8e7] bg-white p-2`}>
                                   <button className={`bg-[#11453b] rounded-[8px] py-2 px-4 shadow-sm text-white font-[500] text-[1rem] leading-[24px] text-center`}>All Employee</button>
                                   <button className={`bg-[#f2f1f1] rounded-[8px] py-2 px-3 shadow-sm text-[#11453b] font-[500] text-[1rem] leading-[24px] text-center`}>Departments</button>
                              </div>
                         </div>

                         <div className={`my-8`}>
                              <div className={`relative flex gap-4 items-start mb-2 p-4`}>
                                   <input className={`w-full rounded-[12px] border-[.2px] border-[#2c3e536f] p-3 py-2 outline-none`} type="text" name="search" id="" placeholder="Search" />
                                   <img className={`absolute top-[24px] right-[75px]`} src={Search} alt="search button" />
                                   <div className={`bg-[#f2f1f1] w-[40px] h-[40px] rounded-[8px] flex justify-center items-center cursor-pointer`}>
                                        <img src={Menu} alt="Menu Icon" />
                                   </div>
                              </div>

                              <div className={`border-t border-[#f2f1f1] mb-[6rem]`}>
                                   <div className={`p-4 mb-6`}>
                                        <div className={`flex justify-between items-center`}>
                                             <div className={`flex gap-2 items-center`}>
                                                  <IoIosMenu className={`text-[#11453b]`} />
                                                  <img className={`border-x px-2 border-[#ededed]`} src={Grid} alt="" />
                                                  <span className={`text-[#b5b6b5] font-[400] text-[14.8px] leading-[18.77px]`}>Archived</span>
                                             </div>
                                             <div className={`flex items-start`}>
                                                  <input className={`w-[18px] h-[18px] border border-[#8d8e8d]`} type="radio" name="" id="selectEmployee" placeholder=" " />
                                                  <label className={`font-[400] text-[14.8px] leading-[18.77px] text-[#8d8e8d] ml-2`} htmlFor="selectEmployee">Select All</label>
                                             </div>
                                        </div>
                                   </div>

                                   <div className={`mb-[18rem]`}>
                                        {employeeList.map(employee => {
                                             return <div className={`flex justify-between border-b border-[#e7e8e7] mb-6 p-4 hover:rounded-[16px] pb-6 hover:bg-[#f0f7eb]`} key={employee.name}>
                                             <div className={`flex gap-4 items-start`}>
                                                  <img className={`w-[48px] h-[48px]`} src={employee.img} alt="" />
                                                  <div className={`flex flex-col gap-4 items-start`}>
                                                            <h2 className={`font-[400] text-[20px] leading-[24px] space-[.2px] text-[#292a29]`}>{employee.name}</h2>
                                                            <p className={`font-[400] text-[12px] leading-[16px] text-[#515251]`}>{employee.occupation}</p>
                                                            <p className={`font-[400] text-[12px] leading-[16px] text-[#515251]`}>{employee.gender} | {employee.duration}</p>
                                                  </div>
                                             </div>
                                             <div className={`mt-auto`}>
                                                       <p className={`font-[700] text-[16px] leading-[24px] text-[#11453b]`}>{employee.payment}</p>
                                             </div>
                                        </div>
                                        })}
                                   </div>
                              </div>
                         </div>
                         
                    </div>
                    
               </div>
          </section>
     )
};

export default Employee;