function Hero() {
    return (

      // bg-opacity use for transperency
      //bg-blend-overlay, the black color and image blend together to enhance contrast
      <div
        className="hero min-h-screen bg-black bg-opacity-70 bg-blend-overlay relative" 
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/30/35/16/303516b3d848265807856338aabd9572.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg"> {/* change*/}
            <h1 className="mb-5 md:text-6xl text-5xl font-bold ">Unlimited movies, TV shows and more</h1>
            <p className="mb-5 font-semibold text-lg text-white">
            Starts at ₹149. Cancel at any time.
            </p>
            <p className="mb-5 text-lg">
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            <button className="btn  text-lg bg-red-700 text-white hover:-bg-red-800">Sign in</button>
          </div>
        </div>
      </div>
    );
  }
  export default Hero;
  