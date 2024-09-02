import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      switch (req.method) {
        case 'GET': {
          const notes = await prisma.note.findMany(); // Fetch all notes
          res.status(200).json(notes);
          break;
        }
        case 'POST': {
          const { id, description } = req.body;
          const newNote = await prisma.note.create({
            data: { id, description },
          });
          res.status(201).json(newNote);
          break;
        }
        default:
          res.setHeader('Allow', ['GET', 'POST']);
          res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  }