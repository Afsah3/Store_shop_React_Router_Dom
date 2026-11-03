import { Route, Routes } from "react-router";
import { Nav } from "./nav/Nav";
import Shop from "./shop/shop";
import About from "./About us/About";
import Contact from "./Contact/Contact";
import Categories from "./Categories/Categories";
import Home from "./Home/Home";




// function EntryPage() {
//   return (
//     <>
//     <h1>Entry page</h1>
//     </>
//   )
// }



export default function App() {
  return (
    <>
      <Nav />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  )
}