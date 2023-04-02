import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
 

  return (
   <div>
   <div class="bg-gray-50">
     <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
       <div class="max-w-3xl mx-auto text-center">
         <h2 class="text-3xl font-extrabold text-gray-900">Our Services</h2>
         <p class="mt-4 text-lg leading-6 text-gray-500">
           We offer a wide range of services that help patients get the healthcare they need, no matter where they are.
         </p>
       </div>
       <div class="mt-10">
         <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
           <li>
             <div class="flex">
               <div class="flex-shrink-0">
                 
                 <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 00-9-9V3m6 18v-3a9 9 0 01-9-9H3m18 0h-3a9 9 0 009-9z" />
                 </svg>
               </div>
               <div class="ml-4">
                 <h5 class="text-lg leading-6 font-medium text-gray-900">24/7 Support</h5>
                 <p class="mt-2 text-base leading-6 text-gray-500">
                   Our web app provides 24/7 support to ensure that you get the help you need when you need it.
                 </p>
               </div>
             </div>
           </li>
           <li class="mt-10 md:mt-0">
             <div class="flex">
               <div class="flex-shrink-0">
                 
                 <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 20H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2V6" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v4" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14H6" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h8" />
                 </svg>
               </div>
               <div class="ml-4">
                 <h5 class="text-lg leading-6 font-medium text-gray-900">Appointment Scheduling</h5>
                 <p class="mt-2 text-base leading-6 text-gray-500">
                   Our web app provides easy appointment scheduling, making it simple to get the care you need.
                 </p>
               </div>
             </div>
           </li>
           <li class="mt-10 md:mt-0">
             <div class="flex">
               <div class="flex-shrink-0">
                
                 <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <div class="ml-4">
                 <h5 class="text-lg leading-6 font-medium text-gray-900">Secure and Confidential</h5>
                 <p class="mt-2 text-base leading-6 text-gray-500">
                   Our web app is secure and confidential, ensuring that your personal information is always protected.
                 </p>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </div>
   </div>
   </div>
  );
}
