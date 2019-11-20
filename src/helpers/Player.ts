import Axios, { AxiosInstance } from 'axios';
import { Room } from './Room';
import { Inventory } from './typings';

export class Player {
  cooldown: number;
  AxiosAuth: AxiosInstance;
  items = [];
  public currentRoom: Room;
  BASE_URL = 'https://lambda-treasure-hunt.herokuapp.com/api';
  constructor(public name: string, public token: string) {
    this.AxiosAuth = Axios.create({
      headers: {
        Authorization: `Token ${token}`
      }
    });
    this.cooldown = 0;
    this.currentRoom = new Room({});
  }

  public async initGame() {
    try {
      const room = await this.AxiosAuth.get(`${this.BASE_URL}/adv/init/`);
      this.currentRoom = new Room(room.data);
      this.cooldown = room.data.cooldown;
    } catch (error) {
      console.log(error);
    }
  }
  public async move(direction: string, next: string) {
    try {
      const room = await this.AxiosAuth.post(`${this.BASE_URL}/adv/move/`, {
        direction,
        next_room_id: next
      });
      this.currentRoom = new Room(room.data);
      this.cooldown = room.data.cooldown;
    } catch (error) {
      console.log(error);
    }
  }
  public async flight(direction: string) {
    try {
      const room = await this.AxiosAuth.post(`${this.BASE_URL}/adv/fly/`, {
        direction
      });
      this.currentRoom = new Room(room.data);
      this.cooldown = room.data.cooldown;
    } catch (error) {
      console.log(error);
    }
  }
  public async pickTreasure(treasure: string) {
    try {
      const request = await this.AxiosAuth.post(`${this.BASE_URL}/adv/take/`, {
        name: treasure
      });
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async dropTreasure(treasure: string) {
    try {
      const request = await this.AxiosAuth.post(`${this.BASE_URL}/adv/drop/`, {
        name: treasure
      });
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async sellTreasure(treasure: string) {
    try {
      const request = await this.AxiosAuth.post(`${this.BASE_URL}/adv/sell/`, {
        name: treasure
      });
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async confirmTreasureSale(treasure: string) {
    try {
      const request = await this.AxiosAuth.post(`${this.BASE_URL}/adv/sell/`, {
        name: treasure,
        confirm: 'yes'
      });
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async getInventory(): Promise<Inventory | undefined> {
    try {
      const treasure: Inventory = await this.AxiosAuth.post(
        `${this.BASE_URL}/adv/status/`
      );
      return treasure;
    } catch (error) {
      console.log(error);
    }
  }
  public async examine(name: string) {
    try {
      const request = await this.AxiosAuth.post(
        `${this.BASE_URL}/adv/examine/`,
        {
          name
        }
      );
      return request;
    } catch (error) {
      console.log(error);
    }
  }
  public async wear(name: string) {
    try {
      const request = await this.AxiosAuth.post(`${this.BASE_URL}/adv/wear/`, {
        name
      });
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async undress(name: string) {
    try {
      const request = await this.AxiosAuth.post(
        `${this.BASE_URL}/adv/undress/`,
        {
          name
        }
      );
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async changeName(name: string) {
    try {
      const request = await this.AxiosAuth.post(
        `${this.BASE_URL}/adv/change_name/`,
        {
          name
        }
      );
      this.name = name;
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
  public async pray() {
    try {
      const request = await this.AxiosAuth.post(`${this.BASE_URL}/adv/pray/`);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
}
