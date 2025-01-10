import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('products', () => {
    // Состояния store
    const products = ref([])  // Список всех товаров
    const cart = ref([])      // Товары в корзине
    const loading = ref(false)// Флаг загрузки
    const error = ref(null)    // Ошибка

    // Вычисляемое свойство общей стоимости товаров в корзине
    const cartTotal = computed(() => {
        return cart.value.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
    })

    // Общее количество товаров в корзине
    const cartItemCount = computed(() => {
        return cart.value.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    })

    // Метод по работе с товарами
    async function fetchProducts() {
        loading.value = true
        error.value = null
        // Загружаем товары с API
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=9')
            const data = await response.json()
            products.value = data
        } catch (err) {
            error.value = 'Не удалось загрузить товары'
        } finally {
            loading.value = false
        }
    }

    //Метод по работе с корзиной
    function addToCart(product) {
        // Ищем товары в козине
        const item = cart.value.find(item => item.id === product.id)
        // Если товар существует
        if (item) {
            item.quantity++ // увеличиваем количество
        } else {
            cart.value.push({ ...product, quantity: 1 }) // добавляем товар в корзину
        }
    }

    function updateCartItemQuantity(productId, quantity) {
        const item = cart.value.find(item => item.id === productId)
        if (item) {
            if (quantity <= 0) {
                removeFromCart(productId)
            } else {
                item.quantity = quantity
            }
        }
    }

    //Удаление по id товара из корзины
    function removeFromCart(productId) {
        const index = cart.value.findIndex(item => item.id === productId) // -1
        if (index > -1) {
            cart.value.splice(index, 1) //
        }
    }

    // Возвращаем все что нужно использовать в компонентах
    return {
        products,
        cart,
        loading,
        error,
        fetchProducts,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartItemCount
    }

})