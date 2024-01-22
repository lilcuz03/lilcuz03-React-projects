import heroImage from '../images/hero-image/hero-image.jpg'
const Home = () => {
    return ( 
        <div className="hero">
      <img src={heroImage} alt="." />
      <div className="hero-content">
        <h1>Welcome to my Website!</h1>
        <p>Your hero description goes here.</p>
      </div>
    </div>
     );
}
 
export default Home;