export interface Inventory {
  name: string;
  cooldown: number;
  encumbrance: number; // How much are you carrying?
  strength: number; // How much can you carry?
  speed: number; // How fast do you travel?
  gold: number;
  bodywear: string;
  footwear: string;
  inventory: [];
  status: [];
  errors: [];
  messages: [];
}
