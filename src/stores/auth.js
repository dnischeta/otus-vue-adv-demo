import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    const error = ref(null)

    async function login(credentials) {
        error.value = null
        
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: "POST", body: JSON.stringify(credentials)
        })

        if (!response.ok) {
            error.value = response.statusText
        }

        return isAuthenticated.value = response.ok
    }

    function logout() {
        isAuthenticated.value = false
    }

    return {
        isAuthenticated,
        error,
        login,
        logout
    }
})