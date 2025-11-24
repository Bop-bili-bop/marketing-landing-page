import classNames from "classnames";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const contactFormSchema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  message: yup.string().required("This field is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
  });

  const messageValue = useWatch({
    control,
    name: "message",
    defaultValue: ""
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(
        "bg-white shadow-lg shadow-neutral-950/5",
        "border border-neutral-200 rounded-lg",
        "grid grid-cols-2 p-8 gap-10",
      )}
    >
      <InputField
        id="name"
        type="text"
        label="Name"
        placeholder="Your name"
        {...register("name")}
        error={errors.name?.message}
      />
      <InputField
        id="email"
        type="email"
        label="Email"
        placeholder="example@example.com"
        {...register("email")}
        error={errors.email?.message}
      />
      <TextArea
        label="Message"
        value={messageValue}
        {...register("message")}
        error={errors.message?.message}
      />
      <Button type="submit" className="col-span-2" size="lg" variant="primary">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
