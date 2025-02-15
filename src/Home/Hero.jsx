function Hero() {
    return (
      <div
        className="hero min-h-screen bg-black bg-opacity-50 bg-blend-overlay"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/30/35/16/303516b3d848265807856338aabd9572.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
  export default Hero;
  