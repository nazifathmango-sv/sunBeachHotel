<template>
  <div class="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-8 bg-black/30 backdrop-blur-sm">
    <div class="rounded-b-3xl bg-amber-200 p-5 mx-15 text-black curser-pointer">
      <RouterLink to="/">
        SunBeach Hotel
      </RouterLink>
    </div>
    <div class="flex gap-x-15 text-white text-lg font-serif">
      <RouterLink to="/">Maison</RouterLink>
      <RouterLink to="/facilities">Services</RouterLink>
      <RouterLink to="/rooms">Chambres</RouterLink>
      <RouterLink to="/aboutUs">À Propos</RouterLink>
    </div>
  </div>
</template>
