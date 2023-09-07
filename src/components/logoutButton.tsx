'use client';
import endpoint from '@/constants/endpoint';
import errorHandling from '@/lib/error';
import { Body } from '@/types/body';

import Form from '@UI/form';
import { Button } from '@radix-ui/themes';
import { toast } from 'react-hot-toast';

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
      <Button>Logout</Button>
    </Form>
  );
};

export default LogoutButton;
