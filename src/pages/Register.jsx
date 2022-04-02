import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { useState, useEffect } from "react";
import { register, reset } from "../features/auth/authSlice";
import Login from "../pages/Login";
// import Doc from "../assets/images/google-docs.png";
// import Cheque from "../assets/images/cheque.png";
// import Shoe from "../assets/images/shoes.png";
import Spinner from "../components/Spinner";

function Register() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { name, email, phone, password } = formdata;
  // const [phone, setNumber] = useState("");
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess} = useSelector( (state) => state.auth)

  useEffect( () => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      navigate('/pickup-address')
    }

    dispatch(reset())

  }, [user, isError,  isSuccess, message, navigate, dispatch])
  

  const onChange = (e) => {
    setFormData ((prevState) => ({
      [e.target.name] :e.target.value,
    }))
  };
  const onSubmit = (e) => {
     e.preventDefault()

     const userData ={
       name,
       email,
       phone, 
       password
     }

     dispatch(userData())
  }

  // const checkInput = (e) => {
  //   const onlyDigits = e.target.value.replace(/\D/g, "");
  //   setNumber(onlyDigits);
  // };

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <div>
        <div className="row">
          {/* form start here  */}
          <div className="column1">
            <div class="wrapper">
              <div class="form_container">
                <form name="form" onSubmit={onSubmit}>
                  <div class="heading">
                    <h2>Create Your Seller Account</h2>
                  </div>
                  <div class="form_item">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="Name"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div class="form_wrap">
                    <div class="form_item">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        id="email"
                        placeholder="Email Address"
                        required
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="form_wrap">
                    <div class="form_item">
                      <input
                        value={phone}
                        name = "phone"
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        maxLength="10"
                        required
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="form_wrap">
                    <div class="form_item">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={password}
                        required
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div>
                    <p style={{ padding: 1 }}>
                      By filling this form, I agree to ?
                      <Link to="/"> Term & Condition</Link>
                    </p>
                  </div>
                  <div class="btn">
                    <input type="submit" value="Sign Up" />
                  </div>
                  <div>
                    <p>
                      Already a seller?
                      <Link to={Login}> Login here</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* form ends here  */}

          <div className="vertical"></div>

          <div className="column2">
            <h2 className="forh2">
              Sell to millions of customers on Shopperspot, Right from your
              doorstep!
            </h2>
            <p>All you need to sell on Shopperspot is </p>
            <div className="content2">
              <div className="content1">
                {/* <img className="imgd" src={Doc} alt="" /> */}
                <p className="ptext">GSTIN*</p>
              </div>
              <div className="content1 middleContent">
                {/* <img className="imgd" src={Cheque} alt="" /> */}
                <p className="ptext">Bank Account</p>
              </div>
              <div className="content1">
                {/* <img className="imgd" src={Shoe} alt="" /> */}
                <p className="ptext">Products to sell</p>
              </div>
            </div>
            <p className="ptext">
              *GSTIN is not required for sellers who only sell books{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
