import React, { useState } from 'react';
import { supabase } from "../../../supabase.js";

function CreateUser() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'staff', // default role
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
        },
      },
    });

    if (authError) throw authError;

    const { data: roleData, error: roleError } = await supabase
      .from('profiles')
      .insert([
        {
          user_id: authData.user.id,
          email: formData.email,
          full_name: formData.fullName,
          role: formData.role,
        },
      ]);

    if (roleError) throw roleError;

    alert('User created successfully! Check their email for verification link.');

    // **Reset the form**
    setFormData({
      fullName: '',
      email: '',
      password: '',
      role: 'staff', // reset to default role
    });

  } catch (error) {
    console.error(error);
    alert(error.message || 'Something went wrong.');
  }
}

  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col pb-20'>
        <input
          type="text"
          placeholder='Full Name'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
