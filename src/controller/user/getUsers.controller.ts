import { NextFunction, Request, Response } from "express";
import { GetAllUsersService } from "../../services/user/getUsers.service";

export class GetAllUsersController {
  private getAllUsersService: GetAllUsersService;

  constructor() {
    this.getAllUsersService = new GetAllUsersService();
  }

  async invoke(req: Request, res: Response, next: NextFunction) {
    const request = req.body;

    try {
      // call service here
      const users = await this.getAllUsersService.invoke();

      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        data: [],
        error: error,
        message: error.message,
      });
      next(error);
    }
  }
}
