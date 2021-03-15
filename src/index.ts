import path from 'path';
import dotenv from 'dotenv';

console.log('App is started');
const ROOT_DIRECTORY = path.resolve(__dirname, '..');

const envFile = path.join(ROOT_DIRECTORY, '.env');
const dotEnvResult = dotenv.config({
  path: envFile,
});
if (dotEnvResult.error) {
  const { error } = dotEnvResult;
  console.log(`Minor dotenv error: ${error?.message}`);
}
