import fs from "fs-extra";
import { GetAllUsersService } from "./getUsers.service";

export class CreateUserService {
  private getAllUsersService: GetAllUsersService;

  constructor() {
    this.getAllUsersService = new GetAllUsersService();
  }

  async invoke(user: any) {
    // write file
    const users = await this.getAllUsersService.invoke();
    const newUser = { id: Date.now().toString(), ...user };
    users.push(newUser);
    await fs.writeFile("users.json", JSON.stringify(users), "utf8");
  }
}
