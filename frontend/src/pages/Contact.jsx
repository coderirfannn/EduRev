import React, { useState } from 'react';
import api from '../utils/api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact', form);
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Error sending message');
    }
  };
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Contact EduRev</h2>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-3">
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
        <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required />
        <button className="bg-blue-600 text-white py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
