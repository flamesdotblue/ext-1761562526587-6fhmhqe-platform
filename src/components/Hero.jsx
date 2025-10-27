import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onCTAClickScrollTo }) {
  const handleScroll = () => {
    const el = document.getElementById(onCTAClickScrollTo || 'builder');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/80 mb-4">
              <Sparkles size={14} className="text-sky-300" />
              Auto-enhanced with 3D Spline animation
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              ViralShorts<span className="text-sky-400">.AI</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Paste any video link. Our AI finds the most electric moments, cuts to 9:16, adds subtitles, emojis, trending beats, and exports a ready-to-upload Short.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={handleScroll} className="inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 transition text-neutral-950 font-semibold px-5 py-3">
                <Rocket size={18} />
                Create a Short
              </button>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/15 hover:border-white/25 transition text-white px-5 py-3">
                Learn more
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
              <li className="">• Highlight detection by emotional intensity</li>
              <li className="">• Auto-subtitles with emoji tone-match</li>
              <li className="">• Trending music or phonk beats</li>
              <li className="">• AI voice personas & avatar reactions</li>
            </ul>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/30">
              <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
