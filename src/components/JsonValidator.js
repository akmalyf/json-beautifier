// components/JsonValidator.js
import React, { useState } from 'react';

const JsonValidator = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleValidateClick = () => {
    try {
      JSON.parse(jsonInput);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <textarea value={jsonInput} onChange={handleInputChange} />
      <button onClick={handleValidateClick}>Validate JSON</button>
      {error ? <div style={{ color: 'red' }}>{error}</div> : null}
    </div>
  );
};

export default JsonValidator;