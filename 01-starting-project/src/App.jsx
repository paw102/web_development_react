// import Header from "./components/Header";

const reactDescriptionsKr = ['근본적인', '결정적인', '핵심적인'];
const reactDescriptionsEn = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() *(max + 1));  // 얘의 return 값은 0 ~ 2 의 int 가 반환됨
  // Math.random() *(max + 1) 의 범위가 0.xxx ~ 2.xxx 이기 때문에
}

function Header() {
  const random = getRandomInt(2);

  return (
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React 필수 요소 복습</h1>
    <p>
      {reactDescriptionsEn[random]} React concepts you will need for almost any app you are
      going to build!

      <br /><br />
      대부분의 앱을 위해 당신이 필요로 하는 {reactDescriptionsKr[random]} React 개념 학습!
    </p>
  </header>
);
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <br />
        <h2>시작해봅시다!</h2>
      </main>
    </div>
  );
}

export default App;