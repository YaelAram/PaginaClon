import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';

config();

import { credentialsRouter } from './v1/routes/credentials';

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas V1
app.use('/api/v1/credentials', credentialsRouter);

app.listen(PORT, () =>
  console.log(`Listening at: http://localhost:${PORT}/api/v1/`)
);
