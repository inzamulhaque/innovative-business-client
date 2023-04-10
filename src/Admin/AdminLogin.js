import React from 'react'

const AdminLogin = () => {
  const handleSubmit =(event)=>{
   event.preventDefault()
   const username = event.target.username.value
   const password = event.target.password.value
   console.log({
    "username" :username,
    "password": password
   });
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" id="" placeholder='username' />
        <input type="password" name="password" id="" placeholder='passsword here' />
        <button>click</button>
      </form>
    </div>
  )
}

export default AdminLogin