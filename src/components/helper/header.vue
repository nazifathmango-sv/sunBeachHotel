<template>
  <div class="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-4 md:px-8 bg-black/30 backdrop-blur-sm">
    <div class="rounded-b-3xl bg-amber-200 p-3 md:p-5 text-black cursor-pointer">
      <RouterLink to="/">
        SunBeach Hotel
      </RouterLink>
    </div>
    <div class="flex gap-x-3 md:gap-x-10 text-white text-sm md:text-lg font-serif">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/facilities">Services</RouterLink>
      <RouterLink to="/rooms">Chambres</RouterLink>
      <RouterLink to="/aboutUs">À Propos</RouterLink>
    </div>

  </div>
</template>
