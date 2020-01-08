import {
  SEARCH_USER,
  UPDATE_USER,
  ADD_REPOS,
  ADD_REPOS_FAILURE,
  ADD_COMMITS,
  ADD_COMMITS_FAILURE
} from '../actions';

export default function Repos(state = {
  repoOrder: [],
}, action) {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        searchedUsername: action.payload,
      }
    case UPDATE_USER:
      return {
        ...state,
        githubUsername: action.payload,
      }
    case ADD_REPOS:
      return {
        ...state,
        errorMessage: null,
        repos: action.payload.reduce((previous, current) => (
          { ...previous, [current.id]: current }
        ), {}),
        repoOrder: action.payload.sort((first, second) => {
          if (first.name > second.name)
            return 1;
          if (first.name < second.name)
            return -1;
          return 0;
        }).map((value) => value.id)
      }
    case ADD_REPOS_FAILURE:
      return {
        ...state,
        repos: {},
        repoOrder: [],
        errorMessage: action.payload
      }
    case ADD_COMMITS:
      return {
        ...state,
        errorMessage: null,
        commits: action.payload
      }
    case ADD_COMMITS_FAILURE:
      return {
        ...state,
        commits: {},
        errorMessage: action.payload
      }
    default:
      return state;
  }
}
