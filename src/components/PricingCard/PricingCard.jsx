import React from 'react';
import './PricingCard.css';
import dividerIcon from '../../assets/divider.svg';
import divider1Icon from '../../assets/divider-1.svg';

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z"
      />
    </svg>
  );
}

export default function PricingCard({
  title,
  description,
  price,
  billingCycle,
  buttonText = 'Start free trial',
  features = [],
  isFeatured = false,
  badgeText = '',
  themeColor = 'blue',
  isPrimaryButton = false,
  nodeIdCard = '',
  nodeIdButton = '',
}) {
  const dividerSrc = isFeatured ? dividerIcon : divider1Icon;

  return (
    <div className={`pricing-wrapper theme-${themeColor} ${isFeatured ? 'active-default' : ''}`}>
      {badgeText ? (
        <div className="pricing-featured-badge-container" data-node-id="50:35">
          <div className="pricing-featured-badge" data-node-id="50:36">
            <span data-node-id="50:37">{badgeText}</span>
          </div>
        </div>
      ) : (
        <div className="pricing-featured-badge-container no-badge"></div>
      )}

      <div className="pricing-card" data-node-id={nodeIdCard}>
        <div className="pricing-card-content" data-node-id="50:39">
          {/* Title and Description */}
          <div className="pricing-card-header" data-node-id="50:40">
            <h3 className="pricing-card-title" data-node-id="50:41">{title}</h3>
            <p className="pricing-card-description" data-node-id="50:42">{description}</p>
          </div>

          {/* Pricing Info */}
          <div className="pricing-card-price-container" data-node-id="50:43">
            <span className="pricing-card-price-amount" data-node-id="50:44">${price}</span>
            <div className="pricing-card-price-details" data-node-id="50:45">
              <span className="pricing-card-price-period" data-node-id="50:46">monthly</span>
              <span className="pricing-card-price-billing" data-node-id="50:47">
                {billingCycle === 'yearly' ? 'billed annually' : 'billed monthly'}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            className={`pricing-card-button ${isPrimaryButton ? 'primary' : 'secondary'}`}
            data-node-id={nodeIdButton}
          >
            {buttonText}
          </button>
        </div>

        {/* Divider */}
        <div className="pricing-card-divider-wrapper">
          <img src={dividerSrc} alt="" className="pricing-card-divider" />
        </div>

        {/* Features List */}
        <ul className="pricing-card-features" data-node-id="50:51">
          {features.map((feature, idx) => (
            <li key={idx} className="pricing-card-feature-item">
              <CheckIcon className="pricing-card-check-icon" />
              <span className="pricing-card-feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
