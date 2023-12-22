// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (
      <p
        className="Person__age"
        style={{
          display: person.age ? 'block' : 'none',
        }}
      >
        {`I am ${person.age}`}
      </p>
      )}
      <p className="Person__partner">
        {person.isMarried === true

          ? `${person.partnerName} is my ${partner}`
          : `I am not married`
        }
      </p>
    </section>
  );
};
