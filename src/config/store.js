import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

const utilityStore = create(
  immer((set, get) => ({
    // ********* Popup *********
    popup: null,
    setPopup: (data) => {
      set((state) => {
        state.popup = data
      })
    },
    // ********* Care Package *********
    carePackage: {
      donationAmount: 25,
      donorFirstName: "",
      donorLastName: "",
      donorEmailAddress: "",
      donee: "",
      targetPathURL: "",
      priceList: [
        { id: 1, price: "$10.00", active: false },
        { id: 2, price: "$25.00", active: true },
        { id: 3, price: "$50.00", active: false },
        { id: 4, price: "$100.00", active: false },
        { id: 5, price: "$250.00", active: false },
        { id: 6, price: "$500.00", active: false },
      ],
    },
    setDonee: (name) => {
      set((state) => {
        state.carePackage.donee = name
      })
    },
    setPriceList: (id) => {
      set((state) => {
        const priceList = get().carePackage.priceList
        const updatedList = priceList.map((item) => {
          if (item.id === id) {
            const update = { ...item, active: true }
            return update
          } else {
            const update = { ...item, active: false }
            return update
          }
        })
        state.carePackage.priceList = updatedList
      })
    },
    setDonationAmount: (value) => {
      set((state) => {
        state.carePackage.donationAmount = value
      })
    },
    setFNameLNameEmail: (data) => {
      const { firstName, lastName, email } = data
      set((state) => {
        const current = get().carePackage
        const updated = {
          ...current,
          donorFirstName: firstName,
          donorLastName: lastName,
          donorEmailAddress: email,
        }
        console.log({ updated })
        state.carePackage = updated
      })
    },
    // ********* Add Recipient *********
    recipient: {
      sec_one_paragraph: null,
      according_to_paragraph: null,
    },
    setSec_one_paragraph: (value) => {
      set((state) => {
        state.recipient.sec_one_paragraph = value
      })
    },
    setAccording_to_paragraph: (value) => {
      set((state) => {
        state.recipient.according_to_paragraph = value
      })
    },
  })),
  {
    name: "mystore",
  }
)

export default utilityStore
