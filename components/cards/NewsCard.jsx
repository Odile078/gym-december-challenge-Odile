import Image from "next/image";

const NewsCard = ({ item }) => {
  return (
    <div className="group">
      <div className="relative">
        <Image
          src={item?.img}
          width="465"
          height="280"
          alt="News1"
          className="relative w-full object-cover"
        />
        <p className="absolute text-xxs tracking-large left-0 bottom-0 z-10 text-brandBlue-dark bg-gray-200 py-0.5 px-2 group-hover:text-brandBlue">
          {item?.imgTitle}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-brandBlue-dark group-hover:text-brandBlue font-bold leading-relaxed tracking-large">
          {item?.title}
        </p>
        <h5 className="text-brandBlue-dark group-hover:text-brandBlue text-xl leading-extraTight tracking-large mt-0.5 font-bold">
          {item?.subTitle}
        </h5>
        <p className="text-brandBlue-dark group-hover:text-brandBlue font-medium tracking-large text-sm mt-3">
          {item?.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="pr-3 text-brandBlue-dark group-hover:text-brandBlue text-xxs font-medium tracking-large">
            {item?.date}
          </p>
          <p className="pr-3 text-brandBlue-dark group-hover:text-brandBlue text-xxs font-medium tracking-large">
            {item?.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
