import Footer from '@/components/footer';
import MainContainer from '@/components/maincontainer';
import Toaster from '@/lib/toaster';
import clsx from 'clsx';
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
      <body
        className={clsx(
          'bg-white dark:bg-black',
          'text-text-light-primary dark:text-text-dark-primary'
        )}
      >
        <MainContainer>{children}</MainContainer>
        <Footer />
        <Toaster position='top-right' reverseOrder={false} />
      </body>
    </html>
  );
};
export default RootLayout;
