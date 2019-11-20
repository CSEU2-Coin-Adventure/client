export class Room {
  room_id: string;
  title: string;
  description: string;
  coordinates: string;
  elevation: number;
  terrain: string;
  players: [];
  items: [];
  exits: [];
  error: string;
  message: string;
  constructor(obj: any) {
    this.room_id = obj.room_id;
    this.title = obj.title;
    this.description = obj.description;
    this.coordinates = obj.coordinates;
    this.elevation = obj.elevation;
    this.terrain = obj.terrain;
    this.players = obj.players;
    this.items = obj.items;
    this.exits = obj.exits;
    this.error = obj.errors;
    this.message = obj.message;
  }

  public isShop() {
    return this.room_id === '?' && this.title === 'Shop';
  }
}
