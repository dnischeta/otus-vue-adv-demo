<template>
    <article :class="{ row }">
        <img v-if="cover" :src="cover" />
        <h3>
            <slot name="title" />
        </h3>
        <p v-if="$slots.default">
            <slot />
        </p>
        <slot name="actions" />
    </article>
</template>

<script setup>
defineProps({ cover: { type: String }, row: { type: Boolean } })
</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid var(--color-border);
    gap: 0.25rem;
}

article.row {
    flex-direction: row;
    justify-content: space-between;
}

article.row img {
    width: 2rem;
    height: 2rem;
}

article img {
    border-radius: 8px;
}

article :deep(button) {
    border-radius: 8px;
}
</style>