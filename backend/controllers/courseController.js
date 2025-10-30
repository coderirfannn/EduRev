// simple static list. You can later move to a DB collection.
export const getCourses = (req, res) => {
  const courses = [
    { id: 1, title: 'Web Development Basics', desc: 'Learn HTML, CSS, JS', level: 'Beginner' },
    { id: 2, title: 'React Mastery', desc: 'Build dynamic web apps', level: 'Intermediate' },
    { id: 3, title: 'Node.js Crash Course', desc: 'Backend development made easy', level: 'Intermediate' },
    { id: 4, title: 'Data Structures', desc: 'DSA for interviews', level: 'Advanced' }
  ];
  res.json(courses);
};
