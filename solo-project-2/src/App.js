import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import data from './data'

function App() {
  const main = data.map(item => {
    return (
      <Main
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Nav></Nav>
      <section>
        {main}
      </section>
    </div>
  );
}

export default App;
