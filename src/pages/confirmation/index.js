import React from 'react';
import { connect } from 'react-redux';

function Confirmation({ job }) {
  return (
    <div>
      Yay! Youv&#39;e applied to &#34;{job.title}&#34;! This is just a simple confirmation window
      with job title in it.
    </div>
  );
}

export default connect((state) => ({ job: state.job }))(Confirmation);
