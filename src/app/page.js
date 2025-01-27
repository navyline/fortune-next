"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fortunes from "@/utils/fortunesData";

const FortunePage = () => {
  const [selectedFortune, setSelectedFortune] = useState(null);
  const [showFortune, setShowFortune] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isDeviceShaking, setIsDeviceShaking] = useState(false);
  const [canShake, setCanShake] = useState(true); // ตรวจสอบว่าสุ่มใหม่ได้หรือไม่

  const handleRandomPick = () => {
    if (!canShake) return; // ป้องกันการสุ่มใหม่
    setShowFortune(false);
    setIsShaking(true);
    setCanShake(false); // หยุดให้สุ่มใหม่จนกว่าจะกดปุ่มสุ่มใหม่

    setTimeout(() => {
      setIsShaking(false);
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      setSelectedFortune(fortunes[randomIndex]);
      setShowFortune(true);
    }, 3000); // ระยะเวลาเขย่า
  };

  useEffect(() => {
    const handleDeviceMotion = (event) => {
      const { accelerationIncludingGravity } = event;
      const x = accelerationIncludingGravity.x || 0;
      const y = accelerationIncludingGravity.y || 0;
      const z = accelerationIncludingGravity.z || 0;

      const totalAcceleration = Math.abs(x) + Math.abs(y) + Math.abs(z);

      if (totalAcceleration > 15 && canShake) {
        setIsDeviceShaking(true);
        setShowFortune(false);
      } else if (isDeviceShaking) {
        setIsDeviceShaking(false);
        handleRandomPick();
      }
    };

    if ("ondevicemotion" in window) {
      window.addEventListener("devicemotion", handleDeviceMotion);
    }

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, [isDeviceShaking, canShake]);

  const handleReset = () => {
    setShowFortune(false);
    setSelectedFortune(null);
    setCanShake(true); // เปิดให้สุ่มใหม่ได้อีกครั้ง
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-yellow-400 flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-yellow-200 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        สนุกเซียมซี โชคดีรับตรุษจีน
      </motion.h1>

      {!showFortune ? (
        <motion.div
          className="w-56 h-56 bg-yellow-300 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border-4 border-yellow-500"
          whileHover={canShake ? { scale: 1.1 } : {}}
          whileTap={canShake ? { scale: 0.9 } : {}}
          onClick={handleRandomPick}
        >
          <motion.img
            src="https://mkws.ac.th/guanaim03/app/mk-ss.png"
            alt="เซียมซี"
            className="w-32 h-32"
            animate={
              isShaking || isDeviceShaking
                ? { rotate: [-10, 10, -10, 10, 0], y: [0, -5, 5, 0] } // เขย่าซ้ายขวาพร้อมขึ้นลงเล็กน้อย
                : { y: [-10, 0, -10] } // ลอยขึ้นลงเมื่อไม่ได้เขย่า
            }
            transition={
              isShaking || isDeviceShaking
                ? { repeat: Infinity, duration: 0.15 }
                : { repeat: Infinity, duration: 1.5 }
            }
          />
        </motion.div>
      ) : (
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg border-2 border-yellow-400 text-left w-full max-w-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-red-600 mb-3 text-center">
              เซียมซีใบที่ {selectedFortune.number}
            </h2>
            <p className="text-gray-800 text-base leading-relaxed text-center mb-2">
              {selectedFortune.message}
            </p>
            <p className="text-sm text-yellow-600 text-center">
              วัด: {selectedFortune.temple}
            </p>
          </motion.div>
          <motion.button
            onClick={handleReset}
            className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white py-3 px-6 rounded-full text-lg shadow-lg font-semibold hover:from-yellow-400 hover:to-red-400 transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            เริ่มสุ่มใหม่
          </motion.button>
        </motion.div>
      )}

      {!showFortune && (
        <motion.footer
          className="mt-12 text-sm text-yellow-200 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          เขย่ามือถือหรือคลิกกล่องเพื่อสุ่มเซียมซี
        </motion.footer>
      )}
    </div>
  );
};

export default FortunePage;
