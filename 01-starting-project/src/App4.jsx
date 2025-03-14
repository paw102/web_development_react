import { Component, useState } from "react";
import Header2 from "./components/Header/Header2";
import { CORE_CONCEPTS } from './data';
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import TabButton from "./Components/TabButton";
import { EXAMPLES } from "./data_updated";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function hanldeSelect(selectedTopic) {
    console.log(selectedTopic);
    setSelectedTopic(selectedTopic);
  }

  return (
    <div>
    <Header2 />
      <main>
      <section id="core-concepts">
        <h2>핵심 개념들 of React</h2>
          <ul>
            <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            <TabButton onSelect={() => hanldeSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => hanldeSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => hanldeSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => hanldeSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic === undefined ? <h3>버튼을 클릭하세요</h3> : null}
          {selectedTopic !== undefined ? 
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic]['title']}</h3>
              <p>{EXAMPLES[selectedTopic]['description']}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic]['code']}
                </code>
              </pre>
          </div> : null}
        </section>
      </main>
    </div>
  );
}

export default App;