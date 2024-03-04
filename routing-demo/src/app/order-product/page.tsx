'use client';

import { useRouter } from 'next/navigation';

export default function OrderProdcut() {
  const router = useRouter();

  const handleClick = () => {
    console.log('placing order');

    router.push('/');
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
