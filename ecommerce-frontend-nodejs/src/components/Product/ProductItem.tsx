import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { toast } from 'react-toastify'

import { Product } from '../../types/Product'
import Rating from '../Rating/Rating'
import { store } from '../../redux/store'
import { CartItem } from '../../types/Cart'
import { convertProductToCartItem } from '../../utils/utils'

function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(store)
  const {
    cart: { cartItems }
  } = state

  const addToCartHandler = (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity }
    })
    toast.success('Product added to the cart')
  }

  return (
    <Card className="card">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>€{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(convertProductToCartItem(product))}>
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem
