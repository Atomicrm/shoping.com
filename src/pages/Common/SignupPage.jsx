import React from "react";
import { Lock, Mail, Phone, User } from "lucide-react";
import '../Common/Signup.css'
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
const SignupPage = () => {
const Navigate = useNavigate()
   const {register,handleSubmit}=useForm()

   const submitHandler = async(data) => {

    data.role_id = "67bfddd9a293db5f9abaab94" 
   const res = await axios.post("/signup",data) 
   console.log(res)
   console.log(res.data)


   if(res.status === 201){
    toast.success('login successfully', {
      position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
    Navigate("/login")
    
   
  }
  else{
   alert("account is not created")
  }

  



   }

  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>   

    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        
        <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
          <div className="input-group">
            <User className="input-icon" />
            <input 
              type="text" 
              placeholder="Full Name"
              className="auth-input"
              {...register("user_name")}
            />
          </div>

          <div className="input-group">
            <Phone className="input-icon" />
            <input 
              type="phone" 
              placeholder="Mobile Number"
              className="auth-input"
              {...register("phone")}
            />
          </div>

          <div className="input-group">
            <Mail className="input-icon" />
            <input 
              type="email" 
              placeholder="Enter Email"
              className="auth-input"
              {...register("email")}
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" />
            <input 
              type="password" 
              placeholder="Enter Password"
              className="auth-input"
              {...register("password")}
            />
          </div>

          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>

        <p className="auth-link">
          Already have an account? <a href="/login" className="link">Log in</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignupPage; 