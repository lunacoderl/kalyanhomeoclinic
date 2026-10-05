import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Share2, 
  Check, 
  Sparkles, 
  Eye, 
  Clock, 
  Image as ImageIcon, 
  Video, 
  ChevronRight, 
  ChevronLeft,
  VolumeX
} from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { 
  youtubeVideosData, 
  YOUTUBE_CHANNEL_URL, 
  YOUTUBE_CHANNEL_HANDLE,
  type YouTubeVideoItem 
} from '../../data/youtubeVideos';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'photos'>('videos');
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideoItem>(youtubeVideosData[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Categories list
  const categories = ['All', ...Array.from(new Set(youtubeVideosData.map(v => v.category)))];

  const filteredVideos = selectedCategory === 'All' 
    ? youtubeVideosData 
    : youtubeVideosData.filter(v => v.category === selectedCategory);

  const currentIndex = youtubeVideosData.findIndex(v => v.id === selectedVideo.id);

  const handleNextVideo = () => {
    const nextIdx = (currentIndex + 1) % youtubeVideosData.length;
    setSelectedVideo(youtubeVideosData[nextIdx]);
  };

  const handlePrevVideo = () => {
    const prevIdx = (currentIndex - 1 + youtubeVideosData.length) % youtubeVideosData.length;
    setSelectedVideo(youtubeVideosData[prevIdx]);
  };

  const handleCopyLink = (video: YouTubeVideoItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(video.watchUrl);
    setCopiedId(video.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative z-10 border-b border-border/70 scroll-mt-20 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 w-full max-w-full">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-green" />
              <span>Media & Patient Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              Clinical Videos & Clinic Gallery
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Explore authentic clinical video case studies and patient recoveries presented by{' '}
              <strong className="text-forest font-semibold">Dr. Ch. Ravi Kumar, M.D.</strong> alongside photos of our Visakhapatnam clinics.
            </p>
          </div>

          {/* Tab Switcher - Fully responsive on mobile without horizontal bleed */}
          <div className="flex items-center bg-white/90 p-1 sm:p-1.5 rounded-2xl border border-border/80 shadow-xs w-full sm:w-auto shrink-0 self-start md:self-end max-w-full overflow-hidden">
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all truncate cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-forest text-white shadow-xs'
                  : 'text-text-secondary hover:text-forest hover:bg-black/5'
              }`}
            >
              <Video className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">Top Videos ({youtubeVideosData.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all truncate cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-forest text-white shadow-xs'
                  : 'text-text-secondary hover:text-forest hover:bg-black/5'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">Photos ({galleryData.length})</span>
            </button>
          </div>
        </div>

        {/* ===================== TAB 1: YOUTUBE VIDEOS ===================== */}
        {activeTab === 'videos' && (
          <div className="space-y-12 w-full max-w-full overflow-hidden">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full max-w-full min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-forest text-white shadow-xs'
                      : 'bg-white text-text-secondary border border-border/80 hover:border-forest/40 hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Video Theater Mode */}
            <div className="bg-white rounded-3xl border border-border/80 shadow-card-hover overflow-hidden transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* 16:9 Responsive Embedded Video Frame */}
                <div className="lg:col-span-8 bg-black relative flex flex-col justify-center">
                  <div className="relative w-full pb-[56.25%] overflow-hidden bg-black">
                    <iframe
                      key={selectedVideo.id}
                      src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0&modestbranding=1`}
                      title={selectedVideo.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  {/* Audio Autoplay Information Bar */}
                  <div className="bg-forest-dark/95 px-4 py-2.5 flex items-center justify-between text-xs text-white/80 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <VolumeX className="w-4 h-4 text-gold shrink-0" />
                      <span>Video starts <strong>muted</strong> per browser policy. Unmute anytime in the player bar.</span>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] text-white/60">
                      Case #{currentIndex + 1} of {youtubeVideosData.length}
                    </span>
                  </div>
                </div>

                {/* Theater Right Panel: Metadata & All Possible Interactive Buttons */}
                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-border/70">
                  <div className="space-y-4">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                        <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
                        <span>YouTube Featured Case</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-mint text-green text-xs font-semibold">
                        {selectedVideo.category}
                      </span>
                      {selectedVideo.isPopular && (
                        <span className="px-2.5 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold">
                          ★ Most Popular
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest leading-snug">
                      {selectedVideo.title}
                    </h3>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-text-secondary font-medium pb-2 border-b border-border/60">
                      <span className="flex items-center gap-1 text-forest font-semibold">
                        <Eye className="w-3.5 h-3.5 text-green" />
                        {selectedVideo.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-text-muted" />
                        {selectedVideo.duration}
                      </span>
                      <span className="text-emerald-700 font-medium">
                        Dr. Ch. Ravi Kumar, M.D.
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {selectedVideo.summary}
                    </p>

                    {/* Channel handle attribution */}
                    <div className="p-3 rounded-2xl bg-ivory border border-border/70 text-xs text-text-secondary space-y-1">
                      <div className="font-semibold text-forest flex items-center justify-between">
                        <span>Official Channel:</span>
                        <a 
                          href={YOUTUBE_CHANNEL_URL} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-600 hover:underline flex items-center gap-1 font-bold"
                        >
                          <YouTubeIcon className="w-3.5 h-3.5" />
                          {YOUTUBE_CHANNEL_HANDLE}
                        </a>
                      </div>
                      <p className="text-[11px] text-text-muted">
                        Educational patient clinical results recorded at Kalyan Homeo Care clinic.
                      </p>
                    </div>
                  </div>

                  {/* Actions & Buttons */}
                  <div className="pt-6 space-y-3 border-t border-border/70 mt-6">
                    {/* Primary Button: Watch on YouTube directly */}
                    <a
                      href={selectedVideo.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
                      title="Watch directly on YouTube"
                    >
                      <YouTubeIcon className="w-4 h-4 text-white" />
                      <span>Watch Directly on YouTube</span>
                      <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Secondary Row: Share / Copy Link + Channel Link */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleCopyLink(selectedVideo)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-ivory hover:bg-sand border border-border/80 text-forest text-xs font-bold transition-all"
                        title="Copy direct video link"
                      >
                        {copiedId === selectedVideo.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green" />
                            <span className="text-green">Copied Link!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5 text-forest" />
                            <span>Share Link</span>
                          </>
                        )}
                      </button>

                      <a
                        href={YOUTUBE_CHANNEL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-ivory hover:bg-sand border border-border/80 text-forest text-xs font-bold transition-all"
                      >
                        <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
                        <span>Visit Channel</span>
                      </a>
                    </div>

                    {/* Previous / Next Case Switcher */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={handlePrevVideo}
                        className="inline-flex items-center gap-1 text-xs font-bold text-text-secondary hover:text-forest transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Video</span>
                      </button>
                      <button
                        onClick={handleNextVideo}
                        className="inline-flex items-center gap-1 text-xs font-bold text-text-secondary hover:text-forest transition-colors"
                      >
                        <span>Next Video</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Video Cards Grid (All 10 Videos) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-serif font-bold text-forest">
                  Explore More Top Clinical Cases ({filteredVideos.length})
                </h4>
                <span className="text-xs text-text-muted">
                  Click any card to play in the player above or open directly on YouTube
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVideos.map((video) => {
                  const isCurrent = video.id === selectedVideo.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => {
                        setSelectedVideo(video);
                        // Smooth scroll up to player on mobile
                        if (window.innerWidth < 1024) {
                          const galleryEl = document.getElementById('gallery');
                          galleryEl?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover ${
                        isCurrent 
                          ? 'border-forest ring-2 ring-forest/30 shadow-md' 
                          : 'border-border/80 hover:border-forest/50'
                      }`}
                    >
                      {/* Thumbnail Container */}
                      <div className="relative aspect-video bg-black overflow-hidden">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        {/* Semi-transparent dark overlay */}
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-md bg-forest-dark/85 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                            {video.category}
                          </span>
                          {video.isPopular && (
                            <span className="px-2 py-0.5 rounded-md bg-gold/90 backdrop-blur-xs text-[10px] font-bold text-forest-dark">
                              ★ Top Viewed
                            </span>
                          )}
                        </div>

                        {/* Centered Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-lg ${
                            isCurrent 
                              ? 'bg-forest text-white scale-110' 
                              : 'bg-white/90 text-forest group-hover:bg-red-600 group-hover:text-white group-hover:scale-110'
                          }`}>
                            <Play className="w-5 h-5 ml-0.5 fill-current" />
                          </div>
                        </div>

                        {/* Bottom Bar: Views & Duration */}
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-semibold text-white drop-shadow-md">
                          <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                            <Eye className="w-3 h-3 text-gold" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </span>
                        </div>
                      </div>

                      {/* Card Content & Action Buttons */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h5 className="font-serif font-bold text-sm text-forest leading-snug line-clamp-2 group-hover:text-green transition-colors">
                            {video.title}
                          </h5>
                          <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                            {video.summary}
                          </p>
                        </div>

                        {/* Button Bar: Play Here vs Direct YouTube */}
                        <div className="pt-2 border-t border-border/60 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVideo(video);
                              if (window.innerWidth < 1024) {
                                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                              isCurrent
                                ? 'bg-forest text-white'
                                : 'bg-ivory hover:bg-sand text-forest border border-border/80'
                            }`}
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>{isCurrent ? 'Now Playing' : 'Play Here'}</span>
                          </button>

                          <a
                            href={video.watchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors flex items-center justify-center"
                            title="Open on YouTube"
                          >
                            <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
                          </a>

                          <button
                            type="button"
                            onClick={(e) => handleCopyLink(video, e)}
                            className="p-1.5 rounded-lg bg-ivory hover:bg-sand text-text-secondary hover:text-forest border border-border/80 transition-colors flex items-center justify-center"
                            title="Copy link"
                          >
                            {copiedId === video.id ? (
                              <Check className="w-3.5 h-3.5 text-green" />
                            ) : (
                              <Share2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Official Channel Call-to-Action Card */}
            <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-forest-dark via-forest to-forest-dark text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-full overflow-hidden">
              <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <YouTubeIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-wider">
                    <span>Official YouTube Medical Channel</span>
                  </div>
                  <h4 className="text-lg sm:text-2xl font-serif font-bold text-white truncate">
                    Subscribe to {YOUTUBE_CHANNEL_HANDLE}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                    Watch Dr. Ch. Ravi Kumar's weekly clinical patient recoveries, homeopathic treatment case studies, and healthy lifestyle tips.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-4 h-4 ml-0.5" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
                >
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* ===================== TAB 2: CLINIC PHOTOS ===================== */}
        {activeTab === 'photos' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden bg-white border border-border/80 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                    <span className="text-[11px] uppercase font-bold text-gold tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-white leading-snug mt-1">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-white/70 mt-1">
                      Dr. Ch. Ravi Kumar, M.D. Clinic
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-forest shadow-xs">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <a
                href="#branches"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-sand border border-border/80 text-forest text-sm font-bold shadow-xs transition-all"
              >
                <span>Visit Our 3 Branches in Visakhapatnam</span>
                <ChevronRight className="w-4 h-4 text-green" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
