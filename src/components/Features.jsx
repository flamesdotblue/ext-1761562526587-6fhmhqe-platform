import React from 'react';
import { Scissors, Music, Sparkles, Wand2, Gauge, Image as ImageIcon } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Scissors className="text-sky-300" size={18} />,
      title: 'Smart highlight cuts',
      desc: 'Auto-detects peaks in excitement and emotion to find binge-worthy moments.'
    },
    {
      icon: <Wand2 className="text-violet-300" size={18} />,
      title: 'Viral-style captions',
      desc: 'Dynamic subtitles with emoji tone-matching, transitions, and bold fonts.'
    },
    {
      icon: <Music className="text-emerald-300" size={18} />,
      title: 'Trending beats',
      desc: 'Auto-selects trending tracks or phonk, perfectly synced to the action.'
    },
    {
      icon: <ImageIcon className="text-amber-300" size={18} />,
      title: 'AI thumbnails',
      desc: 'Grabs the best frame and overlays text for scroll-stopping CTR.'
    },
    {
      icon: <Sparkles className="text-pink-300" size={18} />,
      title: 'SEO brain',
      desc: 'Generates titles and descriptions optimized for Shorts discovery.'
    },
    {
      icon: <Gauge className="text-cyan-300" size={18} />,
      title: 'Viral Potential Score',
      desc: 'Predicts performance based on watch-time potential and visual energy.'
    },
  ];

  return (
    <section id="features" className="mt-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
            <div className="flex items-center gap-2 text-white mb-2">
              {f.icon}
              <h3 className="font-semibold">{f.title}</h3>
            </div>
            <p className="text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
