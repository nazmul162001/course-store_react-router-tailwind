import { Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import FeedBack from './components/FeedBack/FeedBack';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/course' element={<Courses></Courses>}></Route>
        <Route path='/course/:id' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/feedback' element={<FeedBack></FeedBack>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
