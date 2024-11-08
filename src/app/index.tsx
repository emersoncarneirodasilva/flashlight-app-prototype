import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useFlashlight } from "../hooks/useFlashlight";
import { useAccelerometer } from "../hooks/useAccelerometer";
import { FlashlightButton } from "../components/FlashlightButton";
import { DebugInfo } from "../components/DebugInfo";
import { ShakeContext } from "../contexts/ShakeContext";
import { useStyles } from "../hooks/useStyles";

export default function App() {
  const styles = useStyles();
  const { isShake } = useContext(ShakeContext)!;
  const [permission, requestPermission] = useCameraPermissions();
  const {
    flashOn,
    isStrobeOn,
    isSosOn,
    setIsStrobeOn,
    toggleFlash,
    playSosSignal,
  } = useFlashlight();

  const accelerometerData = useAccelerometer(toggleFlash, isShake);

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Carregando...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Precisamos da sua permissão para acessar a lanterna
        </Text>
        <Button onPress={requestPermission} title="Permitir acesso" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.hiddenCamera} enableTorch={flashOn} />

      <View style={styles.contentContainer}>
        {isStrobeOn || isSosOn ? (
          <>
            <Text style={styles.statusText}>
              Modo {isStrobeOn ? "Estroboscópio" : "S.O.S"}
            </Text>
            <FlashlightButton
              backgroundColor="#bebebe"
              text={isStrobeOn ? "Estroboscópio Ativado" : "S.O.S Ativado"}
              onPress={() => {}}
              activeOpacity={1}
            />
          </>
        ) : (
          <>
            <Text style={styles.statusText}>
              Lanterna {flashOn ? "Ligada" : "Desligada"}
            </Text>

            <FlashlightButton
              backgroundColor={flashOn ? "#f44336" : "#4CAF50"}
              text={flashOn ? "Desligar Lanterna" : "Ligar Lanterna"}
              onPress={toggleFlash}
              disabled={isSosOn}
            />
          </>
        )}

        {isSosOn ? (
          <FlashlightButton
            backgroundColor="#bebebe"
            text="S.O.S Ativado"
            onPress={() => {}}
          />
        ) : (
          <FlashlightButton
            backgroundColor={isStrobeOn ? "#ffd900" : "#1E90FF"}
            text={
              isStrobeOn ? "Desativar Estroboscópio" : "Ativar Estroboscópio"
            }
            onPress={() => setIsStrobeOn((prev) => !prev)}
            disabled={isSosOn}
          />
        )}

        <FlashlightButton
          backgroundColor={isSosOn ? "#ff5100" : "#483D8B"}
          text={isSosOn ? "Emitindo S.O.S..." : "Emitir Sinal S.O.S"}
          onPress={playSosSignal}
          disabled={isSosOn}
        />

        <DebugInfo data={accelerometerData} />
      </View>
    </View>
  );
}
