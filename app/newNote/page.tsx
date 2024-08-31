import { Form } from "./../components/Form";

const inputs = [
  {
    type: "text",
    name: "title",
    customClasses:
      "border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100",
  },
];

const Page = () => {
  return (
    <div>
      <h1>Create new note</h1>
      {<Form customClasses="flex gap-2 flex-col" fields={inputs} />}
    </div>
  );
};

export default Page;
