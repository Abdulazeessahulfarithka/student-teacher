
import './App.css';
import { Routes, Route,} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './Components/Login/Login';
import Student from './Components/Student/Student';
import Portal from "./Components/Portal/Portal"
import { useState } from 'react';
import Mentor from './Components/Teacher/Mentor';
import MentorView from './Components/Teacher/MentorView';
import StudentView from './Components/Student/StudentView';
import AdmissionForm from './Components/Student/AdmissionForm';
import EditStudent from './Components/Student/EditStudent';
import { UserProvider } from './Components/Context/UserContext';

function App() {
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor />} />
          <Route path='mentorview/:id' element={<MentorView />} />
          <Route path="student" element={<Student mentorVisible={mentorVisible} />} />
          <Route path='studentview/:roll_no' element={<StudentView />} />
          <Route path='admissionform' element={<AdmissionForm />} />
          <Route path='editstudent/:roll_no' element={<EditStudent />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;