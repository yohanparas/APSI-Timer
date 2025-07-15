import React, { useState, useRef } from 'react';

function ControlledVsUncontrolled() {
  const [text, setText] = useState('');
  const inputRef = useRef();

  function handleClick() {
    alert(`Input value: ${inputRef.current.value}`);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Controlled vs Uncontrolled Inputs in React</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Controlled Input</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>

      <div>
        <h3>Uncontrolled Input</h3>
        <input type="text" ref={inputRef} placeholder="Type something..." />
        <button onClick={handleClick} style={{ marginLeft: '10px' }}>
          Show Value
        </button>
      </div>
    </div>
  );
}

export default ControlledVsUncontrolled;