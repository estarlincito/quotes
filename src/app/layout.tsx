import Footer from '@/components/footer';
import Toaster from '@/lib/toaster';
import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';

export const metadata = {
  icons: {
    icon: 'https://quotes001.vercel.app/favicons/favicon.ico',
    shortcut: 'https://quotes001.vercel.app/favicons/shortcut-icon.png',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <Theme appearance='light'>
          <Container p='5'>
            {children}
            <Footer />
          </Container>
          <Toaster position='top-right' reverseOrder={false} />
        </Theme>
      </body>
    </html>
  );
};
export default RootLayout;
