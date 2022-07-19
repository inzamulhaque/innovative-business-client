import Footer from "../pages/Footer"
import Nav from "../pages/Nav"

const Layouts= ({showFooter,showHeader,children}) =>{
    return (
        <>
            {showHeader&& <Nav/> }
            {children}
            {showFooter && <Footer/>}
        </>
     )
 }
 export default Layouts