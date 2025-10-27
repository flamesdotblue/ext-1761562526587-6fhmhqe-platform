import React from 'react';
import { Download, Copy, Gauge, Image as ImageIcon, Play } from 'lucide-react';

export default function ResultPanel({ data, loading }) {
  const scoreColor = (s) => {
    if (s >= 80) return 'text-emerald-300';
    if (s >= 60) return 'text-amber-300';
    return 'text-rose-300';
  };

  const barColor = (s) => {
    if (s >= 80) return 'bg-emerald-400';
    if (s >= 60) return 'bg-amber-400';
    return 'bg-rose-400';
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard');
    } catch {
      alert('Copy failed');
    }
  };

  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-white/80 mb-4">
          <Gauge size={18} className="text-cyan-300" />
          <h2 className="text-lg font-semibold">Your Short</h2>
        </div>
        {!data && !loading && (
          <p className="text-white/60 text-sm">Generate a clip to see preview, SEO, thumbnail, and Viral Potential Score.</p>
        )}
        {(data || loading) && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/60 via-neutral-900/30 to-neutral-900" />
                <div className="absolute inset-0 flex items-center justify-center text-white/70">
                  {loading ? (
                    <div className="animate-pulse text-sm">Rendering preview…</div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Play size={28} className="opacity-80" />
                      <span className="text-xs opacity-70">{data?.duration || '—'}</span>
                    </div>
                  )}
                </div>
                {!loading && (
                  <div className="absolute bottom-0 w-full p-3">
                    <div className="text-[11px] leading-tight font-bold tracking-wide bg-black/50 rounded px-2 py-1">
                      OMG NO WAY 😱 THAT JUST HAPPENED!
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  disabled={!data || loading}
                  onClick={() => alert('Export started: HD 1080x1920 MP4 with captions and music')}
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 transition text-neutral-950 font-semibold px-4 py-2"
                >
                  <Download size={16} />
                  Download MP4
                </button>
                <button
                  disabled={!data || loading}
                  onClick={() => handleCopy(`${data?.title}\n\n${data?.description}`)}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 hover:border-white/25 disabled:opacity-60 transition text-white px-4 py-2"
                >
                  <Copy size={16} />
                  Copy SEO
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/30">
                <h3 className="font-semibold mb-2">AI Title & Description</h3>
                <div className="space-y-2">
                  <p className="text-white/90 text-sm">{loading ? 'Generating…' : data?.title || '—'}</p>
                  <pre className="whitespace-pre-wrap text-white/70 text-xs">{loading ? 'Optimizing keywords…' : data?.description || ''}</pre>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/30">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Thumbnail</h3>
                  <div className="inline-flex items-center gap-2 text-xs text-white/60">
                    <ImageIcon size={14} /> Auto-picked best frame
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-40 aspect-video rounded-md overflow-hidden border border-white/10 bg-gradient-to-br from-sky-600 to-fuchsia-600">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full p-2">
                        <div className="text-[10px] font-extrabold uppercase leading-tight bg-black/40 rounded px-1.5 py-1">
                          {loading ? 'Selecting frame…' : (data?.thumbnailText || 'Your Viral Frame')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/70">We choose a high-CTR frame, add bold text, and optimize for Shorts feed visibility.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/30">
                <div className="flex items-center gap-2 mb-3">
                  <Gauge size={18} className="text-cyan-300" />
                  <h3 className="font-semibold">Viral Potential</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`text-2xl font-extrabold ${scoreColor(data?.score || 0)}`}>{loading ? '—' : data?.score}</div>
                  <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full ${barColor(data?.score || 0)}`} style={{ width: `${Math.min(100, data?.score || 0)}%` }} />
                  </div>
                </div>
                <p className="mt-2 text-xs text-white/60">Based on watch-time potential, emotional spikes, cut density, and visual energy.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
