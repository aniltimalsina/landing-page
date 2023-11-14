import Header from "./components/header";
import Hero from "./components/hero";
import Advertisement from "./components/advertisement";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Header headerText="Hello React" />
      <Hero
        title="Welcome to React World"
        subtitle="Start your journey right now with React!!!"
      />
      <Advertisement textValue="Click here to close this Ad" />
      <Footer />
    </div>
  );
}

export default App;
