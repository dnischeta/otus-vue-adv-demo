<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/logo.svg'
import { useProductStore } from '@/stores/products'
import { userAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const auth = userAuthStore()
const router = useRouter()
const store = useProductStore()
const { cartItemCount } = storeToRefs(store)

function logout() {
  auth.logout()
  router.push('/')
}

</script>

<template>
  <header>
    <h1>
      <RouterLink to="/">
        <img class="logo" :src="logo" />
        Awesome Store
      </RouterLink>
    </h1>
    <nav v-if="auth.isAuthenticated">
      <RouterLink to="/catalog">Catalog</RouterLink>
      <RouterLink to="/cart">Cart {{ cartItemCount }}</RouterLink>
      <button @click="logout">Выйти</button>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 32px;
  height: 32px;
  display: block;
  margin-right: 0.5rem;
}

h1 a {
  display: flex;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
