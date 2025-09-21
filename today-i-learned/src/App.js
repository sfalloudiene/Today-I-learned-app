import './style.css';

function App() {
  const apptitle = 'Today I Learned';

  return (
    <>
    {/* HEADER */}
  <header class="header">
    <div className="logo">
      <img
        src="logo.png"
        height="68"
        width="68"
        alt="Today i learned logo"
      />
      <h1>{apptitle}</h1>
    </div>

    <button className="btn btn-large btn-open">Share a fact</button>
  </header>

 <NewFactForm/>
  <main className="main">
  <CategoryFilter/>
  <FactList/>
  </main>
  </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>
}

function CategoryFilter() {
  return <aside>Category filter</aside>
}

function FactList() {
  return <section>Fact list</section>
}

export default App;