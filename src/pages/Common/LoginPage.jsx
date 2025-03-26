import React from "react";
import { Lock, Mail } from "lucide-react";
import './Signup.css'
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";




const LoginPage = () => {
  const Navigate = useNavigate()
  const {register,handleSubmit}=useForm()


  const submitHandler =  async(data) =>{

    data.role_id = "67bfddd9a293db5f9abaab94" 
    const res = await axios.post("/login",data)

    console.log(res)
    console.log(res.data)
    console.log(res.data.data);
    
    if(res.status === 201){
      //   alert("login successfully")
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
      localStorage.setItem("id",res.data.data._id)
      // localStorage.setItem("role",res.data.data.role_id.name)
      // Navigate("/")
      Navigate("/")

   

   }
   else{
    toast.error('Email or Password is incorrect!', {
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
        <h2 className="auth-title">Welcome Back</h2>
        
        <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
          <div className="input-group">
            <Mail className="input-icon" />
            <input 
              type="email" 
              placeholder="Email Address"
              className="auth-input"
              {...register("email")}
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" />
            <input 
              type="password" 
              placeholder="Password"
              className="auth-input"
              {...register("password")}
            />
          </div>

          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>

        <p className="auth-link">
          Don't have an account? <a href="/signup" className="link">Sign up</a>
        </p>
        
        <p className="auth-link">
          <a href="/forgot-password" className="link">Forgot Password?</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default LoginPage;