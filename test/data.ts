import {
  Api_Github_Repo,
  Api_Github_Search_User,
  Api_Github_User
} from '../types';

export const profile: Api_Github_Search_User = {
  login: 'ncherra',
  id: 59145274,
  node_id: 'MDQ6VXNlcjU5MTQ1Mjc0',
  avatar_url: 'https://avatars.githubusercontent.com/u/59145274?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/ncherra',
  html_url: 'https://github.com/ncherra',
  followers_url: 'https://api.github.com/users/ncherra/followers',
  following_url: 'https://api.github.com/users/ncherra/following{/other_user}',
  gists_url: 'https://api.github.com/users/ncherra/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/ncherra/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/ncherra/subscriptions',
  organizations_url: 'https://api.github.com/users/ncherra/orgs',
  repos_url: 'https://api.github.com/users/ncherra/repos',
  events_url: 'https://api.github.com/users/ncherra/events{/privacy}',
  received_events_url: 'https://api.github.com/users/ncherra/received_events',
  type: 'User',
  site_admin: false,
  score: 1
};
export const repos: Api_Github_Repo[] = [
  {
    id: 473574682,
    node_id: 'R_kgDOHDotGg',
    name: 'about',
    full_name: 'javier/about',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/about',
    description: 'Developer story and public cv synchronised via manfred',
    fork: false,
    url: 'https://api.github.com/repos/javier/about',
    forks_url: 'https://api.github.com/repos/javier/about/forks',
    keys_url: 'https://api.github.com/repos/javier/about/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/about/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/about/teams',
    hooks_url: 'https://api.github.com/repos/javier/about/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/about/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/about/events',
    assignees_url: 'https://api.github.com/repos/javier/about/assignees{/user}',
    branches_url: 'https://api.github.com/repos/javier/about/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/about/tags',
    blobs_url: 'https://api.github.com/repos/javier/about/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/about/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/about/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/about/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/about/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/about/languages',
    stargazers_url: 'https://api.github.com/repos/javier/about/stargazers',
    contributors_url: 'https://api.github.com/repos/javier/about/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/about/subscribers',
    subscription_url: 'https://api.github.com/repos/javier/about/subscription',
    commits_url: 'https://api.github.com/repos/javier/about/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/about/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/javier/about/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/about/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/javier/about/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/about/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/about/merges',
    archive_url:
      'https://api.github.com/repos/javier/about/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/about/downloads',
    issues_url: 'https://api.github.com/repos/javier/about/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/about/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/about/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/about/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/about/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/about/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/about/deployments',
    created_at: '2022-03-24T11:22:00Z',
    updated_at: '2022-03-24T11:22:00Z',
    pushed_at: '2022-05-06T16:11:47Z',
    git_url: 'git://github.com/javier/about.git',
    ssh_url: 'git@github.com:javier/about.git',
    clone_url: 'https://github.com/javier/about.git',
    svn_url: 'https://github.com/javier/about',
    homepage: null,
    size: 19,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'unlicense',
      name: 'The Unlicense',
      spdx_id: 'Unlicense',
      url: 'https://api.github.com/licenses/unlicense',
      node_id: 'MDc6TGljZW5zZTE1'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main'
  },
  {
    id: 284717678,
    node_id: 'MDEwOlJlcG9zaXRvcnkyODQ3MTc2Nzg=',
    name: 'amazon-dynamodb-developer-guide',
    full_name: 'javier/amazon-dynamodb-developer-guide',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/amazon-dynamodb-developer-guide',
    description:
      'The open source version of the Amazon DynamoDB docs. You can submit feedback & requests for changes by submitting issues in this repo or by making proposed changes & submitting a pull request.',
    fork: true,
    url: 'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide',
    forks_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/forks',
    keys_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/teams',
    hooks_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/events',
    assignees_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/tags',
    blobs_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/subscription',
    commits_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/merges',
    archive_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/downloads',
    issues_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/amazon-dynamodb-developer-guide/deployments',
    created_at: '2020-08-03T14:10:28Z',
    updated_at: '2020-08-03T14:10:29Z',
    pushed_at: '2020-08-03T14:19:09Z',
    git_url: 'git://github.com/javier/amazon-dynamodb-developer-guide.git',
    ssh_url: 'git@github.com:javier/amazon-dynamodb-developer-guide.git',
    clone_url: 'https://github.com/javier/amazon-dynamodb-developer-guide.git',
    svn_url: 'https://github.com/javier/amazon-dynamodb-developer-guide',
    homepage: null,
    size: 2208,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 196432897,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTY0MzI4OTc=',
    name: 'amazon-kinesis-analytics-taxi-consumer',
    full_name: 'javier/amazon-kinesis-analytics-taxi-consumer',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url:
      'https://github.com/javier/amazon-kinesis-analytics-taxi-consumer',
    description:
      'Sample Apache Flink application that can be deployed to Kinesis Analytics for Java. It reads taxi events from a Kinesis data stream, processes and aggregates them, and ingests the result to an Amazon Elasticsearch Service cluster for visualization with Kibana.',
    fork: true,
    url: 'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer',
    forks_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/forks',
    keys_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/teams',
    hooks_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/events',
    assignees_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/tags',
    blobs_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/subscription',
    commits_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/merges',
    archive_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/downloads',
    issues_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/amazon-kinesis-analytics-taxi-consumer/deployments',
    created_at: '2019-07-11T16:49:48Z',
    updated_at: '2021-06-15T21:47:20Z',
    pushed_at: '2019-06-25T08:49:45Z',
    git_url:
      'git://github.com/javier/amazon-kinesis-analytics-taxi-consumer.git',
    ssh_url: 'git@github.com:javier/amazon-kinesis-analytics-taxi-consumer.git',
    clone_url:
      'https://github.com/javier/amazon-kinesis-analytics-taxi-consumer.git',
    svn_url: 'https://github.com/javier/amazon-kinesis-analytics-taxi-consumer',
    homepage: '',
    size: 687,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Java',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master'
  },
  {
    id: 195866670,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTU4NjY2NzA=',
    name: 'amazon-kinesis-data-analytics-java-examples',
    full_name: 'javier/amazon-kinesis-data-analytics-java-examples',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url:
      'https://github.com/javier/amazon-kinesis-data-analytics-java-examples',
    description:
      'Example Java applications for Kinesis Data Analytics, demonstrating sources, sinks, and operators.',
    fork: true,
    url: 'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples',
    forks_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/forks',
    keys_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/teams',
    hooks_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/events',
    assignees_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/tags',
    blobs_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/subscription',
    commits_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/merges',
    archive_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/downloads',
    issues_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/amazon-kinesis-data-analytics-java-examples/deployments',
    created_at: '2019-07-08T18:32:36Z',
    updated_at: '2019-07-08T18:32:39Z',
    pushed_at: '2019-04-30T21:16:26Z',
    git_url:
      'git://github.com/javier/amazon-kinesis-data-analytics-java-examples.git',
    ssh_url:
      'git@github.com:javier/amazon-kinesis-data-analytics-java-examples.git',
    clone_url:
      'https://github.com/javier/amazon-kinesis-data-analytics-java-examples.git',
    svn_url:
      'https://github.com/javier/amazon-kinesis-data-analytics-java-examples',
    homepage: null,
    size: 15,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 278687039,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNzg2ODcwMzk=',
    name: 'amazon-sagemaker-examples',
    full_name: 'javier/amazon-sagemaker-examples',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/amazon-sagemaker-examples',
    description:
      'Example notebooks that show how to apply machine learning, deep learning and reinforcement learning in Amazon SageMaker',
    fork: true,
    url: 'https://api.github.com/repos/javier/amazon-sagemaker-examples',
    forks_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/forks',
    keys_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/teams',
    hooks_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/events',
    assignees_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/tags',
    blobs_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/subscription',
    commits_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/merges',
    archive_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/downloads',
    issues_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/amazon-sagemaker-examples/deployments',
    created_at: '2020-07-10T16:52:56Z',
    updated_at: '2020-09-30T19:32:32Z',
    pushed_at: '2020-12-17T23:37:13Z',
    git_url: 'git://github.com/javier/amazon-sagemaker-examples.git',
    ssh_url: 'git@github.com:javier/amazon-sagemaker-examples.git',
    clone_url: 'https://github.com/javier/amazon-sagemaker-examples.git',
    svn_url: 'https://github.com/javier/amazon-sagemaker-examples',
    homepage: '',
    size: 332049,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 376968471,
    node_id: 'MDEwOlJlcG9zaXRvcnkzNzY5Njg0NzE=',
    name: 'amplify-datastore-adminui-base',
    full_name: 'javier/amplify-datastore-adminui-base',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/amplify-datastore-adminui-base',
    description:
      'Amplify demo. Heavily inspired (ahem) by mavi888 repo with the same name',
    fork: false,
    url: 'https://api.github.com/repos/javier/amplify-datastore-adminui-base',
    forks_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/forks',
    keys_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/teams',
    hooks_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/events',
    assignees_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/tags',
    blobs_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/subscription',
    commits_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/merges',
    archive_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/downloads',
    issues_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/amplify-datastore-adminui-base/deployments',
    created_at: '2021-06-14T22:09:48Z',
    updated_at: '2022-10-13T07:15:25Z',
    pushed_at: '2021-06-15T16:57:16Z',
    git_url: 'git://github.com/javier/amplify-datastore-adminui-base.git',
    ssh_url: 'git@github.com:javier/amplify-datastore-adminui-base.git',
    clone_url: 'https://github.com/javier/amplify-datastore-adminui-base.git',
    svn_url: 'https://github.com/javier/amplify-datastore-adminui-base',
    homepage: null,
    size: 1024,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main'
  },
  {
    id: 271846955,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNzE4NDY5NTU=',
    name: 'amplify-ios-workshop',
    full_name: 'javier/amplify-ios-workshop',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/amplify-ios-workshop',
    description: 'Repo for Amplify iOS Workshop created for re:Invent 2019',
    fork: true,
    url: 'https://api.github.com/repos/javier/amplify-ios-workshop',
    forks_url: 'https://api.github.com/repos/javier/amplify-ios-workshop/forks',
    keys_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/amplify-ios-workshop/teams',
    hooks_url: 'https://api.github.com/repos/javier/amplify-ios-workshop/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/events',
    assignees_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/amplify-ios-workshop/tags',
    blobs_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/subscription',
    commits_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/merges',
    archive_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/downloads',
    issues_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/amplify-ios-workshop/deployments',
    created_at: '2020-06-12T16:48:06Z',
    updated_at: '2020-06-12T16:48:07Z',
    pushed_at: '2020-06-11T10:56:52Z',
    git_url: 'git://github.com/javier/amplify-ios-workshop.git',
    ssh_url: 'git@github.com:javier/amplify-ios-workshop.git',
    clone_url: 'https://github.com/javier/amplify-ios-workshop.git',
    svn_url: 'https://github.com/javier/amplify-ios-workshop',
    homepage: '',
    size: 47264,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit-0',
      name: 'MIT No Attribution',
      spdx_id: 'MIT-0',
      url: 'https://api.github.com/licenses/mit-0',
      node_id: 'MDc6TGljZW5zZTQx'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 192955458,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTI5NTU0NTg=',
    name: 'Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank',
    full_name:
      'javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url:
      'https://github.com/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank',
    description:
      'Artificial Neural Network on Churn Modeling Dataset, built from scratch using Keras in Python. This Helps a bank to predict whether a particular customer would be leaving the bank in the future or not(Binary Classification)',
    fork: true,
    url: 'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank',
    forks_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/forks',
    keys_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/teams',
    hooks_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/events',
    assignees_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/tags',
    blobs_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/subscription',
    commits_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/merges',
    archive_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/downloads',
    issues_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank/deployments',
    created_at: '2019-06-20T16:42:03Z',
    updated_at: '2019-06-20T16:42:06Z',
    pushed_at: '2018-06-17T17:46:06Z',
    git_url:
      'git://github.com/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank.git',
    ssh_url:
      'git@github.com:javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank.git',
    clone_url:
      'https://github.com/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank.git',
    svn_url:
      'https://github.com/javier/Artificial-Neural-Network-on-Churn-Modeling-Dataset-for-a-Bank',
    homepage: null,
    size: 259,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 431063227,
    node_id: 'R_kgDOGbGAuw',
    name: 'aws-fis-demo',
    full_name: 'javier/aws-fis-demo',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/aws-fis-demo',
    description:
      "This project contains FIS experiment templates and supporting files that you can deploy with the AWS CLI. These are demos 'Getting started with AWS Fault Injection Simulator' talk.",
    fork: true,
    url: 'https://api.github.com/repos/javier/aws-fis-demo',
    forks_url: 'https://api.github.com/repos/javier/aws-fis-demo/forks',
    keys_url: 'https://api.github.com/repos/javier/aws-fis-demo/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/aws-fis-demo/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/aws-fis-demo/teams',
    hooks_url: 'https://api.github.com/repos/javier/aws-fis-demo/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/aws-fis-demo/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/aws-fis-demo/events',
    assignees_url:
      'https://api.github.com/repos/javier/aws-fis-demo/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/aws-fis-demo/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/aws-fis-demo/tags',
    blobs_url:
      'https://api.github.com/repos/javier/aws-fis-demo/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/aws-fis-demo/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/aws-fis-demo/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/aws-fis-demo/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/aws-fis-demo/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/aws-fis-demo/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/aws-fis-demo/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/aws-fis-demo/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/aws-fis-demo/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/aws-fis-demo/subscription',
    commits_url:
      'https://api.github.com/repos/javier/aws-fis-demo/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/aws-fis-demo/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/aws-fis-demo/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/aws-fis-demo/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/aws-fis-demo/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/aws-fis-demo/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/aws-fis-demo/merges',
    archive_url:
      'https://api.github.com/repos/javier/aws-fis-demo/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/aws-fis-demo/downloads',
    issues_url:
      'https://api.github.com/repos/javier/aws-fis-demo/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/aws-fis-demo/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/aws-fis-demo/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/aws-fis-demo/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/aws-fis-demo/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/aws-fis-demo/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/aws-fis-demo/deployments',
    created_at: '2021-11-23T10:50:51Z',
    updated_at: '2021-11-23T10:50:53Z',
    pushed_at: '2021-11-23T10:52:07Z',
    git_url: 'git://github.com/javier/aws-fis-demo.git',
    ssh_url: 'git@github.com:javier/aws-fis-demo.git',
    clone_url: 'https://github.com/javier/aws-fis-demo.git',
    svn_url: 'https://github.com/javier/aws-fis-demo',
    homepage: '',
    size: 2650,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main'
  },
  {
    id: 265185147,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNjUxODUxNDc=',
    name: 'aws-sagemaker-pytorch-shop-by-style',
    full_name: 'javier/aws-sagemaker-pytorch-shop-by-style',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/aws-sagemaker-pytorch-shop-by-style',
    description:
      "A Personalized 'Shop-by-Style' Experience via PyTorch on Amazon SageMaker and Amazon Neptune",
    fork: true,
    url: 'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style',
    forks_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/forks',
    keys_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/teams',
    hooks_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/events',
    assignees_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/tags',
    blobs_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/subscription',
    commits_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/merges',
    archive_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/downloads',
    issues_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/aws-sagemaker-pytorch-shop-by-style/deployments',
    created_at: '2020-05-19T08:08:18Z',
    updated_at: '2020-05-19T08:08:20Z',
    pushed_at: '2019-09-06T03:13:33Z',
    git_url: 'git://github.com/javier/aws-sagemaker-pytorch-shop-by-style.git',
    ssh_url: 'git@github.com:javier/aws-sagemaker-pytorch-shop-by-style.git',
    clone_url:
      'https://github.com/javier/aws-sagemaker-pytorch-shop-by-style.git',
    svn_url: 'https://github.com/javier/aws-sagemaker-pytorch-shop-by-style',
    homepage: null,
    size: 6446,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 121439471,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjE0Mzk0NzE=',
    name: 'beam',
    full_name: 'javier/beam',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/beam',
    description: 'Apache Beam',
    fork: true,
    url: 'https://api.github.com/repos/javier/beam',
    forks_url: 'https://api.github.com/repos/javier/beam/forks',
    keys_url: 'https://api.github.com/repos/javier/beam/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/beam/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/beam/teams',
    hooks_url: 'https://api.github.com/repos/javier/beam/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/beam/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/beam/events',
    assignees_url: 'https://api.github.com/repos/javier/beam/assignees{/user}',
    branches_url: 'https://api.github.com/repos/javier/beam/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/beam/tags',
    blobs_url: 'https://api.github.com/repos/javier/beam/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/beam/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/beam/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/beam/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/beam/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/beam/languages',
    stargazers_url: 'https://api.github.com/repos/javier/beam/stargazers',
    contributors_url: 'https://api.github.com/repos/javier/beam/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/beam/subscribers',
    subscription_url: 'https://api.github.com/repos/javier/beam/subscription',
    commits_url: 'https://api.github.com/repos/javier/beam/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/beam/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/javier/beam/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/beam/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/javier/beam/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/beam/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/beam/merges',
    archive_url:
      'https://api.github.com/repos/javier/beam/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/beam/downloads',
    issues_url: 'https://api.github.com/repos/javier/beam/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/beam/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/beam/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/beam/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/beam/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/beam/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/beam/deployments',
    created_at: '2018-02-13T21:36:40Z',
    updated_at: '2018-02-13T21:36:53Z',
    pushed_at: '2018-02-13T21:39:29Z',
    git_url: 'git://github.com/javier/beam.git',
    ssh_url: 'git@github.com:javier/beam.git',
    clone_url: 'https://github.com/javier/beam.git',
    svn_url: 'https://github.com/javier/beam',
    homepage: '',
    size: 52668,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 57239167,
    node_id: 'MDEwOlJlcG9zaXRvcnk1NzIzOTE2Nw==',
    name: 'bigquery-e2e',
    full_name: 'javier/bigquery-e2e',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/bigquery-e2e',
    description: 'Automatically exported from code.google.com/p/bigquery-e2e',
    fork: false,
    url: 'https://api.github.com/repos/javier/bigquery-e2e',
    forks_url: 'https://api.github.com/repos/javier/bigquery-e2e/forks',
    keys_url: 'https://api.github.com/repos/javier/bigquery-e2e/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/bigquery-e2e/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/bigquery-e2e/teams',
    hooks_url: 'https://api.github.com/repos/javier/bigquery-e2e/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/bigquery-e2e/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/bigquery-e2e/events',
    assignees_url:
      'https://api.github.com/repos/javier/bigquery-e2e/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/bigquery-e2e/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/bigquery-e2e/tags',
    blobs_url:
      'https://api.github.com/repos/javier/bigquery-e2e/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/bigquery-e2e/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/bigquery-e2e/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/bigquery-e2e/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/bigquery-e2e/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/bigquery-e2e/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/bigquery-e2e/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/bigquery-e2e/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/bigquery-e2e/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/bigquery-e2e/subscription',
    commits_url:
      'https://api.github.com/repos/javier/bigquery-e2e/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/bigquery-e2e/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/bigquery-e2e/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/bigquery-e2e/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/bigquery-e2e/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/bigquery-e2e/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/bigquery-e2e/merges',
    archive_url:
      'https://api.github.com/repos/javier/bigquery-e2e/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/bigquery-e2e/downloads',
    issues_url:
      'https://api.github.com/repos/javier/bigquery-e2e/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/bigquery-e2e/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/bigquery-e2e/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/bigquery-e2e/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/bigquery-e2e/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/bigquery-e2e/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/bigquery-e2e/deployments',
    created_at: '2016-04-27T19:06:32Z',
    updated_at: '2016-04-27T19:07:19Z',
    pushed_at: '2016-04-27T19:07:13Z',
    git_url: 'git://github.com/javier/bigquery-e2e.git',
    ssh_url: 'git@github.com:javier/bigquery-e2e.git',
    clone_url: 'https://github.com/javier/bigquery-e2e.git',
    svn_url: 'https://github.com/javier/bigquery-e2e',
    homepage: null,
    size: 3334,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 271253,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNzEyNTM=',
    name: 'bowline',
    full_name: 'javier/bowline',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/bowline',
    description: 'Ruby/JS GUI and Binding framework for Titanium',
    fork: true,
    url: 'https://api.github.com/repos/javier/bowline',
    forks_url: 'https://api.github.com/repos/javier/bowline/forks',
    keys_url: 'https://api.github.com/repos/javier/bowline/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/bowline/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/bowline/teams',
    hooks_url: 'https://api.github.com/repos/javier/bowline/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/bowline/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/bowline/events',
    assignees_url:
      'https://api.github.com/repos/javier/bowline/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/bowline/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/bowline/tags',
    blobs_url: 'https://api.github.com/repos/javier/bowline/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/bowline/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/bowline/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/bowline/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/bowline/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/bowline/languages',
    stargazers_url: 'https://api.github.com/repos/javier/bowline/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/bowline/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/bowline/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/bowline/subscription',
    commits_url: 'https://api.github.com/repos/javier/bowline/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/bowline/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/bowline/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/bowline/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/bowline/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/bowline/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/bowline/merges',
    archive_url:
      'https://api.github.com/repos/javier/bowline/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/bowline/downloads',
    issues_url: 'https://api.github.com/repos/javier/bowline/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/bowline/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/bowline/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/bowline/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/bowline/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/bowline/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/bowline/deployments',
    created_at: '2009-08-07T02:14:27Z',
    updated_at: '2014-04-25T17:03:12Z',
    pushed_at: '2009-08-05T22:22:03Z',
    git_url: 'git://github.com/javier/bowline.git',
    ssh_url: 'git@github.com:javier/bowline.git',
    clone_url: 'https://github.com/javier/bowline.git',
    svn_url: 'https://github.com/javier/bowline',
    homepage: '',
    size: 18045,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Ruby',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master'
  },
  {
    id: 285020356,
    node_id: 'MDEwOlJlcG9zaXRvcnkyODUwMjAzNTY=',
    name: 'clickstream-consumer-for-apache-kafka',
    full_name: 'javier/clickstream-consumer-for-apache-kafka',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/clickstream-consumer-for-apache-kafka',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka',
    forks_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/forks',
    keys_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/teams',
    hooks_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/events',
    assignees_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/tags',
    blobs_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/subscription',
    commits_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/merges',
    archive_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/downloads',
    issues_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/clickstream-consumer-for-apache-kafka/deployments',
    created_at: '2020-08-04T15:25:08Z',
    updated_at: '2020-10-13T17:03:12Z',
    pushed_at: '2020-07-16T15:49:26Z',
    git_url:
      'git://github.com/javier/clickstream-consumer-for-apache-kafka.git',
    ssh_url: 'git@github.com:javier/clickstream-consumer-for-apache-kafka.git',
    clone_url:
      'https://github.com/javier/clickstream-consumer-for-apache-kafka.git',
    svn_url: 'https://github.com/javier/clickstream-consumer-for-apache-kafka',
    homepage: null,
    size: 22,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit-0',
      name: 'MIT No Attribution',
      spdx_id: 'MIT-0',
      url: 'https://api.github.com/licenses/mit-0',
      node_id: 'MDc6TGljZW5zZTQx'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 285020237,
    node_id: 'MDEwOlJlcG9zaXRvcnkyODUwMjAyMzc=',
    name: 'clickstream-producer-for-apache-kafka',
    full_name: 'javier/clickstream-producer-for-apache-kafka',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/clickstream-producer-for-apache-kafka',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka',
    forks_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/forks',
    keys_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/teams',
    hooks_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/events',
    assignees_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/tags',
    blobs_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/subscription',
    commits_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/merges',
    archive_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/downloads',
    issues_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/clickstream-producer-for-apache-kafka/deployments',
    created_at: '2020-08-04T15:24:45Z',
    updated_at: '2020-10-13T17:00:43Z',
    pushed_at: '2020-07-27T16:45:49Z',
    git_url:
      'git://github.com/javier/clickstream-producer-for-apache-kafka.git',
    ssh_url: 'git@github.com:javier/clickstream-producer-for-apache-kafka.git',
    clone_url:
      'https://github.com/javier/clickstream-producer-for-apache-kafka.git',
    svn_url: 'https://github.com/javier/clickstream-producer-for-apache-kafka',
    homepage: null,
    size: 18,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit-0',
      name: 'MIT No Attribution',
      spdx_id: 'MIT-0',
      url: 'https://api.github.com/licenses/mit-0',
      node_id: 'MDc6TGljZW5zZTQx'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 499081732,
    node_id: 'R_kgDOHb9iBA',
    name: 'coincap_kafka_questdb',
    full_name: 'javier/coincap_kafka_questdb',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/coincap_kafka_questdb',
    description:
      "This is a demo of a data pipeline that collects real time ETH data from coincap's API and stores it in questDB through Kafka",
    fork: true,
    url: 'https://api.github.com/repos/javier/coincap_kafka_questdb',
    forks_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/forks',
    keys_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/teams',
    hooks_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/events',
    assignees_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/coincap_kafka_questdb/tags',
    blobs_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/subscription',
    commits_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/merges',
    archive_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/downloads',
    issues_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/coincap_kafka_questdb/deployments',
    created_at: '2022-06-02T09:58:19Z',
    updated_at: '2022-03-24T08:34:17Z',
    pushed_at: '2022-06-02T09:59:57Z',
    git_url: 'git://github.com/javier/coincap_kafka_questdb.git',
    ssh_url: 'git@github.com:javier/coincap_kafka_questdb.git',
    clone_url: 'https://github.com/javier/coincap_kafka_questdb.git',
    svn_url: 'https://github.com/javier/coincap_kafka_questdb',
    homepage: null,
    size: 19,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main'
  },
  {
    id: 316575839,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMTY1NzU4Mzk=',
    name: 'comentando-con-la-comunidad',
    full_name: 'javier/comentando-con-la-comunidad',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/comentando-con-la-comunidad',
    description: 'sitio web con hugo para la serie comentando-con-la-comunidad',
    fork: false,
    url: 'https://api.github.com/repos/javier/comentando-con-la-comunidad',
    forks_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/forks',
    keys_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/teams',
    hooks_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/events',
    assignees_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/tags',
    blobs_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/subscription',
    commits_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/merges',
    archive_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/downloads',
    issues_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/comentando-con-la-comunidad/deployments',
    created_at: '2020-11-27T18:40:20Z',
    updated_at: '2020-11-27T18:44:58Z',
    pushed_at: '2020-11-27T18:44:56Z',
    git_url: 'git://github.com/javier/comentando-con-la-comunidad.git',
    ssh_url: 'git@github.com:javier/comentando-con-la-comunidad.git',
    clone_url: 'https://github.com/javier/comentando-con-la-comunidad.git',
    svn_url: 'https://github.com/javier/comentando-con-la-comunidad',
    homepage: null,
    size: 4684,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main'
  },
  {
    id: 49225282,
    node_id: 'MDEwOlJlcG9zaXRvcnk0OTIyNTI4Mg==',
    name: 'cp300-makefile',
    full_name: 'javier/cp300-makefile',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/cp300-makefile',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/javier/cp300-makefile',
    forks_url: 'https://api.github.com/repos/javier/cp300-makefile/forks',
    keys_url:
      'https://api.github.com/repos/javier/cp300-makefile/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/cp300-makefile/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/cp300-makefile/teams',
    hooks_url: 'https://api.github.com/repos/javier/cp300-makefile/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/cp300-makefile/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/cp300-makefile/events',
    assignees_url:
      'https://api.github.com/repos/javier/cp300-makefile/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/cp300-makefile/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/cp300-makefile/tags',
    blobs_url:
      'https://api.github.com/repos/javier/cp300-makefile/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/cp300-makefile/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/cp300-makefile/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/cp300-makefile/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/cp300-makefile/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/cp300-makefile/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/cp300-makefile/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/cp300-makefile/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/cp300-makefile/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/cp300-makefile/subscription',
    commits_url:
      'https://api.github.com/repos/javier/cp300-makefile/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/cp300-makefile/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/cp300-makefile/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/cp300-makefile/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/cp300-makefile/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/cp300-makefile/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/cp300-makefile/merges',
    archive_url:
      'https://api.github.com/repos/javier/cp300-makefile/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/cp300-makefile/downloads',
    issues_url:
      'https://api.github.com/repos/javier/cp300-makefile/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/cp300-makefile/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/cp300-makefile/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/cp300-makefile/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/cp300-makefile/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/cp300-makefile/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/cp300-makefile/deployments',
    created_at: '2016-01-07T19:19:49Z',
    updated_at: '2016-07-26T18:24:04Z',
    pushed_at: '2016-01-07T19:26:04Z',
    git_url: 'git://github.com/javier/cp300-makefile.git',
    ssh_url: 'git@github.com:javier/cp300-makefile.git',
    clone_url: 'https://github.com/javier/cp300-makefile.git',
    svn_url: 'https://github.com/javier/cp300-makefile',
    homepage: null,
    size: 9,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Makefile',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 52977287,
    node_id: 'MDEwOlJlcG9zaXRvcnk1Mjk3NzI4Nw==',
    name: 'cpo200-Google-Container-Registry',
    full_name: 'javier/cpo200-Google-Container-Registry',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/cpo200-Google-Container-Registry',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/javier/cpo200-Google-Container-Registry',
    forks_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/forks',
    keys_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/teams',
    hooks_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/events',
    assignees_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/tags',
    blobs_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/subscription',
    commits_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/merges',
    archive_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/downloads',
    issues_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/cpo200-Google-Container-Registry/deployments',
    created_at: '2016-03-02T16:17:18Z',
    updated_at: '2016-03-02T16:17:19Z',
    pushed_at: '2016-03-02T16:18:27Z',
    git_url: 'git://github.com/javier/cpo200-Google-Container-Registry.git',
    ssh_url: 'git@github.com:javier/cpo200-Google-Container-Registry.git',
    clone_url: 'https://github.com/javier/cpo200-Google-Container-Registry.git',
    svn_url: 'https://github.com/javier/cpo200-Google-Container-Registry',
    homepage: null,
    size: 10,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 447684,
    node_id: 'MDEwOlJlcG9zaXRvcnk0NDc2ODQ=',
    name: 'cramp',
    full_name: 'javier/cramp',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/cramp',
    description: 'Async Model and Controller layers',
    fork: true,
    url: 'https://api.github.com/repos/javier/cramp',
    forks_url: 'https://api.github.com/repos/javier/cramp/forks',
    keys_url: 'https://api.github.com/repos/javier/cramp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/cramp/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/cramp/teams',
    hooks_url: 'https://api.github.com/repos/javier/cramp/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/cramp/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/cramp/events',
    assignees_url: 'https://api.github.com/repos/javier/cramp/assignees{/user}',
    branches_url: 'https://api.github.com/repos/javier/cramp/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/cramp/tags',
    blobs_url: 'https://api.github.com/repos/javier/cramp/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/cramp/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/cramp/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/cramp/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/cramp/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/cramp/languages',
    stargazers_url: 'https://api.github.com/repos/javier/cramp/stargazers',
    contributors_url: 'https://api.github.com/repos/javier/cramp/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/cramp/subscribers',
    subscription_url: 'https://api.github.com/repos/javier/cramp/subscription',
    commits_url: 'https://api.github.com/repos/javier/cramp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/cramp/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/javier/cramp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/cramp/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/javier/cramp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/cramp/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/cramp/merges',
    archive_url:
      'https://api.github.com/repos/javier/cramp/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/cramp/downloads',
    issues_url: 'https://api.github.com/repos/javier/cramp/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/cramp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/cramp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/cramp/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/cramp/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/cramp/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/cramp/deployments',
    created_at: '2009-12-24T01:08:12Z',
    updated_at: '2013-10-08T10:59:29Z',
    pushed_at: '2009-12-23T23:25:29Z',
    git_url: 'git://github.com/javier/cramp.git',
    ssh_url: 'git@github.com:javier/cramp.git',
    clone_url: 'https://github.com/javier/cramp.git',
    svn_url: 'https://github.com/javier/cramp',
    homepage: 'http://m.onkey.org',
    size: 613,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'Ruby',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master'
  },
  {
    id: 53476045,
    node_id: 'MDEwOlJlcG9zaXRvcnk1MzQ3NjA0NQ==',
    name: 'DataflowPythonSDK',
    full_name: 'javier/DataflowPythonSDK',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/DataflowPythonSDK',
    description:
      'Google Cloud Dataflow provides a simple, powerful model for building both batch and streaming parallel data processing pipelines.',
    fork: true,
    url: 'https://api.github.com/repos/javier/DataflowPythonSDK',
    forks_url: 'https://api.github.com/repos/javier/DataflowPythonSDK/forks',
    keys_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/DataflowPythonSDK/teams',
    hooks_url: 'https://api.github.com/repos/javier/DataflowPythonSDK/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/DataflowPythonSDK/events',
    assignees_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/DataflowPythonSDK/tags',
    blobs_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/subscription',
    commits_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/DataflowPythonSDK/merges',
    archive_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/downloads',
    issues_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/DataflowPythonSDK/deployments',
    created_at: '2016-03-09T07:05:29Z',
    updated_at: '2016-03-09T07:05:31Z',
    pushed_at: '2016-03-03T07:25:39Z',
    git_url: 'git://github.com/javier/DataflowPythonSDK.git',
    ssh_url: 'git@github.com:javier/DataflowPythonSDK.git',
    clone_url: 'https://github.com/javier/DataflowPythonSDK.git',
    svn_url: 'https://github.com/javier/DataflowPythonSDK',
    homepage: 'http://cloud.google.com/dataflow',
    size: 398,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 47720840,
    node_id: 'MDEwOlJlcG9zaXRvcnk0NzcyMDg0MA==',
    name: 'examples-Python',
    full_name: 'javier/examples-Python',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/examples-Python',
    description:
      'Analysis examples based on the ISB-CGC hosted TCGA data, using Python and IPython Notebooks.',
    fork: true,
    url: 'https://api.github.com/repos/javier/examples-Python',
    forks_url: 'https://api.github.com/repos/javier/examples-Python/forks',
    keys_url:
      'https://api.github.com/repos/javier/examples-Python/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/examples-Python/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/examples-Python/teams',
    hooks_url: 'https://api.github.com/repos/javier/examples-Python/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/examples-Python/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/examples-Python/events',
    assignees_url:
      'https://api.github.com/repos/javier/examples-Python/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/examples-Python/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/examples-Python/tags',
    blobs_url:
      'https://api.github.com/repos/javier/examples-Python/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/examples-Python/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/examples-Python/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/examples-Python/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/examples-Python/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/examples-Python/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/examples-Python/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/examples-Python/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/examples-Python/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/examples-Python/subscription',
    commits_url:
      'https://api.github.com/repos/javier/examples-Python/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/examples-Python/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/examples-Python/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/examples-Python/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/examples-Python/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/examples-Python/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/examples-Python/merges',
    archive_url:
      'https://api.github.com/repos/javier/examples-Python/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/examples-Python/downloads',
    issues_url:
      'https://api.github.com/repos/javier/examples-Python/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/examples-Python/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/examples-Python/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/examples-Python/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/examples-Python/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/examples-Python/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/examples-Python/deployments',
    created_at: '2015-12-09T21:43:15Z',
    updated_at: '2015-12-09T21:43:16Z',
    pushed_at: '2015-12-08T03:07:54Z',
    git_url: 'git://github.com/javier/examples-Python.git',
    ssh_url: 'git@github.com:javier/examples-Python.git',
    clone_url: 'https://github.com/javier/examples-Python.git',
    svn_url: 'https://github.com/javier/examples-Python',
    homepage: null,
    size: 293,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Jupyter Notebook',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 195269744,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTUyNjk3NDQ=',
    name: 'first-step-functions',
    full_name: 'javier/first-step-functions',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/first-step-functions',
    description:
      'Sample AWS Step Functions application to get practice with SAM templates, Lambda functions, SNS topics and SQS queues.',
    fork: true,
    url: 'https://api.github.com/repos/javier/first-step-functions',
    forks_url: 'https://api.github.com/repos/javier/first-step-functions/forks',
    keys_url:
      'https://api.github.com/repos/javier/first-step-functions/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/first-step-functions/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/first-step-functions/teams',
    hooks_url: 'https://api.github.com/repos/javier/first-step-functions/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/first-step-functions/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/first-step-functions/events',
    assignees_url:
      'https://api.github.com/repos/javier/first-step-functions/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/first-step-functions/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/first-step-functions/tags',
    blobs_url:
      'https://api.github.com/repos/javier/first-step-functions/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/first-step-functions/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/first-step-functions/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/first-step-functions/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/first-step-functions/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/first-step-functions/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/first-step-functions/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/first-step-functions/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/first-step-functions/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/first-step-functions/subscription',
    commits_url:
      'https://api.github.com/repos/javier/first-step-functions/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/first-step-functions/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/first-step-functions/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/first-step-functions/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/first-step-functions/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/first-step-functions/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/first-step-functions/merges',
    archive_url:
      'https://api.github.com/repos/javier/first-step-functions/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/first-step-functions/downloads',
    issues_url:
      'https://api.github.com/repos/javier/first-step-functions/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/first-step-functions/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/first-step-functions/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/first-step-functions/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/first-step-functions/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/first-step-functions/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/first-step-functions/deployments',
    created_at: '2019-07-04T16:00:32Z',
    updated_at: '2019-07-04T16:00:34Z',
    pushed_at: '2019-07-04T16:57:00Z',
    git_url: 'git://github.com/javier/first-step-functions.git',
    ssh_url: 'git@github.com:javier/first-step-functions.git',
    clone_url: 'https://github.com/javier/first-step-functions.git',
    svn_url: 'https://github.com/javier/first-step-functions',
    homepage: '',
    size: 19,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 65019080,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NTAxOTA4MA==',
    name: 'gcloud_inventory',
    full_name: 'javier/gcloud_inventory',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/gcloud_inventory',
    description:
      'list all my google cloud resources, filtering out the ones that are costing me money',
    fork: false,
    url: 'https://api.github.com/repos/javier/gcloud_inventory',
    forks_url: 'https://api.github.com/repos/javier/gcloud_inventory/forks',
    keys_url:
      'https://api.github.com/repos/javier/gcloud_inventory/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/gcloud_inventory/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/gcloud_inventory/teams',
    hooks_url: 'https://api.github.com/repos/javier/gcloud_inventory/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/gcloud_inventory/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/gcloud_inventory/events',
    assignees_url:
      'https://api.github.com/repos/javier/gcloud_inventory/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/gcloud_inventory/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/gcloud_inventory/tags',
    blobs_url:
      'https://api.github.com/repos/javier/gcloud_inventory/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/gcloud_inventory/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/gcloud_inventory/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/gcloud_inventory/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/gcloud_inventory/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/gcloud_inventory/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/gcloud_inventory/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/gcloud_inventory/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/gcloud_inventory/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/gcloud_inventory/subscription',
    commits_url:
      'https://api.github.com/repos/javier/gcloud_inventory/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/gcloud_inventory/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/gcloud_inventory/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/gcloud_inventory/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/gcloud_inventory/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/gcloud_inventory/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/gcloud_inventory/merges',
    archive_url:
      'https://api.github.com/repos/javier/gcloud_inventory/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/gcloud_inventory/downloads',
    issues_url:
      'https://api.github.com/repos/javier/gcloud_inventory/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/gcloud_inventory/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/gcloud_inventory/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/gcloud_inventory/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/gcloud_inventory/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/gcloud_inventory/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/gcloud_inventory/deployments',
    created_at: '2016-08-05T13:05:48Z',
    updated_at: '2016-08-05T13:08:14Z',
    pushed_at: '2016-08-05T13:14:48Z',
    git_url: 'git://github.com/javier/gcloud_inventory.git',
    ssh_url: 'git@github.com:javier/gcloud_inventory.git',
    clone_url: 'https://github.com/javier/gcloud_inventory.git',
    svn_url: 'https://github.com/javier/gcloud_inventory',
    homepage: null,
    size: 2,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 736094,
    node_id: 'MDEwOlJlcG9zaXRvcnk3MzYwOTQ=',
    name: 'gli',
    full_name: 'javier/gli',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/gli',
    description:
      'Have fun making command-line Ruby apps with this easy to use DSL',
    fork: true,
    url: 'https://api.github.com/repos/javier/gli',
    forks_url: 'https://api.github.com/repos/javier/gli/forks',
    keys_url: 'https://api.github.com/repos/javier/gli/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/gli/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/gli/teams',
    hooks_url: 'https://api.github.com/repos/javier/gli/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/gli/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/gli/events',
    assignees_url: 'https://api.github.com/repos/javier/gli/assignees{/user}',
    branches_url: 'https://api.github.com/repos/javier/gli/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/gli/tags',
    blobs_url: 'https://api.github.com/repos/javier/gli/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/gli/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/gli/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/gli/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/gli/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/gli/languages',
    stargazers_url: 'https://api.github.com/repos/javier/gli/stargazers',
    contributors_url: 'https://api.github.com/repos/javier/gli/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/gli/subscribers',
    subscription_url: 'https://api.github.com/repos/javier/gli/subscription',
    commits_url: 'https://api.github.com/repos/javier/gli/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/gli/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/javier/gli/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/gli/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/javier/gli/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/gli/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/gli/merges',
    archive_url:
      'https://api.github.com/repos/javier/gli/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/gli/downloads',
    issues_url: 'https://api.github.com/repos/javier/gli/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/gli/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/gli/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/gli/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/gli/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/gli/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/gli/deployments',
    created_at: '2010-06-23T17:02:10Z',
    updated_at: '2019-06-21T23:40:46Z',
    pushed_at: '2010-06-12T20:09:25Z',
    git_url: 'git://github.com/javier/gli.git',
    ssh_url: 'git@github.com:javier/gli.git',
    clone_url: 'https://github.com/javier/gli.git',
    svn_url: 'https://github.com/javier/gli',
    homepage: 'http://davetron5000.github.com/gli',
    size: 492,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'Ruby',
    has_issues: false,
    has_projects: true,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master'
  },
  {
    id: 49594387,
    node_id: 'MDEwOlJlcG9zaXRvcnk0OTU5NDM4Nw==',
    name: 'goconf',
    full_name: 'javier/goconf',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/goconf',
    description: 'Conference manager on the cloud using Go and Google Cloud',
    fork: true,
    url: 'https://api.github.com/repos/javier/goconf',
    forks_url: 'https://api.github.com/repos/javier/goconf/forks',
    keys_url: 'https://api.github.com/repos/javier/goconf/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/goconf/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/goconf/teams',
    hooks_url: 'https://api.github.com/repos/javier/goconf/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/goconf/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/goconf/events',
    assignees_url:
      'https://api.github.com/repos/javier/goconf/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/goconf/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/goconf/tags',
    blobs_url: 'https://api.github.com/repos/javier/goconf/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/goconf/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/goconf/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/goconf/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/goconf/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/goconf/languages',
    stargazers_url: 'https://api.github.com/repos/javier/goconf/stargazers',
    contributors_url: 'https://api.github.com/repos/javier/goconf/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/goconf/subscribers',
    subscription_url: 'https://api.github.com/repos/javier/goconf/subscription',
    commits_url: 'https://api.github.com/repos/javier/goconf/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/goconf/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/goconf/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/goconf/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/javier/goconf/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/goconf/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/goconf/merges',
    archive_url:
      'https://api.github.com/repos/javier/goconf/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/goconf/downloads',
    issues_url: 'https://api.github.com/repos/javier/goconf/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/goconf/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/goconf/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/goconf/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/goconf/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/goconf/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/goconf/deployments',
    created_at: '2016-01-13T18:49:36Z',
    updated_at: '2016-01-13T18:49:36Z',
    pushed_at: '2013-10-05T00:04:09Z',
    git_url: 'git://github.com/javier/goconf.git',
    ssh_url: 'git@github.com:javier/goconf.git',
    clone_url: 'https://github.com/javier/goconf.git',
    svn_url: 'https://github.com/javier/goconf',
    homepage: null,
    size: 276,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Go',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 77550285,
    node_id: 'MDEwOlJlcG9zaXRvcnk3NzU1MDI4NQ==',
    name: 'google_timeline_parser',
    full_name: 'javier/google_timeline_parser',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/google_timeline_parser',
    description:
      'parse your google location history (timeline) after exporting from google takeout',
    fork: false,
    url: 'https://api.github.com/repos/javier/google_timeline_parser',
    forks_url:
      'https://api.github.com/repos/javier/google_timeline_parser/forks',
    keys_url:
      'https://api.github.com/repos/javier/google_timeline_parser/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/google_timeline_parser/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/google_timeline_parser/teams',
    hooks_url:
      'https://api.github.com/repos/javier/google_timeline_parser/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/google_timeline_parser/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/google_timeline_parser/events',
    assignees_url:
      'https://api.github.com/repos/javier/google_timeline_parser/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/google_timeline_parser/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/google_timeline_parser/tags',
    blobs_url:
      'https://api.github.com/repos/javier/google_timeline_parser/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/google_timeline_parser/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/google_timeline_parser/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/google_timeline_parser/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/google_timeline_parser/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/google_timeline_parser/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/google_timeline_parser/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/google_timeline_parser/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/google_timeline_parser/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/google_timeline_parser/subscription',
    commits_url:
      'https://api.github.com/repos/javier/google_timeline_parser/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/google_timeline_parser/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/google_timeline_parser/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/google_timeline_parser/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/google_timeline_parser/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/google_timeline_parser/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/google_timeline_parser/merges',
    archive_url:
      'https://api.github.com/repos/javier/google_timeline_parser/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/google_timeline_parser/downloads',
    issues_url:
      'https://api.github.com/repos/javier/google_timeline_parser/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/google_timeline_parser/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/google_timeline_parser/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/google_timeline_parser/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/google_timeline_parser/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/google_timeline_parser/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/google_timeline_parser/deployments',
    created_at: '2016-12-28T17:38:01Z',
    updated_at: '2021-12-30T20:55:46Z',
    pushed_at: '2018-01-16T12:06:25Z',
    git_url: 'git://github.com/javier/google_timeline_parser.git',
    ssh_url: 'git@github.com:javier/google_timeline_parser.git',
    clone_url: 'https://github.com/javier/google_timeline_parser.git',
    svn_url: 'https://github.com/javier/google_timeline_parser',
    homepage: null,
    size: 3,
    stargazers_count: 10,
    watchers_count: 10,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 10,
    default_branch: 'master'
  },
  {
    id: 438978124,
    node_id: 'R_kgDOGipGTA',
    name: 'haystack',
    full_name: 'javier/haystack',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/haystack',
    description:
      ':mag: Haystack is an open source NLP framework that leverages Transformer models. It enables developers to implement production-ready neural search, question answering, semantic document search and summarization for a wide range of applications.',
    fork: true,
    url: 'https://api.github.com/repos/javier/haystack',
    forks_url: 'https://api.github.com/repos/javier/haystack/forks',
    keys_url: 'https://api.github.com/repos/javier/haystack/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/haystack/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/haystack/teams',
    hooks_url: 'https://api.github.com/repos/javier/haystack/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/haystack/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/haystack/events',
    assignees_url:
      'https://api.github.com/repos/javier/haystack/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/haystack/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/haystack/tags',
    blobs_url: 'https://api.github.com/repos/javier/haystack/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/javier/haystack/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/javier/haystack/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/javier/haystack/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/javier/haystack/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/javier/haystack/languages',
    stargazers_url: 'https://api.github.com/repos/javier/haystack/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/haystack/contributors',
    subscribers_url: 'https://api.github.com/repos/javier/haystack/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/haystack/subscription',
    commits_url: 'https://api.github.com/repos/javier/haystack/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/haystack/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/haystack/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/haystack/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/haystack/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/haystack/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/haystack/merges',
    archive_url:
      'https://api.github.com/repos/javier/haystack/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/javier/haystack/downloads',
    issues_url: 'https://api.github.com/repos/javier/haystack/issues{/number}',
    pulls_url: 'https://api.github.com/repos/javier/haystack/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/haystack/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/haystack/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/javier/haystack/labels{/name}',
    releases_url: 'https://api.github.com/repos/javier/haystack/releases{/id}',
    deployments_url: 'https://api.github.com/repos/javier/haystack/deployments',
    created_at: '2021-12-16T12:16:46Z',
    updated_at: '2021-12-16T12:16:47Z',
    pushed_at: '2021-12-16T12:18:42Z',
    git_url: 'git://github.com/javier/haystack.git',
    ssh_url: 'git@github.com:javier/haystack.git',
    clone_url: 'https://github.com/javier/haystack.git',
    svn_url: 'https://github.com/javier/haystack',
    homepage: 'https://deepset.ai/haystack',
    size: 11662,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 2400085,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNDAwMDg1',
    name: 'ifu-addon-client',
    full_name: 'javier/ifu-addon-client',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/ifu-addon-client',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/javier/ifu-addon-client',
    forks_url: 'https://api.github.com/repos/javier/ifu-addon-client/forks',
    keys_url:
      'https://api.github.com/repos/javier/ifu-addon-client/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/ifu-addon-client/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/javier/ifu-addon-client/teams',
    hooks_url: 'https://api.github.com/repos/javier/ifu-addon-client/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/ifu-addon-client/issues/events{/number}',
    events_url: 'https://api.github.com/repos/javier/ifu-addon-client/events',
    assignees_url:
      'https://api.github.com/repos/javier/ifu-addon-client/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/ifu-addon-client/branches{/branch}',
    tags_url: 'https://api.github.com/repos/javier/ifu-addon-client/tags',
    blobs_url:
      'https://api.github.com/repos/javier/ifu-addon-client/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/ifu-addon-client/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/ifu-addon-client/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/ifu-addon-client/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/ifu-addon-client/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/ifu-addon-client/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/ifu-addon-client/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/ifu-addon-client/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/ifu-addon-client/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/ifu-addon-client/subscription',
    commits_url:
      'https://api.github.com/repos/javier/ifu-addon-client/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/ifu-addon-client/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/ifu-addon-client/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/ifu-addon-client/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/ifu-addon-client/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/ifu-addon-client/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/javier/ifu-addon-client/merges',
    archive_url:
      'https://api.github.com/repos/javier/ifu-addon-client/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/ifu-addon-client/downloads',
    issues_url:
      'https://api.github.com/repos/javier/ifu-addon-client/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/ifu-addon-client/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/ifu-addon-client/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/ifu-addon-client/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/ifu-addon-client/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/ifu-addon-client/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/ifu-addon-client/deployments',
    created_at: '2011-09-16T15:24:48Z',
    updated_at: '2013-10-02T14:57:23Z',
    pushed_at: '2011-09-16T15:35:25Z',
    git_url: 'git://github.com/javier/ifu-addon-client.git',
    ssh_url: 'git@github.com:javier/ifu-addon-client.git',
    clone_url: 'https://github.com/javier/ifu-addon-client.git',
    svn_url: 'https://github.com/javier/ifu-addon-client',
    homepage: '',
    size: 180,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Ruby',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master'
  },
  {
    id: 197608557,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTc2MDg1NTc=',
    name: 'innovate-streaming-demo',
    full_name: 'javier/innovate-streaming-demo',
    private: false,
    owner: {
      login: 'javier',
      id: 3839,
      node_id: 'MDQ6VXNlcjM4Mzk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3839?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/javier',
      html_url: 'https://github.com/javier',
      followers_url: 'https://api.github.com/users/javier/followers',
      following_url:
        'https://api.github.com/users/javier/following{/other_user}',
      gists_url: 'https://api.github.com/users/javier/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/javier/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/javier/subscriptions',
      organizations_url: 'https://api.github.com/users/javier/orgs',
      repos_url: 'https://api.github.com/users/javier/repos',
      events_url: 'https://api.github.com/users/javier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/javier/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/javier/innovate-streaming-demo',
    description:
      'Flink simple pipeline using Kafka, then Kinesis Data Streams. Code developed during a 60 minutes session of live coding over twitch for AWS Innovate. Strongly inspired by both the Flink and AWS Kinesis Analytics getting started examples',
    fork: false,
    url: 'https://api.github.com/repos/javier/innovate-streaming-demo',
    forks_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/forks',
    keys_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/teams',
    hooks_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/hooks',
    issue_events_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/events',
    assignees_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/tags',
    blobs_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/languages',
    stargazers_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/stargazers',
    contributors_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/contributors',
    subscribers_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/subscribers',
    subscription_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/subscription',
    commits_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/merges',
    archive_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/downloads',
    issues_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/labels{/name}',
    releases_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/javier/innovate-streaming-demo/deployments',
    created_at: '2019-07-18T15:02:39Z',
    updated_at: '2019-07-21T13:27:42Z',
    pushed_at: '2019-07-18T15:23:17Z',
    git_url: 'git://github.com/javier/innovate-streaming-demo.git',
    ssh_url: 'git@github.com:javier/innovate-streaming-demo.git',
    clone_url: 'https://github.com/javier/innovate-streaming-demo.git',
    svn_url: 'https://github.com/javier/innovate-streaming-demo',
    homepage: null,
    size: 8,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  }
];

export const User: { data: Api_Github_User } = {
  data: {
    login: 'ncherra',
    id: 59145274,
    node_id: 'MDQ6VXNlcjU5MTQ1Mjc0',
    avatar_url: 'https://avatars.githubusercontent.com/u/59145274?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ncherra',
    html_url: 'https://github.com/ncherra',
    followers_url: 'https://api.github.com/users/ncherra/followers',
    following_url:
      'https://api.github.com/users/ncherra/following{/other_user}',
    gists_url: 'https://api.github.com/users/ncherra/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/ncherra/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/ncherra/subscriptions',
    organizations_url: 'https://api.github.com/users/ncherra/orgs',
    repos_url: 'https://api.github.com/users/ncherra/repos',
    events_url: 'https://api.github.com/users/ncherra/events{/privacy}',
    received_events_url: 'https://api.github.com/users/ncherra/received_events',
    type: 'User',
    site_admin: false,
    name: 'Nicolás Cherra',
    company: 'MBSoft',
    blog: 'https://nicolas.cherra.dev',
    location: 'Argentina',
    email: 'nicolascualca@gmail.com',
    hireable: null,
    bio: null,
    twitter_username: 'ncherraNotHave',
    public_repos: 1,
    public_gists: 0,
    followers: 1,
    following: 2,
    created_at: '2019-12-22T17:16:49Z',
    updated_at: '2022-10-01T03:49:21Z'
  }
};
