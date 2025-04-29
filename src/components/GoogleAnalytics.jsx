import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script');
    const googleAnalyticsId = 'G-XSD0J0VE4D';
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}');
    `;
    document.head.appendChild(script2);

    // Consent Manager
    // const script3 = document.createElement('script');
    // const id = '3669333412165';
    // script3.type = 'text/javascript';
    // script3.setAttribute('data-cmp-ab', '1');
    // script3.src = `https://cdn.consentmanager.net/delivery/autoblocking/${id}.js`;
    // script3.setAttribute('data-cmp-host', 'a.delivery.consentmanager.net');
    // script3.setAttribute('data-cmp-cdn', 'cdn.consentmanager.net');
    // script3.setAttribute('data-cmp-codesrc', '0');
    // document.head.appendChild(script3);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      // document.head.removeChild(script3);
    };
  }, []);

  // Component doesn't render anything visible
  return null;
} 