import React, { useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import s from './styles.less';

import { actions } from '../../redux';

function Input (props) {
  const hasValue = !!props.value;
  return (
    <div className={s.inputBlock}>
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        className={cn([s.input, !!hasValue && s.inputFull])}
        value={props.value || ''}
        onChange={(e) => props.onChange(e.target.value || null)}
      />
      {hasValue && <span className={s.tick}>&#10004;</span>}
    </div>
  );
}

function Form (props) {

  const [formData, setFormData] = useState(props.formData);

  return (
    <div className={s.page}>
      <div className={cn([s.panel, s.row])}>
        <div className={s.photo}></div>
        <div className={s.photoSide}>
          <h2 className={s.photoUse}>Using LinkedIn photo</h2>
          <p className={s.changePhoto}>Change profile photo -></p>
        </div>
      </div>
      <div className={s.panel}>
        <h2 className={s.heading}>Fill in about yourself</h2>
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />
        <Input
          placeholder="Surname"
          value={formData.surname}
          onChange={(value) => setFormData({ ...formData, surname: value })}
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />
        <Input
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(value) => setFormData({ ...formData, mobile: value })}
        />
      </div>
      <button
        type="button"
        className={s.submitBtn}
        onClick={() => props.submit(formData)}
      >
        Continue
      </button>
    </div>
  );
}

export default connect(
  state => ({ formData: state.formData }),
  actions,
)(Form);
