import Frame2 from "../Assets/Frame 25 (1).png";

const Demo = () => {
     return (
          <section className={`p-4 my-8 relative lg:px-8`}>
               <div>
                    <img
                         className={`absolute top-0 left-0`}
                         src={Frame2}
                         alt="Frame"
                    />
               </div>
               <div className={`mt-[12rem] md:flex justify-between items-center gap-6 lg:gap-12`}>
                    <div className={`mb-10 md:mb-0 text-center  md:text-left`}>
                         <h1 className={`font-[500] text-[2.5rem] text-[#11453b] leading-[45px] md:leading-[72px] md:text-[4rem] mb-6`}>Get an Exclusive Demo of Eazipay</h1>
                         <p className={`font-[400] text-[1.4rem] leading-[32px] text-[#515251]`}>Our greatest priority is to put you and your business first. Let's show you how we can help.</p>
                    </div>

                    <div className={`p-4 py-8 rounded-[32px] shadow-md border border-[#e7e8e7] md:px-8 md:w-[50%] lg:w-[70%]`}>
                         <h1 className={`font-[700] text-[1.7rem] leading-[48px] text-center text-[#292a29] mb-8`}>First things first</h1>
                         <p className={`font-[400] text-[1.4rem] leading-[32px] text-[#515251] mb-4 text-center`}>We want to serve you better. Tell us a bit about yourself or company.</p>

                         <div className={`p-2 flex justify-between items-center border border-[#e7e8e7] rounded-[16px] mb-8 gap-2`}>
                              <button className={`p-3 bg-[#11453b] rounded-[12px] text-[500] text-[1rem] leading-[24px] text-white w-[48%] md:w-[190px] lg:w-[230px]`}>Individual</button>
                              <button className={`p-3 bg-[#f2f1f1] rounded-[12px] text-[500] text-[1rem] leading-[24px] text-[#515251] w-[48%] md:w-[190px] lg:w-[230px]`}>Company</button>
                         </div>

                         <form action="">
                              <input className={`rounded-[16px] border border-[#b5b6b5] p-4 mb-6 w-full outline-none`} type="text" name="" id="firstName" placeholder="First Name" />
                              <input className={`rounded-[16px] border border-[#b5b6b5] p-4 mb-6 w-full outline-none`} type="text" name="" id="lastName" placeholder="Last Name" />
                              <input className={`rounded-[16px] border border-[#b5b6b5] p-4 mb-6 w-full outline-none`} type="text" name="" id="email" placeholder="Email" />
                              <input className={`rounded-[16px] border border-[#b5b6b5] p-4 mb-6 w-full outline-none`} type="text" name="" id="jobTitle" placeholder="Job Title" />
                              <input className={`rounded-[16px] border border-[#b5b6b5] p-4 mb-6 w-full outline-none`} type="text" name="" id="jcompanySite" placeholder="Company Site" />
                              <button className={`p-3 px-8 bg-[#11453b] rounded-[24px] text-[500] text-[1rem] leading-[24px] text-white w-full outline-none`}>Request Demo</button>
                         </form>
                    </div>
               </div>
          </section>
     )
};

export default Demo;