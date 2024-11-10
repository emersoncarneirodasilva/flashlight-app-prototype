import { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguagesContext";
import { ShakeContext } from "../contexts/ShakeContext";
import { useStyles } from "../hooks/useStyles";
import { StrobeValue } from "../components/StrobeValue";
import RadialToggle from "../components/RadialToggle";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Settings() {
  const styles = useStyles();
  const { language, setLanguage } = useContext(LanguageContext)!;
  const { theme, setTheme } = useContext(ThemeContext)!;
  const { isShake, setIsShake } = useContext(ShakeContext)!;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {language === "portuguese" ? (
          <RadialToggle
            option1={{ label: "Português", value: "portuguese" }}
            option2={{ label: "Inglês", value: "english" }}
            setOption={setLanguage}
            currentValue={language}
          />
        ) : (
          <RadialToggle
            option1={{ label: "Portuguese", value: "portuguese" }}
            option2={{ label: "English", value: "english" }}
            setOption={setLanguage}
            currentValue={language}
          />
        )}

        {language === "portuguese" ? (
          <RadialToggle
            option1={{ label: "Claro", value: "light" }}
            option2={{ label: "Escuro", value: "dark" }}
            currentValue={theme}
            setOption={setTheme}
          />
        ) : (
          <RadialToggle
            option1={{ label: "Light", value: "light" }}
            option2={{ label: "Dark", value: "dark" }}
            currentValue={theme}
            setOption={setTheme}
          />
        )}

        {language === "portuguese" ? (
          <ToggleSwitch
            label="Chacoalhar"
            value={isShake}
            onValueChange={setIsShake}
          />
        ) : (
          <ToggleSwitch
            label="Shake"
            value={isShake}
            onValueChange={setIsShake}
          />
        )}

        <StrobeValue />
      </View>
    </View>
  );
}
