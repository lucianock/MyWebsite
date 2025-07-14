const ContactInfoItem = ({ Icon, title, data1, data2 }) => {
  return (
    <div className="info-item">
      <div className="icon">{Icon}</div>
      <h3 className="title">{title}</h3>
      <p>{data1}</p>
      <p>{data2}</p>
    </div>
  );
};

export default ContactInfoItem;
