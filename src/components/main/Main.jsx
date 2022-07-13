import { useState } from "react";
import Login from "../auth/Login";
import Layout from "../layout/Layout";

const users = {
  "abc@mail.com": {
    displayName: "Mr ABC",
    password: "123",
  },
  "xyz@mail.com": {
    displayName: "Ms XYZ",
    password: "789",
  },
};

function getLoggedInUser() {
  const user = localStorage.getItem("user");

  if (user === null) {
    return undefined;
  } else {
    return JSON.parse(user);
  }
}

const useAuth = () => {
  const [user, setUser] = useState(getLoggedInUser);

  const login = (username, password) => {
    const user = users[username];

    if (!user) {
      alert("User not found!");
      return;
    }

    const passwordCorrect = user.password === password;

    if (!passwordCorrect) {
      alert("Password incorrect!");
      return;
    }

    alert(`Welcome ${user.displayName}!`);

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return [user, login];
};

const Main = () => {
  const [user, login] = useAuth();

  return user ? <Layout /> : <Login login={login} />;
};

export default Main;
