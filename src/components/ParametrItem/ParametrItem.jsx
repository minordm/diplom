import './ParametrItem.css';

function ParametrItem({ name, value, unit }) {
    return (
      <div className="parametr-item">
        <div className="parametr-item__name">{name}</div>
        <div className="parametr-item__value">{value}</div>
        <div className="parametr-item__unit">{unit}</div>
      </div>
    );
}

export default ParametrItem;