interface DB {
  id: number;
  name: string;
  email: string;
  password: string;
}

const db: () => DB | null = () => {
  if (true) {
    return {
      id: 1,
      name: 'Estarlincito',
      email: process.env.ADMIN_EMAIL,
      password: `$2b$04$pqfr2WezZXPiiQgnMz1dTO6${process.env.ADMIN_PSW}`,
    };
  }

  return null;
};

export default db;
