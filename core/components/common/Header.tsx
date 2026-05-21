import Image from 'next/image';

import { Container } from '@/core/components/common';
import { UiNavLink } from '@/core/components/ui';
import { getItemKey } from '@/core/utils/helpers';
import { logo } from '@/public/assets/img';

const navLinks = [
  {
    href: '/',
    text: 'О нас',
  },
  {
    href: '/',
    text: 'Коллекции',
  },
  {
    href: '/',
    text: 'Магазины',
  },
  {
    href: '/',
    text: 'Акции',
  },
];

export const Header = () => {
  return (
    <header>
      <Container className="flex flex-col items-center justify-center gap-8 pt-8">
        <Image src={logo} alt="logo" width={173} height={37} />
        {navLinks && navLinks.length > 0 && (
          <nav className="flex items-center justify-center w-full border-t border-border-gray">
            <ul className="flex items-center gap-8 py-4">
              {navLinks.map((link, index) => (
                <li key={getItemKey(link.text, index)}>
                  <UiNavLink href={link.href} text={link.text} />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};
