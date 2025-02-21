import "./ParametrItem.css";

function ParametrItem({ name, value, unit, isHead }) {

  if (isHead) {
    return (
        <div className="parametr-head">
          <div className="parametr-head__name">{name}</div>
          <div className="parametr-item__value">{value}</div>
          <div className="parametr-item__unit">{unit}</div>
        </div>
    );
  }
  return (
    <div className="parametr-item">
      <div className="parametr-item__name">{name}</div>
      <div className="parametr-item__value">{value}</div>
      <div className="parametr-item__unit">{unit}</div>
    </div>
  );
}

export default ParametrItem;
