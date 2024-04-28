import './index.scss';
import 'index.scss';
import AboutBanner from 'About/AboutBanner';
import Card from 'About/Card';
import Detail from 'About/Detail';

const AboutMe = () => {
  return (
    <div className="About">
      <AboutBanner />
      <div className="Container">
        <div className="Column">
          <Detail className="Column"/>
        </div>
        <div className="Column">
          <Card className="Column"/>
        </div>
      </div>
    </div>
  )
}
export default AboutMe
