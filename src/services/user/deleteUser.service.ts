import fs from "fs-extra";
import { GetAllUsersService } from "./getUsers.service";
import { UserType } from "../../model/types";
import { filePath } from "../../utilities/constants";

export class DeleteUserService {
  private getAllUsersService: GetAllUsersService;

  constructor() {
    this.getAllUsersService = new GetAllUsersService();
  }

  async invoke(userId: string) {
    const users = await this.getAllUsersService.invoke();

    const filteredUsers = users.filter((user: UserType) => user.id !== userId);
    return fs.writeFile(filePath, JSON.stringify(filteredUsers, null, 2));
  }
}
