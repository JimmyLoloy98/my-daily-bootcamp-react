import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import DailyContent from "./components/DailyContent";
import SidebarRigth from "./components/SidebarRigth";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <SidebarLeft></SidebarLeft>
        <DailyContent></DailyContent>
        <SidebarRigth></SidebarRigth>
      </Main>
    </>
  );
}

export default App;
