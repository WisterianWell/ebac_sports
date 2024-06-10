import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import {
  selectProductsinCart,
  selectTotalValue,
  selectTotalFavorites
} from '../../store/reducers/cart.selector'

const Header = () => {
  const totalValue = useSelector(selectTotalValue)
  const totalProductsInCart = useSelector(selectProductsinCart)
  const totalFavorites = useSelector(selectTotalFavorites)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{totalFavorites} favoritos</span>
        <img src={cesta} />
        <span>
          {totalProductsInCart} itens, valor total: {paraReal(totalValue)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
