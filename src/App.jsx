import { useState } from 'react';
import { motion } from 'framer-motion'; // make sure you have this

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
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4"
    >
      <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-white/20 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-6 drop-shadow-md">🔐 Caesar Cipher Tool</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            rows="3"
            placeholder="Enter your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <input
            type="number"
            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Shift value"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            required
          />
          <select
            className="w-full bg-white/10 text-white border border-white/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="encrypt">🔒 Encrypt</option>
            <option value="decrypt">🔓 Decrypt</option>
          </select>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
          >
            Convert 🔄
          </button>
        </form>
        {result && (
          <div className="mt-6">
            <h2 className="font-semibold text-white/90 mb-1">Result:</h2>
            <div className="bg-white/10 text-white p-3 rounded-lg border border-white/20 break-words">
              {result}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
