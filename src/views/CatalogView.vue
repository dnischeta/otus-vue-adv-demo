<template>
    <div>
        <h2>{{ $t('catalog') }}</h2>
        <div v-if="loading">{{ $t('loading') }}</div>
        <div v-else-if="error">{{ error }}</div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                <StoreCard :cover="product.image">
                    <template #title>{{ product.title }}</template>
                    {{ product.price }} eur.
                    <template #actions>
                        <StoreButton @click="addToCart(product)">{{ $t('add-to-cart') }}</StoreButton>
                    </template>
                </StoreCard>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'
import StoreButton from '@/components/StoreButton.vue';
import StoreCard from '@/components/StoreCard.vue';

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
</style>