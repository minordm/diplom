import "./AlertPanel.css";

function AlertPanel() {


  return (
    <div className="main">
      <div className="block_alert">
        <div className="name">ТРЕВОГА</div>
        <div className="message"></div>
      </div>
      <div className="block_alert">
        <div className="name">ПРЕДУПРЕЖДЕНИЕ</div>
        <div className="message"></div>
      </div>
    </div>
  );
}

export default AlertPanel;
