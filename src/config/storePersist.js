import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

const immerPersist = (config) =>
  persist(immer(config), {
    name: "persistStore", // The name of the store
  })

const utilityStorePersist = create(
  immerPersist((set, get) => ({
    isLoaded: false,
    setLoaded: (value) => {
      set((state) => {
        state.isLoaded = value
      })
    },
    schools: {
      grade: {
        section: {
          count: 0,
        },
      },
    },
    selectedProducts: [],
    totalCart: 0,
    calculateTotal: () => {
      set((state) => {
        const currentTotal = get().totalCart
        const currentProducts = get().selectedProducts
        const total =
          currentProducts.length > 0 &&
          currentProducts.reduce((acc, product) => {
            const innerTotal =
              parseFloat(product.price * product.quantity) + acc
            return innerTotal
          }, 0)

        state.totalCart = total
      })
    },
    incrementQuantity: (value) => {
      set((state) => {
        console.log("incrementQuantity started")
        const currentProducts = get().selectedProducts
        const unselectedProducts = currentProducts?.filter(
          (product) => product.id !== value
        )
        const selectedProduct = currentProducts?.filter(
          (product) => product.id === value
        )
        const updatedProductQuantity = {
          ...selectedProduct[0],
          quantity: selectedProduct[0].quantity + 1,
        }
        const updates = [...unselectedProducts, ...[updatedProductQuantity]]
        state.selectedProducts = updates
      })
    },
    decrementQuantity: (value) => {
      set((state) => {
        console.log("decrementQuantity started")
        const currentProducts = get().selectedProducts
        const unselectedProducts = currentProducts?.filter(
          (product) => product.id !== value
        )
        const selectedProduct = currentProducts?.filter(
          (product) => product.id === value
        )
        if (selectedProduct[0].quantity > 0) {
          const updatedProductQuantity = {
            ...selectedProduct[0],
            quantity: selectedProduct[0].quantity - 1,
          }
          const updates = [...unselectedProducts, ...[updatedProductQuantity]]
          state.selectedProducts = updates
        } else {
          get().removeProduct(value)
        }
      })
    },
    addProduct: (value) =>
      set((state) => {
        console.log("addProduct started")
        const currentProducts = get().selectedProducts
        const filteredProducts = currentProducts?.filter(
          (product) => product.id === value.id
        )
        if (filteredProducts.length === 0) {
          state.selectedProducts = [...currentProducts, ...[value]]
        }
        return
      }),
    removeProduct: (value) => {
      set((state) => {
        console.log("removeProduct started")
        const currentProducts = get().selectedProducts
        const filteredProducts = currentProducts?.filter(
          (product) => product.id !== value
        )
        state.selectedProducts = filteredProducts
        return
      })
    },
    increment: (value) =>
      set((state) => {
        console.log("increment started")
        const currentCount = get().schools.grade.section.count
        state.schools.grade.section.count = currentCount + value
      }),
    decrement: () =>
      set((state) => {
        console.log("decrement started")
        const currentCount = get().schools.grade.section.count
        state.schools.grade.section.count = currentCount - 1
      }),
  }))
)

export default utilityStorePersist
