import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()

  const [confirmpass, setConfirmpass] = useState("");

const [userdetail,setUserdetail] = useState({
    username:'',
    email:'',
    contact:'',
    password:''


})

  const onhadlesubmit = async()=>{

try {
    const  response = await axios.post('http://localhost:5000/user/register',userdetail)
    console.log(response);

    const userres = response.data.status;
    const message = response.data.message;
console.log(userres);

    if(userres==200){
      alert("succesfully registered")
      navigate("/login")
    }

    if(userres==409 || userres===500 || userres===401){
      alert(message)
    }
   
    
    
} catch (error) {
    console.log(error);
    
}

console.log(userdetail);


  }

  return (
    <div>
      <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
        <div className="text-center mb-12 sm:mb-16">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-44 inline-block"
            />
          </a>
          <h4 className="text-slate-600 text-base mt-6">
            Sign up into your account
          </h4>
        </div>
        <form>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                First Name
              </label>
              <input
                name="name"
                type="text"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter name"
                onChange={(e)=> setUserdetail((prev)=>({...prev, username:e.target.value}))}
              />
            </div>
            {/* <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Last Name
              </label>
              <input
                name="lname"
                type="text"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter last name"
                onChange={(e)=> setUserdetail((prev)=>({...prev, username:e.target.value}))}
              />
            </div> */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
                onChange={(e)=> setUserdetail((prev)=>({...prev, email:e.target.value}))}
              />
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Mobile No.
              </label>
              <input
                name="number"
                type="number"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter mobile number"
                onChange={(e)=> setUserdetail((prev)=>({...prev, contact:e.target.value}))}
              />
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
                onChange={(e)=> setUserdetail((prev)=>({...prev, password:e.target.value}))}
              />
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
                onChange={(e)=> setConfirmpass(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-12">
            <button
              type="button"
              className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onClick={onhadlesubmit}
            >
              Sign up
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
