import './App.css';

//import ThemeContext  from './Context/ThemeContext';
import {ThemeProvider}   from './Context/ThemeContext';
import {UserProvider}   from './Context/UserContext';
//import Button from './components/Button';
import Container from './components/Container';
//import Header from './components/Header';



function App() {
//Bir tane provider olacak context js dosyası hazırlıyoruz ve içinde import {createContext} from 'react';
//const ThemeContext = createContext();
//export default ThemeContext;
//diyerek bunu import ediyoruz. Daha sonra App.js te bunu çağırıp içine bir value geçiyoruz. Bu Providerdan veri alacak komponenti de onun içinde çağırıyoruz(Button). Button içine ise
//import { useContext } from 'react';
//import ThemeContext from '../Context/ThemeContext';
//function Button() {
    //const data=useContext(ThemeContext);
    //useContext ile import ettiğimiz komponenti parametre geçerek value ya ulaşıyoruz

//App.js teki button komponentinin içine yazdığımız şeyleri button.js te {children} probu ile yakalayabiliriz, komponentin içinde yakaladığımız probu çağırarak ({children}) diye gösterebiliriz

//Ayrıca app.jsi temiz tutmak için provider işlemini de themeContext.js içerisinde yapabiliriz bunun için ThemeContext.js içerisinde bir fonksiyon tanımlarız.
//export const ThemeProvider = ({children})=>{
   // return <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>  daha sonra providerı burda tanımlayıp paramatre olarak verdiğimiz children ı da içinde çağırarak app.js te sadece {ThemeProvider} import ederek daha sade bir kullanım sağlarız

   //Sonra provider dosyamızdaki fonksiyon içerisinde thema için bir state tanımlayıp ilk değerini dark veriyoruz. altına values adında bir obje tanımlayıp component içindeki value değerine valuesu atatığımızda tema ve setTheme statei dinamik olarak componente geçmiş oluyor. useContext kullandığımız komponentte de data üzerinden theme yakalayabiliyoruz, hatta theme ve setTheme olarak da alabiliriz.

   //Başka komponentlerde de themeContext ve useContext import ederek  useContext ile providerdan gönderdiğimiz değerleri yakalayabiliriz

   //Daha sonra bu app.jsi stillendirme ihtiyacı hasıl olursa bunu container.js dosyasıyla sarmalayabiliriz. sarmaladığımız komponent içersinde style tanımı yaparak ve ternary if marifetiyle çeşitli stiller ya da temalar arasında gezinebiliriz. daha sonra app.js içerisinde ThemeProvider içinde container komponentimizi çağırırız


   //Peki biz bu temayı local storaga atmak istersek ne yapcaz. Provider sayfamızda useEffect ile theme parametresi geçerek bunun değiştiği anı yakalayıp localstorage içine atarsak sayfa yenilense de bizim en son bıraktığımız tema kalır. ama ilk başta thema set etmezsek undefined gelecei için ternary if ile de bunu çözebiliriz

  return (
    // <ThemeContext.Provider value='dark'>
    //   {/* <Button/> */}
    //   <Button>
    //     Merhaba
    //     <p>Lorem İpsum inspectatur</p>
    //   </Button>
    // </ThemeContext.Provider>

    <ThemeProvider>
      <UserProvider>
        <Container/>
      </UserProvider>
      
    </ThemeProvider>
  );
}

export default App;
