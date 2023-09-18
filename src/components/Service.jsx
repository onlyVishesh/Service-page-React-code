import Quotes from "./Quotes";
import Section1 from "./Section1";
import AmbulanceTypes from "./AmbulanceTypes";
import Section3 from "./Section3";
import Section5 from "./Section5";
const Service = () => {
    return ( 
    <main className="main">
         <Section1/>
            <AmbulanceTypes />

         <Section3/>

        <Quotes />
<Section5/>

    </main>
    );
}
 
export default Service;