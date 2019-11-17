import React from 'react';
import './ContactPage.scss';
import { MdPhone } from 'react-icons/md';

const ContactPage = () => (
  <div className="contact-wrapper">
    <h1>Contact</h1>
    <ul>
      <li>DUCK IT - Online Shop Ltd.</li>
      <li>22 321 Texas</li>
      <li>Mc'Kinney, Tx 30083</li>
      <li>
        <MdPhone />
        777-777-777
      </li>
    </ul>
  </div>
);

export default ContactPage;
