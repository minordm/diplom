import "/Users/minor.dm/prog/js/react/diplom/src/components/ParametrItem/ParametrItem.css";

function ParametrHead({ name, value, unit }) {
  return (
    <div className="parametr-head">
      <div className="parametr-head__name">{name}</div>
      <div className="parametr-item__value">{value}</div>
      <div className="parametr-item__unit">{unit}</div>
    </div>
  );
}

export default ParametrHead;
