import "./ParametrBlock.css";

function ParametrBlock({ name }) {
  return (
    <div className="parametr-block">
      <div className="parametr-block__body">{name}</div>
    </div>
  );
}

export default ParametrBlock;
