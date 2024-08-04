import { NextFunction, Request, Response } from "express";
import { GetUserByIdService } from "../../services/user/getUserById.service";

export class GetUserByIdController {
  private getUserByIdService: GetUserByIdService;

  constructor() {
    this.getUserByIdService = new GetUserByIdService();
  }

  async invoke(req: Request, res: Response, next: NextFunction) {
    try {
      // call service here
      const user = await this.getUserByIdService.invoke(req.params.id);

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        data: {},
        error: error,
      });
      next(error);
    }
  }
}
