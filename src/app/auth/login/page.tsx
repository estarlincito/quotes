import LoginForm from '@/components/Loginform';
import Container from '@UI/container';
import Title from '@UI/title';

const Login = () => {
  return (
    <Container>
      <Title text='Login' />
      <br />
      <LoginForm />
    </Container>
  );
};

export default Login;
