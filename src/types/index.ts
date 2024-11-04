export interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  backgroundColor: string;
  text: string;
  activeOpacity?: number;
}

export interface IntensitySliderProps {
  intensity: number;
  onIntensityChange: (value: number) => void;
  disabled: boolean;
}

export interface DebugInfoProps {
  data: { x: number; y: number; z: number };
}
