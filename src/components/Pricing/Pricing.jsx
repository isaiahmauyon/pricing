import React, { useState } from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';
import PricingToggle from '../PricingToggle/PricingToggle';
import PricingCard from '../PricingCard/PricingCard';
import PricingFooter from '../PricingFooter/PricingFooter';
import './Pricing.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const plans = [
    {
      title: 'Essential plan',
      description: 'Perfect for small teams handling payments and transfers daily.',
      yearlyPrice: 249,
      monthlyPrice: 299,
      isFeatured: true,
      badgeText: 'Billed annually — save 15%',
      themeColor: 'blue',
      isPrimaryButton: true,
      nodeIdCard: '50:38',
      nodeIdButton: '50:48',
      features: [
        'Up to 10 team seats',
        'Role-based permissions',
        'Tracking dashboard',
        'Payment scheduling',
        'Priority email support',
        'Monthly finance reports',
      ],
    },
    {
      title: 'Advanced',
      description: 'For small teams and startups sending, receiving and managing global payments.',
      yearlyPrice: 449,
      monthlyPrice: 549,
      isFeatured: false,
      badgeText: 'Billed annually — save 25%',
      themeColor: 'green',
      isPrimaryButton: false,
      nodeIdCard: '50:75',
      nodeIdButton: '50:85',
      features: [
        'Up to 10 team seats',
        'Role-based permissions',
        'Tracking dashboard',
        'Payment scheduling',
        'Priority email support',
        'Monthly finance reports',
      ],
    },
    {
      title: 'Global plan',
      description: 'Built for scaling companies with finance teams and compliance needs.',
      yearlyPrice: 549,
      monthlyPrice: 689,
      isFeatured: false,
      badgeText: 'Billed annually — save 45%',
      themeColor: 'purple',
      isPrimaryButton: false,
      nodeIdCard: '50:112',
      nodeIdButton: '50:122',
      features: [
        'Up to 10 team seats',
        'Role-based permissions',
        'Tracking dashboard',
        'Payment scheduling',
        'Priority email support',
        'Monthly finance reports',
      ],
    },
  ];

  return (
    <div className="pricing-page-container" data-node-id="50:23">
      {/* Hero background grid pattern */}
      <div className="pricing-hero-bg" data-node-id="50:24"></div>

      <div className="pricing-content-inner">
        {/* Header Section */}
        <PricingHeader />

        {/* Toggle Section */}
        <PricingToggle billingCycle={billingCycle} onChange={setBillingCycle} />

        {/* Cards Grid Container */}
        <div className="pricing-cards-grid" data-node-id="50:33">
          {plans.map((plan, index) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <PricingCard
                key={index}
                title={plan.title}
                description={plan.description}
                price={price}
                billingCycle={billingCycle}
                isFeatured={plan.isFeatured}
                badgeText={billingCycle === 'yearly' ? plan.badgeText : 'Billed monthly'}
                themeColor={plan.themeColor}
                isPrimaryButton={plan.isPrimaryButton}
                features={plan.features}
                nodeIdCard={plan.nodeIdCard}
                nodeIdButton={plan.nodeIdButton}
              />
            );
          })}
        </div>

        {/* Footer Section */}
        <PricingFooter />
      </div>
    </div>
  );
}
