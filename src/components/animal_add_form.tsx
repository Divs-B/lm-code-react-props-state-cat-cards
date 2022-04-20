interface AnimalAddProps {
  textInputValue: {
    name: string;
    species: string;
    favFoods: string;
    birthYear: number;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnimalAddForm: React.FC<AnimalAddProps> = ({
  textInputValue,
  onChange,
  onSubmit,
}) => {
  return (
    <form className="mt-2">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        id="name"
        value={textInputValue.name}
        onChange={onChange}
      />
      <label htmlFor="species">Species</label>
      <input
        type="text"
        className="form-control"
        placeholder="Species"
        id="species"
        value={textInputValue.species}
        onChange={onChange}
      />
      <label htmlFor="favFoods">favFoods</label>
      <input
        type="text"
        className="form-control"
        placeholder="favFoods"
        id="favFoods"
        value={textInputValue.favFoods}
        onChange={onChange}
      />
      <label htmlFor="birthYear">birthYear</label>
      <input
        type="text"
        className="form-control"
        placeholder="birthYear"
        id="birthYear"
        value={textInputValue.birthYear}
        onChange={onChange}
      />
      <button className="btn btn-primary mt-2" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AnimalAddForm;
