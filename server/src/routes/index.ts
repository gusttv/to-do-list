import express from 'express';
import { taskController } from '../controllers/task.controller';
import { validate } from '../middlewares/middleware';

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', validate.fieldTitle ,taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', validate.fieldTitle ,taskController.updateTask);
router.get('/tasks/:id', taskController.getTask);


export default router;