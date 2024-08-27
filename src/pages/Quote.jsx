import React, { useState } from 'react';
import axios from 'axios';
const QuotePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quote = {
      name,
      email,
      phone,
      address,
      service,
      message,
    };
    try {
      const response = await axios.post('/api/quotes', quote);
      console.log(response.data);
      alert('Quote submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting quote. Please try again.');
    }
  };

  return (
    <div>
      <h1>Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select a service</option>
            <option value="powerwashing">Powerwashing</option>
            <option value="deck-cleaning">Deck Cleaning</option>
            <option value="fence-cleaning">Fence Cleaning</option>
          </select>
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Quote</button>
      </form>
    </div>
  );
};

export default QuotePage;
