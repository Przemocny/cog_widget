import React, { useState, useEffect } from "react";
import bg from "../../../images/contact_background.jpg";
import logo from '../../../images/localhost_sam.png'
import {initialState, postSendContact} from "./logic"
import { ReactComponent as EmailImg } from '../../../images/mail_outline-24px.svg'
import "./contact.scss";

const log = ev => {
  console.log("log", ev.target.value);
};

const TextInput = ({
  onChange = log,
  onEnter = false,
  placeholder = "placeholder text",
  value = "value",
  type = "text",
  readOnly = false,
  disabled = false
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control form-control-sm"
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        required={true}
        onKeyPress={ev => {
          if (ev.key === "Enter") {
            onEnter && onEnter(ev.target.value);
          }
        }}
        value={value}
      />
    </div>
  );
};

const Form = () => {
  const [state, setState] = useState(initialState);

  return (
    <div>
      <div className="form">
        <h2 className="form-title"><strong>Interested?</strong></h2>
        <h6 className="form-text">Please, leave your contact information</h6>
        <TextInput
        disabled={true}
        placeholder="Your e-mail adress"
        type="e-mail"
        onChange={ev => {
          setState({
            ...state,
            message:{
              customer_email: ev.target.value
            }
          });
        }}
        value={state.message.customer_email}
      />

      <button
        type="submit"
        disabled={true}
        onClick={() => {
         postSendContact(setState)(state);
        }}
      >
        <EmailImg/> Send
      </button>
      </div>
     
    </div>
  );
};

const Company = () => {
  return (
    <div className="form company">
          <img src={logo} />
          <h2 className="form-title">Localhost Group</h2>
          <h6 className="form-text"><a href="mailto:contact@localhost-group.com"
          target="_blank">
            contact@localhost-group.com
          </a></h6>
          <h6 className="form-text">Lublin ul.Chmielna 13a/22, Poland</h6>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-1 mb-4">
        </div>
          <div className="col-md-4 mb-4">
              <Company />
          </div>
          <div className="col-md-5 mb-4">
            <Form />
          </div>
          <div className="col-md-2 mb-4">
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
