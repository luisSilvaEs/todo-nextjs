import { Form } from "./../components/Form";
import { Button } from "./../components/Button";

const buttons = [
  <Button label="Create" url="/" customClasses="buttonGlobal" />,
  <Button label="Cancel" url=".." customClasses="buttonGlobal" />,
];

const inputs = [
  {
    type: "text",
    placeholder: "Write your note here...",
    name: "title",
    customClasses:
      "border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100",
  },
];
const Page = () => {
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      {
        <Form
          customClasses="flex gap-2 flex-col"
          fields={inputs}
          buttons={buttons}
        />
      }
    </div>
  );
};

export default Page;
