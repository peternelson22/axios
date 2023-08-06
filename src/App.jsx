import Title from './components/Title';
import FetchData from './examples/1-fetchData';
import Headers from './examples/2-headers';
import PostRequest from './examples/3-post-request';
import Globals from './examples/4-globals';
// import './axios/global';
import CustomInstance from './examples/5-custom-instance';
import Interceptors from './examples/6-interceptors';

function App() {
  return (
    <main>
      <Title />
      {/* <FetchData /> */}
      {/* <Headers /> */}
      {/* <PostRequest /> */}
      {/* <Globals /> */}
      {/* <CustomInstance /> */}
      <Interceptors />
    </main>
  );
}

export default App;
