<template>
    <h2>Каталог товаров</h2>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
        <li v-for="product in products" :key="product.id">
            <article>
                <img :src="product.image" />
                <h3>{{ product.title }}</h3>
                <p>{{ product.price }} eur.</p>
                <StoreButton @click="addToCart(product)">Добавить в корзину</StoreButton>
            </article>
        </li>
    </ul>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'
import StoreButton from '@/components/StoreButton.vue';

// Инициализация store
const store = useProductStore()

// Получаем реактивные свойства из store
const { products, loading, error } = storeToRefs(store)

// Методы для работы с товароми
const { addToCart } = store

onMounted(() => {
    store.fetchProducts()
})

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