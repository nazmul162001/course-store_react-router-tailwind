import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import FeedBack from './components/FeedBack/FeedBack';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';

//contexApi
export const courseContex = createContext();

function App() {
  const [courses, setCourses] = useState([]);
  // console.log(courses);
  return (
    <courseContex.Provider value={[courses, setCourses]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/course' element={<Courses></Courses>}></Route>
        <Route path='/course/:id' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/feedback' element={<FeedBack></FeedBack>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </courseContex.Provider>
  );
}

export default App;
