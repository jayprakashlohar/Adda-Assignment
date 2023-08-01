import { Routes,Route } from "react-router-dom"
import BookingStatus from "../BookingStatus"
import BookingForm from "../BookingForm"

const MainRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" elements={<BookingStatus />}></Route>
          <Route path="/booking" elements={<BookingForm/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default MainRoutes
