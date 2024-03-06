import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);

  return <h2>About Us {new Date().toLocaleTimeString()}</h2>;
}
