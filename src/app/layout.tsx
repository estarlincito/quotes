import Footer from '@/components/footer';
import MainContainer from '@/components/maincontainer';
import clsx from 'clsx';
import './globals.css';

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
      </body>
    </html>
  );
};
export default RootLayout;
