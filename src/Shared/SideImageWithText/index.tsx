import './index.scss';
import 'index.scss';

type SideImageWithTextProps = {
  image: any;
  alt: string;
  text: string;
  imgOnLeft: boolean;
}

export const SideImageWithText = (
  {image, alt, text, imgOnLeft = true}: SideImageWithTextProps
) => {
  return (
    <div>
    {
      imgOnLeft ? (
        <div className="mainFlex">
          <img className="leftImage" src={image} alt={alt} />
          <div className="centerFlex">
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className="mainFlex">
          <div className="centerFlex">
            <p>{text}</p>
          </div>
          <img className="rightImage" src={image} alt={alt} />
        </div>
      )
    }
    </div>
  )
}
