const fs = require("fs-extra");

class UserService {
  constructor() {
    this.filePath = "./data/users.json";
  }

  async createUser(userData) {
    const users = await this.readUsers();
    const newUser = { id: Date.now(), ...userData };
    users.push(newUser);
    return fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
  }

  async readUsers() {
    try {
      const users = await fs.readFile(this.filePath, "utf8");
      return JSON.parse(users);
    } catch (error) {
      console.error("Error reading users:", error);
      return [];
    }
  } 

  async updateUser(userId, userData) {
    const users = await this.readUsers();
    const index = users.findIndex((user) => user.id === userId);

    if (index !== -1) {
      users[index] = { ...users[index], ...userData };
      return fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
    } else {
      throw new Error(`User with ID ${userId} not found.`);
    }
  }

  async deleteUser(userId) {
    const users = await this.readUsers();
    const filteredUsers = users.filter((user) => user.id !== userId);
    return fs.writeFile(this.filePath, JSON.stringify(filteredUsers, null, 2));
  }
}

module.exports = UserService;
