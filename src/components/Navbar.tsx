import logo from "../assets/logo-text.png"


const Navbar = () => {
    return (
       <nav className="sticky top-0 z-50 border-b border-[#F1F5F9] bg-[#FFFFFF]">
        <div className="mx-auto flex justify-between items-center h-16 px-6 max-w-7xl">
            <div>
            <img src={logo} alt="Dev Stack" />
        </div>

        {/* Navigation links */}

        <div className="hidden items-center gap-7 md:flex">
            <a href="#home" className="text-[#DB2777] text-sm">Home</a>
            <a href="#technology" className=" text-[#475569] text-sm">Technologies</a>
            <a href="#projects" className=" text-[#475569] text-sm">Projects</a>
            <a href="#about" className=" text-[#475569] text-sm">About</a>
            <a href="#contact" className=" text-[#475569] text-sm">Contact</a>
        </div>

        {/* Sign Up Button  */}

        <div className="flex items-center gap-5">
            <button className="font-medium text-[#334155] hover:text-[#D91B7E]">Sign In</button>

            <button className="bg-[#D91B7E] rounded-full text-white font-semibold px-4 py-2 text-sm hover:bg-pink-600">Sign Up</button>
        </div>
        </div>
       </nav>
    );
};

export default Navbar;