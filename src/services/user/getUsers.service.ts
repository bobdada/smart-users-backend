import fs from "fs-extra";
import { filePath } from "../../utilities/constants";

export class GetAllUsersService {
  async invoke() {
    if (!fs.existsSync(filePath)) {
      fs.createFileSync(filePath);
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const users = await fs.readFile(filePath, "utf8");
    const parsedUsers = JSON.parse(users);
    return parsedUsers;
  }
}
