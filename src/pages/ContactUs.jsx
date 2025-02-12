import HeaderPage from "../Components/Header";
import FooterPage from "./Footer";

export default function ContactUs() {
  return (
    <>
      <HeaderPage />
      <section className="py-28 bg-[url('https://images.unsplash.com/photo-1623473882999-2f33d6fc1d09?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/65 "></div>
        <section class=" dark:bg-gray-900 relative">
          <div class="container px-6 py-12 mx-auto">
            <div>
              <p class="font-medium text-blue-500 dark:text-blue-400">
                Contact us
              </p>

              <h1 class="mt-2 text-2xl font-semibold text-white">
                Chat to our friendly team
              </h1>

              <p class="mt-3 text-white">
                We’d love to hear from you. Please fill out this form or shoot
                us an email.
              </p>
            </div>
            <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
              <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-white">Email</h2>
                  <p class="mt-2 text-sm text-white">
                    Our friendly team is here to help.
                  </p>
                  <p class="mt-2 text-sm text-white">hello@merakiui.com</p>
                </div>

                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-white">
                    Live chat
                  </h2>
                  <p class="mt-2 text-sm text-white">
                    Our friendly team is here to help.
                  </p>
                  <p class="mt-2 text-sm text-white">Start new chat</p>
                </div>

                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-white">Office</h2>
                  <p class="mt-2 text-sm text-white">
                    Come say hello at our office HQ.
                  </p>
                  <p class="mt-2 text-sm text-white">
                    100 Smith Street Collingwood VIC 3066 AU
                  </p>
                </div>

                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-white">Phone</h2>
                  <p class="mt-2 text-sm text-white">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <p class="mt-2 text-sm text-white">+1 (555) 000-0000</p>
                </div>
              </div>

              <div class="p-4 py-6 rounded-lg dark:bg-gray-800 md:p-8 ">
                <form className="">
                  <div class="-mx-2 md:items-center md:flex ">
                    <div class="flex-1 px-2">
                      <label class="block mb-2 text-sm text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Try "
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="flex-1 px-2 mt-4 md:mt-0">
                      <label class="block mb-2 text-sm text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Limhai"
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div class="mt-4">
                    <label class="block mb-2 text-sm text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="trylimhai@example.com"
                      class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="w-full mt-4">
                    <label class="block mb-2 text-sm text-white">Message</label>
                    <textarea
                      class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button class="w-full px-6 py-3 mt-4 text-sm font-medium rounded-lg  cursor-pointer">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
      <FooterPage />
    </>
  );
}
// import HeaderPage from "../Components/Header";
// import FooterPage from "./Footer";

// export default function ContactUs() {
//   return (
//     <>
//       <HeaderPage />
//       <section
//         className="relative h-screen bg-cover bg-center py-28"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1623473882999-2f33d6fc1d09?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/65"></div>
//         <div className="container mx-auto relative z-10 text-white">
//           <div className="max-w-3xl mx-auto text-center">
//             {" "}
//             {/* Center content horizontally */}
//             <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
//             <p className="text-xl mb-8">
//               We'd love to hear from you! Please fill out the form below.
//             </p>
//           </div>

//           <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg mx-auto">
//             {" "}
//             {/* Center the form */}
//             <form>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
//                 />
//               </div>

//               <div className="mt-4">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
//                 ></textarea>
//               </div>

//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//       <FooterPage />
//     </>
//   );
// }
