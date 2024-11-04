import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../types";
import { styles } from "../styles";

export const FlashlightButton: React.FC<ButtonProps> = ({
  onPress,
  disabled,
  backgroundColor,
  text,
  activeOpacity,
}) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor }]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);
