import { Input } from "components/atoms";
import { FormEvent, useState } from "react";
import { login } from "services";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData)
      .then((res) => console.log("Res", res))
      .catch((err) => err);
    console.log("Done");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <Input
        name="email"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      <label htmlFor="password">Password</label>
      <Input
        name="password"
        type="password"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
      />
      <button>Submit</button>
    </form>
  );
}

export default Login;
