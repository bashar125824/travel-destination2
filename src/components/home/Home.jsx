import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
//import Data from "../../data/Data";

function Home(props) {
    return (
        <>
            <Header/>
            <Tours tours={props.data} />
            <Footer/>
            
        </>

    )
}



export default Home;
