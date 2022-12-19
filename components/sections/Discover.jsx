import LinkItem from "../ui/LinkItem";
import Wrapper from "../wrapper/Wrapper";

const Discover = () => {
  return (
    <div className="mt-12">
      <Wrapper>
        <p className=" font-bold text-base text-brandBlue-dark leading-relaxed tracking-large ">
          Customized navigation
        </p>
        <h2 className="mb-12 text-brandBlue-dark font-bold leading-tighter tracking-large text-3.5xl mt-0.5">
          Discover what TUM has to offer
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-12 md:mt-0">
          <div className=" sm:p-10 p-6 bg-brandYellow">
            <div className="p-2 bg-white border border-gray-100">
              <p className="py-3 px-5 text-brandBlue-dark text-sm leading-tight tracking-large">
                For:
              </p>
              <ul>
                <li>
                  <button className="w-full py-3 px-5 text-start text-base text-brandBlue-dark bg-gray-200">
                    Prospective Students
                  </button>
                </li>
                <li>
                  <button className="w-full py-3 px-5 text-start text-base text-brandBlue hover:text-brandBlue-dark hover:bg-gray-200">
                    Founders
                  </button>
                </li>
                <li>
                  <button className="w-full py-3 px-5 text-start text-base text-brandBlue hover:text-brandBlue-dark hover:bg-gray-200">
                    Employees
                  </button>
                </li>
                <li>
                  <button className="w-full py-3 px-5 text-start text-base text-brandBlue hover:text-brandBlue-dark hover:bg-gray-200">
                    Show All
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-brandBlue-dark tracking-large text-4.5xl leading-tighter font-bold mt-0.2">
              Prospective Students
            </h3>
            <p className="text-brandBlue-dark tracking-large leading-normal text-xl mt-6">
              Learn to bring ideas to life, discover new possibilities, work in
              teams and build networks.
            </p>
            <div className="mt-8">
              <LinkItem
                text="Learn more"
                className="py-4 px-5 border border-brandBlue hover:border-brandBlue-dark4 text-brandBlue hover:text-brandBlue-dark4"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Discover;
