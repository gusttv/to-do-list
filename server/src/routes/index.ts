import express from 'express';
import { taskController } from '../controllers/task.controller';

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.updateTask);
router.get('/tasks/:id', taskController.getTask);


export default router;