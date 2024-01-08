import React from 'react';
import Agenda from 'Agenda';
import Story from 'Story';
import Details from 'Details';
import Registry from 'Registry';
import Menu from 'Menu';
import ImageGallery from 'ImageGallery';
import 'index.scss';
import './index.scss';

const Landing = () => {
  setTimeout(() => {
    localStorage.setItem('visited', 'true');
  }, 5000);
  let visited = (localStorage.getItem('visited') === 'true');
  return (
    <div className="Landing">
      <Menu />
      <img src='images/banner.jpg' alt="background" className="TopImage" id="landing"/>
      <section className="Container">
        <section className="Column">
          <ImageGallery min={1} max={20} />
        </section>
        <section className="Wide">
          <section>
            <header className="App-header">
              <h3 >
                We're Getting Married! 
              </h3 >
              <h2 >
                July 6th, 2024 | Denver, CO
              </h2 >
              <p >
                Please join us on this special day!
              </p >
            </header>
          </section>
          <section id="details">
            <Details />
          </section>
          <section id="agenda">
            <Agenda />
          </section>
          <section id="story">
            <Story />
          </section>
          <section id="registry">
            <Registry />
          </section>
        </section>
        <section className="Column">
          <ImageGallery min={21} max={41} />
        </section>
      </section>
    </div>
  );
}

export default Landing
