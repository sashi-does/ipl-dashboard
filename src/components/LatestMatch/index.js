import './index.css'

const LatestMatch = ({details}) => {
  const latestMatchDetails = details
  console.log(latestMatchDetails)
  return (
    <div className="latest-match">
      <div className="latest-match-details">
        <div>
          <p className="latest-match-competing-team">
            {latestMatchDetails.competingTeam}
          </p>
          <p className="date">{latestMatchDetails.date}</p>
          <p className="venue">{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <div>
          <img
            className="latest-match-image"
            alt={`latest match ${latestMatchDetails.competingTeam}`}
            src={latestMatchDetails.competingTeamLogo}
          />
        </div>
      </div>
      <hr className="divider" />
      <div className="right-content">
        <p className="right-heading">First Innings</p>
        <p className="right-subheading">{latestMatchDetails.firstInnings}</p>
        <p className="right-heading">Second Innings</p>
        <p className="right-subheading">{latestMatchDetails.secondInnings}</p>
        <p className="right-heading">Man of the Match</p>
        <p className="right-subheading">{latestMatchDetails.manOfTheMatch}</p>
        <p className="right-heading">Umpires</p>
        <p className="right-subheading">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
