
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
          <center>
            <p>Get Your HASH</p><br></br>
            <p>by <a href="https://seo-faper.github.io/" target='noopener'>seo-faper</a></p>
          </center>
        </div>
      </div>
    </div >
  );
}

export default App;
