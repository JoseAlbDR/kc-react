import './App.css';
import ReactComponent from './components/ReactComponent';
import ReactJSX from './components/ReactJSX';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <ReactJSX></ReactJSX>;<ReactComponent></ReactComponent>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </>
  );
}

export default App;
