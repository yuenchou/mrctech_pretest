import React, {useState} from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import ImageSlider from './components/ImageSlider';
import CountDown from './components/CountDown';
import ProductList from './components/ProductList';
import ScrollButton from './components/ScrollButton';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
      <>
        <div className="container">
          <div className="search">
            <SearchBar setSearchTerm={setSearchTerm}/>
          </div>
          <div>
            <ImageSlider/>
          </div>
          <div className="countDown">
            <CountDown/>
          </div>
          <div className="productList">
            <ProductList searchTerm={searchTerm}/>
          </div>
        </div>
        <ScrollButton/>
      </>
  );
}

export default App;
