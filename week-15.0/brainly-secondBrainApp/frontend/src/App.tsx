import { useEffect } from "react";
import AppRoutes from "@/routes/AppRoutes";
import { useAuthStore } from "@/store/auth.store";

function App() {
  const hydrate = useAuthStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return <AppRoutes />;
}

export default App;
