import React from 'react';
import './App.css';
import Post from './components/Post';
import image from './image.jpg';
import puppy from './puppy.jpg';

function App() {
  return (
<div>
<section>
  <span>Simple Social Media App!</span>
</section>
<div className = "header">
  <h1>Social Media App</h1>
</div>
<br />
<br />
    <div className="App">
      <div>
      <Post content = "Insert clever comment" />
      </div>
      <div>
      <Post content = {image} />
      </div>
      <div>
      <Post content = "Quarantine is fun ..... NOT!" />
      </div>
      <div>
      <Post content = {puppy} />
      </div>
    </div>
</div>
  );
}

export default App;