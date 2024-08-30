# README

A classic to-do app, but built with Next.js to learn and explore this framework. This app is considering to have:

- A main page that displays all the notes in a list and a button named "Create note"
- Notes can be:

  - deleted
  - re-sorted
  - marked as completed

- When notes are updated they will be updated in the data base
- A MongoDB data base will be used.

## TODO

- Data base shall be dockerized, in the meantime we will use a local database
- Full app shall be dockerized
- Create a backend service to translate the note to German before saving the note in the data base. This service will use **ChatGPT API**

## Documenting creation process

1. Create the project `npx create-next-app@latest todo-app`
2. Create the repository and push the changes in _main_ branch
3. Create _develop_ branch from _main_ and the create _create-ui_ branch from _develop_
4. Create folder structure using **Chat GPT** to avoid messing my head.
5. Move _global.css_ to _styles_ folder
   - Remove all content from stylesheet except _tailwind_ imports
   - Create font.ts file and import font from Google (these fonts are out of the box in Vercel)
6. Create **TodoItem** and **TodoList** components
7. Remove all content from /app/page.tsx and import **TodoList** in this file
   - Layout file does not call componet from page so there is nothing to do here but call new font and clean file. Also added Tailwind class to set body black

## Run app

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```bash
/todo-app
│
├── /app
│   ├── /notes
│   │   ├── page.tsx             # Page to display all notes
│   │   └── create-note.tsx      # Page with form to create a new note
│   ├── /components
│   │   ├── /Todo
│   │   │   ├── TodoList.tsx      # Component to list all todos
│   │   │   ├── TodoItem.tsx      # Component for individual todo item
│   │   │   └── index.ts          # Barrel file to export Todo components
│   │   ├── /Form
│   │   │   ├── Form.tsx          # Form component to create a new note
│   │   │   └── index.ts          # Barrel file to export Form component
│   │   ├── /Button
│   │   │   ├── Button.tsx        # Reusable Button component
│   │   │   └── index.ts          # Barrel file to export Button component
│   │   └── index.ts              # Central export file for all components
│   ├── /types
│   │   └── todo.ts               # TypeScript types for Todo app
│   ├── /lib
│   │   ├── mongodb.ts            # MongoDB connection utility
│   └── /styles
│       └── globals.css           # Global styles
│
├── /pages
│   ├── /api
│   │   ├── /notes
│   │   │   ├── index.ts          # API route to handle CRUD operations for notes
│   │   │   └── [id].ts           # API route to handle operations on a specific note
│   └── _app.tsx                  # Custom App component to manage global styles and state
│
├── /public                       # Public assets like images, icons, etc.
│
├── /node_modules                 # Node.js modules
│
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── next.config.js                # Next.js configuration

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## References

- [Learn Next.js 13 With This One Project](https://www.youtube.com/watch?v=NgayZAuTgwM&t=472s)

- [Next.js 13 - The Basics](https://www.youtube.com/watch?v=__mSgDEOyv8)
