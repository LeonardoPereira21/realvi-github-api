import React, {Component, PropTypes} from 'react';
import {Route} from 'react-router-dom'
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const UserSearch = (props) => (
  <div>
    <FormControl>
      <Input placeholder="username" type="text" value={props.value} onChange={(evt) => props.onChange(evt.target.value)} />
      <Button onClick={(evt) => props.onSearch(props.value)} raised color="accent">Search</Button>
    </FormControl>
  </div>
)

UserSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

UserSearch.defaultProps = {
  value: '',
  onSearch: (value) => {
  },
  onChange: (value) => {
  },
}

export default UserSearch;
