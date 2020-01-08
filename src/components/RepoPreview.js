import React, {PropTypes} from 'react';

const RepoPreview = (props) => (
    <div><a href={props.url} target="_blank">{props.title}</a></div>
);

RepoPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default RepoPreview;
