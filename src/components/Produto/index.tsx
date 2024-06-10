import { useDispatch, useSelector } from 'react-redux'
import { Produto } from '../../App'
import * as S from './styles'
import {
  addProductToCart,
  addProductToFavorites
} from '../../store/reducers/cart'
import { selectIsFavorite } from '../../store/reducers/cart.selector'
import { RootReducer } from '../../store'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => dispatch(addProductToCart(produto))
  const handleAddToFavorites = () => dispatch(addProductToFavorites(produto.id))
  const isFavorite = useSelector((root: RootReducer) =>
    selectIsFavorite(root.cart.favorites, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleAddToFavorites} type="button">
        {isFavorite ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAddToCart} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
