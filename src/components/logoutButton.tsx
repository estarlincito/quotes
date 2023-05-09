'use client';

import fetchUrl from '@/lib/auth/url';

const LogoutButton = () => {
  const handleLogout = async () => {
    await fetch(fetchUrl, {
      method: 'DELETE',
    });
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
