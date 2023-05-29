import Container from '@/components/UI/container';
import Title from '@/components/UI/title';
import LogoutButton from '@/components/logoutButton';

export const metadata = {
  title: 'Logout',
  description: 'unauth session',
};

const Logout = () => {
  return (
    <Container>
      <Title text='Logout' />
      <br />
      <LogoutButton />
    </Container>
  );
};

export default Logout;
