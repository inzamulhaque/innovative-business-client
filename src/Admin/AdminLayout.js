import AdminNavbar from "./AdminNavbar"

const AdmonLayout= ({showFooter,showHeader,children}) =>{
    return (
        <>
            {showHeader&& <AdminNavbar/> }
            {children}
          
        </>
     )
 }
 export default AdmonLayout