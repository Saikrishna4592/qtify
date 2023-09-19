import Hero from './components/Hero/Hero';
import styles from './App.css';
import Section from "./components/Section/Section";
import NavBar from './components/NavBar/Navbar';
//import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api.js";
function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    generateTopAlbumData();
  },[])
  return (
    
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} />
        </div>
    </div>
  );
}

export default App;
