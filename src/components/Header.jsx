import logo from '../assets/logo.png';
import classes from "../components/Header.module.css"

export default function Header() {
  let test = 5 ;
  let check =  test > 5 ? "A" : "B"
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers. {check}</p>
    </header>
  );
}
