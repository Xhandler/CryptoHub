import Component from 'react';
import './App.css';
import Body from './components/Body.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Body/>
      </div>
    );
  }
}
export default App;
