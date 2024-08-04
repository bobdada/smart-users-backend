import { UserType } from "../../model/types";
import { GetAllUsersService } from "./getUsers.service";

export class GetUserByIdService {
  private getAllUsersService: GetAllUsersService;

  constructor() {
    this.getAllUsersService = new GetAllUsersService();
  }

  async invoke(userId: string) {
    const users = await this.getAllUsersService.invoke();
    const user = users.find((user: UserType) => user.id === userId);
    return user;
  }
}
