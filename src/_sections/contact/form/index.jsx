"use client";

import Button from "@/_components/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

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
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    onSuccess();
    setSent(true);
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
          <label htmlFor="message" className="font-sm mb-1 font-sans font-bold">
            Message
          </label>
          <textarea
            id="message"
            aria-disabled={sent}
            disabled={sent}
            {...register("message")}
            className={
              "border-text h-52 rounded border px-3 py-2 font-sans aria-disabled:cursor-not-allowed aria-disabled:bg-tertiary"
            }
          />
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
