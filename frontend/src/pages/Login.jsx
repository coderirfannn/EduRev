import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('edurev_token', res.data.token);
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login error');
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={submit} className="flex flex-col gap-3 mt-4">
        <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/>
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})}/>
        <button className="bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
