import React from 'react';
import './PricingToggle.css';
import imgLine from '../../assets/images/Line.svg';

export default function PricingToggle({ billingCycle, onChange }) {
  return (
    <div className="pricing-toggle-wrapper">
      <div className="pricing-toggle-switch" data-node-id="50:145">
        <button
          type="button"
          className={`pricing-toggle-item ${billingCycle === 'monthly' ? 'active' : ''}`}
          onClick={() => onChange('monthly')}
          data-node-id="50:146"
        >
          Monthly
        </button>
        <button
          type="button"
          className={`pricing-toggle-item ${billingCycle === 'yearly' ? 'active' : ''}`}
          onClick={() => onChange('yearly')}
          data-node-id="50:148"
        >
          Yearly
        </button>
      </div>
      <div className="pricing-toggle-discount" data-node-id="50:150">
        <div className="pricing-toggle-arrow-container" data-node-id="50:151">
          <img src={imgLine} alt="" className="pricing-toggle-arrow" />
        </div>
        <span className="pricing-toggle-discount-text" data-node-id="50:152">
          Save 20%
        </span>
      </div>
    </div>
  );
}
