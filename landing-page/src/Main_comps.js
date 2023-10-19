import React from 'react';

const PrimaryButton = ({ text}) => (
  <button className="duration-200 ease-in-out bg-violet-900 hover:bg-indigo-500  text-white font-bold py-2 px-4 rounded w-72 h-12 dark:bg-slate-800  dark:text-white "> {text}
    
  </button>
);
const PricingButton = ({ text }) => (
  <button className="bg-violet-900 hover:bg-indigo-500 ml-10 text-white duration-200 font-bold py-2 px-4 rounded w-48 h-12 dark:bg-slate-800 dark:text-white mb-5">
    {text}
  </button>
);

const SecondaryButton = ({ text }) => (
  <button className="ml-8  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-40 h-12 bg-violet-600">
    {text}
  </button>
);

const TertiaryButton = ({ text }) => (
  <button>
    {text}
  </button>
);



export { PrimaryButton, SecondaryButton, TertiaryButton, PricingButton};
