// import { useState } from "react";

// const LoginForm = ()=> {
//  const [values, setValues] = useState({
//   name: "",
//   number: "",
//  });
//  const handleChange = (evt) => {
//   setValues({
//    ...values,
//    [evt.target.name]: event.target.value,
//   })
//  }
//  const handleSubmit = (evt) => {
//   evt.preventDefault();
//   setValues({
//    name: "",
//    number: "",
//   })
//  }
//  return (
//   <form onSubmit={ handleSubmit}>
//    <input
//     type="text"
//     name="name"
//     value={values.name}
//     onChange={handleChange}
//    />
//    <input
//     type="number"
//     name="number"
//     value={values.number}
//     onChange={handleChange}
//    />
// <button type="submit">Add contact</button>
//   </form>
//  )
// }
// export  {LoginForm};