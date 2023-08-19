import { useState } from "react";
import style from "./style.module.css";
import { BiMenu } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import Arrow from "../Assets/Chevron_Right.png";
import CompanyLogo from "../Assets/Frame 544.png";

const Settings = () => {
  const [registeredCompany, setRegisteredCompany] = useState(false);
  return (
    <section
      className={`${style.resize_width} mb-10 md:px-8 lg:px-[5rem] bg-[#f7f4f4]`}
    >
      <div>
        <div
          className={`flex justify-between items-center mb-8 fixed z-20 bg-white top-0 right-0 left-0 md:left-[240px] p-4 shadow-sm`}
        >
          <div
            className={`flex justify-center items-center rounded-[12px] p-3 w-[48px] h-[48px] bg-[#f2f1f1] shadow-sm cursor-pointer`}
          >
            <BiMenu />
          </div>

          <div className={`flex justify-center items-center relative`}>
            <h2
              className={`font-[700] text-[1.3rem] leading-[24px] space-[.2px] text-[#515251]`}
            >
              Settings
            </h2>
          </div>

          <div
            className={`w-[44px] h-[44px] rounded-[12px] p-2 bg-[#ffffff] flex justify-center items-center relative cursor-pointer`}
          >
            <BsBell />
            <div
              className={`absolute top-[15px] right-[15px] w-[7px] h-[7px] rounded-full bg-[#ea4e4b]`}
            ></div>
          </div>
        </div>

        <div className={`relative top-[60px] my-5 p-4 md:p-8`}>
          <div
            className={`rounded-[16px] border border-[#e7e8e7] bg-white shadow-md p-4 flex justify-between items-center`}
          >
            <h2
              className={`font-[500] text-[.8rem] leading-[16px] space-[6%] text-[#515251]`}
            >
              business profile
            </h2>
            <img src={Arrow} alt="arrow" className={`cursor-pointer`} />
          </div>

          <div className={`rounded-[16px] my-2 mb-4 bg-white p-2`}>
            <div
              className={`grid grid-cols-2 shadow-sm border border-[#e7e8e7] rounded-[16px]`}
            >
              <div
                className={`py-4 px-2 border-r border-b border-[#e7e8e7] rounded-tl-[16px] text-center cursor-pointer font-[500] text-[.8rem] leading-[16px] text-[#292a29] hover:bg-[#f0f7eb]`}
              >
                Company
              </div>
              <div
                className={`py-4 px-2 border-b border-[#e7e8e7] rounded-tr-[16px] text-center cursor-pointer font-[500] text-[.8rem] leading-[16px] text-[#292a29] hover:bg-[#f0f7eb]`}
              >
                CEO/Founder
              </div>
              <div
                className={`py-4 px-2 border-b border-r border-[#e7e8e7] text-center cursor-pointer font-[500] text-[.8rem] leading-[16px] text-[#292a29] hover:bg-[#f0f7eb]`}
              >
                Company Director
              </div>
              <div
                className={`py-4 px-2 border-b border-[#e7e8e7] text-center cursor-pointer font-[500] text-[.8rem] leading-[16px] text-[#292a29] hover:bg-[#f0f7eb]`}
              >
                Account Information
              </div>
              <div
                className={`py-4 px-2 border-r border-[#e7e8e7] rounded-bl-[16px] text-center cursor-pointer font-[500] text-[.8rem] leading-[16px] text-[#292a29] hover:bg-[#f0f7eb]`}
              >
                Branch Department
              </div>
              <div
                className={`py-4 px-2 rounded-br-[16px] text-center cursor-pointer font-[500] text-[.8rem] leading-[16px] text-[#292a29] hover:bg-[#f0f7eb]`}
              >
                KYC Information
              </div>
            </div>
          </div>

          <div
            className={`rounded-[16px] border border-[#e7e8e7] py-4 px-2 bg-white mb-[10rem]`}
          >
            <div
              className={`flex gap-4 items-center border-b border-[#e7e8e7] pb-4`}
            >
              <img
                className={`rotate-[90deg] cursor-pointer`}
                src={Arrow}
                alt=""
              />
              <h1
                className={`font-[500] text-[1.1rem] text-[#515251] leading-[24px]`}
              >
                Edit Company Information
              </h1>
            </div>

            <div className={`rounded-[16px] mt-6 p-4 border border-[#e7e8e7]`}>
              <div className={`my-4`}>
                <div className={`flex gap-4 items-end`}>
                  <img src={CompanyLogo} alt="" />
                  <button
                    className={`rounded-[8px] border p-2 border-[#11453b] text-[#11453b] text-center font-[500] text-[.8rem] leading-[1rem] outline-none`}
                  >
                    Change Logo
                  </button>
                </div>
              </div>

              <div className={``}>
                <div className={`relative mb-4`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="companyName"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="companyName"
                  >
                    Company Name
                  </label>
                </div>
                <div>
                  <h3
                    className={`font-[400] text-[.8rem] leading-[20px] text-[#515251] space-[.25px] mb-3`}
                  >
                    Is your company registered?
                  </h3>
                  <div className={`flex flex-col gap-4`}>
                    <div className={`flex gap-4 items-center`}>
                      <button
                        className={`rounded-[8px] border border-[#e7e8e7] shadow-sm py-2 px-4 bg-[#11453b] text-white w-[100px] text-[.8rem] font-[400] leading-[1rem] space-[.25px]`}
                        onClick={() => setRegisteredCompany(true)}
                      >
                        Yes
                      </button>
                      <button
                        className={`rounded-[8px] border border-[#e7e8e7] shadow-sm py-2 px-4  text-[#515251] bg-white w-[100px] text-[.8rem] font-[400] leading-[1rem] space-[.25px]`}
                        onClick={() => setRegisteredCompany(false)}
                      >
                        No
                      </button>
                    </div>

                    {registeredCompany ? (
                      <div className={`flex items-center gap-2`}>
                        <button
                          className={`rounded-[8px] border border-[#11453b] p-2 bg-[#f0f7eb] text-[#11453b] font-[500] text-[.8rem]`}
                        >
                          Upload CAC Doc.
                        </button>
                        <span
                          className={`font-[400] text-[.8rem] text-[#515251]`}
                        >
                          Jpeg and Png Only(2mb max)
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={`relative my-8`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="officeAdress"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="officeAdress"
                  >
                    Office Adrress
                  </label>
                  <div className={`flex my-3 gap-2 items-center`}>
                    <button
                      className={`rounded-[8px] border border-[#11453b] p-2 bg-[#f0f7eb] text-[#11453b] font-[500] text-[.8rem]`}
                    >
                      Upload Proof of Address
                    </button>
                    <span className={`font-[400] text-[.8rem] text-[#515251]`}>
                      e.g Nepa bill, etc.
                    </span>
                  </div>
                </div>

                <div className={`mb-6 w-full relative`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="companySize"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="companySize"
                  >
                    Company Size
                  </label>
                  <select
                    className={`outline-none ml-auto bg-transparent text-[#b5b6b5] absolute top-[15px] right-[15px]`}
                    name="company size"
                    id="size"
                    title="size"
                  >
                    <option value="20">1-20</option>
                    <option value="50">21-50</option>
                    <option value="100">51-100</option>
                    <option value="150">100 Above</option>
                  </select>
                </div>

                <div className={`relative mb-4`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="pension"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="pension"
                  >
                    Pension Code
                  </label>
                </div>

                <div className={`mb-6 w-full relative`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="payeer"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="payeer"
                  >
                    PAYE State
                  </label>
                  <select
                    className={`outline-none ml-auto bg-transparent text-[#b5b6b5] absolute top-[15px] right-[15px]`}
                    name="payee"
                    id="payee"
                    title="payee"
                  >
                    <option value="20">Lagos</option>
                    <option value="50">Abuja</option>
                    <option value="100">Enugu</option>
                    <option value="150">PortHarcourt</option>
                  </select>
                </div>

                <div className={`relative mb-4`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="payeId"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="payeId"
                  >
                    PAYEE ID
                  </label>
                </div>

                <div className={`relative mb-4`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="nhf"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="nhf"
                  >
                    NHF Code
                  </label>
                </div>

                <div className={`relative mb-4`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="website"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="website"
                  >
                    Website
                  </label>
                </div>

                <div className={`relative mb-2`}>
                  <input
                    className={`${style.input_element} bg-transparent rounded-[16px] border border-[#b5b6b5] p-4 w-full outline-none font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#8d8e8d]`}
                    type="text"
                    name=""
                    id="industry"
                    placeholder=" "
                  />
                  <label
                    className={`${style.input_label} font-[400] text-[.8rem] leading-[1rem] space-[.25px] text-[#8d8e8d]`}
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-4 my-6`}>
              <button
                className={`border border-[11453b] rounded-[24px] px-4 py-2 text-[#11453b] font-[500] text-[.8rem] leading-[20px] space-[.1px] bg-white`}
              >
                Cancel
              </button>
              <button
                className={`bg-[#11453b] rounded-[24px] px-4 py-2 text-white font-[500] text-[.8rem] leading-[20px] space-[.1px]`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
