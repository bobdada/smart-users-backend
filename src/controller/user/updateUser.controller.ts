import { NextFunction, Request, Response } from "express";
import { UpdateUserService } from "../../services/user/updateUser.service";

export class UpdateUserController {
  private updateUserService: UpdateUserService;

  constructor() {
    this.updateUserService = new UpdateUserService();
  }

  invoke(req: Request, res: Response, next: NextFunction) {
    const userData = req.body;
    const userId = req.params.id;

    try {
      // call service here
      this.updateUserService.invoke(userId, userData);
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        error: error,
      });
      next(error);
    }
  }
}
