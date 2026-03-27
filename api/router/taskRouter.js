import { Router } from "express";
import { Task } from "../database/entities/task.model.js";

const router = Router();

const tasks = [
  {
    id: 1,
    title: "Learn Vue",
    done: false,
    favorite: false,
  },
  {
    id: 2,
    title: "Learn Pinia",
    done: false,
    favorite: false,
  },
];

router.get("/get-all", (req, res) => {
  res.json(tasks);
});

router.post("/add", async (req, res) => {
  const title = req.body.task;

  await Task.create({
    title,
  });

  tasks.push(title);
  console.log(tasks);
  res.send({ success: true });
});

router.delete("/delete", async (req, res) => {
  const id = req.body.id;

  await Task.destroy({ where: { id } });
  tasks.splice(
    tasks.findIndex((task) => task.id === id),
    1,
  );
  res.send({ success: true });
});

router.put("/update-title", async (req, res) => {
  const id = req.body.id;
  const newTitle = req.body.newTitle;

  await Task.update(
    { title: newTitle },
    {
      where: {
        id,
      },
    },
  );
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].title = newTitle;
  res.send({ success: true });
});

router.put("/update-favorite", (req, res) => {
  const id = req.body.id;
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].favorite = !tasks[index].favorite;
  res.send({ success: true });
});

router.put("/update-done", (req, res) => {
  const id = req.body.id;
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].done = !tasks[index].done;
  res.send({ success: true });
});

export default router;
