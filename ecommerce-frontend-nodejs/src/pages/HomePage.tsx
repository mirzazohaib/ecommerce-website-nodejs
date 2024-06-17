import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

import LoadingBox from '../components/Boxes/LoadingBox'
import MessageBox from '../components/Boxes/MessageBox'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils/utils'
import ProductItem from '../components/Product/ProductItem'
import { useGetProductsQuery } from '../hooks/productHooks'

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Ecommerce Website</title>
      </Helmet>
      {Array.isArray(products) &&
        products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        ))}
    </Row>
  )
}

export default HomePage
