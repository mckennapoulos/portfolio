"use client";

import Button from "@/app/common/components/button";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const Input = ({ register, name, options, type, error }) => {
  const hasError = Boolean(error);
  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor={name}
        className="font-sm mb-1 font-sans font-bold capitalize"
      >
        {name}
        <span className="font-serif text-primary">*</span>
      </label>
      <input
        id={name}
        aria-invalid={hasError}
        className={twMerge(
          "border-text w-full rounded border px-3 py-2 lg:w-6/12",
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

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const emailVal = watch("email");
  console.log(emailVal);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          register={register}
          error={errors.name}
          name="name"
          options={{
            required: "Please enter your name.",
          }}
        />

        <Input
          register={register}
          error={errors.email}
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
            {...register("message")}
            className="border-text h-52 w-full rounded border px-3 py-2 font-sans lg:w-6/12"
          />
        </div>
      </div>
      <Button
        type="submit"
        text="Send"
        ariaLabel="Submit contact message form"
      />
    </form>
  );
}

export default Form;
