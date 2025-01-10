<template>
    <div>
        <h2>Корзина</h2>
        <div v-if="cart.length === 0">Корзина пуста</div>
        <div v-else>
            <div v-for="item in cart" :key="item.id">
                <div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.price }}</p>
                    <button @click="updateCartItemQuantity(item.id, item.quantity - 1)">-</button>
                    {{ item.quantity }}
                    <button @click="updateCartItemQuantity(item.id, item.quantity + 1)">+</button>
                </div>
                <button @click="removeItem(item.id)">Удалить</button>
            </div>
        </div>
        <div>
            <p>Итого: {{ cartTotal }}</p>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'

const store = useProductStore()
const { cart, cartTotal } = storeToRefs(store)

const updateQuantity = (id, quantity) => {
    store.updateCartItemQuantity(id, quantity)
}

const removeItem = (id) => {
    store.removeFromCart(id)
}
</script>

<style scoped></style>