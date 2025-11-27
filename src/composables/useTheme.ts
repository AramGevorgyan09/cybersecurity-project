import { ref, watch } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

watch(theme, (val) => {
  document.documentElement.classList.toggle('dark', val === 'dark')

  localStorage.setItem('theme', val)
})

document.documentElement.classList.toggle('dark', theme.value === 'dark')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
