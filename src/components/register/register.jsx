import { useEffect, useState, useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const thename = useRef();
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [userdataerr, setUserdataerr] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    if(e.target.name === "name"){
        setUserdata({...userdata, name: e.target.value});
        setUserdataerr({...userdataerr, name: e.target.value.trim().length===0 ? "This field is required": null});
    }

    if(e.target.name === "email"){
        setUserdata({...userdata, email: e.target.value});
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setUserdataerr({...userdataerr, email: e.target.value.trim().length===0 ? "This field is required":
         !emailRegex.test(e.target.value) ? "Please enter a valid email" : null 
    });
    }

    if(e.target.name === "password"){
        setUserdata({...userdata, password: e.target.value});
        const passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/;
        setUserdataerr({...userdataerr, password: e.target.value.trim().length < 8 ? "Please enter min 8 chars for password" :
        !passreg.test(e.target.value.trim()) ? "password must contain one lower, one upper at least and special characters": null
        })
    }

    if(e.target.name === "username"){
        setUserdata({...userdata, username: e.target.value});
        setUserdataerr({...userdataerr, username: e.target.value.trim().length===0 ? "This field is required":
        e.target.value.trim().length !== e.target.value.length ? " User name must not contain any spaces." : null
        });
    }

    if(e.target.name === "confirmPassword"){
        setUserdata({...userdata, confirmpassword: e.target.value});
        setUserdataerr({...userdataerr, confirmpassword: e.target.value.trim().length <8 ? "This field is required":
        e.target.value.trim() !== userdata.password ? " password does not match": null
    })
    }
  };

  const handleSubmit = (e) => {
    if (
      userdataerr.name === null &&
      userdataerr.email === null &&
      userdataerr.username === null &&
      userdataerr.password === null &&
      userdataerr.confirmpassword === null &&
      userdata.name !== "" &&
      userdata.email !== "" &&
      userdata.password !== "" &&
      userdata.confirmpassword !== "" &&
      userdata.username !== ""
    ) {
      nav("/productlist");
    } else {
      console.log( userdata.name)
      console.log( userdata.email)
      console.log( userdata.username)
      console.log( userdata.password)
      console.log( userdata.confirmpassword)
      e.preventDefault();
    }
    
    
  };

  useEffect(()=>{
    thename.current.focus();
  },[]);

  return (
    <form className="theform" onSubmit={handleSubmit}>
      <div className="reg-content">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={userdata.name}
            onChange={handleChange}
            placeholder="First Name"
            ref={thename}
          />
        </label>
        <p>{userdataerr.name}</p>
      </div>
      <div className="reg-content">
        <label>
          Email
          <input
            type="text"
            name="email"
            value={userdata.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <p>{userdataerr.email}</p>
      </div>
      <div className="reg-content">
        <label>
          User Name
          <input
            type="text"
            name="username"
            value={userdata.username}
            onChange={handleChange}
            placeholder="User Name"
          />
        </label>
        <p>{userdataerr.username}</p>
      </div>
      <div className="reg-content">
        <label>
          Password
          <input
            type="password"
            name="password"
            value={userdata.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <p>{userdataerr.password}</p>
      </div>
      <div className="reg-content">
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={userdata.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </label>
        <p>{userdataerr.confirmpassword}</p>
      </div>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default Register;
