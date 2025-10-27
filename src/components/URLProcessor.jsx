import React, { useMemo, useState } from 'react';
import { Scissors, Music, Settings, User, Youtube, Wand2 } from 'lucide-react';

const personalityOptions = [
  'Stewie Griffin',
  'iShowSpeed',
  'Cristiano Ronaldo',
  'MrBeast',
  'Joe Rogan',
  'Narrator (Morgan Freeman style)'
];

const musicOptions = ['Auto (Trending)', 'Phonk - Drift', 'Trap - 140bpm', 'Lofi - Chill Hop', 'Drill - UK'];

function detectPlatform(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace('www.', '');
    if (host.includes('youtube.com') || host.includes('youtu.be')) return 'YouTube';
    if (host.includes('tiktok.com')) return 'TikTok';
    if (host.includes('twitch.tv')) return 'Twitch';
    if (host.includes('twitter.com') || host.includes('x.com')) return 'X/Twitter';
    if (host.includes('instagram.com')) return 'Instagram';
    return 'Video';
  } catch {
    return '';
  }
}

export default function URLProcessor({ onGenerate, loading }) {
  const [url, setUrl] = useState('');
  const [subtitles, setSubtitles] = useState(true);
  const [emojiTone, setEmojiTone] = useState(true);
  const [beat, setBeat] = useState(musicOptions[0]);
  const [personas, setPersonas] = useState([]);
  const [voiceClone, setVoiceClone] = useState(false);
  const [avatarReact, setAvatarReact] = useState(false);

  const platform = useMemo(() => detectPlatform(url), [url]);

  const togglePersona = (p) => {
    setPersonas((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onGenerate?.({
      url: url.trim(),
      platform,
      subtitles,
      emojiTone,
      music: beat,
      personas,
      voiceClone,
      avatarReact,
    });
  };

  return (
    <section className="mt-10">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-white/80 mb-4">
          <Scissors size={18} className="text-sky-300" />
          <h2 className="text-lg font-semibold">Create your viral Short</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-white/70 mb-2">Video URL</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste a YouTube, TikTok, Twitch, or any video link"
                  className="w-full rounded-lg bg-neutral-950/60 border border-white/10 focus:border-sky-400/60 outline-none px-4 py-3 text-white placeholder:text-white/40"
                  required
                />
                {platform && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-xs text-white/60">
                    <Youtube size={16} className="opacity-70" />
                    {platform}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={!url.trim() || loading}
                className="inline-flex justify-center items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:hover:bg-sky-500 transition text-neutral-950 font-semibold px-5 py-3"
              >
                <Wand2 size={18} />
                {loading ? 'Analyzing…' : 'Generate Short'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/30">
              <div className="flex items-center gap-2 text-white/80 mb-3">
                <Settings size={16} className="text-violet-300" />
                <span className="font-medium">Smart Captions</span>
              </div>
              <label className="flex items-center justify-between text-sm py-2">
                <span>Auto-subtitles</span>
                <input type="checkbox" checked={subtitles} onChange={(e) => setSubtitles(e.target.checked)} className="accent-sky-400 w-4 h-4" />
              </label>
              <label className="flex items-center justify-between text-sm py-2">
                <span>Emoji tone-match</span>
                <input type="checkbox" checked={emojiTone} onChange={(e) => setEmojiTone(e.target.checked)} className="accent-sky-400 w-4 h-4" />
              </label>
            </div>

            <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/30">
              <div className="flex items-center gap-2 text-white/80 mb-3">
                <Music size={16} className="text-emerald-300" />
                <span className="font-medium">Music</span>
              </div>
              <label className="block text-sm mb-2">Background beat</label>
              <select
                value={beat}
                onChange={(e) => setBeat(e.target.value)}
                className="w-full rounded-lg bg-neutral-950/60 border border-white/10 focus:border-emerald-400/60 outline-none px-3 py-2 text-white"
              >
                {musicOptions.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/30">
              <div className="flex items-center gap-2 text-white/80 mb-3">
                <User size={16} className="text-rose-300" />
                <span className="font-medium">AI Personalities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalityOptions.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => togglePersona(p)}
                    className={`px-3 py-1.5 text-xs rounded-full border ${personas.includes(p) ? 'border-rose-400 bg-rose-400/10 text-rose-200' : 'border-white/15 text-white/80 hover:border-white/30'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <label className="flex items-center justify-between">
                  <span>Voice cloning</span>
                  <input type="checkbox" checked={voiceClone} onChange={(e) => setVoiceClone(e.target.checked)} className="accent-rose-400 w-4 h-4" />
                </label>
                <label className="flex items-center justify-between">
                  <span>Avatar reaction overlay</span>
                  <input type="checkbox" checked={avatarReact} onChange={(e) => setAvatarReact(e.target.checked)} className="accent-rose-400 w-4 h-4" />
                </label>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/50">By generating, you confirm you have rights to use and transform the source media. No watermarks. HD 9:16 export ready for YouTube Shorts, TikTok, and Reels.</p>
        </form>
      </div>
    </section>
  );
}
