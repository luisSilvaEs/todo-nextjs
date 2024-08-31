interface FormProps {
  actionFunction?: () => void;
  customClasses?: string;
  fields: Array<{
    label?: string;
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
              className={`${customClasses}`}
            />
          </>
        ))}
        <div className="flex gap-1 justify-end">
          {/*buttons.map( Btn, _ ) => (

            )*/}
        </div>
      </form>
    </>
  );
};

export default Form;
