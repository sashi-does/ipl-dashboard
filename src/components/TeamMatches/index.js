import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoading: true, teamId: ''}

  componentDidMount() {
    const details = this.props
    const {match} = details
    const {params} = match
    const {team} = params
    this.fetchMatchDetails(team)
  }

  fetchMatchDetails = async team => {
    this.setState({teamId: team})
    const fetchDetails = await fetch(`https://apis.ccbp.in/ipl/${team}`)
    const jsonData = await fetchDetails.json()
    const modifiedData = {
      teamBannerUrl: jsonData.team_banner_url,
      latestMatchDetails: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
    }
    const modifiedLatestMatchDetails = {
      umpires: modifiedData.latestMatchDetails.umpires,
      result: modifiedData.latestMatchDetails.result,
      manOfTheMatch: modifiedData.latestMatchDetails.man_of_the_match,
      id: modifiedData.latestMatchDetails.id,
      venue: modifiedData.latestMatchDetails.venue,
      date: modifiedData.latestMatchDetails.date,
      competingTeam: modifiedData.latestMatchDetails.competing_team,
      competingTeamLogo: modifiedData.latestMatchDetails.competing_team_logo,
      firstInnings: modifiedData.latestMatchDetails.first_innings,
      secondInnings: modifiedData.latestMatchDetails.second_innings,
      matchStatus: modifiedData.latestMatchDetails.match_status,
    }
    const modifiedRecentMatchDetails = modifiedData.recentMatches.map(
      eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      }),
    )
    modifiedData.recentMatches = modifiedRecentMatchDetails
    modifiedData.latestMatchDetails = modifiedLatestMatchDetails

    this.setState({matchDetails: modifiedData, isLoading: false})
  }

  render() {
    const {matchDetails, isLoading, teamId} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    console.log(matchDetails)
    return (
      <div className={`team-matches ${teamId}`}>
        {!isLoading ? (
          <div>
            <img
              className="latest-match-banner"
              alt="team banner"
              src={teamBannerUrl}
            />
            <p className="latest-matches-heading">Latest Matches</p>
            <LatestMatch details={latestMatchDetails} />
            <ul className="all-matches">
              {recentMatches.map(eachRecentMatch => (
                <MatchCard key={eachRecentMatch.id} details={eachRecentMatch} />
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

// umpires,
//       result,
//       manOfTheMatch,
//       id,
//       date,
//       competingTeam,
//       competingTeamLogo,
//       firstInnings,
//       secondInnings,
//       matchStatus,
