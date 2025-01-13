<template>
    <div>
        <h2>Корзина</h2>
        <div v-if="cart.length === 0">Корзина пуста</div>
        <ul v-else>
            <li v-for="item in cart" :key="item.id">
                <StoreCard :cover="item.image" row>
                    <template #title>{{ item.title }}</template>
                    <p>{{ item.price }} eur.</p>

                    <template #actions>
                        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
                            <StoreButton @click="updateQuantity(item.id, item.quantity - 1)">-</StoreButton>
                            {{ item.quantity }}
                            <StoreButton @click="updateQuantity(item.id, item.quantity + 1)">+</StoreButton>
                        </div>
                        <StoreButton @click="removeItem(item.id)">Удалить</StoreButton>
                    </template>
                </StoreCard>
            </li>
        </ul>
        <hr />
        <div>
            <p>Итого: {{ cartTotal }}</p>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'
import StoreButton from '@/components/StoreButton.vue';
import StoreCard from '@/components/StoreCard.vue';

const store = useProductStore()
const { cart, cartTotal } = storeToRefs(store)

const updateQuantity = (id, quantity) => {
    store.updateCartItemQuantity(id, quantity)
}

const removeItem = (id) => {
    store.removeFromCart(id)
}
</script>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>