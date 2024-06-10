import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
  favorites: number[]
}

const initialState: CartState = {
  itens: [],
  favorites: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Produto>) => {
      if (state.itens.find((product) => product.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.itens = [...state.itens, action.payload]
      }
    },

    addProductToFavorites: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload))
        state.favorites = state.favorites.filter((id) => id !== action.payload)
      else state.favorites = [...state.favorites, action.payload]
    }
  }
})

export const { addProductToCart, addProductToFavorites } = cartSlice.actions
export default cartSlice.reducer
