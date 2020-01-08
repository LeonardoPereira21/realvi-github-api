import React, {PropTypes} from 'react';

const CommitPreview = (props) => (
    <div><a href={props.url} target="_blank">{props.title}</a></div>
);

CommitPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CommitPreview;
