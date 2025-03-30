import Header from './Header'
import Content from './Content'
import PropTypes from 'prop-types'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Course;