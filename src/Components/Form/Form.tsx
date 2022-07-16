import React from 'react';

type Input = {
  name: string; 
  type: string; 
  placeholder: string; 
}

interface props {
  handleSumbit: (e: React.FormEvent) => void;
  setData: React.Dispatch<React.SetStateAction<any>>;
  formInputs: { 
    inputs: Input[], 
    submit: { value: string; }; 
  };
};

const Form = ({handleSumbit, formInputs, setData}: props) => {

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>, name: any) => {
    setData((data: any) => ({
        ...data,
        [name]: e.target.value,
    }))
  }

  return (
    <div className="Form">
      <form onSubmit={handleSumbit}>

        {Object.keys(formInputs.inputs).map((key, index: number) => {
          return (
            <div key={index}>
              <input type={formInputs.inputs[index].type} onChange={(e) => updateForm(e, formInputs.inputs[index].name)} placeholder=' ' />
              <label>{formInputs.inputs[index].placeholder}</label>
            </div>
          );
        })}
        <input type="submit" className="submit" value={formInputs.submit.value} />
      </form>
    </div>
  );
}

export default Form;
