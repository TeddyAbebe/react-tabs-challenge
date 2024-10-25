import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Tabs from "./components/Tabs";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs />
    </QueryClientProvider>
  );
}

export default App;
