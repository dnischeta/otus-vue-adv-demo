import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)

    function login() {
        fetch('https://fakestoreapi.com/auth/login', {
            method: "POST", body: JSON.stringify({
                username: 'johsnd',
                password: 'm38rmF$',
            })
        })
        isAuthenticated.value = true
    }

    function logout() {
        isAuthenticated.value = false
    }

    return {
        isAuthenticated,
        login,
        logout
    }
})