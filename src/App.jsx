import Navbar from "./components/Navbar";
import Storie from "./components/Storie";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import DailyContent from "./components/DailyContent";
import SidebarRigth from "./components/SidebarRigth";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Navbar />

      <Main>
        <SidebarLeft>
          <ProfileCard></ProfileCard>
        </SidebarLeft>

        <DailyContent></DailyContent>

        <SidebarRigth>
          <Storie />
        </SidebarRigth>
      </Main>
    </>
  );
}

export default App;
