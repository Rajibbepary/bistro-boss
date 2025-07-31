import HomeBanner from "../../../components/SectionTitel/HomeBanner";
import Banner from "../Banner/Banner";
import Category from "../Cotegory/Category";
import Featured from "../Featured/Featured";
import PopularMeno from "../PopularMeno/PopularMeno";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <HomeBanner/>
           <PopularMeno/>
           <Featured/>
        </div>
    );
};

export default Home;