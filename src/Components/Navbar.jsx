import { useState } from "react"
import { Xmark } from "../Icons/icons"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-12 flex justify-between items-center py-[30px] pb-[20px] border-b bg-[#150E28] z-50">
        <h3 className="text-[#FFFFFF] font-logo text-[16px] sm:text-3xl lowercase font-bold cursor-pointer">get<span className=" text-[#D434FE]">linked</span></h3>
        {
            showNav ? <div 
            onClick={() => setShowNav(false)}
            className="md:hidden border rounded-full border-[#D434FE] cursor-pointer"><Xmark /></div> : <div
             onClick={() => setShowNav(true)}
             className="md:hidden w-[19px] h-[13px] flex flex-col justify-between cursor-pointer">{/** Custom Hamburger Menu Bar */}
            <div className=" w-2/5 h-[3px] bg-[#FFFFFF] rounded-full"></div>
            <div className=" w-full h-[3px] bg-[#FFFFFF] rounded-full"></div>
            <div className=" w-2/5 h-[3px] bg-[#FFFFFF] rounded-full self-end"></div>
        </div>
        }

        <nav className={`absolute left-0 top-[71px] md:top-0 md:relative flex flex-col md:flex-row w-full md:w-[716px] justify-between md:items-center p-12 gap-6 md:gap-0 md:p-0 bg-[#150E28] md:bg-transparent md:translate-x-0 ${showNav ? "" : "translate-x-full"} transition-all`}>
            <ul className="flex flex-col md:flex-row text-lg font-medium gap-3 md:gap-6 text-white">
                <li><a href="#">Timeline</a></li>
                <li><a href="#">Overview</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="text-[#FFFFFF] bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  w-[172px] h-[53px] font-btn rounded-[4px]">Register</button>
        </nav>
    </header>
  )
}
export default Navbar