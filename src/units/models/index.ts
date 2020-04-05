export enum UnitType {
  NORMAL,
  HERO,
  BUILDING,
}

export enum UnitRace {
  HUMAN,
  ORC,
  ELF,
  UNDEAD,
}

export enum DamageType {
  MAGIC,
  PHYSICAL,
}

export enum ArmorType {
  FLESH,
  CLOTH,
  PLATE,
}

export interface BaseUnit {
  id: string;
  name: string;
  properName?: string;
  type: UnitType;
  race: UnitRace;

  icon: string;
  description: string;

  maxHp: number;
  curHp: number;
  maxMana: number;
  curMana: number;

  dmgBase: number;
  dmgDiceSides: number;
  dmgDiceRolls: number;
  dmgType: DamageType;
  atkRange: number;
  coolddown: number;

  armor: number;
  armorType: ArmorType;
  moveSpeed: number;

  abilities: string[]; // Array of ability IDs

  stats: {
    str: number;
    agi: number;
    int: number;
  };
  level: number;

  goldCost: number;
}
