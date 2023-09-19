import Title from "./Title";
import AmbulanceTypes from "./AmbulanceTypes";
import HowItWorks from "./HowItWorks";
import Quotes from "./Quotes";
import CustomerSupport from "./CustomerSupport";

import "./Service.css"
const Service = () => {
    return ( 
    <main className="main">
        <Title/>
        <AmbulanceTypes />
        <HowItWorks/>
        <Quotes />
        <CustomerSupport/>
    </main>
    );
}
 
export default Service;