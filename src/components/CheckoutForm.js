import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const CheckoutForm = () => {
  const form = useForm();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full md:mx-10 sm:mx-4 md:w-2/3 sm:w-1/2">
      <h1 className="p-3 my-10 text-2xl font-semibold rounded-md sm:text-xl md:text-3xl text-secondary-color bg-violet-100">
        Shipping Address
      </h1>
      <form
        className="text-xs md:mx-10 md:text-base"
        action="#"
        onSubmit={handleSubmit(formSubmit)}
        noValidate
      >
        <input
          type="text"
          placeholder="Full name"
          {...register("name", {
            required: { value: true, message: "Please enter your full name" },
          })}
          className="py-3 outline-none border-[1px] w-5/12 px-2 rounded-md"
        />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
        <div className="flex my-10">
          <div className="w-1/2 ">
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                pattern: {
                  value: /^(0|91)?[6-9][0-9]{9}$/,
                  message: "Invalid phone number",
                },
                required: { value: true, message: "Please enter your number" },
              })}
              className="py-3 outline-none border-[1px]  px-2 w-10/12  rounded-md "
            />
            <p className="text-sm text-red-500">{errors.phone?.message}</p>
          </div>
          <div className="w-1/2 ">
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                  message: " Invalid email id",
                },
                required: { value: true, message: "Please enter your email" },
              })}
              className="py-3 outline-none border-[1px] w-10/12  px-2 rounded-md"
            />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>
        </div>
        <input
          type="text"
          placeholder="Address"
          {...register("address", {
            required: { value: true, message: "Please enter your address" },
          })}
          className="py-3 outline-none border-[1px] w-5/12 px-2 rounded-md"
        />
        <p className="text-sm text-red-500">{errors.address?.message}</p>

        <div className="flex my-10">
          <div className="w-1/2 ">
            <input
              type="text"
              placeholder="City"
              {...register("city", {
                required: { value: true, message: "PLease enter your city" },
              })}
              className="py-3  mr-10 outline-none border-[1px] w-10/12 px-2 rounded-md"
            />
            <p className="text-sm text-red-500">{errors.city?.message}</p>
          </div>
          <div className="w-1/2 ">
            <input
              type="text"
              placeholder="Pincode"
              {...register("pincode", {
                pattern: {
                  value: /^[1-9][0-9]{5}$/,
                  message: " Invalid pincode",
                },
                required: { value: true, message: "PLease enter your pincode" },
              })}
              className="py-3 outline-none border-[1px] w-5/12 px-2 rounded-md"
            />
            <p className="text-sm text-red-500">{errors.pincode?.message}</p>
          </div>
        </div>

        <input
          type="submit"
          value="Save"
          className="px-4 py-2 text-white bg-black rounded-md md:text-xl"
        />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default CheckoutForm;
