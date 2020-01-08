import React, {Component} from 'react';
import { createSelector } from 'reselect';

const getRepos = state => state.repos;
const getCommits = state => state.commits;
const getReposOrder = state => state.repoOrder;

export const getOrderedRepos = createSelector(
  [getRepos, getReposOrder],
  (repos, reposOrder) => reposOrder
    .map((key) => ({
      ...repos[key],
      id: key,
      title: repos[key].name,
      url: repos[key].html_url,
    }))
)
export const getOrderedCommits = createSelector(
  [getCommits],
  (commits) => Object.keys(commits)
    .map((key) => ({
      ...commits[key],
      id: key,
      title: commits[key].commit.message,
      url: commits[key].html_url,
    }))
)

export const getGithubUsername = state => state.githubUsername;
export const getSearchedUsername = state => state.searchedUsername;
export const getErrorMessage = state => state.errorMessage;
