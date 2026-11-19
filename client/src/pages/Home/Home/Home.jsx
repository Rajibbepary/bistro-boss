import HomeBanner from "../../../components/SectionTitel/HomeBanner";
import Banner from "../Banner/Banner";
import Category from "../Cotegory/Category";
import Featured from "../Featured/Featured";
import PopularMeno from "../PopularMeno/PopularMeno";
import Testmonials from "../Testmonials/Testmonials";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <HomeBanner/>
           <PopularMeno/>
           <Featured/>
           <Testmonials/>
        </div>
    );
};

export default Home;