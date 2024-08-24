import { NextFunction, Request, Response } from 'express';
import { safeParse } from 'valibot';

import { GoogleUserInfoSchema, StudentInfoSchema } from '../interfaces/types';

export const validateGoogleUserInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, otp } = req.body;
  const info = safeParse(GoogleUserInfoSchema, { email, password, otp });

  if (!info.success) {
    return res
      .status(400)
      .json({ ok: false, issues: info.issues.map(({ message }) => message) });
  }

  next();
};

export const validateStudentInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { no, password } = req.body;
  const info = safeParse(StudentInfoSchema, { no, password });

  if (!info.success) {
    return res
      .status(400)
      .json({ ok: false, issues: info.issues.map(({ message }) => message) });
  }

  next();
};
