import { useEffect, useState } from 'react';

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const postTime = new Date(timestamp);
      const timeDifference = currentTime - postTime;
      
      const minutes = Math.floor(timeDifference / 60000);
      
      if (minutes < 1) {
        setTimeAgo('now');
      } else if (minutes < 60) {
        setTimeAgo(`${minutes} min ago`);
      } else if (minutes < 1440) {
        const hours = Math.floor(minutes / 60);
        setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`);
      } else {
        const days = Math.floor(minutes / 1440);
        setTimeAgo(`${days} day${days > 1 ? 's' : ''} ago`);
      }
    };

    calculateTimeAgo();

    const interval = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
