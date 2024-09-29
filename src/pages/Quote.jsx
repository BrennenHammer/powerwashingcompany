import React, { useState } from 'react';

const QuotePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="quoteDiv">
      <h1>Get a Quote</h1>
      <form action="https://formspree.io/f/mwkddaql" method="post" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="fullname" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Service:
          <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select a service</option>
            <option value="powerwashing">Powerwashing</option>
            <option value="deck-cleaning">Deck Cleaning</option>
            <option value="fence-cleaning">Fence Cleaning</option>
            <option value="other-operations">Other operations</option>
          </select>
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit Quote</button>
      </form>
    </div>
  );
};

export default QuotePage;