import './index.scss';
import 'index.scss';
import me from './me.png';

const Card = () => {
  return (
    <div className="Card">
      <div className="Top">
        <img className="Image" key="me" src={me} alt="a picture of me" loading="lazy" />
      </div>
      <p className="Detail"><b>Name: </b>Joe Kern</p>
      <p className="Detail"><b>People call me: </b>Joe</p>
      <p className="Detail"><b>Pronouns: </b>He/him/his</p>
      <p className="Detail"><b>Nationality: </b>American</p>
      <p className="Detail"><b>Email: </b>josephdanielkern@gmail.com</p>
      <p className="EndDetail"><b>Affiliation: </b>Georgia Institute of Technology</p>
    </div>
  )
}
export default Card
