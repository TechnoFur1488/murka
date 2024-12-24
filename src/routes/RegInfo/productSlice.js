import { createSlice, nanoid } from "@reduxjs/toolkit"

const arr = JSON.parse(localStorage.getItem('reg')) ?? []

const productSlice = createSlice({
    name: 'reg',
    initialState: {
        value: arr
    },
    reducers: {
        register: (s, a) => {
            const { name } = a.payload

            s.value.push({
                id: nanoid(),
                name
            })

            localStorage.setItem('reg', JSON.stringify(s))
        }
    }
})

export default productSlice.reducer

export const { register } = productSlice.actions