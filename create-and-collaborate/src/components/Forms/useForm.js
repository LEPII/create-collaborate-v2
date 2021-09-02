import{ useState, useEffect } from "react";

const useForm = () => {
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [errors, setErros] = useState({})

const handleChange = e => {
  const { name, value} = e.target
  setValue({
    ...values, 
    [name]: value
  })
};

const handleSubmit = e => {
  e.preventDefault();
}
return {handleChange, values, handleSubmit};
};

export default useForm;