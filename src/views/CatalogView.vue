<template>
    <div>
        <h2>Каталог товаров</h2>
        <div v-if="loading">Загрузка...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <div v-for="product in products" :key="product.id">
                <h3>{{ product.title }}</h3>
                <p>{{ product.price }}</p>
                <button @click="addToCart(product)">Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'

// Инициализация store
const store = useProductStore()

// Получаем реаткивные свойства из store
const { products, loading, error } = storeToRefs(store)

// Методы для работы с товароми
const { addToCart } = store

onMounted(() => {
    store.fetchProducts()
})

</script>

<style scoped></style>