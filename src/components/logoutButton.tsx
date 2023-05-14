'use client';
import ApiUrl from '@/constants/url';

const LogoutButton = () => {
  const handleLogout = async () => {
    await fetch(ApiUrl.auth, {
      method: 'DELETE',
    });
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
