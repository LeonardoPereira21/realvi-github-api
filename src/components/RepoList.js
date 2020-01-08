import React, {PropTypes} from 'react';
import RepoPreview from './RepoPreview';
import {Route} from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';

const RepoList = (props) => (
  <div>
    <List>
      {props.repos.map((item, index) => (
        <ListItem button key={item.id} onClick={()=> props.onSelect(item.title)}>
          <RepoPreview {...item} />
        </ListItem>
      ))}
    </List>
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
}

RepoList.defaultProps = {
  repos: [],
}

export default RepoList;
