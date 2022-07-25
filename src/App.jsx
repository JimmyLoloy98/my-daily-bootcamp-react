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
import { useState } from "react";

function App() {
  const [stateModal, setStateModal] = useState(false);

  let user = fetch(
    "https://my-daily-bootcamp.herokuapp.com/users/37.json"
  ).then((response) => {
    console.log(response);
  });

  return (
    <>
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
    </>
  );
}

export default App;
