import PropTypes from 'prop-types'

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
};

Header.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Header;