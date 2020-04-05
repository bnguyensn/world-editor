export enum AbilityType {
  NORMAL,
  HERO,
}

export interface BaseAbility {
  id: string;
  name: string;
  type: AbilityType;

  icon: string;
  description: string;

  levels: number;
  curLevel: number;

  manaCost: number;
  castRange: number;
  cooldown: number;

  startEffect?: (...args: any[]) => void;
  endEffect?: (...args: any[]) => void;
}
