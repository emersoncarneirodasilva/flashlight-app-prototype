import { View, Text, Platform } from "react-native";
import { styles } from "../styles";
import { IntensitySliderProps } from "../types";
import Slider from "@react-native-community/slider";

export const IntensitySlider: React.FC<IntensitySliderProps> = ({
  intensity,
  onIntensityChange,
  disabled,
}) => {
  if (Platform.OS !== "android") return null;

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
        Nota: O controle de intensidade não está disponível nesta versão
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
        disabled={disabled}
      />
    </View>
  );
};
