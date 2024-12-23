import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Online from "./component/Online";
import Mode from "./component/Mode";
import Course from "./component/Course";
import Offline from "./component/Offline";
import Register from "./component/Register";
import Enrolled from "./component/Enrolled";
import OfflineDemo from "./component/OfflineDemo";
import OnlineDemo from "./component/OnlineDemo";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mode" element={<Mode />} />
      <Route path="/online" element={<Online />} />
      <Route path="/offline" element={<Offline />} />
      <Route path="/course" element={<Course />} />
      <Route path="/register" element={<Register />} />
      <Route path="/enrolled" element={<Enrolled />} />
      <Route path="/offline-demo" element={<OfflineDemo />} />
      <Route path="/online-demo" element={<OnlineDemo />} />
    </Routes>
  </Router>
);

export default App;
