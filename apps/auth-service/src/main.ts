import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../../../packages/error-handler/error-middleware';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: ["Authorization", "content-type"], // Adjust this to your client's origin
  credentials: true, // Allow cookies to be sent
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API'});
});

app.use(errorMiddleware);

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', (err) => {
    console.log("server Error:", err)
});