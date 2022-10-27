import React from 'react';
import { useState, useEffect } from 'react';

const useTimer = (props: any) => {
  const { initialMinute = 0, initialSeconds = 0, method } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [restart, setRestart] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (restart) {
      setSeconds(initialSeconds);
      setMinutes(initialMinute);
      setRestart(false);
      setFinish(false);
      return;
    }
    let myInterval;
    if ((seconds > 0 || minutes > 0) && !finish) {
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        console.log(seconds);
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!finish) {
      method();
      setFinish(true);
    }
    return () => {
      clearInterval(myInterval);
    };
  });

  return [setRestart];
};

export default useTimer;
