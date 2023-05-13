interface NavLinks {
  route: string;
  label: string;
  target: '_blank' | '_self';
}

export const navLinks: NavLinks[] = [
  { route: '/', label: 'Home', target: '_self' },
];
