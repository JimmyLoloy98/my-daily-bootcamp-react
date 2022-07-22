import Navbar from "./components/Navbar";
import Storie from "./components/Storie";
import Ads from "./components/Ads";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import DailyContent from "./components/DailyContent";
import SidebarRigth from "./components/SidebarRigth";
import ProfileCard from "./components/ProfileCard";
import Team from "./components/Teams";

function App() {
  return (
    <>
      <Navbar />

      <Main>
        <SidebarLeft>
          <ProfileCard></ProfileCard>
          <Team></Team>
        </SidebarLeft>

        <DailyContent></DailyContent>

        <SidebarRigth>
          <Storie />
          <Ads />
        </SidebarRigth>
      </Main>
    </>
  );
}

export default App;
