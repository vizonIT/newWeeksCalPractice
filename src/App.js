import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handleIncreaseStep() {
    setStep((initStep) => initStep + 1);
  }
  const handleReduceStep = () => {
    step > 1 && setStep((initStep) => initStep - 1);
  };

  function handleIncreaseCount() {
    setCount((initCount) => initCount + step);
  }
  const handleReduceCount = () => {
    setCount((initCount) => initCount - step);
  };
  // const updatedCount = count + step;
  const date = new Date();
  date.setDate(date.getDate() + count);
  // console.log(date);
  return (
    <div className="App">
      <div className="stepContainer">
        <button onClick={handleReduceStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div className="countContainer">
        <button onClick={handleReduceCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day(s) from today will be `
            : `${Math.abs(count)} day(s) ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default App;
