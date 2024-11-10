import { useContext } from "react";
import { View, Text, Platform } from "react-native";
import { LanguageContext } from "../contexts/LanguagesContext";
import { StrobeContext } from "../contexts/StrobeContext";
import { useStyles } from "../hooks/useStyles";
import Slider from "@react-native-community/slider";

export const StrobeValue = () => {
  const { language } = useContext(LanguageContext)!;
  const { intensity, setIntensity } = useContext(StrobeContext)!;
  const styles = useStyles();

  if (Platform.OS !== "android") return null;

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
        {language === "portuguese"
          ? "Modifique o controle do modo Estroboscópico"
          : "Modify the strobe mode control"}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={intensity}
        onValueChange={setIntensity}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
      />
    </View>
  );
};
