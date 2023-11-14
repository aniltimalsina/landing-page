import "../styles/hero.css";
function Hero(props) {
  return (
    <div className="hero">
      <h1 className="hero-text">{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Hero;
