import { ProductInfo } from '@/components/ProductInfo/ProductInfo';
import Header from '@/components/Header/Header';
import ProductReview from '@/components/ProductReview/ProductReview';
import Footer from '@/components/Footer/Footer';

function ProductDetailPage() {
  return (
    <div className="ProductDetailPage">
      <Header />
      <ProductInfo />
      <ProductReview />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
