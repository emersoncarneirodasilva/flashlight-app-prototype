import { ShakeProvider } from "../contexts/ShakeContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguagesContext";
import TabNavigator from "../components/TabNavigator";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ShakeProvider>
          <TabNavigator />
        </ShakeProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
