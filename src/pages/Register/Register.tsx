import { BiRightArrow } from "react-icons/bi";
import useClassNames from "../../hooks/useClassNames";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SignUpModel from "../SignupModel/SignUpModel";

const Register = () => {
  return (
    <main>
      <SignUpModel bg="rgba(0,0,0,0.5)" alignItems="center" blur="20px" >
      <div className="w-[360px]">
        <FormContainer />
      </div>
      </SignUpModel>
    </main>
  );
};

export default Register;

const formDetailsSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters"),
  email: z.string().email("Invalid email address"),
  organization: z
    .string()
    .min(3, "Organization must be at least 3 characters")
    .max(50, "Organization must be at most 50 characters"),
  mobile: z
    .string()
    .refine((value) => /^\d+$/.test(value), {
      message: "Mobile number must contain only numbers",
    })
    .refine((value) => value.length === 10, {
      message: "Mobile number must be exactly 10 digits",
    }),
});

type FormDetails = z.infer<typeof formDetailsSchema>;

const FormContainer = () => {
  const [show, setShow] = useState(false);

  const formContainer = useClassNames(
    "flex flex-col bg-white px-4 py-4 rounded max-w-[360px]"
  );
  const inputContainer = useClassNames(
    "flex flex-col gap-[18px] mt-[18px] text-black text-[14px]"
  );
  const inputStyles = useClassNames(
    "w-full h-[52px] px-4 py-2 border border-[#C4C4C4] rounded-[4px] outline-none"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
    watch,
  } = useForm<FormDetails>({
    resolver: zodResolver(formDetailsSchema),
    defaultValues: {
      mobile: "",
      email: "",
      name: "",
      organization: "",
    },
  });

  const { mobile } = watch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (name === "mobile") {
      let value = event.target.value;
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
      event.target.value = value;
      setValue("mobile", value);
    }
  };
  const handleMobile = () => {
    trigger(["name", "email", "organization"]).then((isValidForm) => {
      if (isValidForm) {
        setShow(true);
      }
    });
  };
  const onSubmit = () => reset();

  return (
    <>
      <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-[24px] font-bold text-center text-black">
          SIGN UP
        </h2>
        {/* Fullname */}
        <div className={inputContainer}>
          <label htmlFor="name" className="text-[#242F35]">
            FullName
          </label>
          <input
            className={inputStyles}
            type="text"
            id="name"
            placeholder="FullName"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-[12px] text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={inputContainer}>
          <label htmlFor="email" className="text-[#242F35]">
            Email
          </label>
          <input
            className={inputStyles}
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-[12px] text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Organization */}
        <div className={inputContainer}>
          <label htmlFor="organization" className="text-[#242F35]">
            Organization
          </label>
          <input
            type="text"
            className={inputStyles}
            id="organization"
            placeholder="Organization"
            {...register("organization")}
          />
          {errors.organization && (
            <span className="text-[12px] text-red-600">
              {errors.organization.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className={`${inputContainer} relative`}>
          <input
            type="text"
            maxLength={10}
            className={useClassNames(inputStyles, "relative")}
            placeholder="Mobile Number"
            {...register("mobile")}
            onChange={handleInputChange}
          />
          <button
            disabled={mobile.length === 10 ? false : true}
            onClick={handleMobile}
            className={useClassNames(
              "absolute right-0 top-0 bottom-0 w-[50px]  flex justify-center items-center rounded-tr-[4px] rounded-br-[4px]",
              mobile.length === 10 ? "bg-[#377E8B]" : "bg-[#C4C4C4]"
            )}
          >
            <BiRightArrow color="#ffffff" />
          </button>
        </div>
        {errors.mobile && (
          <span className="text-[12px] text-red-600 mt-[12px]">
            {errors.mobile.message}
          </span>
        )}
        {show && (
          <span className="text-black font-bold text-[14px] mt-[12px]">
            Enter OTP
          </span>
        )}

        {/* Submit Button */}
        <div className="my-[18px]">
          <button
            type="submit"
            className="w-full rounded-full bg-[#377E8B] text-white text-[14px] font-medium h-[52px]"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};
