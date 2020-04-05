export interface BaseItem {
  id: string;
  name: string;

  icon: string;
  description: string;

  level: number;

  manaCost: number;
  castRange: number;
  cooldown: number;

  goldCost: number;

  startEffect?: (...args: any[]) => void;
  endEffect?: (...args: any[]) => void;
  permanentEffect?: (...args: any[]) => void;
}
