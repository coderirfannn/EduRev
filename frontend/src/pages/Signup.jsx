import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', form);
      alert('Signup successful. Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup error');
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Signup</h2>
      <form onSubmit={submit} className="flex flex-col gap-3 mt-4">
        <input placeholder="Name" required value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
        <input placeholder="Email" type="email" required value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/>
        <input placeholder="Password" type="password" required value={form.password} onChange={e=>setForm({...form, password: e.target.value})}/>
        <button className="bg-blue-600 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
