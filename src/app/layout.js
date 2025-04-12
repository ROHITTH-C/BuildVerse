import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // or './style.css' if you kept the name
import { Jersey_25 } from 'next/font/google';

import '@fortawesome/fontawesome-free/css/all.min.css';

const jersey25 = Jersey_25({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'BuildVerse',
  description: 'Where projects find people and people find purpose',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-pap7DJw7mM3Xt+fTZ7fX3s6qGyaQ4XURxlEG0WT8WrpXQF1kR5EvzE5Z5R5U5ty4GP5Z04j+jT9MxZUUhFJ5mQ=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
</head>
      <body className={jersey25.className}> {children}</body>
    </html>
  );
}
