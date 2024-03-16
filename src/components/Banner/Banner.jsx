import "./Banner.css";
// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <div className="hero min-h-[600px] rounded-3xl mb-24 ">
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="w-full lg:max-w-[80%] space-y-6 lg:space-y-9 ">
          <h1 className="text-4xl lg:text-5xl font-bold leading-10">
            Discover an exceptional cooking
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold">
          class tailored for you!
          </h1>
          <p className="leading-10">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          </p>
          <div className="space-x-8">
            <button className="btn bg-[#A5DD9B] rounded-3xl">
              Explore Now
            </button>
            <button className="btn bg-transparent text-white rounded-3xl">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Banner.propTypes = {};

export default Banner;
