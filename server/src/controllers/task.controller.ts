import { Request, Response } from 'express';
import prisma from '../prisma/prisma';

class TaskController {
  public async getAll(req: Request, res: Response): Promise<void> {

    const tasks = await prisma.task.findMany();
    res.json(tasks);

  }

  public async createTask(req: Request, res: Response): Promise<void> {
    const { title } = req.body;

    const createdTask = await prisma.task.create({
      data: {
        title
      },
    });

    res.json({ insertId: createdTask.id });
  }

  public async deleteTask(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const removedTask = await prisma.task.delete({
      where: {
        id,
      },
    });

    res.json(removedTask);
  }

  public async updateTask(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const { title } = req.body;

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });

    res.json(updatedTask);
  }

  public async getTask(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    res.json(task);
  }
  
}

const taskController = new TaskController();
export { taskController };
