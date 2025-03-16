import { useEffect, useState } from "react";

const useFirefox = () => {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    setIsFirefox(window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1);
  }, []);

  return isFirefox;
};

export default useFirefox;
