import { IPerson } from 'typings/person';
import express from 'express';

export const personRouter = express.Router();

const personsStore:Array<IPerson> = [];

personRouter.get('/:id', (req, res) => {
  const person = personsStore.find(({ id }) => id.toString() === req.params.id);

  if (person) {
    res.send(person);
  }

  return res.status(404).send({ status: 'not found 1' });
});

personRouter.post('/create', (req, res) => {
  const { name, age } = req.body;

  const convertedAge = age && typeof +age === 'number' ? +age : null;
  const convertedName = typeof name === 'string' ? name : null;

  if (!convertedName || !convertedAge) {
    return res.status(400).send({ status: 'wrong data' });
  }

  const person = { id: personsStore.length, name: convertedName, age: convertedAge };

  personsStore.push(person);

  res.status(201).send(person);
});
