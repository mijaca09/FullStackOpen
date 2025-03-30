import Part from './Part'
import Total from './Total'
import PropTypes from 'prop-types'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <Total parts={parts} />
    </div>
  );
};

Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Content;