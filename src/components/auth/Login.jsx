import { Container } from "../container/Container";

const Login = ({ login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("userName");
    const password = formData.get("password");
    login(username, password);
  };

  return (
    <>
      <Container
        title="React Testing Area"
        description="To login to app, please use abc@mail.com for the user email and 123 for the passord."
      >
        <div className="w-3/4 mx-auto mt-5">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label>User Email:</label>
            <input
              type="text"
              name="userName"
              className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5"
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5"
            />
            <button className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500">
              Login
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
