import "./App.css";
import {Header} from './styleComponents/MyHeader';
import {Button} from './styleComponents/MyButton';
import {Section} from './styleComponents/MySection';
import MaterialUIbutton from './styleComponents/MaterialUIbutton';
import {greenTheme, blueTheme} from './themeProvider/theme';
import {ThemeProvider} from 'styled-components';
import Page from './pagination/Page';

function App() {
  console.log(greenTheme);
  return (
    <ThemeProvider theme={greenTheme}>
      <div className="App">
        <Section>
          <Header>App Page</Header>
          <Button >Click Me!</Button>
          <Button primary >Click Me!</Button>
          <MaterialUIbutton>Material Ui Button</MaterialUIbutton>
        </Section>
        <Page/>
      </div>
    </ThemeProvider>
  );
}

export default App;
