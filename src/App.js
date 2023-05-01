import Pages from "./Pages/Pages";
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
