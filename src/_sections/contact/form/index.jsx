"use client";

import Button from "@/_components/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";

const Input = ({ register, name, options, type, error, disabled }) => {
  const hasError = Boolean(error);
  return (
    <div className="mb-4 flex w-full flex-col">
      <label
        htmlFor={name}
        className="font-sm mb-1 font-sans font-bold capitalize"
      >
        {name}
        <span className="font-serif text-primary">*</span>
      </label>
      <input
        id={name}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={hasError}
        className={twMerge(
          "border-text w-full rounded border px-3 py-2",
          disabled && "cursor-not-allowed bg-tertiary",
          hasError && "border-primary",
        )}
        type={type || "text"}
        {...register(name, options)}
      />
      {error && (
        <p className="font-xs font-sans text-primary">{error.message}</p>
      )}
    </div>
  );
};

function Form({ onSuccess }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    console.log(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      templateParams,
    );

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        onSuccess();
        setSent(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col lg:w-6/12"
    >
      <div>
        <Input
          register={register}
          error={errors.name}
          disabled={sent}
          name="name"
          options={{
            required: "Please enter your name.",
          }}
        />

        <Input
          register={register}
          error={errors.email}
          disabled={sent}
          name="email"
          options={{
            required: "Please enter your email.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please provide a valid email address.",
            },
          }}
        />

        <div className="mb-4 flex flex-col">
          <label
            htmlFor="message"
            className="font-sm mb-1 font-sans font-bold capitalize"
          >
            Message
            <span className="font-serif text-primary">*</span>
          </label>

          <textarea
            id="message"
            disabled={sent}
            aria-disabled={sent}
            aria-invalid={Boolean(errors.message)}
            {...register("message", {
              required: "Don't forget your message!",
            })}
            className={twMerge(
              "border-text h-52 rounded border px-3 py-2 font-sans aria-disabled:cursor-not-allowed aria-disabled:bg-tertiary",
              errors.message && "border-primary",
            )}
          />
          {errors.message && (
            <p className="font-xs font-sans text-primary">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        label="Submit contact message form"
        classnames="md:w-3/12 self-end"
        disabled={sent}
      >
        {sent ? "Sent!" : "Send"}
      </Button>
    </form>
  );
}

export default Form;
