import { useState, useRef } from 'react';
import Input from '../ui/fields/Input';
import Textarea from '../ui/fields/Textarea';
import { contactInfo } from '@/staticData/home/home';
import { BsArrowRight } from 'react-icons/bs';
import ContactInfoItem from './ContactInfoItem';

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

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
            <span>Contáctame</span>
          </h2>
        </div>

        <div className="row align-items-lg-center">
          <div className="col-lg-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group form-floating">
                  <Input
                    placeholder="Nombre Completo"
                    label="Nombre Completo"
                    handleChange={handleChange}
                    name="fullName"
                    value={fullName}
                  />
                </div>
                <div className="form-group form-floating">
                  <Input
                    type="email"
                    placeholder="Dirección de Email"
                    label="Dirección de Email"
                    handleChange={handleChange}
                    name="email"
                    value={email}
                  />
                </div>
                <div className="form-group form-floating">
                  <Input
                    placeholder="Asunto"
                    label="Asunto"
                    handleChange={handleChange}
                    name="subject"
                    value={subject}
                  />
                </div>
                <div className="form-group form-floating">
                  <Textarea
                    label="Tu Mensaje"
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
                    ENVIAR MENSAJE
                  </button>
                  {/* Custom submit button */}
                  <button
                    type="button"
                    className="theme-btn border-0"
                    onClick={handleCustomSubmit}
                  >
                    ENVIAR MENSAJE <BsArrowRight className="ms-2" size={25} />
                  </button>
                </div>
              </form>
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
