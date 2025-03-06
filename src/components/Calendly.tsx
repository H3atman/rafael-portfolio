'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

interface CalendlyProps {
  url?: string;
  styles?: React.CSSProperties;
}

const Calendly: React.FC<CalendlyProps> = ({
  url = "https://calendly.com/rafael-rvcodes/30min?hide_gdpr_banner=1",
  styles = {
    minWidth: "500px",
    height: "700px",
  },
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const calendlyUrl = new URL(url);
  calendlyUrl.searchParams.set('background_color', theme === 'dark' ? '1a1a1a' : 'ffffff');
  calendlyUrl.searchParams.set('text_color', theme === 'dark' ? 'ffffff' : '000000');
  calendlyUrl.searchParams.set('primary_color', '3b82f6'); // You can customize this color to match your theme

  return (
    <div 
      className="calendly-inline-widget rounded-lg shadow-lg" 
      data-url={calendlyUrl.toString()}
      style={styles}
    />
  );
};

export default Calendly; 