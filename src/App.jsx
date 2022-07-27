import Navbar from "./components/Navbar";
import Storie from "./components/Storie";
import Ads from "./components/Ads";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import DailyContent from "./components/DailyContent";
import SidebarRigth from "./components/SidebarRigth";
import ProfileCard from "./components/ProfileCard";
import Team from "./components/Teams";
import FollowUp from "./components/FollowUp";
import InputNewPost from "./components/InputNewPost";
import Post from "./components/Post";
import Footer from "./components/Footer";
import ModalNewPost from "./components/ModalNewPost";
import { useEffect, useState } from "react";
import DataContext from "./context/context";

function App() {
  const [stateModal, setStateModal] = useState(false);
  const [user, setUser] = useState({});
  const [myTeam, setMyTeam] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://my-daily-bootcamp.herokuapp.com/users/1.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setUser({ ...response });
      });

    fetch("https://my-daily-bootcamp.herokuapp.com/users.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMyTeam([...response]);
      });

    fetch("https://my-daily-bootcamp.herokuapp.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPosts([...response]);
      });
  }, []);

  return (
    <DataContext.Provider value={{ user: user, myTeam: myTeam, posts: posts }}>
      <Navbar />

      <Main>
        <SidebarLeft>
          <ProfileCard></ProfileCard>
          <Team></Team>
        </SidebarLeft>

        <DailyContent>
          <InputNewPost newPost={setStateModal} />
          <Post />
          <ModalNewPost open={stateModal} setOpen={setStateModal} />
        </DailyContent>

        <SidebarRigth>
          <Storie />
          <Ads />
          <FollowUp />
          <Footer />
        </SidebarRigth>
      </Main>
    </DataContext.Provider>
  );
}

export default App;
