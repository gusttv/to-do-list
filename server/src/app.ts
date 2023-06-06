import express from 'express';
import routes from './routes';


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
    
  }

  private routes(): void {
    this.app.use('/api', routes);
  }
}

export default new App().app;