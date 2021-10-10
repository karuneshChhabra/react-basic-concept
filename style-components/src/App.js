import "./App.css";
import {Header} from './styleComponents/MyHeader';
import {Button} from './styleComponents/MyButton';
import {Section} from './styleComponents/MySection';
import MaterialUIbutton from './styleComponents/MaterialUIbutton'


function App() {
  return (
    <div className="App">
      <Section>
        <Header>App Page</Header>
        <Button >Click Me!</Button>
        <Button primary >Click Me!</Button>
        <MaterialUIbutton>Material Ui Button</MaterialUIbutton>
      </Section>
    </div>
  );
}

export default App;
