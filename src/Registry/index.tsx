import 'index.scss'
import './index.scss'

const Registry = () => {
  return (
    <div>
      <h1>Registry</h1>
      <div className="Registry">
        <p>
          Completely optional, there is no expectation that any gift or donations are 
          given! If you wish, in lieu of items, we ask you to give money
          for one of two things: funds to do exciting stuff on our honeymoon to Japan 
          or donations to one of the charities listed below!
        </p>
        <h2>Honeymoon Fund</h2>
        <p>
          Join us on our 19-day Japan adventure, where we'll explore at least 5 incredible cities! Your contribution ensures you'll get some fantastic pics in return! Plus, if you contribute to specific activities, you'll receive pics of those experiences. Don't worry about the suggested amounts; give whatever makes you happy! 🇯🇵📸✨
        </p>
        <p>
          Venmo: @Camilla-Johnson-1 (x1570 for last 4 digits of phone number to verify correct account)

        </p>
        <ol className="Registry">
          <li>Kyoto Geisha Tea Ceremony for 2: $100</li>
          <li>Hiroshima Peace Memorial Museum for 2:  $3 (yes, $3!)</li>
          <li>Relaxation at an Onsen for 2: $25</li>
          <li>Delicious ramen and sushi: $50</li>
          <li>Buy the bride a drink: $5</li>
          <li>Offset lodging and/or transportation costs: any amount</li>
        </ol>
        <h2>Charity</h2>
        <p>
          If you would instead like to give to charity, we ask you to give to one of the following (you can reach us at josephdanielkern@gmail.com if you'd like the charity to send us a message):
        </p>
        <ol className="Registry">
          <li>
            <a href="https://donate.khanacademy.org/give/419869/#!/donation/checkout?c_src=kaid_1066819432872100171010240&c_src2=Webapp.header">
              Khan Academy
            </a>
            : Help create a free, world-class education for anyone around the world!
          </li>
          <li>
            <a href="https://wearealight.org/ways-of-giving/?campaign=448767">
              Alight
            </a>
            : More than 110 million individuals worldwide have been forcibly displaced due to persecution, conflict, violence and climate change. Help this organization co-create solutions with displaced communities, providing not just basic needs but also innovative programs and services!
          </li>
          <li>
            <a href="https://secure.givewell.org/">
              GiveWell
            </a>
            : This organization rigorously evaluates and recommends highly effective charitable organizations, ensuring that your donation has a maximum impact in addressing pressing global issues like poverty and disease!
          </li>
        </ol>
      </div>
    </div>
  )
}
export default Registry
