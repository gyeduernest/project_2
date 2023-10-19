import { PricingButton, PrimaryButton } from "./Main_comps";




const Hero = () => {
  return(
    <main>
      <div className="w-96 h-12 rounded-full top-20 fixed bg-orange-400 z-10 blur-3xl">
      </div>
      <section id="Hero" className="z-50">
    <div className="mt-40 z-50">
        <h1 className=" text-center text-7xl font-bold text-white">
              Do <span className="text-7xl text-violet-600">everything</span> with this App
        </h1>
        <div className="w-96 mx-auto mb-20 relative">
        <p className="text-white opacity-70 text-center justify-center mt-10 mb-5 px-5"> This app can do a lot for you from task managers to tracking finances and a whole lot more You will enjoy using this Application
        </p>
        </div>
 
        <div className=" flex justify-center  mb-5 ">
         <PrimaryButton text="Create Account" className=" justify-center sm:items-center " />
         <h1 className="text-white text-xl   sm:block hidden underline"><a href="www.hypercitigh.com" className="hover:text-violet-300 md:ml-3">Learn more?</a></h1>
        </div>
        
    </div>
    </section>
    </main>

  );
}
const Services1 = ({text, text2}) =>{

  return(
    

    <div className="sm:flex sm:mt-10 sm:ml-40 ">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold  text-center">{text}</h1>
     <div className="w-96 mx-auto">
        <p className="text-violet-200 text-center opacity-40 p-5">{text2}</p>
      </div>
         </div>
      

          
    </div>
  );
}
const Services2 = ({text, text2}) =>{

  return(
    <div className="sm:flex sm:mt-10 sm:ml-96  mt-20 mx-auto">
      <div className="">
        <h1 className="text-white text-4xl font-bold  text-center">{text}</h1>
       <div className="w-96 mx-auto mb-5">
        <p className="text-violet-200 text-center opacity-40 p-5">{text2}</p>
       </div>
        </div>
      

          
    </div>
  );
}

const Tutorials = ({text3, text4, text5}) => {

return (
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="text-center cursor-pointer">
              <div className="relative bg-violet-900 inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-orange-400 ease-in duration-200">
                  <p className="text-6xl ">{text3}</p>
                  </div>
                  <h3 className="text-xl text-orange-500 font-bold py-4">{text4}</h3>
                  <p className="leading-relaxed">{text5}</p>
              
            </div>

          </div>


);

}


// const Testimonials = () => {

// return(  

//         <div>
//           <h1 className="text-xl text-white"> <span className="text-violet-400 text-2xl">Testimonials</span></h1>
//           <p className="text-4xl text-white"> what people are Saying using the All in one app</p>
              
//           <div className="w-full h-96 bg-black z-50">

//           </div>


//         </div>


// );

// }


const Pricing = ({Plan, Description, Amount, Duration, Feature1,Feature2,Feature3,Feature4}) => {

      return(
              <div className="mb-10 mx-auto bg-black text-white w-80 rounded-lg px-6 py-5 border-2">
                <div className="mb-5"><h1 className="text-2xl text-center ">{Plan}</h1></div>
                <div className="mb-10 text-sm opacity-80 text-white"><h3>{Description}</h3></div>
                <div className="flex mb-10 "><h3 className="font-bold text-7xl text-orange-400">{Amount}</h3> <h3 className="">{Duration}</h3></div>
                <div className="mb-5"><h3>{Feature1}</h3></div>
                <div className="mb-5"><h3>{Feature2}</h3></div>
                <div className="mb-5"><h3>{Feature3}</h3></div>
                <div className="mb-5"><h3>{Feature4}</h3></div>
                <div className="w-full justify-center justify-items-center">
                  <PricingButton text="Get Plan"/>
                </div>
              



              </div>

      );
}


export {Hero, Services1, Services2, Tutorials, Pricing}