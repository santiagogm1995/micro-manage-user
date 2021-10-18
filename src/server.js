import express from 'express';
import aConfig  from './config/config.json';
import userRoutes from './routes/userRoutes.js'
const app = express();
let config = null;

if (process.env.ENV == undefined) {
  config= aConfig.find((elemt) => elemt.env == 'dev');
}

app.use(userRoutes);

app.listen(config.prop.port, () => {
  console.log(`Example app listening at http://localhost:${config.prop.port}`);
});

export default app;