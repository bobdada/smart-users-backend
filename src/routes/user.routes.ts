import { Router } from "express";
import * as controllers from "../controller/index";

const {
  CreateUserController,
  DeleteUserController,
  GetUserByIdController,
  GetAllUsersController,
  UpdateUserController,
} = controllers;

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const deleteUsersController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const getUserByIdController = new GetUserByIdController();

export const router = Router();

// Route definitions
router.post("/users", createUserController.invoke.bind(createUserController));
router.get("/users", getAllUsersController.invoke.bind(getAllUsersController));
router.get(
  "/users/:id",
  getUserByIdController.invoke.bind(getUserByIdController)
);
router.delete(
  "/users/:id",
  deleteUsersController.invoke.bind(deleteUsersController)
);
router.patch(
  "/users/:id",
  updateUserController.invoke.bind(updateUserController)
);

exports = router;
