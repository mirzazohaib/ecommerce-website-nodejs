import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import { useContext } from 'react'
import { store } from '../../redux/store'
import { convertProductToCartItem } from '../../utils/utils'
import { Product } from '../../types/Product'
import { toast } from 'react-toastify'

function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(store)
  const {
    cart: { cartItems }
  } = state

  const addToCartHandler = (item: Product) => {
    const existItem = cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...convertProductToCartItem(item), quantity }
    })
    toast.success('Product added to the cart')
  }

  return (
    <Card className="h-100">
      <Link to={`/product/${product.slug}`}>
        {/* FIXED: Added 'product-image' class here */}
        <img src={product.image} className="card-img-top product-image" alt={product.name} />
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
          <Button onClick={() => addToCartHandler(product)} className="btn-primary">
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default ProductItem
