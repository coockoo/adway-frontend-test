import React, { useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import s from './styles.less';

import { actions } from '../../redux';

function Input(props) {
  const hasValue = !!props.value;
  const hasError = !!props.error;
  return (
    <div className={s.inputBlock}>
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        className={cn([s.input, !hasError && hasValue && s.inputFull])}
        value={props.value || ''}
        onChange={(e) => props.onChange(e.target.value || null)}
      />
      {!hasError && hasValue && <span className={s.tick}>&#10004;</span>}
      {hasError && <span className={s.error}>{props.error}</span>}
    </div>
  );
}

function useValidatedState(data, validate) {
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState({});

  function update(field, value) {
    const validationMessage = validate(field, value, formData);
    if (validationMessage) {
      setErrors({ ...errors, [field]: validationMessage });
    } else {
      setErrors({ ...errors, [field]: null });
    }
    setFormData({ ...formData, [field]: value });
  }

  return [formData, update, errors];
}

function validate(field, value) {
  if (field === 'firstname') {
    if (!value || value.length < 2) {
      return 'Please, enter first name';
    }
  }
  if (field === 'lastname') {
    if (!value || value.length < 2) {
      return 'Please, enter last name';
    }
  }
  if (field === 'email') {
    if (!value) {
      return 'Please, enter email';
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.match(re)) {
      return 'Please, enter valid email';
    }
  }
  if (field === 'mobilephone') {
    if (!value) {
      return 'Please enter the phone';
    }
    if (!value.match(/^[0-9]{10,13}$/)) {
      return 'Please, enter valid phone number';
    }
  }
}

function Form(props) {
  const [formData, setFormData, errors] = useValidatedState(props.formData, validate);

  return (
    <div className={s.page}>
      <div className={cn([s.panel, s.row])}>
        <div className={s.photo} />
        <div className={s.photoSide}>
          <h2 className={s.photoUse}>Using LinkedIn photo</h2>
          <p className={s.changePhoto}>Change profile photo -></p>
        </div>
      </div>
      <div className={s.panel}>
        <h2 className={s.heading}>Fill in about yourself</h2>
        <Input
          placeholder="First Name"
          value={formData.firstname}
          onChange={(value) => setFormData('firstname', value)}
          error={errors.firstname}
        />
        <Input
          placeholder="Last Name"
          value={formData.lastname}
          onChange={(value) => setFormData('lastname', value)}
          error={errors.lastname}
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(value) => setFormData('email', value)}
          error={errors.email}
        />
        <Input
          placeholder="Mobile"
          value={formData.mobilephone}
          onChange={(value) => setFormData('mobilephone', value)}
          error={errors.mobilephone}
        />
      </div>
      <button type="button" className={s.submitBtn} onClick={() => props.submit(formData)}>
        Continue
      </button>
    </div>
  );
}

export default connect(
  (state) => ({ formData: state.formData }),
  actions
)(Form);
