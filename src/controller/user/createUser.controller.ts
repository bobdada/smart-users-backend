import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "../../../src/services/user/createUser.service";

export class CreateUserController {
  private createUserService: CreateUserService;

  constructor() {
    this.createUserService = new CreateUserService();
  }

  async invoke(req: Request, res: Response, next: NextFunction) {
    const request = req.body;
    try {
      // call service here

      const users = await this.createUserService.invoke(request);

      res.status(201).json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }
}
