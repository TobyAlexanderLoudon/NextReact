import { Suspense } from 'react';
import { Product } from '@/_components/product';
import { Reviews } from '@/_components/reviews';

export default function ProductDetailsPage() {
  return (
    <>
      <div>
        <h1>Product Detail Page</h1>
        <Suspense fallback={<p>Loading product details...</p>}>
          <Product />
        </Suspense>
        <Suspense fallback={<p>Loading product reviews...</p>}>
          <Reviews />
        </Suspense>
      </div>
    </>
  );
}
