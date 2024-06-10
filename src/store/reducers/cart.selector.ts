import { RootReducer } from '..'

export const selectProductsinCart = (root: RootReducer) =>
  root.cart.itens.length

export const selectTotalFavorites = (root: RootReducer) =>
  root.cart.favorites.length

export const selectTotalValue = (root: RootReducer) =>
  root.cart.itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const selectIsFavorite = (favorites: number[], id: number) =>
  favorites.some((p) => p === id)
