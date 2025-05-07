import React, { useState } from 'react';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 rounded-lg text-white">
      <h1 className="text-2xl text-white font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border p-2 hover:outline-[#dcf245]" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border p-2 hover:outline-[#dcf245]" required />
        <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full border p-2 hover:outline-[#dcf245]" required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full border p-2 h-32 hover:outline-[#dcf245]" required />
        <button type="submit" className="text-black py-2 px-4 rounded bg-[#dcf245] hover:bg-white">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
