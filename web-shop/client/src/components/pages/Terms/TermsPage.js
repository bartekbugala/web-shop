import React from 'react';
import Logo from '../../layout/Logo/Logo';
import './TermsPage.scss';

const TermsPage = () => (
  <div className="terms-wrapper">
    <Logo />
    <h2>Terms and Conditions</h2>
    <ol>
      <li>
        RULE: You do not talk about
        <span style={{ textDecoration: 'line-through' }}>FIGHT CLUB</span>Duck
        I.T.
      </li>
      <li>
        RULE: You DO NOT talk about
        <span style={{ textDecoration: 'line-through' }}>FIGHT CLUB</span>Duck
        I.T.
      </li>
      <li>
        RULE: If someone clicks checkout or goes limp, taps out the order is
        over.
      </li>
      <li>RULE: Only one client one web shop during transaction.</li>
      <li>RULE: One order at a time.</li>
      <li>RULE: No credit cards, no paypal.</li>
      <li>RULE: Orders will proceed as they have to.</li>
      <li>
        RULE: If this is your first order at{' '}
        <span style={{ textDecoration: 'line-through' }}>FIGHT CLUB</span>Duck
        I.T. you HAVE to order.
      </li>
    </ol>
  </div>
);

export default TermsPage;
