import fs from "fs-extra";
import { GetAllUsersService } from "./getUsers.service";
import { UserType } from "../../model/types";
import { filePath } from "../../utilities/constants";

export class UpdateUserService {
  private getAllUsersService: GetAllUsersService;

  constructor() {
    this.getAllUsersService = new GetAllUsersService();
  }

  async invoke(userId: string, userData: UserType) {
    const users = await this.getAllUsersService.invoke();

    const index = users.findIndex((user: UserType) => user.id === userId);

    if (index !== -1) {
      users[index] = { ...users[index], ...userData };
      return fs.writeFile(filePath, JSON.stringify(users, null, 2));
    }
  }
}
