<template>
    <div class="">
      <Heade />
      <Facilities />
      <Carrousel :testimonials="testimonials"/>
      <Foote />
    </div>
</template>
<script setup lang="ts">
  import Heade from '@/components/helper/header.vue'
  import Facilities from '@/components/container/facilities/facilities.vue'
  import Foote from '@/components/helper/footer.vue'
 import Carrousel from '@/components/helper/carrousel.vue'

  const testimonials = [
  {
    name: "Sophie Martin",
    role: "Cliente",
    message: "Un séjour incroyable, le service était parfait et l'équipe très accueillante.",
  },
  {
    name: "Jean Dupont",
    role: "Voyageur",
    message: "La chambre était magnifique et l'expérience au spa exceptionnelle.",
  },
  {
    name: "Amina K.",
    role: "Touriste",
    message: "Un hôtel de luxe avec un personnel très professionnel.",
  }
]
</script>
