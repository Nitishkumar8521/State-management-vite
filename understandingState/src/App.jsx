import React from 'react'
// Your task is to explain why the console.log shows the older value of count
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App

import React from 'react'

// Your task is to explain why count value is not updated to 3 as expected
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
