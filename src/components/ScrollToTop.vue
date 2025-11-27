<script setup lang="ts">
import { onMounted } from 'vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const element = document.getElementById('scrollToTop')

  window.addEventListener('scroll', () => {
    if (element) {
      if (window.scrollY >= Math.floor(window.innerHeight)) {
        element.className = 'active'
      } else {
        element.className = ''
      }
    }
  })
})
</script>

<template>
  <aside id="scrollToTop" @click="scrollToTop">
    &#8593;
  </aside>
</template>

<style scoped>
aside {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 32px;
  position: fixed;
  right: calc(-50px - var(--main-distance));
  bottom: var(--main-distance);
  width: 50px;
  height: 50px;
  border: 2px solid #000;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  padding-bottom: 4px;
  cursor: pointer;
  z-index: 100;
}

aside.active {
  right: var(--main-distance);
}

aside:hover {
  transform: translateY(-5px);
}

.dark aside {
  border-color: #fff;
}
</style>
