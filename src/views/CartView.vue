<template>
    <div>
        <h2>Корзина</h2>
        <div v-if="cart.length === 0">Корзина пуста</div>
        <ul v-else>
            <li v-for="item in cart" :key="item.id">
                <article>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.price }} eur.</p>
                    <div>
                        <StoreButton @click="updateQuantity(item.id, item.quantity - 1)">-</StoreButton>
                        {{ item.quantity }}
                        <StoreButton @click="updateQuantity(item.id, item.quantity + 1)">+</StoreButton>
                    </div>
                    <StoreButton @click="removeItem(item.id)">Удалить</StoreButton>
                </article>
            </li>
        </ul>
        <div>
            <p>Итого: {{ cartTotal }}</p>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'
import StoreButton from '@/components/StoreButton.vue';

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
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 200px);
}

article {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid var(--color-border);
}

article img {
    border-radius: 8px;
}
</style>