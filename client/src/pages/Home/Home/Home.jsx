import HomeBanner from "../../../components/SectionTitel/HomeBanner";
import Banner from "../Banner/Banner";
import Category from "../Cotegory/Category";
import PopularMeno from "../PopularMeno/PopularMeno";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <HomeBanner/>
           <PopularMeno/>
        </div>
    );
};

export default Home;