import './styles/App.css';
import { Posts } from './components/Posts';
//import { LoadingPosts } from './LoadingPosts';

function App() {
  return (
    <div className="container p-4">
        {/* <LoadingPosts /> */}
        <Posts /> 
    </div>
  );
}

export default App;
