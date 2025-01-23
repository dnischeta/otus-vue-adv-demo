<template>
    <select v-model="locale">
        <option v-for="l in locales" :key="l">{{ l }}</option>
    </select>
</template>

<script setup>
import { inject } from 'vue';
import { I18N_INJECTION_KEY } from '@/plugins/i18n'

const { locale, locales } = inject(I18N_INJECTION_KEY)
</script>