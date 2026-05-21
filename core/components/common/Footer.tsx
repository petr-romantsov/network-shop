import { Container } from '@/core/components/common';
import { UiLink } from '@/core/components/ui';
import { VkIcon } from '@/public/assets/icons';

export const Footer = () => {
  return (
    <footer>
      <Container className="flex flex-col md:flex-row items-center md:justify-around lg:justify-between  py-8 md:py-11 gap-4 md:gap-0">
        <address className="flex flex-col lg:flex-row items-center gap-6 not-italic">
          <a href="tel:88008883322" className="font-bold text-base">
            8 (800) 888-33-22
          </a>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <VkIcon />
          </a>
          <UiLink
            href="mailto:info@networkstore.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-sm"
          >
            info@networkstore.ru
          </UiLink>
        </address>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <UiLink href="/" className="font-normal text-sm" color="black">
            Политика конфиденциальности
          </UiLink>
          <UiLink href="/" className="font-normal text-sm" color="black">
            Правила использования подарочных карт
          </UiLink>
          <p className="font-normal text-sm">&copy; 2023 Network</p>
        </div>
      </Container>
    </footer>
  );
};
