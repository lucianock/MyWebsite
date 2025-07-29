import { useTranslation } from '@/hooks/useTranslation';

const ContactInfoItem = ({ Icon, title, data1, data2 }) => {
  const { t } = useTranslation();

  return (
    <div className="info-item">
      <div className="icon">{Icon}</div>
      <h3 className="title">{t(title)}</h3>
      <p>{data1}</p>
      <p>{data2}</p>
    </div>
  );
};

export default ContactInfoItem;
