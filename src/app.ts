import 'dotenv/config';
import express from 'express';

import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes);

const port = process.env.APPLICATION_PORT;

app.listen(port, () => console.log(`Server runnin on port ${port}`));
