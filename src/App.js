// App.js
import React from 'react';
import './App.css';

const D=()=> <div className="component d">D</div>;
const E=()=> <div className="component e">E</div>;
const F=()=> <div className="component f">F</div>;
const G=()=> <div className="component g">G</div>;

const A=() => (
  <div className="component a">
    A
    <D/>
  </div>
);

const B=() => (
  <div className="component b">
    B
    <E/>
    <F/>
  </div>
);

const  C=() => (
  <div className="component c">
    C
    <G/>
  </div>
);

function App() {
  return (
    <main>
    <h1>Root</h1>
      <section className="components">
        <A/>
        <B/>
        <C/>
      </section>
    </main>
  );
}

export default App;
