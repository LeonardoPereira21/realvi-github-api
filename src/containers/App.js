import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import UserSearch from '../components/UserSearch';
import RepoList from '../components/RepoList';
import CommitList from '../components/CommitList';
import {getOrderedRepos, getGithubUsername, getErrorMessage,getOrderedCommits} from '../selectors';
import {searchUser, updateUser, searchCommit} from '../actionCreators';
import {bindActionCreators} from 'redux';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class App extends Component {
  render() {
    let {
      repos,
      commits,
      githubUsername,
      updateUser,
      searchUser,
      errorMessage,
      searchCommit
    } = this.props;
    return (
      <Router>
        <div>
          <Card>
            <CardContent>
              <UserSearch value={githubUsername} onChange={updateUser} onSearch={searchUser} />
              {errorMessage && (
                <h1>{errorMessage}</h1>
              )}
              <RepoList repos={repos} onSelect={searchCommit} />
              <CommitList commits={commits} />
            </CardContent>
          </Card>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: getOrderedRepos(state),
    commits: getOrderedCommits(state),
    githubUsername: getGithubUsername(state),
    errorMessage: getErrorMessage(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateUser, searchUser, searchCommit}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
