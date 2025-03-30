import PropTypes from 'prop-types'

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      exercises: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Total;