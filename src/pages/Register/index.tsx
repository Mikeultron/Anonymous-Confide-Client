import { Input } from "components/atoms";
import { useState, FormEvent } from "react";
import { register } from "services";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(formData)
      .then((res) => console.log("Res", res))
      .catch((err) => err);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <Input
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            username: e.target.value,
          }))
        }
        name="username"
      />
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
      <label htmlFor="email">Password</label>
      <Input
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

export default Register;
