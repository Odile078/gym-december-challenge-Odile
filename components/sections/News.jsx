import Link from "next/link";
import LinkItem from "../ui/LinkItem";
import Wrapper from "../wrapper/Wrapper";
import newsList from "../../data/newsList";
import NewsCard from "../cards/NewsCard";
// const NewsList = news;
const News = () => {
  console.log(newsList);
  return (
    <Wrapper>
      <div className="mt- mt-12 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col pr-3 gap-6">
            <h2 className=" text-2.5xl text-brandBlue-dark font-bold leading-tighter tracking-large">
              News from TUM
            </h2>
            <p class="mt-6 text-xl tracking-large text-brandBlue-dark">
              News, research results and events: everything that enthuses people
              at our university.
            </p>
            <div>
              <LinkItem
                className="text-white inline-block bg-brandBlue font-bold px-5 py-6 hover:bg-brandBlue-dark4"
                text="SEE ALL"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row  gap-6">
            {newsList?.slice(0, 2)?.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className=" w-full lg:w-1/2 mt-12 xl:ml-0 xl:mr-34% flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
            {newsList?.slice(2, 4)?.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
