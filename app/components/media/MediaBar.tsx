"use client";
import { useState, useEffect, useRef } from "react";
import { FaVolumeMute, FaVolumeDown, FaVolumeUp } from "react-icons/fa";

export default function MediaBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const bgAudio = new Audio("/amberlight.mp3");
    bgAudio.loop = true;
    bgAudio.volume = volume;
    audioRef.current = bgAudio;

    return () => {
      bgAudio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Playback failed:", err);
      }
    }
  };

  const toggleVolume = () => {
    if (volume === 0.0) setVolume(0.1);
    else if (volume === 0.1) setVolume(0.2);
    else if (volume === 0.2) setVolume(0.0);
  };

  return (
    <div className="bg-brown text-cream h-8 w-fit px-4 py-1 rounded-full sticky bottom-2 ml-auto mr-2 mb-2 flex items-center gap-2">
      <p onClick={togglePlay} className="cursor-pointer">
        [⏯]
      </p>
      <p className="text-sm">
        Amberlight {isPlaying ? "– playing..." : "– paused"}
      </p>
      <div onClick={toggleVolume} className="cursor-pointer">
        {volume === 0.0 ? (
          <FaVolumeMute />
        ) : volume === 0.1 ? (
          <FaVolumeDown />
        ) : (
          <FaVolumeUp />
        )}
      </div>
    </div>
  );
}
