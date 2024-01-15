import Players from './Players';
import Teams from './Teams';

function App() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Teams />
      <Players />
    </div>
  );
}

export default App;
