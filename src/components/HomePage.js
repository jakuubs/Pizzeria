import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";

const HomePage = ({ location }) => {
  const [isOrdered, setIsOrdered] = useState(() => {
    if (location.state === undefined || location.state === null) return false;
    else return true;
  });

  useEffect(() => {
    if (isOrdered) {
      const timer = setTimeout(() => {
        setIsOrdered(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOrdered]);

  return (
    <div>
      {isOrdered && <PopUp message={location.state} />}
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;
