import { useContext } from "react";
import { View, Text, Platform } from "react-native";
import { LanguageContext } from "../contexts/LanguagesContext";
import { IntensitySliderProps } from "../types";
import { useStyles } from "../hooks/useStyles";
import Slider from "@react-native-community/slider";

export const IntensitySlider: React.FC<IntensitySliderProps> = ({
  intensity,
  onIntensityChange,
}) => {
  const { language } = useContext(LanguageContext)!;
  const styles = useStyles();

  if (Platform.OS !== "android") return null;

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
        {language === "portuguese"
          ? "Nota: O controle de intensidade não está disponível nesta versão"
          : "Note: Intensity control is not available in this version"}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0.1}
        maximumValue={1}
        step={0.1}
        value={intensity}
        onValueChange={onIntensityChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
      />
    </View>
  );
};
