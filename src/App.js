import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Carousel from "./components/Carousel"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Support from './Pages/Support';

import About from './Pages/About';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import BookSession from './Pages/BookSession';
import PaySession from './Pages/PaySession';
import RequestQuote from './Pages/RequestQuote';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          {/* <Home /> */}
          {/* <Gallery /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booksession" element={<BookSession />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/paysession" element={<PaySession />} />
          <Route path="/requestquote" element={<RequestQuote />} />
          <Route path="/support" element={<Support />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
