import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendPost from "./components/SendPost/SendPost.jsx";
import UpdateAccountInfo from "./components/UpdateAccountInfo/UpdateAccountInfo.jsx";
import Comments from "./components/Comments/Comments.jsx";
import ViewPosts from "./components/ViewPosts/ViewPosts.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
// header myprofile viewpost footer
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Comments />}></Route>
        <Route exact path="myprofile" element={<SendPost />}></Route>
        <Route exact path="signin" element={<ViewPosts />}></Route>
        <Route exact path="post" element={<UpdateAccountInfo />}></Route>
        <Route exact path="signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
