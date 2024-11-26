import './index.css'

const MatchCard = ({details}) => {
  const {competingTeamLogo, matchStatus, result, competingTeam} = details
  let resultArray
  console.log(result)
  if (matchStatus === 'Won') resultArray = 'won'
  else resultArray = 'loss'
  return (
    <li className="match-card">
      <img
        className="match-card-team-logo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`${resultArray}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
