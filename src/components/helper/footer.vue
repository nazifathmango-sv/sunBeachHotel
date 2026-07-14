<template>
  <div class="bg-gray-800 text-white p-1">
    <div class="mx-25">
     <div class=" text-2xl uppercase font-serif m-4 font-bold">
       Sunbeach hotel
     </div>
     <div class="flex flex-col gap-8  justify-between sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      <div class=" gap-3">
        <div class="py-1">+229 21 30 30 30</div>
        <div class="py-1"> 995C+3JM, Fidjrossè Calvaire, Cotonou, Bénin</div>
        <div class="py-1">2026 SunBeach Hotel. Tous droits réservés.</div>
      </div>
      <div class="gap-3">
        <div class="py-1">AboutUs</div>
         <div class="py-1">Contacts</div>
        <div class="py-1">Terms and Conditions</div>
     </div>
     <div class="">
        <div class="flex py-3">
          <img :src="facebookIcon" alt="Facebook" class="w-8 h-8 p-2">Facebook
        </div>
        <div class="flex py-2">
          <img :src="twitterIcon" alt="Twitter" class="w-8 h-8 p-2 ">Twitter
        </div>
        <div class="flex py-2">
          <img :src="instagramIcon" alt="Instagram" class="w-8 h-8 p-2">Instagram
        </div>
    </div>
  </div>
  </div>
</div>
</template>
<script setup lang="ts">
  import facebookIcon from '@/assets/icon/facebook.svg'
  import twitterIcon from '@/assets/icon/twitter.svg'
  import instagramIcon from '@/assets/icon/instagram.svg'
</script>
