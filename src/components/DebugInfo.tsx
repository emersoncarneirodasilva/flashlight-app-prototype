import { Text } from "react-native";
import { DebugInfoProps } from "../types";
import { useStyles } from "../hooks/useStyles";

export const DebugInfo: React.FC<DebugInfoProps> = ({ data }) => {
  const styles = useStyles();

  return (
    <Text style={styles.debugText}>
      x: {data.x.toFixed(2)}, y: {data.y.toFixed(2)}, z: {data.z.toFixed(2)}
    </Text>
  );
};
