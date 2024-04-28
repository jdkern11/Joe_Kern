import 'index.scss';
import './index.scss';

const Agenda = () => {
  return (
    <div>
      <h1>Agenda (subject to change)</h1>
      <h2> July 6th, 2024</h2>
      <ul className="AgendaList">
        <li>Hang out at church: 10:00 A.M.</li>

        <li>Ceremony: 11 A.M.</li>

        <li>Brunch Reception: 11:45 A.M. - 3 P.M.</li>

        <li>Night out on the town: (more details to come!)</li>
      </ul>
      <h2> July 7th, 2024 (All optional and on own expense)</h2>
      <ul className="AgendaList">
        <li> 
          Good Views with Great People- Morning Hike at Red Rocks Park and Amphitheatre: 8:30 A.M.
          <ul>
            <li> 
              A Colorado trip isn’t complete without a hike! Family-friendly; Open to all levels of activity, no one left behind. Chill, chat, and have a snack at the top!
            </li>
            <li> 
              Hiking options: Geological Overlook Trail-0.8 mi, Red rocks trading post- 1.6 mi, Mount Vernon Creek Trail Loop- 2.3 mi (we can decide as a group at the start)
            </li>
            <li> 
              Non-hiking options: See the views and chill at the visitor’s center and seats of the amphitheater!
            </li>
            <li> 
              Suggest bringing a hat, sunscreen, and water
            </li>
          </ul>
        </li>
        <li> 
          Wind Down and Chill- Free Jazz Music at City Park Pavilion: 6 P.M.- 8 P.M.
          <ul>
            <li> 
              <a href="https://cityparkjazz.org/2024-concert-calendar">Event details</a>
            </li>
            <li> 
              BYOB and food allowed (No glass, no marijuana allowed), food trucks will be there as well to purchase food.
            </li>
            <li> 
              Bring blankets, chairs, or for those out of town, extra hotel towels to sit on!
            </li>
          </ul>
        </li>
          Please fill out the RSVP for these events so we can know how many to expect and send out more details as it approaches: <a href="https://forms.gle/eyE1DZoY2MsjLPdN6"> RSVP </a>
        <li>
        </li>
      </ul>
    </div>
  )
}
export default Agenda
