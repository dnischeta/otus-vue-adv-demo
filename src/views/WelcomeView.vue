<template>
    <div>
        <h1>Добро пожаловать на сайт</h1>
        <button @click="login">Войти</button>
    </div>
</template>

<script setup>
import { userAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = userAuthStore()
const router = useRouter()

const login = () => {
    auth.login()
    router.push('/catalog')
}
</script>

<style scoped></style>