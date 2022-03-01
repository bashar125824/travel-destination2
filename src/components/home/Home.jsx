import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Data from "../../data/Data";

function Home() {
    return (
        <>
            <Header/>
            <Tours tours={Data}/>
            <Footer/>
            
        </>

    )
}



export default Home;
