import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h2>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Booking-App
          </Link>
        </h2>

        <Link to="/booking">
          <button>Book Now </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
