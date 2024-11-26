import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = ({teamDetails}) => {
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team">
      <Link className="link" to={`/team-matches/${id}`}>
        <img className="team-image" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
