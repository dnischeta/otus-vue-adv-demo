<template>
    <div>
        <h2>{{ $t('cart') }}</h2>
        <div v-if="cart.length === 0">{{ $t('cart-is-empty') }}</div>
        <TransitionGroup v-else tag="ul" name="list">
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
                        <StoreButton @click="removeItem(item.id)">{{ $t('delete') }}</StoreButton>
                    </template>
                </StoreCard>
            </li>
        </TransitionGroup>
        <hr />
        <div>
            <p>{{ $t('total') }}: {{ cartTotal }}</p>
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