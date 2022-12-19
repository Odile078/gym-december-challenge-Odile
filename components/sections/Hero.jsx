import Play from "../icons/Play";
import Wrapper from "../wrapper/Wrapper";
const Hero = () => {
  return (
    <div className=" relative md:min-h-175 bg-heroBackground bg-cover">
      <div className="bg-heroBackground2 bg-cover absolute inset-0 z-20"></div>
      <Wrapper>
        <div className="max-w-2lg py-16 z-20 relative text-white tracking-large">
          <h1 class="text-4xl leading-tighter lg:text-5xl lg:leading-mediumTight">
            TUM. The Entrepreneurial
            <br />
            University
          </h1>
          <p className="text text-xl mt-6">
            Innovation through talent, excellence and responsibility
          </p>
        </div>
      </Wrapper>
      <div>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          playsinline="playsinline"
          className="md:absolute z-10 w-full object-cover md:h-full md:inset-0 flex items-center justify-center"
        >
          <source
            src="/videos/tum_startseite_header_010922.mp4"
            type="video/mp4"
          />
        </video>
        <div className="flex justify-end max-w-8xl xl:mx-auto">
          <button className=" bg-brandBlue text-white flex font-bold text-base justify-self-end p-2.5 z-30 absolute right-6 bottom-6">
            <Play />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
