import Button from "./Button";

const CustomerSupport = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-4 p-8 bg-white border border-neutral-200 shadow-md shadow-[#000]/10 rounded-lg">
      <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xl font-semibold text-neutral-900">
            Can’t find the answer you’re looking for?
          </h4>
          <p className="text-base text-neutral-600">
            Reach out to our{" "}
            <a href="mailto:customer@support"  className="text-indigo-700">
              customer support
            </a>{" "}
            team.
          </p>
      </div>
      <Button type="button" size="md" className="w-full md:w-1/4" variant="primary">Get in touch</Button>
    </div>
  );
};

export default CustomerSupport;
