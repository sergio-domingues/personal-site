// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Most Experienced With', 'JavaScript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Most Experienced With', 'JavaScript'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Most Experienced With', 'DevOps'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Most Experienced With', 'JavaScript', 'Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Most Experienced With', 'Web Development', 'Databases'],
  },
  {
    title: 'GitLab CI',
    competency: 4,
    category: ['Most Experienced With', 'Tools', 'DevOps'],
  },
  {
    title: 'Security',
    competency: 4,
    category: ['Most Experienced With', 'Concept'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Some Experience With', 'Web Development', 'DevOps', 'Tools'],
  },

  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Some Experience With', 'Web Development', 'Databases'],
  },
  {
    title: 'RabbitMQ',
    competency: 3,
    category: ['Some Experience With', 'Message Queues'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Some Experience With', 'Web Development', 'JavaScript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Some Experience With', 'Web Development'],
  },
  {
    title: 'Android',
    competency: 2,
    category: ['Some Experience With', 'Mobile Development'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  // '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
