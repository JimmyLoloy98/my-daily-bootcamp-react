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
import NewPost from "./components/NewPost";

function App() {
  return (
    <>
      <Navbar />

      <Main>
        <SidebarLeft>
          <ProfileCard></ProfileCard>
          <Team></Team>
        </SidebarLeft>

        <DailyContent>
          <NewPost />
        </DailyContent>

        <SidebarRigth>
          <Storie />
          <Ads />
          <FollowUp />
        </SidebarRigth>
      </Main>
    </>
  );
}

export default App;
