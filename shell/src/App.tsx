// src/App.jsx
import { lazy, Suspense } from 'react';
import './App.css';

const RemoteComponent = lazy(() => import('needles/RemoteComponent'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Host Application</h1>
        <Suspense fallback={<div>Loading Remote Component...</div>}>
          <RemoteComponent />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
