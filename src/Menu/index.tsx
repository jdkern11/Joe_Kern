import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from 'Landing';
import Story from 'Story';
import Agenda from 'Agenda';
import './index.scss';

const Menu = () => {
  const maxLength = "Music Requests".length  
  const words = ["Home", "Our Story", "Details", "Agenda", "Music Requests", "Registry"]
  return (
    <div >
      <div className='NavBar'>
        <a href="#landing">{words[0]}</a>
        <a href="#details">{words[2]}</a>
        <a href="#agenda">{words[3]}</a>
        <a href="#story">{words[1]}</a>
        <a href="#music">{words[4]}</a>
        <a href="#registry">{words[5]}</a>
      </div >
    </div>
  )
}

export default Menu
