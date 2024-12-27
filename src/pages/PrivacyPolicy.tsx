import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Effective Date: 12/26/2024</p>
        
        <p className="mb-6">
          I Make MVPs.com ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with us, or use our services. By accessing or using I Make MVPs.com, you agree to the practices outlined in this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>We may collect the following types of information:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Personal Information</h3>
        <p>Personal information you provide when interacting with our website or services, including but not limited to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and shipping addresses</li>
          <li>Payment information</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Non-Personal Information</h3>
        <p>Non-identifiable information, such as:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Browser type</li>
          <li>IP address</li>
          <li>Operating system</li>
          <li>Device information</li>
          <li>Usage data (e.g., pages visited, time spent on the site)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Cookies and Tracking Technologies</h3>
        <p>We use cookies, web beacons, and similar tracking technologies to enhance user experience and analyze website usage. You can manage or disable cookies through your browser settings.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and improve our services</li>
          <li>Respond to inquiries and communicate with users</li>
          <li>Process transactions and payments</li>
          <li>Personalize your experience</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraudulent activity</li>
        </ul>

        {/* ... Continue with the rest of the privacy policy sections ... */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <ul className="list-none mb-8">
          <li><strong>Email:</strong> Sam@imakemvps.com</li>
          <li><strong>Phone:</strong> 619-277-8782</li>
          <li><strong>Address:</strong> San Diego, California</li>
        </ul>

        <p className="mt-8 text-sm text-gray-600">
          By using I Make MVPs.com, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;