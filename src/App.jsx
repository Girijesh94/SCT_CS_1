import { useState } from 'react';
import './styles/form.css'; // your custom CSS file

export default function App() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState('');
  const [mode, setMode] = useState('encrypt');
  const [result, setResult] = useState('');

  const caesarCipher = (text, shiftVal, mode) => {
    return text.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        const base = char === char.toUpperCase() ? 65 : 97;
        const offset = mode === 'encrypt' ? shiftVal : -shiftVal;
        return String.fromCharCode(((char.charCodeAt(0) - base + offset + 26) % 26) + base);
      }
      return char;
    }).join('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shiftNum = parseInt(shift);
    if (isNaN(shiftNum)) {
      alert('Please enter a valid shift number!');
      return;
    }
    const output = caesarCipher(text, shiftNum, mode);
    setResult(output);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white px-4">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="shift">Shift Value</label>
            <input
              type="number"
              id="shift"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Enter your message</label>
            <textarea
              id="textarea"
              rows="6"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-4 mt-2">
            <button className="form-submit-btn" type="submit">Convert</button>

            <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
              <input
                type="checkbox"
                id="filter"
                checked={mode === 'decrypt'}
                onChange={() => setMode(mode === 'encrypt' ? 'decrypt' : 'encrypt')}
              />
              <span>Encrypt</span>
              <span>Decrypt</span>
            </label>
          </div>
        </form>

        {result && (
  <div className="result-box mt-6">
    <h2 className="result-heading">Result 🔎</h2>
    <div className="result-content">
      {result}
    </div>
  </div>
)}

      </div>
    </div>
  );
}
