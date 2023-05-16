'use client';
import ApiUrl from '@/constants/url';
import errorHandling from '@/lib/error';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const res = await fetch(ApiUrl.auth, {
        method: 'DELETE',
      });
      return await res.json();
    } catch (error) {
      throw errorHandling('Error whent try to delete session.');
    }
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
