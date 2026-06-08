import React from 'react';
import './PricingFooter.css';

export default function PricingFooter() {
  return (
    <footer className="pricing-footer" data-node-id="50:25">
      <p className="pricing-footer-text">
        All plans include a 14-day free trial. No credit card required.{' '}
        <span className="pricing-footer-question">Questions?</span>{' '}
        <a href="#faq" className="pricing-footer-link">
          See our FAQ →
        </a>
      </p>
    </footer>
  );
}
