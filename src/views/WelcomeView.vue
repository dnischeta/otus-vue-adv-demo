<template>
    <div>
        <h2>{{ $t('welcome') }}</h2>
        <StoreCard>
            <form @submit.prevent="login">
                <label>
                    {{ $t('username') }}:
                    <input v-model="form.username" type="text" required />
                </label>
                <label>
                    {{ $t('password') }}:
                    <input v-model="form.password" type="password" required />
                </label>
                <div style="height: 50px;">
                    <Transition>
                        <div v-if="auth.error" class="error">{{ $t('error') }} {{ auth.error }}</div>
                    </Transition>
                </div>
                <StoreButton>{{ $t('login') }}</StoreButton>
            </form>
        </StoreCard>
    </div>
</template>

<script setup>
import StoreButton from '@/components/StoreButton.vue';
import { userAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import StoreCard from '@/components/StoreCard.vue';
import { reactive } from 'vue';

const auth = userAuthStore()
const router = useRouter()

const form = reactive({
    username: 'johnd',
    password: 'm38rmF$'
})

const login = async () => {
    const result = await auth.login(form)

    if (result) {
        router.push('/catalog')
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.error {
    background-color: #f8d7da;
    border: 1px solid #f5c2c7;
    color: #842029;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-weight: bold;
}
</style>