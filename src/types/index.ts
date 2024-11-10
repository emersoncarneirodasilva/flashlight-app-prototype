export interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  backgroundColor: string;
  text: string;
  activeOpacity?: number;
}

export interface DebugInfoProps {
  data: { x: number; y: number; z: number };
}
