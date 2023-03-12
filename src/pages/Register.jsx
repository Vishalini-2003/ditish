import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'>Ditish</span>
        <span className='title'>Register</span>
    <form>
        <input type="text" placeholder='display name'/>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <input type="file" id='file' />
        <label htmlFor='file'></label>
        <button>Sign up</button>
    </form>
    <p> 
        You do have an account ?
    </p>
    </div>
    </div>
  )
}

export default Register