import { Request, Response, NextFunction } from "express";
import { db } from "../db/initDb";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email } = req.body;

    const user = await db.user.create({
      data: {
        name,
        email,
      },
    });

    return res.json({
      msg: "user created",
      user,
    });
  } catch (e) {
    console.log("error 1", e);
    next(e);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await db.user.findMany({
      include: {
        articles: true,
      },
    });

    return res.json({ msg: "sucess", users });
  } catch (e) {
    next(e);
  }
};

const userService = {
  create,
  getAll,
};

export { userService };
