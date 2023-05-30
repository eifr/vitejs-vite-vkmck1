import './App.css';
import RichTextEditor from 'react-rte';

function App() {
  const val = RichTextEditor.createEmptyValue();

  return (
    <>
      <h1>test</h1>
      <RichTextEditor value={val} />
    </>
  );
}

export default App;
