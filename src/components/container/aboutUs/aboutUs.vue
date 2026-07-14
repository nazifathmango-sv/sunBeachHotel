<template>
  <div class="">
    <div class="h-90 bg-blue-950 flex items-center justify-center">
      <h1 class="text-5xl md:text-6xl text-white font-bold tracking-widest">
       À PROPOS DE NOUS 
      </h1>
    </div>
    <div class="py-20 px-5 md:px-20">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div class="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6">
          <h2 class="text-3xl font-bold text-blue-950">
           Information
          </h2>
          <div class="w-20 h-1 bg-amber-200"></div>
          <p class="text-gray-600 text-lg">
             995C+3JM, Fidjrossè Calvaire, Cotonou, Bénin
          </p>
          <p class="text-gray-600 text-lg">
           +229 21 30 30 30
          </p>
         <p class="text-gray-600 text-lg">
             adresse@gmail.com
          </p>
          <button
            class="bg-amber-200 cursor-pointer  text-black px-10 py-5 rounded-lg font-medium"
          >
            VOIR LA CARTE
          </button>
        </div>
        <div class="bg-white shadow-xl rounded-2xl p-8">
          <h2 class="text-3xl font-bold text-blue-950 mb-5">
           ENVOYEZ MESSAGE
          </h2>
          <div class="w-20 h-1 bg-amber-200 mb-8"></div>
          <form class="flex flex-col gap-5">
            <div>
              <label class="block text-gray-700 mb-2">
                NOM
              </label>
              <input
                type="text"
                placeholder="Name"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
            </div>
            <div>
              <label class="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
            </div>
            <div>
              <label class="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder=" Message"
                class="w-full border border-gray-300 rounded-lg p-3 h-36 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>
            <button
              class=" bg-amber-200 cursor-pointer  text-black py-3 px-8 rounded-lg "
            >
             Envoyez un Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="pb-20 px-5 md:px-20">
      <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-5">

        <h2 class="text-3xl  font-bold text-blue-950 mb-6">
          Localisation
        </h2>
        <div class="w-20 h-2 bg-amber-200 mb-8 "></div>
        <div class="overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2808965567383!2d2.3689851748354847!3d6.357675825068418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235687d78a77c5%3A0x128bd987248bc4f4!2sSun%20Beach%20H%C3%B4tel!5e0!3m2!1sen!2sbj!4v1783956237921!5m2!1sen!2sbj"
            class="w-full h-[450px]"
            style="border:0;"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          >
          </iframe>
        </div>
      </div>
       <h2 class="text-4xl mt-20 text-center font-serif font-bold text-gray-700">
        Nos Témoignages
      </h2>
      <div class="flex justify-center mt-5">
        <span class="w-20 h-1 bg-amber-200"></span>
      </div>
    </div>
  </div>
</template>
