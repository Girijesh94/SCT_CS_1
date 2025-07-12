import { useNavigate } from 'react-router-dom';
import '../styles/intro.css'; // Make sure this CSS file contains your provided styles

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white px-4 space-y-10">
      
      {/* 3D Card */}
      <div className="container noselect">
        <div className="canvas">
          {/* 25 Grid Trackers */}
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`}></div>
          ))}

          <div id="card">
            <div className="card-content">
              {/* 🔼 Moved to top: original #prompt styling remains untouched */}
              <p id="prompt">CEASER CIPHER</p>

              <div className="card-glare"></div>

              <div className="cyber-lines">
                <span></span><span></span><span></span><span></span>
              </div>

              <div className="title">WELCOME</div>

              {/* Caesar Cipher description */}
              <div className="px-6 mt-32 text-sm leading-relaxed text-white/80 text-center">
                <h2 className="text-lg font-semibold text-white mb-2">🔐 What is Caesar Cipher?</h2>
                <p>
                  The Caesar Cipher is one of the simplest and most widely known encryption techniques.
                  It works by shifting the letters of a message by a fixed number of positions in the alphabet.
                  It's an ancient method, yet it's the foundation of modern cryptography!
                </p>
              </div>

              <div className="glowing-elements">
                <div className="glow-1"></div>
                <div className="glow-2"></div>
                <div className="glow-3"></div>
              </div>

              <div className="subtitle">
                <span className="highlight">3D EFFECT</span>
              </div>

              <div className="card-particles">
                {Array.from({ length: 6 }, (_, i) => <span key={i}></span>)}
              </div>

              <div className="corner-elements">
                <span></span><span></span><span></span><span></span>
              </div>

              <div className="scan-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Button (you'll style it later) */}
      <button
        onClick={() => navigate('/cipher')}
        className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300"
      >
        Get Started 🚀
      </button>
    </div>
  );
}
