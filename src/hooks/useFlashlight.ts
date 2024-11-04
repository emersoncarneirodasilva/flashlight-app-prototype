import { useState, useEffect } from "react";
import { MORSE_SOS } from "../constants/flashlight";
import { Vibration } from "react-native";

export const useFlashlight = () => {
  const [flashOn, setFlashOn] = useState(false);
  const [isStrobeOn, setIsStrobeOn] = useState(false);
  const [isSosOn, setIsSosOn] = useState(false);
  const [intensity, setIntensity] = useState(0.5);

  useEffect(() => {
    let strobeInterval: NodeJS.Timeout | undefined;

    if (isStrobeOn) {
      strobeInterval = setInterval(() => {
        setFlashOn((prev) => !prev);
      }, 100);
    } else {
      clearInterval(strobeInterval);
      setFlashOn(false);
    }

    return () => clearInterval(strobeInterval);
  }, [isStrobeOn]);

  const toggleFlash = () => {
    setFlashOn((prev) => !prev);
    Vibration.vibrate(100);
  };

  const playSosSignal = () => {
    setIsSosOn(true);
    let index = 0;

    const sosInterval = setInterval(() => {
      if (index < MORSE_SOS.length) {
        setFlashOn((prev) => !prev);
        index++;
      } else {
        clearInterval(sosInterval);
        setFlashOn(false);
        setIsSosOn(false);
      }
    }, MORSE_SOS[index] * 1000);
  };

  return {
    flashOn,
    isStrobeOn,
    isSosOn,
    intensity,
    setIsStrobeOn,
    setIntensity,
    toggleFlash,
    playSosSignal,
  };
};
