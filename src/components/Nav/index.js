import './index.css'

const Nav = props => {
  const {score, timer} = props
  return (
    <nav className="nav-bar-container">
      <img
        className="app-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-timer-section">
        <li>
          <p className="score-text">
            Score: <span className="score-value">{score}</span>{' '}
          </p>
        </li>
        <li className="timer-section">
          <img
            className="timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer-value">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
