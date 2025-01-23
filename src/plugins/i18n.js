import { computed, ref } from 'vue'

const locales = {
    ru: {
        'welcome': 'Добро пожаловать на сайт',
        'username': 'Имя пользователя',
        'password': 'Пароль',
        'login': 'Войти',
        'logout': 'Выйти',
        'error': 'Произошла ошибка:',
        'catalog': 'Каталог',
        'cart': 'Корзина',
        'add-to-cart': 'Добавить в корзину',
        'total': 'Итого',
        'delete': 'Удалить',
        'loading': 'Загрузка...',
        'cart-is-empty': 'Корзина пуста',
    },
    en: {
        'welcome': 'Welcome to the awesome store',
        'username': 'Username',
        'password': 'Password',
        'login': 'Login',
        'logout': 'Logout',
        'error': 'Error:',
        'catalog': 'Catalog',
        'cart': 'Cart',
        'add-to-cart': 'Add to cart',
        'total': 'Total',
        'delete': 'Delete',
        'loading': 'Loading...',
        'cart-is-empty': 'Cart is empty',
    },
}

/**
 * @type {import('vue').InjectionKey<{ locale: import('vue').Ref<'en' | 'ru'>, locales: ['en', 'ru'] }>}
 */
export const I18N_INJECTION_KEY = Symbol('i18n')

export const i18nPlugin = {
    /**
     * @param {import('vue').App} app
     * @param {{ locale: 'en' | 'ru' }} options
     */
    install(app, options) {
        const locale = ref(options.locale)
        app.config.globalProperties.$t = function $t(key) {
            return computed(() => locales[locale.value][key] ?? key)
        }
        
        app.provide(I18N_INJECTION_KEY, { locale, locales: ['en', 'ru'] })
    }
}
