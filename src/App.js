import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInput from './components/UserInput';
import List from './components/List';
import Toggle from './components/Toggle';
import API from './components/API';
import Routing from './components/Routing';
import FileInput from './components/FileInput';
import Login from './components/Login';
import SearchItems from './components/SearchItems';
import Color from './components/Color';
import { ThemeProvider } from './context/themeContext';
import Theme from './components/Theme';

function App() {
  return (
    <div>
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      {/* <UserInput /> */}
      {/* <List /> */}
      {/* <Toggle /> */}
      {/* <API /> */}
      {/* <Routing /> */}
      {/* <FileInput /> */}
      {/* <Login /> */}
      {/* <SearchItems /> */}
      {/* <Color /> */}
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </div>
  );
}

export default App;
