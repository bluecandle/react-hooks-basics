import React from 'react';
import useTitle from '@bluecandle-react/hooks-use-title'

function App() {
  // const {loading, data, error, refetch} = useAxios({
  //   url : 'www.google.com'
  // })
  // const fadeInH1 = useFadeIn()
  // const name = useInput("Mr.")
  useTitle('Yeah')
  return (
    <div className="App">
      
      {/* <h1 {...fadeInH1}>Hello</h1>
      <input placeholder="Name" {...name}/>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "Loaded"}</h2>
      <button onClick = {refetch}>Refetch</button> */}
    </div>
  );
}

export default App;
