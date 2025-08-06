import { useState, useEffect } from "react";

function CurrentDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const optionsDate = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const formattedDate = currentTime.toLocaleDateString(undefined, optionsDate);
  const formattedTime = currentTime.toLocaleTimeString(undefined, optionsTime);

  return (
    <div className="datetime">
      <h3>{formattedDate}</h3>
      <h2>{formattedTime}</h2>
    </div>
  );
}

export default CurrentDateTime;
