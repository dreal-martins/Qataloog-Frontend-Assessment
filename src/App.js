import { SidebarProvider } from "./contexts/sidebarContext";
import { AppProvider } from "./contexts";
import { OverviewProvider } from "./contexts/overviewContext";
import MainRoute from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <AppProvider>
        <SidebarProvider>
          <OverviewProvider>
            <MainRoute />
            <ToastContainer
              position="top-right"
              autoClose={800}
              theme="light"
              draggable={true}
            />
          </OverviewProvider>
        </SidebarProvider>
      </AppProvider>
    </div>
  );
}

export default App;
