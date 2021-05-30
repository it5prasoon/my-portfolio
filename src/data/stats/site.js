import dayjs from 'dayjs';

const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://it5prasoon.github.io/cyberknight_port/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://it5prasoon.github.io/cyberknight_port/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://it5prasoon.github.io/cyberknight_port/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://it5prasoon.github.io/cyberknight_port/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://it5prasoon.github.io/cyberknight_port/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://it5prasoon.github.io/cyberknight_port/graphs/contributors',
  },
];

export default data;
