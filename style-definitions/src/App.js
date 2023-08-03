import logo from "./logo.svg";
import "./App.css";
import A from './components/A';
import B from './components/B';

// import './styles.css'
//farklı komponentler için aynı classnamee sahip stil kullandığımızda bunlar çakışır bu nedenle styles.css dosyamıza styles.module.css diye isim verip classname içinde de süslü parantez içinde styles.class şeklinde çağırarak çakışmalarını önleriz.
//import styles from "./styles.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Bu şekilde hata verir çalışmaz */}
        {/* <div style="color:"red";">Lorem Ipsum inspectatur</div> */}
        {/* Style tanımı yaparken obje içerisinde obje açarak ve camelCase kuralına göre (çünkü tireyi- kabul etmez) tanımlama yapılabilir.  ya da dışardan aldığımız cdn linkini index.html de head kısmına yerleştirerke de style verebiiriz */}
        <div style={{ color: "red", backgroundColor: "white", paddingTop: 50 }}>
          Lorem Ipsum inspectatur
        </div>

{/* Bu da index.html dosyamıza eklediğimiz cdn vasıtasıyla kullanabildiğimiz bootstrap elementi */}
        <div class="alert alert-danger" role="alert" style={{marginTop:50}} >
          A simple danger alert with{" "}
          <a href="#" class="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </div>



        <A/>
        <B/>
      </header>
    </div>
  );
}

export default App;
