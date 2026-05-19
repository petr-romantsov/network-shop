import {
  Container,
  SubscriptionForm,
  UiButton,
  UiNavLink,
  UiSliderButton,
} from '@/core/components';

export default function Home() {
  return (
    <Container>
      <UiSliderButton direction="left" variant="bordered" />
      <UiSliderButton direction="right" variant="bordered" />
      <UiSliderButton direction="right" variant="basic" />
      <UiSliderButton direction="left" variant="basic" />
      <UiButton text="Button" variant="primary" />
      <UiButton text="Button" asLink href="/somewhere" variant="secondary" />
      <UiNavLink href="/somewhere" text="Link" />
      <SubscriptionForm />
    </Container>
  );
}
