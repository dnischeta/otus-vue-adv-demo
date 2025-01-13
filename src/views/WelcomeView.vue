<template>
    <div>
        <h1>Добро пожаловать на сайт</h1>
        <StoreButton @click="login">Войти</StoreButton>
    </div>
</template>

<script setup>
import StoreButton from '@/components/StoreButton.vue';
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