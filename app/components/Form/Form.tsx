interface FormProps {
  actionFunction?: () => void;
  customClasses?: string;
  fields: Array<{
    label?: string;
    placeholder?: string;
    type: string;
    name: string;
    customClasses: string;
  }>;
  buttons?: React.ReactNode[];
}

const Form = ({
  actionFunction,
  customClasses,
  fields,
  buttons,
}: FormProps) => {
  return (
    <>
      <form action={actionFunction} className={`${customClasses}`}>
        {fields.map((Fld, _) => (
          <>
            {Fld.label && <label htmlFor={Fld.name}>{Fld.label}</label>}
            <input
              type={Fld.type}
              name={Fld.name}
              className={`${Fld.customClasses}`}
              placeholder={Fld.placeholder}
            />
          </>
        ))}
        <div className="flex gap-1 justify-end">
          {buttons?.map((Btn, index) => (
            <div key={index}>{Btn}</div>
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
