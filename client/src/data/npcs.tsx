import Human from "../assets/Human_Landguard_Male_Model.webp";

export type Stat = {
  key: string;
  value: string;
  image?: string;
};

export type NPCData = {
  id: string;
  image: string;
  levelDescription: string;
  stats: Stat[];
  hardcoreStats: Stat[];
  damageTypeEffectiveness: Stat[];
  abilities: string[];
  inventory: string[];

  description: string;
  spawnLocations: string[];
  behavior: string;
  loot: string;
  affinity: string;
};

export const npcs: NPCData[] = [
  {
    id: "Human",
    image: Human,
    levelDescription: "Level 3 Humanoid",
    stats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["-"],
    inventory: [
      "Melee and ranged weaponry",
      "Leather, Bronze, Iron, Steel armor",
    ],

    description:
      "Humans can be found randomly wandering the dungeons either solo or in a party. A group of two to four humans can be summoned with a +1 scroll of summon. They will always fight hostile monsters until they reach low health, walking slowly backwards before retreating. They wear anything from worn to excellent gear and generally yield a good amount of experience for killing. They can also pick up loot from the floor.",
    spawnLocations: [
      "The Mines",
      "The Swamp",
      "The Sand Labyrinth",
      "The Ruins",
      "Hamlet",
      "The Crystal Caves",
      "The Citadel",
    ],
    behavior:
      "Humans use their equipment to attack the player. They have a large variance in AC level and damage dealt based on their carried equipment. Humans start backpedalling on low health.",
    loot: "Humans drop the equipment they wear as well as gold. Note: All gear dropped by humans is +0. Unless picked up off of the floor.",
    affinity:
      "Humans are friendly towards other humans, as well as automatons. If a player's race is human or automaton, then he or she will be able to recruit other humans and automatons as Followers. Additionally, if a player is playing as a succubus, they can recruit drunk or confused humans; and if a player is playing as a goatman they can recruit them while drunk. Humans are otherwise hostile to all other monster races.",
  },
];
