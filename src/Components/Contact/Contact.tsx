import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


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
    <div className='flex ml-11 mt-7'>
      <img src="contact.png"/>
          <div className="max-w-2xl mx-auto mt-20 p-6 rounded-lg text-white bg-white/5">
      <h1 className="text-2xl text-white font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border border-300 border-black p-2 " required />

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border border-300 border-black p-2" required />

        <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full border border-300 border-black p-2" required />

        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full border border-300 border-black p-2 h-32 " required />

        <button type="submit" className="text-black py-2 px-4 rounded bg-[#dcf245] hover:bg-white hover:text-black"> Message  <FontAwesomeIcon icon={faPaperPlane} /></button>
      </form>
    </div>
    </div>

  );
};

export default Contact;
