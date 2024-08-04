import { NextFunction, Request, Response } from "express";
import { DeleteUserService } from "../../services/user/deleteUser.service";

export class DeleteUserController {
  private deleteUserService: DeleteUserService;

  constructor() {
    this.deleteUserService = new DeleteUserService();
  }

  async invoke(req: Request, res: Response, next: NextFunction) {
    const request = req.body;
    try {
      // call service here
      await this.deleteUserService.invoke(req.params.id);
      res.status(201).json({
        success: true,
      });
    } catch (error) {
      res.status(201).json({
        success: false,
        error: error,
      });
      next(error);
    }
  }
}
