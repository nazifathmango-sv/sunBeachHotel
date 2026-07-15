<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <h2>Titre du Popup</h2>
        <p>Ceci est le contenu de votre popup.</p>
        <button @click="$emit('close')">Fermer</button>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
defineProps({
  isOpen: Boolean
})
defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}
</style>
