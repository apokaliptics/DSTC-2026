import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface VideoSlide {
  id: number;
  title: string;
  subtitle: string;
  type: "video" | "mockup";
  src?: string;
  thumbnail?: string;
  teaserText?: string;
}

const slides: VideoSlide[] = [
  {
    id: 1,
    title: "DSTC 2026 - COMING SOON",
    subtitle: "Trailer chính thức giới thiệu cuộc thi với chủ đề Tài Chính Định Lượng đầy kịch tính",
    type: "video",
    src: "/coming-soon-dstc-final.av1.mp4"
  },
  {
    id: 2,
    title: "COMING SOON",
    subtitle: "",
    type: "mockup",
    teaserText: "COMING SOON"
  }
];

export function VideoCarouselSection() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronize muted and volume state with the video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume, current]);

  // Update time state as video plays
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Capture total video duration once loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Seek video to clicked position on progress bar
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Adjust volume when volume bar is clicked
  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.max(0, Math.min(1, clickX / width));
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    if (newVolume > 0) {
      setIsMuted(false);
      videoRef.current.muted = false;
    } else {
      setIsMuted(true);
      videoRef.current.muted = true;
    }
  };

  // Play/Pause handler
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log("Play failed: ", err));
    }
  };

  // Mute/Unmute toggle
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    videoRef.current.muted = newMuted;
    if (!newMuted && volume === 0) {
      setVolume(0.5);
    }
  };

  // Prev slide
  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Next slide
  const handleNext = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Load video when slide becomes active but wait for interaction to play
  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.load();
      videoRef.current.pause(); // Ensure it's paused
      setIsPlaying(false);
    } else {
      setIsPlaying(false);
    }
  }, [current]);

  // Helper to format time display (mm:ss)
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <motion.section
      className="absolute left-0 top-[5380px] w-[1920px] h-[850px] flex flex-col items-center justify-center z-10 overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-[150px] pointer-events-none rounded-[100px] z-0" />
      <div className="absolute top-[-50px] left-[15%] w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Slider Content Wrapper */}
      <div className="relative flex items-center justify-center w-[1700px] h-[788px] z-10 select-none">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[30px] z-20 flex items-center justify-center w-[75px] h-[75px] rounded-full border border-white/20 bg-slate-950/40 text-white/70 backdrop-blur-md hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-[30px] z-20 flex items-center justify-center w-[75px] h-[75px] rounded-full border border-white/20 bg-slate-950/40 text-white/70 backdrop-blur-md hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Video Frame Slider Display Area */}
        <div className="relative w-[1400px] h-[788px] overflow-hidden rounded-[36px] bg-slate-950 shadow-[0_0_80px_rgba(6,182,212,0.15)] border border-cyan-500/30 flex items-center justify-center group/frame">
          
          {/* Futuristic Glowing Frame Border Overlay */}
          <div aria-hidden="true" className="absolute inset-0 border-[2px] border-cyan-400/30 rounded-[36px] pointer-events-none z-30 group-hover/frame:border-cyan-400/60 shadow-[inset_0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {slides[current].type === "video" ? (
                // ACTIVE VIDEO PLAYER SLIDE
                <div className="relative w-full h-full cursor-pointer bg-black" onClick={togglePlay}>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    src={slides[current].src}
                    loop
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                  />

                  {/* Glassmorphic Play/Pause Overlay Button (perfectly aligned play triangle) */}
                  <div className={`absolute inset-0 bg-slate-950/20 flex items-center justify-center transition-all duration-300 ${isPlaying ? "opacity-0 pointer-events-none group-hover/frame:opacity-100" : "opacity-100 bg-slate-950/40"}`}>
                    <div className="w-[100px] h-[100px] rounded-full bg-cyan-500/20 backdrop-blur-md border-2 border-cyan-400/80 flex items-center justify-center text-white shadow-[0_0_35px_rgba(34,211,238,0.5)] transform transition-transform duration-300 hover:scale-110 active:scale-90">
                      {isPlaying ? (
                        <svg className="w-10 h-10 text-cyan-200 fill-current" viewBox="0 0 24 24">
                          <rect x="4" y="4" width="4" height="16" rx="1" />
                          <rect x="16" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-cyan-200 fill-current" viewBox="0 0 24 24">
                          <path d="M6.5 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Sleek Custom Control Controls Bar */}
                  <div className="absolute bottom-6 left-8 right-8 h-[75px] rounded-[24px] bg-slate-900/90 border border-white/10 backdrop-blur-xl flex flex-col justify-between p-3 opacity-0 translate-y-3 group-hover/frame:opacity-100 group-hover/frame:translate-y-0 transition-all duration-300 z-20 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                    
                    {/* Modern Interactive Progress Bar / Timeline */}
                    <div 
                      className="w-full h-[6px] bg-white/20 rounded-full cursor-pointer hover:h-[8px] transition-all relative group/progress"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full relative"
                        style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                      >
                        {/* Glowing thumb handle */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_#22d3ee] scale-0 group-hover/progress:scale-100 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom controls row */}
                    <div className="flex items-center justify-between w-full px-2 mt-1">
                      <div className="flex items-center gap-4">
                        {/* Play/Pause Button */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); togglePlay(); }} 
                          className="text-cyan-400 hover:text-cyan-200 transition-colors p-1 cursor-pointer"
                        >
                          {isPlaying ? (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <rect x="6" y="4" width="4" height="16" />
                              <rect x="14" y="4" width="4" height="16" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M6.5 5v14l11-7z" />
                            </svg>
                          )}
                        </button>
                        
                        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-white text-sm tracking-wider">
                          {slides[current].title}
                        </span>

                        <span className="font-['Space_Grotesk:Regular',sans-serif] text-slate-400 text-xs">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Mute/Unmute Button */}
                        <button 
                          onClick={toggleMute} 
                          className="text-cyan-400 hover:text-cyan-200 transition-colors p-1 cursor-pointer"
                        >
                          {isMuted || volume === 0 ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                          )}
                        </button>

                        {/* Interactive volume slider container */}
                        <div 
                          onClick={handleVolumeClick}
                          className="w-[100px] h-[5px] bg-white/20 rounded-full relative cursor-pointer group/volume flex items-center"
                        >
                          <div 
                            className="h-full bg-cyan-400 rounded-full relative"
                            style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                          >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border border-cyan-400 shadow-[0_0_6px_#22d3ee] scale-0 group-hover/volume:scale-100 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // MOCKUP SLIDES (SOLID BLACK BACKGROUND WITH WORD "COMING SOON")
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
                  <div className="relative z-10 text-center flex flex-col items-center max-w-[800px] px-8">
                    <h3 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[55px] text-white tracking-[0.25em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      COMING SOON
                    </h3>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide dots at the bottom */}
      <div className="flex justify-center items-center gap-4 mt-8 relative z-10">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => {
              setIsPlaying(false);
              setCurrent(idx);
            }}
            className={`h-[12px] rounded-full transition-all duration-300 cursor-pointer ${current === idx ? "w-[45px] bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" : "w-[12px] bg-white/30 hover:bg-white/60"}`}
            aria-label={`Slide ${slide.id}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
