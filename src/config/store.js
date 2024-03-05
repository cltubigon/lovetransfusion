import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

const utilityStore = create(
  immer((set, get) => ({
    popup: null,
    setPopup: (data) => {
      set((state) => {
        state.popup = data
      })
    },
  })),
  {
    name: "mystore",
  }
)

export default utilityStore
