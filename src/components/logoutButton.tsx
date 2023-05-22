'use client';
import endpoint from '@/constants/endpoint';
import errorHandling from '@/lib/error';
import { Body } from '@/types/body';
import { toast } from 'react-hot-toast';
import Button from './UI/button';
import Form from './UI/form';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const res = await fetch(endpoint.auth, {
        method: 'DELETE',
      });

      const { success, message } = (await res.json()) as Body;

      if (!success) {
        toast.error(message);
        return;
      }
      window.location.href = '/';
    } catch (error) {
      throw errorHandling('Error whent try to delete session.');
    }
  };
  return (
    <Form action={handleLogout}>
      <Button title='Logout' />
    </Form>
  );
};

export default LogoutButton;
