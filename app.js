import express from 'express';
import bodyParser from 'body-parser'
import { env } from 'process';
import router from './router/urlRouter.js';



const app = express();
const PORT = env.PORT || 3000;

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});