import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LangSwitcher() {
    const navigate = useNavigate();
    const [isRTL, setIsRTL] = useState(false);
  
    const handleLangChange = () => {
      setIsRTL(prevIsRTL => !prevIsRTL);
  
      const langPrefix = isRTL ? 'en' : 'ar';
      const url = window.location.pathname;
      const newUrl = `/${langPrefix}${url}`;
  
      navigate(newUrl, { replace: true });
    };
  
    return (
      <button 
        // onClick={handleLangChange}
      >
        {isRTL ? 'Switch to English' : 'Switch to Arabic'}
      </button>
    );
  }
  