import React from 'react'
import { Lock } from "lucide-react";
import './Signup.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
export const ResetPassword = () => {
  const token = useParams().token

  const {register , handleSubmit} = useForm()

  const submitHandler = async (data) => {

    console.log(data)
    const obj = {
      token:token,
      password:data.password
  }
  
  const res = await axios.post("/resetpassword",obj)
        console.log(res.data)

  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>
        
        <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
          

          <div className="input-group">
            <Lock className="input-icon" />
            <input 
              type="password" 
              placeholder="Enter New Password"
              className="auth-input"
              {...register("password")}
            />
          </div>

          <button type="submit" className="auth-button">
            Change
          </button>
        </form>

        
        
       
      </div>
    </div>
  )
}
