import { User } from "../schemas/User.js";

export class UserModel {
  constructor() {
    this.user = User;
  }

  async findAll() {
    const user = await this.user.find({});
    return user;
  }
}
