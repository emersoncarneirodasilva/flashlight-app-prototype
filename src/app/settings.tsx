import { View } from "react-native";
import { IntensitySlider } from "../components/IntensitySlider";
import { useFlashlight } from "../hooks/useFlashlight";
import { FlashlightButton } from "../components/FlashlightButton";
import { useContext } from "react";
import { ShakeContext } from "../contexts/ShakeContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useStyles } from "../hooks/useStyles";
import { LanguageContext } from "../contexts/LanguagesContext";

export default function Settings() {
  const styles = useStyles();
  const { intensity, setIntensity } = useFlashlight();
  const { isShake, setIsShake } = useContext(ShakeContext)!;
  const { theme, setTheme } = useContext(ThemeContext)!;
  const { language, setLanguage } = useContext(LanguageContext)!;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <IntensitySlider
          intensity={intensity}
          onIntensityChange={setIntensity}
        />

        <FlashlightButton
          backgroundColor={isShake ? "#a74dc2" : "#b93d81"}
          text={isShake ? "Desativar Chacoalhar" : "Ativar Chacoalhar"}
          onPress={() => setIsShake((prev) => !prev)}
        />

        <FlashlightButton
          backgroundColor={theme === "light" ? "#cbce21" : "#3a3739"}
          text={theme === "light" ? "Tema Claro" : "Tema Escuro"}
          onPress={() =>
            setTheme((currentTheme) =>
              currentTheme === "light" ? "dark" : "light"
            )
          }
        />

        <FlashlightButton
          backgroundColor={language === "portuguese" ? "#e2712f" : "#26aeb3"}
          text={language === "portuguese" ? "Português" : "Inglês"}
          onPress={() =>
            setLanguage((currentTheme) =>
              currentTheme === "portuguese" ? "english" : "portuguese"
            )
          }
        />
      </View>
    </View>
  );
}
