import React from "react";
import { useState } from "react";




const CreateAcct = () => {


  return(

    <form className="z-50" action="/create-account" method="post">
      <div className="text-white px-5 py-6 container md:container sm: mx-auto border-2 border-white md:w-80 w-80 rounded-md bg-black opacity-100">
          <div className="w-full  mb-5">
            <h1 className="text-3xl font-extrabold"> Sign up</h1>
            <p className="text-sm"> Create an account to enjoy the all in one app</p>

          </div>
          <div className=" h-12 rounded-md   text-center mb-5 text-black">
          <input type="email" name="email" required placeholder="Email address" className="w-full h-12 rounded-md text-center"/>


          </div>
          <div className="w-full h-12  mb-5 text-black">
          <input type="tel" name="telephone_number" placeholder="Telephone number" className="w-full h-12 rounded-md text-center"/>

          </div>
          <div className="w-full  mb-5 text-black">
          <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$%^&*()-+])(?=.{8,})$" placeholder="Password" title="Your password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character." className="w-full h-12 rounded-md text-center"/>
          



          </div>
          <div className="w-full h-12 mb-5 justify-center px-6">
          <button type="submit" className="w-40 h-12 bg-violet-500 rounded-md ml-7"action="/create-account" method="post">Create Account</button>

          </div>
          <div className="w-full h-12 mb-5 justify-center text-sm text-center cursor-pointer text-white">
          <a href="">Already Have an Account? Log in</a>
            
          </div>



      </div>

            
    </form>
  );
}



const LogIn = () => {


  return(
    <form className="z-50" action="/create-account" method="post">
      <div className="text-white px-5 py-6 container md:container sm: mx-auto border-2 border-white md:w-80 w-80 rounded-md bg-black opacity-100">
          <div className="w-full  mb-5">
            <h1 className="text-3xl font-extrabold"> Log in</h1>
            <p className="text-sm"> Welcome back Log into your account </p>

          </div>
          <div className=" h-12 rounded-md   text-center mb-10 text-black">
          <input type="email" name="email" required placeholder="Email address" className="w-full h-12 rounded-md text-center"/>


          </div>
          
          <div className="w-full  mb-5 text-black">
          <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$%^&*()-+])(?=.{8,})$" placeholder="Password" title="Your password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character." className="w-full h-12 rounded-md text-center"/>
          <p><a href="" className="cursor-pointer text-white">Forgot Password? </a></p>



          </div>
          <div className="w-full h-12 mb-5 justify-center px-6">
          <button type="submit" className="w-40 h-12 bg-violet-500 rounded-md ml-7"action="/create-account" method="post">Log in</button>

          </div>
          <div className="w-full h-12 mb-5 justify-center text-sm text-center cursor-pointer text-white">
            <a href="#" className="cursor-pointer">Dont have an account? <span className="text-xl font-bold">Sign up</span></a>

          </div>



      </div>

            
    </form>
  );
}

export {CreateAcct, LogIn};