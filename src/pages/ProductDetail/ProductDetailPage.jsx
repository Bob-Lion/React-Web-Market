import { ProductInfo } from '@/components/ProductInfo/ProductInfo';
import Header from '@/components/Header/Header';
import ProductReview from '@/components/ProductReview/ProductReview';

function ProductDetailPage() {
  return (
    <div className="ProductDetailPage">
      <Header />
      <ProductInfo />
      <ProductReview />
    </div>
  );
}

export default ProductDetailPage;
