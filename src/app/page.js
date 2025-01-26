"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fortunes from "@/utils/fortunesData";

const FortunePage = () => {
  const [selectedFortune, setSelectedFortune] = useState(null);
  const [showFortune, setShowFortune] = useState(false);
  const [isShaking, setIsShaking] = useState(false); // สำหรับแอนิเมชันเขย่า
  const [isDeviceShaking, setIsDeviceShaking] = useState(false); // ใช้ตรวจจับการเขย่ามือถือ

  const handleRandomPick = () => {
    setShowFortune(false);
    setIsShaking(true); // เริ่มแอนิเมชันเขย่า

    setTimeout(() => {
      setIsShaking(false); // หยุดแอนิเมชันเขย่า
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      setSelectedFortune(fortunes[randomIndex]);
      setShowFortune(true); // แสดงคำทำนาย
    }, 3000); // เขย่า 3 วินาที
  };

  useEffect(() => {
    const handleDeviceMotion = (event) => {
      const { accelerationIncludingGravity } = event;
      const x = accelerationIncludingGravity.x || 0;
      const y = accelerationIncludingGravity.y || 0;
      const z = accelerationIncludingGravity.z || 0;

      const totalAcceleration = Math.abs(x) + Math.abs(y) + Math.abs(z);

      if (totalAcceleration > 15) {
        setIsDeviceShaking(true);
        setShowFortune(false);
      } else if (isDeviceShaking) {
        setIsDeviceShaking(false);
        handleRandomPick(); // หยุดเขย่าแล้วสุ่มคำทำนาย
      }
    };

    if ("ondevicemotion" in window) {
      window.addEventListener("devicemotion", handleDeviceMotion);
    }

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, [isDeviceShaking]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-yellow-400 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-yellow-200 drop-shadow-lg">
        สนุกเซียมซี โชคดีรับตรุษจีน
      </h1>

      {/* กล่องเซียมซี */}
      <motion.div
        className="w-56 h-56 bg-yellow-300 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border-4 border-yellow-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleRandomPick}
      >
        <motion.img
          src="https://mkws.ac.th/guanaim03/app/mk-ss.png"
          alt="เซียมซี"
          className="w-32 h-32"
          animate={
            isShaking || isDeviceShaking
              ? { rotate: [-5, 5, -5, 5, 0] } // เขย่าไปซ้าย-ขวา
              : { y: [-10, 0, -10] } // ลอยขึ้นลงเมื่อไม่ได้เขย่า
          }
          transition={
            isShaking || isDeviceShaking
              ? { repeat: Infinity, duration: 0.2 } // ความเร็วในการเขย่า
              : { repeat: Infinity, duration: 2 } // ความเร็วในการลอย
          }
        />
      </motion.div>

      {/* แสดงผลคำทำนาย */}
      <div className="mt-6 w-full max-w-sm">
        {showFortune && selectedFortune && (
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg border-2 border-yellow-400 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-red-600 mb-3">
              เซียมซีใบที่ {selectedFortune.number}
            </h2>
            <p className="text-gray-800 text-base leading-relaxed">
              {selectedFortune.message}
            </p>
          </motion.div>
        )}
      </div>

      <footer className="mt-12 text-sm text-yellow-200 drop-shadow-md">
        เขย่ามือถือหรือคลิกกล่องเพื่อสุ่มเซียมซี
      </footer>
    </div>
  );
};

export default FortunePage;
