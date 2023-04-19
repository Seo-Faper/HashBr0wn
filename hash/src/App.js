
import './App.css';
import SegmentedButtonDropdownsExample from './components/SegmentedButtonDropdownsExample';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <div className="search">
        <br></br>
        <SegmentedButtonDropdownsExample></SegmentedButtonDropdownsExample>
      </div>
      <div className='footer'>
        <div className='footer-message'>
          <br></br>
          <center>
            <p><a href="https://seo-faper.github.io/" target='_blank'>seo-faper</a></p>
          </center>
        </div>
      </div>
    </div >
  );
}

export default App;
