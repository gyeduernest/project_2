import {MobileMenu, NavBar} from './Nav';
import { Hero,Pricing,Services1,Services2,Tutorials } from './Home';


function App() {
  return (

    <div className="bg-neutral-900">
     
      <NavBar/>

      <MobileMenu/>

      <div className='mb-32 '>
          <Hero/>
      </div>


      <div className='animate-bounce w-20 h-20  md:w-40 md:h-40 bg-violet-400 rounded-full md:blur-3xl blur-3xl fixed right-36 bottom-60 z-0'></div>
      
      <div className='md:flex mx-auto text-center'>
       <Services1 text="Get a to do list" text2="You an start and add task and check them to see if it can be done on this app" className="text-center"/>
       <div className='w-56 mx-auto md:ml-40'>
        <img src={require('./img2.jpg')} alt='First photo' className=" " />
      </div>
      </div>

      <div className='md:flex'>      
      <Services2 text="Personal Finance Tracker App" text2="If you are wondering whether it will be okay to get your finances tracked dont worry the all in one app can fulfill all your app needs with tracking your finances whether it comes to income or expenditures"/>

      <div className='w-56 mx-auto mb-20 md:mr-96'>
        <img src={require('./img1.jpg')} alt='First photo'/>
      </div>
      </div>
      
      <div className='animate-bounce w-20 h-40 bg-orange-400 rounded-full blur-3xl fixed left-10 bottom-10 z-0'></div>

      <div className='md:flex'>
         <Services1 text="Play Quiz games" text2="You an start and add task and check them to see if it can be done on this app"/>
         <div className='w-56 mx-auto'>
        <img src={require('./img3.jpg')} alt='First photo'   />
      </div>
      </div>

      <div  className='md:flex'>
      <Services2 text="Chat with Family here" text2="If you are wondering whether it will be okay to get your finances tracked dont worry the all in one app can fulfill all your app needs with tracking your finances whether it comes to income or expenditures"/>
      <div className='w-56 animate-bounce mx-auto'>
        <img src={require('./img4.jpg')} alt='First photo'   />
      </div>
      </div>

              


      <div className='z-10 text-white grid-cols-3 md:flex  gap-10 mx-auto mt-40 sm:ml-96'>
      <Tutorials text3="1" text4="Get the app" text5="Click here to install the app"/>
      <Tutorials text3="2" text4="Sign up" text5="Create an account"/>
      <Tutorials text3="3" text4="Enjoy the App" text5="Start enjoying the app and give feed backs"/>
      </div>


    {/* <div className='z-50 text-center mt-40'>
    <Testimonials/>
    </div> */}

      <div className='grid-cols-3 md:flex gap-8 mt-40 sm:ml-48'>
      <Pricing Plan="Super Package" Description="Get the most Basic offer with the use of these app features" Amount="$60" Duration="/Month"  Feature1="Get a to do list" Feature2="Finance Tracker App" Feature3="Play Quiz games" Feature4="Get a chatbox"/>

      <Pricing Plan="Basic Package" Description="Get the most Basic offer with the use of these app features" Amount="$50" Duration="/Month"  Feature1="Get a to do list" Feature2="Finance Tracker App" Feature3="Play Quiz games" Feature4="Get a chatbox"/>

      <Pricing Plan="Enterprise Package" Description="Get the most Basic offer with the use of these app features" Amount="$300" Duration="/year"  Feature1="Get a to do list" Feature2="Finance Tracker App" Feature3="Play Quiz games" Feature4="Get a chatbox"/>
      </div>
{/* <div className='mt-20 ' id='signup-div'>

<CreateAcct/>

</div> */}


{/* <div className='' id='log-div'>
  
  <LogIn/>

</div> */}

  
   


    </div>

    
  );
}

export default App;
