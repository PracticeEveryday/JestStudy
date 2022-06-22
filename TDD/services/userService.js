import { UserModel } from "../db/index.js";

export class UserService {
  constructor() {
    this.userModel = new UserModel();
  }
  async findAll() {
    const users = await this.userModel.findAll();
    return users;
  }
}
