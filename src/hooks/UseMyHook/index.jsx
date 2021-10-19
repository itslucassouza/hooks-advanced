import { useEffect, useRef, useState } from "react";

const UseMyHook = (cb, delay = 1000) => {
  const saveCb = useRef();

  useEffect(() => {
    cb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCb.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

//example

const App = () => {
  const [state, setState] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  UseMyHook(() => setState((c) => c + 1));

  return (
    <div>
      <h1>contador {state}</h1>
      <h1>Delay {delay}</h1>
      <button onClick={() => setDelay((d) => d + incrementor)}>
        + {incrementor}
      </button>
      <button onClick={() => setDelay((d) => d - incrementor)}>
        + {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
};
