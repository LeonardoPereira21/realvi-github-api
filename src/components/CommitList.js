import React, { PropTypes } from 'react';
import CommitPreview from './CommitPreview';
import { Route } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';

const CommitList = (props) => {
    console.log(props.commits);
    return (
        <div>
            <List>
                {props.commits.map((item, index) => (
                    <ListItem button key={item.id}>
                        <CommitPreview {...item} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
};

CommitList.propTypes = {
    commits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
}

CommitList.defaultProps = {
    commits: [],
}

export default CommitList;
