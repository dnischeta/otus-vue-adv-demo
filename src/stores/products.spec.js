import { expect, describe, beforeEach, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from './products'

describe('Product Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initializes containing correct state', () => {
    const productStore = useProductStore()
    expect(productStore.products).toEqual([])
    expect(productStore.loading).toBe(false)
    expect(productStore.error).toBe(null)
  })
})