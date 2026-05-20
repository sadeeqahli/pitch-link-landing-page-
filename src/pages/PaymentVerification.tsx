import { useEffect } from "react";

export default function PaymentVerification() {
  useEffect(() => {
    // Extract parameters from URL
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("transactionReference");
    const status = params.get("status");

    // Redirect to the mobile app if reference exists
    if (reference) {
      const encodedReference = encodeURIComponent(reference);
      const encodedStatus = status ? encodeURIComponent(status) : "";
      
      // Standard deep link
      const deepLink = `pitchlink://payment-verification?reference=${encodedReference}&status=${encodedStatus}`;
      
      // Attempt redirect
      window.location.href = deepLink;

      // Fallback: If still on page after 1.5 seconds, try again or show manual button
      const timer = setTimeout(() => {
        window.location.assign(deepLink);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'sans-serif',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <p>Redirecting back to PitchLink...</p>
    </div>
  );
}
