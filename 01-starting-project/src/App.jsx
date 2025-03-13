import { useState } from "react";
import Header2 from "./components/Header/Header2";
import { CORE_CONCEPTS } from './data';
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import TabButton from "./Components/TabButton";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('');

  function hanldeSelect(selectedTopic) {
    //  selectedButton = 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
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
            <TabButton onSelect={hanldeSelect('ㅎㅇ')}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
          동적인 버튼 클릭의 결과물 
        </section>
      </main>
    </div>
  );
}

export default App;