import { Router } from 'express';

import {
  googleCredentials,
  queryCredentials,
  studentCredentials,
} from '../controllers/credentials';
import {
  validateGoogleUserInfo,
  validateStudentInfo,
} from '../middlewares/validateData';

export const credentialsRouter = Router();

credentialsRouter.post('/google', [validateGoogleUserInfo], googleCredentials);
credentialsRouter.post('/unam', [validateStudentInfo], studentCredentials);
credentialsRouter.get('/query', queryCredentials);
