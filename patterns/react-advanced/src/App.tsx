import FlatList from './FlatList';

export interface NameList {
  key: string;
}
function App() {
  return (
    <div>
      {/* <Teams />
      <Players /> */}
      <FlatList<NameList>
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={(item, index) => <li key={index}>{item.key}</li>}
      />
    </div>
  );
}

export default App;
