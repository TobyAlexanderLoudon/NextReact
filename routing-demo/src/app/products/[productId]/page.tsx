import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: {
    productId: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Product ${params.productId}`,
  };
}

export default function ProductDetail({ params }: Props) {
  return (
    <>
      <Link href="/products">Products</Link>
      <h1>Product Details {params.productId}</h1>
    </>
  );
}
