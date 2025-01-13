<template>
    <button class="green">
        <slot />
    </button>
</template>

<style scoped>
button {
    cursor: pointer;
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    background-color: var(--color-background-soft);
}

button:not(:disabled):hover {
    outline: 1px solid var(--color-accent);
}

button:disabled {
    opacity: 0.6;
    cursor: default;
}
</style>