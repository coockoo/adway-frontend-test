import React from 'react';
import { connect } from 'react-redux';

import s from './styles.less';
import { actions } from '../../redux';

function Landing ({ redirect }) {
  return (
    <div className={s.page}>
      <div className={s.companyLogo}>TELE2</div>
      <div className={s.title}>
        Front-End developer – Comviq Join squad
      </div>
      <div className={s.tags}>
        <div className={s.tag}>Tele 2</div>
        <div className={s.tag}>Sweeden</div>
        <div className={s.tag}>Full-time</div>
      </div>
      <div className={s.separator}></div>

      <div className={s.block}>
        <h2 className={s.heading}>Role Description</h2>
        <p className={s.description}>
          As a Front-End developer within the Comviq Join squad
          you will be responsible for building great customer
          experiences. The squad support new cusomers...
        </p>
        <div className={s.showMore}>Show More -></div>
      </div>


      <div className={s.block}>
        <h2 className={s.heading}>Benefits</h2>
        <ul className={s.benefits}>
          <li>We invest in our people</li>
          <li>Next gen telecom company</li>
          <li>State of the art IT stack</li>
        </ul>
      </div>

      <button className={s.applyButton} onClick={() => redirect('form')}>
        Apply now
      </button>
    </div>
  );
}

export default connect(
  null,
  actions
)(Landing);
