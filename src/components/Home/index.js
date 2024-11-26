import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const fetchedData = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await fetchedData.json()
    const teamsData = jsonData.teams
    const modifiedTeams = teamsData.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeams: modifiedTeams, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="ipl-dashboard">
        <div className="heading-section">
          <img
            alt="ipl logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {!isLoading ? (
          <ul className="teams-list">
            {iplTeams.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))}
          </ul>
        ) : (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default Home
