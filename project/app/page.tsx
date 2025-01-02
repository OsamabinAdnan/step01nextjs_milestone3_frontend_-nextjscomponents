import Hero from "./components/Hero";
import Newest from "./components/Newest";
import CategoriesPage from "./allcategories/page";

export default function Home() {
  return (
  <>
    <div>
      <Hero/>    
    </div>
    <div>
      <Newest/>
    </div>
    <div>
      <CategoriesPage/>
    </div>
  
  </>
  );
}
