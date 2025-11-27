<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()

const nav = ref<HTMLElement | null>(null)

const toggleNav = () => {
  if (nav.value && window.innerWidth <= 767) {
    if (nav.value.className == 'active') {
      nav.value.className = ''
    } else {
      nav.value.className = 'active'
    }
  }
}

onMounted(() => {
  nav.value = document.querySelector('nav')
})
</script>

<template>
  <header>
    <a href="/" class="logo">
      <img src="/logo.jpg" alt="Logo">
    </a>

    <nav>
      <a href="#intro" @click="toggleNav">Սկիզբ</a>
      <a href="#learning" @click="toggleNav">Ինչպե՞ս Սկսել</a>
      <a href="#videos" @click="toggleNav">Օգտակար Տեսանյութեր</a>

      <div @click="toggleNav">&#10005;</div>
    </nav>

    <div class="buttons">
      <div class="toggle-nav" @click="toggleNav">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <img src="@/assets/images/dark-mode.png" alt="Dark Mode" :class="`dark-mode ${theme == 'light' ? 'active' : ''}`" @click="toggleTheme">
      <img src="@/assets/images/light-mode.png" alt="Light Mode" :class="`light-mode ${theme == 'dark' ? 'active' : ''}`" @click="toggleTheme">
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  background-color: #eee;
  border-bottom: 2px solid #444;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  padding: 0 var(--main-distance);
  z-index: 100;
}

.logo {
  justify-self: left;
  height: 70px;
}

.logo img {
  width: 70px;
  border-radius: 15px;
}

nav {
  display: flex;
  gap: var(--main-distance);
}

nav.active {
  transform: unset;
}

nav a {
  color: var(--text-color);
  white-space: nowrap;
  width: fit-content;
}

nav div {
  display: none;
  position: absolute;
  top: 15px;
  right: 19px;
  font-size: 28px;
}

nav a:hover,
nav div:hover {
  color: var(--main-color);
}

.buttons {
  justify-self: right;
  position: relative;
  width: 40px;
  height: 40px;
}

.toggle-nav {
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
  display: none;
  align-items: center;
  height: 35px;
}

.toggle-nav div {
  width: 35px;
  border: 1px solid #000;
}

.buttons img {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  opacity: 0;
  cursor: pointer;
}

.buttons img.active {
  opacity: 1;
}

.dark header {
  background-color: #000;
  border-color: var(--main-color);
}

.dark nav {
  background-color: #000;
  border-color: var(--main-color);
}

.dark .toggle-nav div {
  border-color: #fff;
}

@media screen and (max-width: 767px) {
  header {
    grid-template-columns: repeat(2, 1fr);
  }

  nav {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    transform: translateX(-100%);
    display: grid;
    grid-template-columns: unset;
    gap: 20px;
    background-color: #eee;
    padding: var(--main-distance);
    border: solid #444;
    border-width: 0 0 2px 0;
  }

  nav div {
    display: block;
  }

  .buttons {
    margin-right: 55px;
  }

  .toggle-nav {
    display: grid;
  }
}
</style>
