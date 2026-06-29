import { useState, useMemo } from 'react';
import type {SuffixEntry} from './types';

import SUFFIX_DATA from './data/suffixes.json';

// Extract all unique tags for the sidebar selection
const ALL_TAGS = Array.from(new Set((SUFFIX_DATA as SuffixEntry[]).flatMap(item => item.tags)));

export default function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Filter suffixes based on selected tags (Matches ALL active tags)
  const filteredSuffixes = useMemo(() => {
    if (selectedTags.length === 0) return SUFFIX_DATA;
    return SUFFIX_DATA.filter(item =>
        selectedTags.every(tag => item.tags.includes(tag))
    );
  }, [selectedTags]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
            {/* Header */}
            <header className="border-b border-slate-900 bg-slate-900/40 backdrop-blur px-6 py-3 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        suffixed<span className="text-slate-400 font-light">.dev</span>
                    </h1>

                    {/* Sleek, low-profile GitHub Link in the Navbar */}
                    <a
                        href="https://github.com/tofpu/suffixed.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                        Contribute
                    </a>
                </div>
            </header>

            {/* Main Container */}
            <div className="max-w-5xl mx-auto px-6 py-6 space-y-6">

                {/* Streamlined Filter Panel */}
                <section className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                            Filter by Behavior
                        </h2>
                        {selectedTags.length > 0 && (
                            <button
                                onClick={() => setSelectedTags([])}
                                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                Clear filters ({selectedTags.length})
                            </button>
                        )}
                    </div>

                    {/* Horizontal wrapping tag cloud */}
                    <div className="flex flex-wrap gap-1.5">
                        {ALL_TAGS.map(tag => {
                            const isSelected = selectedTags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-150 border ${
                                        isSelected
                                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 font-semibold'
                                            : 'bg-slate-950/40 border-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                                    }`}
                                >
                                    #{tag}
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Results Subheader + Open Source Invitation */}
                <div className="flex items-center justify-between border-b border-slate-900 pb-2 text-xs">
                    <div className="text-slate-400 font-medium">
                        Found <span className="text-cyan-400 font-bold font-mono text-sm">{filteredSuffixes.length}</span> archetypes
                    </div>
                    {/* Subtle, space-saving contribution hint */}
                    <div className="hidden sm:flex items-center gap-2 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Missing a suffix? Submit a PR on GitHub</span>
                    </div>
                </div>

                {/* Grid Display */}
                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredSuffixes.map((item) => (
                            <div
                                key={item.suffix}
                                className="flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 shadow-sm"
                            >
                                <div>
                                    {/* Header with Option 3 Indicator */}
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <h3 className="text-lg font-mono font-bold text-slate-200 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-cyan-500/30 border border-cyan-500/50 flex-shrink-0"></span>
                                            {item.suffix}
                                        </h3>
                                        <div className="flex flex-wrap gap-1 justify-end max-w-[50%]">
                                            {item.tags.map(t => (
                                                <span key={t} className="text-[10px] bg-slate-950/80 text-slate-500 px-1.5 py-0.5 rounded border border-slate-800/50">
                        {t}
                      </span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                                        {item.definition}
                                    </p>
                                </div>

                                {/* Technical Details Footer */}
                                <div className="space-y-3 pt-4 border-t border-slate-800/40 text-xs">
                                    <div>
                  <span className="block text-slate-500 font-medium text-[10px] uppercase tracking-wider mb-1">
                    Example Usage
                  </span>
                                        <code className="text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-2 py-1 rounded font-mono inline-block">
                                            {item.example}
                                        </code>
                                    </div>
                                    <div>
                  <span className="block text-rose-400/90 font-medium text-[10px] uppercase tracking-wider mb-1">
                    ⚠️ Anti-Pattern
                  </span>
                                        <p className="text-slate-400">{item.antiPattern}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}