import { useState } from "react";
import Input from "../ui/fields/Input";
import Textarea from "../ui/fields/Textarea";
import { BsArrowRight } from "react-icons/bs";

const CommentBox = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const reset = () => {
    setFormValues({
      fullName: "",
      email: "",
      comment: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
    reset();
  };
  return (
    <form className="custom-input" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-4">
            <Input
              type="text"
              className="form-control rounded-0"
              placeholder="Full Name"
              handleChange={handleInputChange}
              name="fullName"
              value={formValues.fullName}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-4">
            <Input
              type="email"
              className="form-control rounded-0"
              placeholder="Email"
              handleChange={handleInputChange}
              name="email"
              value={formValues.email}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="mb-4">
            <Textarea
              handleChange={handleInputChange}
              name="comment"
              value={formValues.comment}
              className="form-control rounded-0"
            />
          </div>
        </div>
      </div>

      <div className="submit-form">
        <button type="submit" className="theme-btn border-0">
          ADD COMMENT
          <BsArrowRight className="ms-2" size={25} />
        </button>
      </div>
    </form>
  );
};

export default CommentBox;
