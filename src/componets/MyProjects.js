import { v4 as uuidv4 } from 'uuid';
import proj4 from '../assets/images/proj4.PNG';
import proj5 from '../assets/images/proj5.JPG';
import proj6 from '../assets/images/proj6.JPG';


const Myprojects = [
  {
    id: uuidv4(),
    name: 'CareU',
    desc:
      'CareU is an emergency application and we developed the website and mobile app for our second-year university group project.',
    img: proj4, 
  },
  {
    id: uuidv4(),
    name: 'Covid-19 Tracker',
    desc:
      'This is a covid-19 dashboard which shows daily cases,deaths,recovered patients. This web site is created by using React js.',
    img: proj5,
  },
  {
    id: uuidv4(),
    name: 'Student Mangement System',
    desc:
      'Small student management system including create,read,update and delete student features.This application developed by using MERN stack.',
    img: proj6,
  },
  
 
];

export default Myprojects;
