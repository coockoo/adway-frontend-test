import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import s from './styles.less';
import { actions } from '../../redux';

function Landing ({ fetchJob, redirect, job }) {
  useEffect(() => {
    fetchJob();
  }, []);

  let content;

  if (job) {
    content = (
      <div className={s.page}>
        <div className={s.companyLogo}>{job.logo}</div>
        <div className={s.title}>{job.title}</div>
        <div className={s.tags}>
          <div className={s.tag}>{job.company}</div>
          <div className={s.tag}>{job.location}</div>
          <div className={s.tag}>{job.type}</div>
        </div>
        <div className={s.separator}></div>

        <div className={s.block}>
          <h2 className={s.heading}>Role Description</h2>
          <p className={s.description}>{job.description}</p>
          <div className={s.showMore}>Show More -></div>
        </div>


        <div className={s.block}>
          <h2 className={s.heading}>Benefits</h2>
          <ul className={s.benefits}>
            {job.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <button className={s.applyButton} onClick={() => redirect('form')}>
          Apply now
        </button>
      </div>
    );
  } else {
    content = (
      <div className={s.page}>
        <div>Loading...</div>
      </div>
    );
  }
  return content;
}

export default connect(
  (state) => ({ job: state.job }),
  actions
)(Landing);
