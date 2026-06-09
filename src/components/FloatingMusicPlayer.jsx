import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingMusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showMusicPopup, setShowMusicPopup] = useState(true);

  const defaultPosition = {
    x: window.innerWidth - 120,
    y: window.innerHeight - 140,
  };

  const [position, setPosition] = useState(defaultPosition);

  // Load posisi
  useEffect(() => {
    const saved = localStorage.getItem("music-position");

    if (saved) {
      setPosition(JSON.parse(saved));
    }
  }, []);

  // Simpan posisi
  useEffect(() => {
    localStorage.setItem(
      "music-position",
      JSON.stringify(position)
    );
  }, [position]);

  // Set volume awal
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // PUTAR MUSIK
  const startMusic = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Gagal memutar audio:", error);
    }

    setShowMusicPopup(false);
  };

  // TANPA MUSIK
  const skipMusic = () => {
    setShowMusicPopup(false);
  };

  // PLAY / PAUSE
  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // VOLUME +
  const increaseVolume = () => {
    if (!audioRef.current) return;

    const newVolume = Math.min(volume + 0.1, 1);

    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // VOLUME -
  const decreaseVolume = () => {
    if (!audioRef.current) return;

    const newVolume = Math.max(volume - 0.1, 0);

    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 0px rgba(11,84,129,0.4);
            }
            50% {
              box-shadow: 0 0 25px rgba(11,84,129,0.9);
            }
            100% {
              box-shadow: 0 0 0px rgba(11,84,129,0.4);
            }
          }

          @keyframes equalizer {
            0% { height: 6px; }
            50% { height: 18px; }
            100% { height: 6px; }
          }
        `}
      </style>

      {/* POPUP AWAL */}
      {showMusicPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100000,
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              maxWidth: "400px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <img
              src="/images/logo2.png"
              alt="Logo"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
                margin: "0 auto 15px",
              }}
            />

            <h2
              style={{
                color: "#0B5481",
                marginBottom: "10px",
              }}
            >
              Selamat Datang
            </h2>

            <p
              style={{
                color: "#555",
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              Apakah Anda ingin memutar Mars Imigrasi dan Pemasyrakatan saat
              menjelajahi website?
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={startMusic}
                style={{
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#0B5481",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                🎵 Putar Musik
              </button>

              <button
                onClick={skipMusic}
                style={{
                  padding: "12px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  background: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                🔇 Tanpa Musik
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MUSIC PLAYER */}
      <motion.div
        drag
        dragMomentum={false}
        whileTap={{ scale: 1.05 }}
        onDragEnd={(event, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y,
          });
        }}
        initial={position}
        animate={position}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          width: "95px",
          height: "95px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "grab",
          backdropFilter: "blur(12px)",
          animation: isPlaying
            ? "pulseGlow 2s infinite"
            : "none",
        }}
      >
        <img
          src="/images/logo2.png"
          alt="Music Cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            animation: "rotate 12s linear infinite",
            animationPlayState: isPlaying
              ? "running"
              : "paused",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <button
            onClick={togglePlay}
            style={{
              border: "none",
              background: "rgba(255,255,255,0.15)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          {isPlaying && (
            <div
              style={{
                display: "flex",
                gap: "3px",
                marginTop: "8px",
                alignItems: "flex-end",
                height: "20px",
              }}
            >
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  style={{
                    width: "4px",
                    background: "white",
                    borderRadius: "999px",
                    animation: `equalizer ${
                      0.5 + bar * 0.2
                    }s infinite`,
                  }}
                />
              ))}
            </div>
          )}

          <div
            style={{
              display: "flex",
              gap: "6px",
              marginTop: "6px",
            }}
          >
            <button
              onClick={decreaseVolume}
              style={volBtn}
            >
              -
            </button>

            <button
              onClick={increaseVolume}
              style={volBtn}
            >
              +
            </button>
          </div>
        </div>

        <audio
          ref={audioRef}
          src="/musik/marsimigrasi.mp3"
          loop
        />
      </motion.div>
    </>
  );
}

const volBtn = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(255,255,255,0.2)",
  color: "white",
  cursor: "pointer",
  fontSize: "12px",
};