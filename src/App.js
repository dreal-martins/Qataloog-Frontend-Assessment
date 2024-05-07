import { SidebarProvider } from "./contexts/sidebarContext";
import { AppProvider } from "./contexts";
import { OverviewProvider } from "./contexts/overviewContext";
import MainRoute from "./routes";
function App() {
  return (
    <div className="">
      <AppProvider>
        <SidebarProvider>
          <OverviewProvider>
            <MainRoute />
          </OverviewProvider>
        </SidebarProvider>
      </AppProvider>
    </div>
  );
}

export default App;
