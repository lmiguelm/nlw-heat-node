import { serverHttp } from './app';

const PORT = process.env.APPLICATION_PORT;

serverHttp.listen(PORT, () => console.log(`Server runnin on port ${PORT}`));
