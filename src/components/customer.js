import Form from "./form";

const Customer = () => {
  return (
    <div className="md:container mx-auto flex flex-row justify-center">
      <div className="text-center ">
        <h1 className="font-bold text-xl">CAPTAIN ARTSY HOOK</h1>
        <p className="italic">
          Here to showcase art and give you a great experience
        </p>
        <div className="flex flex-row justify-evenly gap-20 items-center pb-4">
          <img
            src="https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Captain Hook"
            className="w-90 h-70 rounded-full hidden sm:block"
          />
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
