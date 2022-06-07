import {useContext} from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { ProductContext } from '../../contexts/products.context';
import './shop.styles.scss'

const ShopPage = () => {

  const {products} = useContext(ProductContext)

  return (
    <div className='products-container'>
      {products.map( (product) => (
          <ProductCard  key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage


// class ShopPage extends React.Component {
//   constructor(props) {
//  ({ id, ...otherCollectionProps }) => (
//   <CollectionPreview key={id} {...otherCollectionProps} />
// ))
//     this.state = {
//       collections: SHOP_DATA
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className='shop-page'>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

// export default ShopPage;