import { useState, useRef } from 'react';
import Input from '../ui/fields/Input';
import Textarea from '../ui/fields/Textarea';
import { contactInfo } from '@/staticData/home/home';
import { BsArrowRight } from 'react-icons/bs';
import ContactInfoItem from './ContactInfoItem';
import { useTranslation } from '@/hooks/useTranslation';
import { trackContactForm } from '@/components/shared/AnalyticsEvents';

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const { t } = useTranslation();

  const { fullName, email, subject, message } = formValues;

  const reset = () => {
    setFormValues({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formValues', formValues);

    // Trackear el envío del formulario
    trackContactForm(formValues);

    // reset after form submit
    reset();
  };

  // Ref for the hidden submit button
  const submitButtonRef = useRef(null);

  const handleCustomSubmit = () => {
    // Trigger the hidden submit button
    submitButtonRef.current.click();
  };

  return (
    <div className="contact" data-title="Contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span className="bottom-border">{t('sections.contact')}</span>
          </h2>
        </div>

        <div className="row align-items-lg-center">
          <div className="col-lg-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group form-floating">
                  <Input
                    placeholder={t('form.fullName')}
                    label={t('form.fullName')}
                    handleChange={handleChange}
                    name="fullName"
                    value={fullName}
                  />
                </div>
                <div className="form-group form-floating">
                  <Input
                    type="email"
                    placeholder={t('form.emailAddress')}
                    label={t('form.emailAddress')}
                    handleChange={handleChange}
                    name="email"
                    value={email}
                  />
                </div>
                <div className="form-group form-floating">
                  <Input
                    placeholder={t('form.subject')}
                    label={t('form.subject')}
                    handleChange={handleChange}
                    name="subject"
                    value={subject}
                  />
                </div>
                <div className="form-group form-floating">
                  <Textarea
                    label={t('form.yourMessage')}
                    handleChange={handleChange}
                    name="message"
                    value={message}
                  />
                </div>
                <div className="form-group form-floating">
                  {/* Hidden submit button */}
                  <button
                    type="submit"
                    className="theme-btn border-0"
                    style={{ display: 'none' }}
                    ref={submitButtonRef}
                  >
                    {t('form.sendMessage')}
                  </button>
                  {/* Custom submit button */}
                  <button
                    type="button"
                    className="theme-btn border-0"
                    onClick={handleCustomSubmit}
                  >
                    {t('form.sendMessage')} <BsArrowRight className="ms-2" size={25} />
                  </button>
                </div>
              </form>
              <button 
                className="whatsapp-button whatsapp-animate" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 24px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  marginTop: '16px',
                  gap: '10px',
                }}
                onClick={() => {
                  const whatsappMessage = t('common.language') === 'en'
                    ? "Hello Luciano, I saw your profile and I'm interested in talking with you."
                    : "Hola Luciano, vi tu perfil y estoy interesado en hablar contigo.";
                  const whatsappUrl = `https://wa.me/543416589951?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                {t('common.chat')}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="whatsapp-icon" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-info">
              {contactInfo?.map((item) => (
                <ContactInfoItem key={item?.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
