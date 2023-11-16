import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-4 bg-indigo-900 text-white p-6">
        <p className="text-3xl font-poppins">
          MONI <br /> <i>Share</i>
        </p>
        <p>
          Hello Noella, <br /> what are you up to today?
        </p>
        <button className="rounded bg-white text-black flex flex-col m-auto mb-4 p-3">
          Book car{" "}
        </button>
        <p>or</p>
        <div>
          <button className="rounded bg-white text-black flex flex-col m-auto mb-4 p-3">
            See my cars
          </button>
          <button className="rounded bg-white text-black flex flex-col m-auto p-3">
            See my bookings
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
