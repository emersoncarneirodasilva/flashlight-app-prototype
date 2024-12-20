import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

export const useStyles = () => {
  const { theme } = useContext(ThemeContext)!;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "light" ? "#eeeeee" : "#2e2e2e",
    },
    hiddenCamera: {
      width: 1,
      height: 1,
      position: "absolute",
      opacity: 0,
    },
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      gap: 20,
    },
    message: {
      textAlign: "center",
      paddingBottom: 10,
      color: "#fff",
      fontSize: 16,
    },
    debugText: {
      color: `${theme === "light" ? "#1f1f1f" : "#fff"}`,
      fontSize: 14,
      opacity: 0.7,
    },
    statusText: {
      color: `${theme === "light" ? "#1f1f1f" : "#fff"}`,
      fontSize: 24,
      fontWeight: "bold",
    },
    instructionText: {
      color: "#fff",
      fontSize: 16,
      opacity: 0.8,
      textAlign: "center",
    },
    sliderContainer: {
      width: "100%",
      alignItems: "center",
      marginTop: 10,
    },
    sliderText: {
      color: `${theme === "light" ? "#1f1f1f" : "#fff"}`,
      fontSize: 14,
      marginBottom: 10,
      textAlign: "center",
      opacity: 0.8,
    },
    slider: {
      width: "100%",
      height: 40,
    },
    button: {
      padding: 20,
      borderRadius: 10,
      width: "100%",
      alignItems: "center",
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
    Radialcontainer: {
      padding: 16,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 8,
      width: "100%",
    },
    outerCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: "#888",
      justifyContent: "center",
      alignItems: "center",
    },
    selectedOuterCircle: {
      borderColor: "#007AFF",
    },
    innerCircle: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: "#007AFF",
    },
    optionText: {
      fontSize: 16,
      color: `${theme === "light" ? "#1f1f1f" : "#fff"}`,
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 8,
      padding: 16,
      width: "100%",
    },
    label: {
      marginRight: 10,
      fontSize: 16,
      color: `${theme === "light" ? "#1f1f1f" : "#fff"}`,
    },
    switchContainer: {
      width: 50,
      height: 30,
      borderRadius: 15,
      padding: 2,
      justifyContent: "center",
    },
    onBackground: {
      backgroundColor: "#007AFF",
    },
    offBackground: {
      backgroundColor: "#ccc",
    },
    circle: {
      width: 26,
      height: 26,
      borderRadius: 13,
      backgroundColor: "#fff",
    },
  });
};
