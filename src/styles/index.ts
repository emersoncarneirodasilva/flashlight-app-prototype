import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
    color: "#fff",
    fontSize: 14,
    opacity: 0.7,
  },
  statusText: {
    color: "#fff",
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
    color: "#fff",
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
});
