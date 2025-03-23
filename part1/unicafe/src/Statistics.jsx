import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={positive.toFixed(1) + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

import PropTypes from 'prop-types'

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}

export default Statistics