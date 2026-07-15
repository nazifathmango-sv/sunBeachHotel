<template>
  <div class="overflow-x-hidden">
    <div class="bg-gray-800 flex items-center py-28">
      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-white">
        <div class="max-w-4xl">
          <p class="text-xl sm:text-3xl font-serif italic mb-3">BIENVENUE À</p>
          <h1 class="uppercase font-bold text-5xl sm:text-7xl lg:text-6xl font-serif tracking-wide">
            À Propos de Nous
          </h1>
          <p class="mt-6 text-lg sm:text-2xl font-serif font-bold max-w-2xl leading-relaxed">
            Un lieu pensé pour votre confort, entre océan, élégance et hospitalité.
          </p>
        </div>
      </div>
    </div>

    <div class="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 class="text-4xl sm:text-5xl text-center font-serif font-bold text-gray-700">
        Nos Coordonnées
      </h2>
      <div class="flex justify-center mt-5">
        <span class="w-24 h-1 bg-amber-200 rounded"></span>
      </div>
      <p class="max-w-4xl mx-auto mt-8 text-center text-lg text-gray-600 leading-relaxed">
        Une question, une réservation ou simplement envie d'en savoir plus ? Notre équipe
        est à votre écoute pour rendre votre séjour inoubliable.
      </p>

      <div class="mt-16 grid md:grid-cols-2 gap-10">
        <div class="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col gap-6">
          <h3 class="text-3xl font-bold italic font-serif text-gray-800">
            Informations
          </h3>
          <div class="w-20 h-1 bg-amber-300"></div>
          <p class="text-gray-600 text-lg leading-relaxed">
            995C+3JM, Fidjrossè Calvaire, Cotonou, Bénin
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            +229 21 30 30 30
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            adresse@gmail.com
          </p>
          <button
            class="mt-4 self-start bg-amber-200 cursor-pointer text-black px-10 py-3 rounded-full font-bold shadow-md border-2 border-transparent transition hover:bg-amber-300 hover:scale-105 hover:border-amber-200"
          >
            VOIR LA CARTE
          </button>
        </div>

        <div class="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <h3 class="text-3xl font-bold italic font-serif text-gray-800 mb-6">
            Envoyez un Message
          </h3>
          <div class="w-20 h-1 bg-amber-300 mb-8"></div>
          <form class="flex flex-col gap-5">
            <div>
              <label class="block text-gray-700 mb-2">NOM</label>
              <input
                type="text"
                placeholder="Nom"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Message"
                class="w-full border border-gray-300 rounded-lg p-3 h-36 focus:outline-none focus:ring-2 focus:ring-amber-300"
              ></textarea>
            </div>
            <button
              class="mt-2 self-start bg-amber-200 cursor-pointer text-black px-10 py-3 rounded-full font-bold shadow-md border-2 border-transparent transition hover:bg-amber-300 hover:scale-105 hover:border-amber-200"
            >
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="pb-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
        <h3 class="text-3xl font-bold italic font-serif text-gray-800 mb-6">
          Localisation
        </h3>
        <div class="w-20 h-1 bg-amber-300 mb-8"></div>
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
