import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import UserContextProvider from "./context/userContext";
// 1. Create the context. (export this context)
// 2. Give the context the Provider component.
//    Wrap the components that you want to allow access
//    to the data passed to provider as a value prop.
// 3. pass the data as an object to the provider as a value prop.
// 4. Use the data that was passed to context (import into appropriate file)
// 5.

function App() {
  return (
    <UserContextProvider randomProp="randomData">
      <div className="App">
        <Header />
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
