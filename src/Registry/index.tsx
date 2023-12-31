import 'index.scss'
import './index.scss'

const Registry = () => {
  return (
    <div>
      <h1>Registry</h1>
      <div className="Registry">
        <p>
          The following is entirely optional, there is no expectation that any gift or donations are given!
    We both have many of the typical registry items already, instead, we are asking those who wish to give money to use for one of two things: funds to do exciting stuff on our honeymoon to Greece, or donations to one of three charities!
        </p>
        <p>
          If you want to give to our honeymoon, any of below items will net you a picture of the couple engaging in the activity:
        </p>
        <ol className="Registry">
          <li className>Buy the bride a drink: $5</li>
          <li>Activity: </li>
          <li>Activity: </li>
          <li>Activity: </li>
        </ol>
        <p>
          If you would instead like to give to charity, we ask you to give to one of the following:
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
