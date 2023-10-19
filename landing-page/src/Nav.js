import React from "react";
import { useState } from "react";

const NavBar = () => {
  return ( 
            <header className="sm:block hidden backdrop-blur-2xl bg-orange-500 w-screen h-20 shadow-md fixed top-0 z-50">
              <nav className="justify-center items-center  fixed top-0 left-0 right-0 z-50 flex w-full mt-5 ">
                <ul className="">
                  <a href="#" className=" text-md text-white mr-4 hover:text-violet-400" >Home</a>
                  <a href="#" className="text-md text-white mr-4 hover:text-violet-400" >Features</a>
                  <a href="#" className="text-md text-white mr-4 hover:text-violet-400" >Testimonials</a>
                  <a href="#" className="mr-4 text-white text-md hover:text-violet-400" >Pricing</a>
                  <a href="#" className="mr-40 text-md text-white hover:text-violet-400" >Contact</a>                 
                </ul>
                <button className="text-white text-md hover:bg-indigo-500 hover:ease-in-out duration-200  bg-violet-900 w-40 h-12 rounded-md">Get Started</button>
                </nav>
            </header>
   );
}


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return(
    <button onClick={handleClick}>
        <div className="top-10 fixed mb-20 sm:hidden w-full z-40">
          <div className="w-10 h-12  rounded-md mb-20">
            <div className="w-2/3 mx-auto rounded-lg  mb-2 bg-white h-1"></div>
            <div className="w-2/3 mx-auto rounded-lg mb-2 bg-white h-1"></div>
            <div className="w-2/3 mx-auto rounded-lg  bg-white h-1"></div>
          </div>
        </div>
        {isOpen && <MenuMobile/>}
    </button>
  );
};

const MenuMobile = () =>{

return (
  <div className="z-40 py-3 w-screen bg-black opacity-95 h-48 fixed top-0 backdrop-blur-md animate-open-menu">
      <ul>
       
        <li className=" text-right mr-10 text-3xl"><a href="#" className=" text-white text-md">x</a></li>
        <li className="mb-3"><a href="" className="mb-5 text-white text-md">Home</a></li>
        <li className="mb-3"><a href="" className="mb-5 text-white text-md">Features</a></li>
        <li className="mb-3"><a href="" className="mb-3 text-white text-md">Pricing</a></li>
        <li><a href="" className="mb-3 text-white text-md">Testimonials</a></li>
             
      </ul>


  </div>
  




);

};


 
export {NavBar, MobileMenu, MenuMobile};