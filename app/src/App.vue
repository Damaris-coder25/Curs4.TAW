<script setup>
import { useAuth } from "@/stores/auth"
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const auth = useAuth()
const router = useRouter()

onMounted(() => {
  if (!auth.isAuthenticated) {
    router.push('/login')
  }
})

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <header v-if="auth.isAuthenticated" class="p-4 bg-gray-200">
    <nav class="flex gap-4 mb-4">
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/flowers">
        Flowers
      </RouterLink>
      <RouterLink to="/computed">
        Computed
      </RouterLink>
      <RouterLink to="/store">
        Store
      </RouterLink>
      <RouterLink to="/tasks">
        Tasks
      </RouterLink>
      <button class="btn btn-outline-primary color-red" @click="logout">Logout</button>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "bootstrap-icons";
@import "tailwindcss";

.btn-primary {
  background-color: rgb(192, 235, 238);
}
</style>