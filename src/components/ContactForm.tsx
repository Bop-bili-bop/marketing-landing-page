import classNames from "classnames";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";

const ContactForm = () => {
  return (
    <form
      className={classNames(
        "bg-white shadow-lg shadow-neutral-950/5",
        "border border-neutral-200 rounded-lg",
        "grid grid-cols-2 p-8 gap-10",
      )}
    >
      <InputField id="name" type="text" label="Name" placeholder="Your name" />
      <InputField
        id="email"
        type="email"
        label="Email"
        placeholder="example@example.com"
      />
      <TextArea label="Message"/>
      <Button className="col-span-2" size="lg" variant="primary">Submit</Button>
    </form>
  );
};

export default ContactForm;
