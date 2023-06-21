import { useState } from "react";

// esta section  es el tipado de typescript valuado el valor de input
interface FormValues {
  name: string;
  email: string;
  password: string;
}
// esta section es el tipado de typescript valuado los errores del input
interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}
export const Form = () => {
  // guardando los valores del campos del input hook
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  //   auto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  //
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors: FormErrors = {};
    if (!values.name) {
      formErrors.name = "Name is required";
    }
    const isValidEmail = (email: string) => {
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!values.email) {
      formErrors.email = "Email is required";
    } else if (!isValidEmail(values.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!values.password) {
      formErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Submit the form
      console.log("Form submitted:", values);
    }
  };

  return (
    <div className="container">
      {/* <Formulario> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
      {/* </Formulario> */}
    </div>
  );
};
