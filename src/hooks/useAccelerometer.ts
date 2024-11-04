import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import { Vibration } from "react-native";
import { SHAKE_THRESHOLD, SHAKE_DELAY } from "../constants/flashlight";

export const useAccelerometer = (onShake: () => void, isShake: boolean) => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [lastShake, setLastShake] = useState(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    const subscription = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);

      const { x, y, z } = accelerometerData;
      const totalForce = Math.sqrt(x * x + y * y + z * z);
      const now = Date.now();

      if (
        totalForce > SHAKE_THRESHOLD &&
        now - lastShake > SHAKE_DELAY &&
        isShake
      ) {
        setLastShake(now);
        onShake();
        Vibration.vibrate(200);
      }
    });

    return () => {
      subscription && subscription.remove();
    };
  }, [lastShake, onShake]);

  return data;
};
