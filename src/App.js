import './App.css';
import Header from './component/Header/Header';
import Freelancers from './component/Freelancers/Freelancers';

function App() {
  return (
    <div className="background-color">
        {/* website header componenet link  */}
        <Header></Header>
        {/* website cart information link  */}
        <Freelancers></Freelancers>
    </div>
  );
}

export default App;
