import { useState } from 'react';

const Form = (props)=>{
  const [name, setName]= useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();


    const newContact ={
      name:name,
      email:email,
      phone:phone,

    }
console.log(newContact);
  
props.setUserData(prevState=>[newContact,...prevState]);
  }
return(
<div>
 <h2>Add Contact Information</h2>

    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
      type='text'
      name='name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <hr />

      <label html For='email'>Email</label>
      <input
      type='text'
      email='email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <hr />

    <label htmlFor='phone'>Phone</label>
    <input
    type='text'
    phone='phone'
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
    />

    <input type='submit'/>

  </form>
</div>
);
};

export default Form;