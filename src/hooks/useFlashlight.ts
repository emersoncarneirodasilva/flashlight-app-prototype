import { useState, useEffect, useContext } from "react";
import { MORSE_SOS } from "../constants/flashlight";
import { Vibration } from "react-native";
import { StrobeContext } from "../contexts/StrobeContext";

export const useFlashlight = () => {
  const { intensity } = useContext(StrobeContext)!;
  const [flashOn, setFlashOn] = useState(false);
  const [isStrobeOn, setIsStrobeOn] = useState(false);
  const [isSosOn, setIsSosOn] = useState(false);

  let strobeValue = intensity;

  if (intensity === 1) {
    strobeValue = 1200;
  } else if (intensity === 2) {
    strobeValue = 800;
  } else if (intensity === 3) {
    strobeValue = 500;
  } else {
    strobeValue = 150;
  }

  useEffect(() => {
    let strobeInterval: NodeJS.Timeout | undefined;

    if (isStrobeOn) {
      strobeInterval = setInterval(() => {
        setFlashOn((prev) => !prev);
      }, strobeValue);
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
    setIsStrobeOn,
    toggleFlash,
    playSosSignal,
  };
};
