import 'index.scss';
import './index.scss';

const Agenda = () => {
  return (
    <div>
      <h1>Agenda</h1>
      <ul className="AgendaList">
        <li>Breakfast/Brunch (Catered by Snooze): 9 A.M. - 11 A.M.</li>

        <li>Ceremony: 11 A.M.</li>

        <li>All activities post ceremony are optional</li>

        <li>Hang out / Water Slide: 11:30 A.M. - 1 P.M.</li>

        <li>Some other activities (hike?): 1 P.M. - 3 P.M.</li>

        <li>Break: 3 P.M. - 5 P.M.</li>

        <li>Dinner: 5 P.M. at some place (guests will be paying for themselves)</li>

        <li>For guests &gt;= 21, &lt; old person:</li>
        <ul>
          <li>Explore downtown Denver</li>
        </ul>
      </ul>
    </div>
  )
}
export default Agenda
