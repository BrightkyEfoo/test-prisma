import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const validate =
  (schema: z.AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validate object
      const objToValidate = {
        body: req.body,
        query: req.query,
        params: req.params,
      };

      schema.parse(objToValidate);
      next()
    } catch (e) {
      return res.status(400).json({ msg: "La validation a echoue" , error : e });
    }
  };

export { validate };
