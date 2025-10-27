import React, { useState } from 'react';
import Hero from './components/Hero';
import URLProcessor from './components/URLProcessor';
import Features from './components/Features';
import ResultPanel from './components/ResultPanel';

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (jobConfig) => {
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      const now = new Date().toISOString();
      const mockScore = Math.min(99, Math.max(42, Math.round(Math.random() * 100)));
      const baseTitle = `Unbelievable moment from ${jobConfig.platform || 'the stream'}`;
      const title = `${baseTitle} | ${jobConfig.personas?.length ? jobConfig.personas[0] : 'AI'} reacts`;
      const description = `Watch the craziest highlight auto-cut to 9:16 with captions, emojis, and ${jobConfig.music || 'trending beat'}.\n\nHashtags: #shorts #viral #${(jobConfig.platform || 'video').toLowerCase()} #ai\nCreated with ViralShorts.AI on ${now}`;
      const thumbnailText = title.length > 44 ? title.slice(0, 41) + '...' : title;

      setResult({
        id: now,
        status: 'ready',
        title,
        description,
        thumbnailText,
        score: mockScore,
        options: jobConfig,
        previewUrl: '',
        duration: `${Math.floor(10 + Math.random() * 40)}s`,
      });
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,#0ea5e9_0%,transparent_60%),radial-gradient(800px_400px_at_10%_-10%,#a78bfa_0%,transparent_50%)] bg-neutral-950 text-white">
      <Hero onCTAClickScrollTo="builder" />
      <main id="builder" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <URLProcessor onGenerate={handleGenerate} loading={loading} />
        <Features />
        <ResultPanel data={result} loading={loading} />
      </main>
      <footer className="mt-20 py-10 border-t border-white/10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} ViralShorts.AI — Make every moment go viral.</p>
      </footer>
    </div>
  );
}
