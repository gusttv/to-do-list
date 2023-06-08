import express from 'express';
import routes from './routes';
import cors  from 'cors';


class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api', routes);
  }
}

export default new App().app;