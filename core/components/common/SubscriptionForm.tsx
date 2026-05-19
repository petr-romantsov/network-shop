'use client';
import { useState } from 'react';

import { UiButton, UiInputField, UiLink } from '@/core/components/ui';

export const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const onChangeHandler = (value: string) => {
    setEmail(value);
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-[17px] p-6 md:py-[70px] md:px-0 w-full h-[266px] md:h-[290px] bg-black"
      onSubmit={handleSubmit}
    >
      {isSuccess ? (
        <h3 className="text-white text-xl md:text-2xl text-center font-medium leading-[120%] max-w-80 md:max-w-95">
          Спасибо, вы подписаны
        </h3>
      ) : (
        <>
          <h3 className="text-white text-xl md:text-2xl text-center font-medium leading-[120%] max-w-80 md:max-w-95">
            Скидки и промокоды за&nbsp;подписку на&nbsp;наши новости
          </h3>
          <div className="flex flex-col items-center md:items-start gap-[17px]">
            <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-center">
              <UiInputField
                type="email"
                placeholder="Email"
                value={email}
                onChangeValue={onChangeHandler}
                className="w-full md:w-[491px]"
              />
              <UiButton
                text="Подписаться"
                variant="secondary"
                type="submit"
                className="w-full md:w-auto"
              />
            </div>
            <p className="text-white text-sm text-center md:text-start font-normal leading-[120%]">
              Нажимая на кнопку “Подписаться”, вы&nbsp;соглашаетесь с&nbsp;
              <UiLink href="/privacy-policy">
                Политикой&nbsp;конфиденциальности
              </UiLink>
            </p>
          </div>
        </>
      )}
    </form>
  );
};
