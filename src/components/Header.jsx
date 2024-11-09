import logo from '../assets/logo.png';
import  "../components/Header.css"

export default function Header() {
  let test = 5 ;
  let check =  test > 5 ? "A" : "B"
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 style={{backgroundColor:"red"}}>ReactArt</h1>
      <p>A community of artists and art-lovers. {check}</p>
    </header>
  );
}
