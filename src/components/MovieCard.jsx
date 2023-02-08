import Imdb from "../asssets/images/IMDB.png";
import Army from "../asssets/images/army.jpg";
import Button from "../components/Button.jsx";

const MovieCard = ({ dir }) => {
  return (
    <div className="w-full h-64 rounded-lg relative">
      <div className="w-full h-64 bg-gradient-to-t from-neutral-800 to-transparent absolute -z-40 absolute rounded-lg"></div>
      <img
        className=" h-[250px] w-full rounded-lg absolute -z-50"
        src={Army}
        alt="image slide 1"
      />
      <div className="flex items-end h-full justify-between p-5">
        <div className="text-[#fff] flex-col">
          <p>Army of the dead</p>
          <p>2021</p>
          <div className="flex items-center">
            <img
              className="object-fill w-full w-[35px] h-[15px] mr-2 "
              src={Imdb}
              alt="image slide 1"
            />
            <p>7.9 Rating</p>
          </div>
        </div>
        <Button dir={dir}></Button>
      </div>
    </div>
  );
};

export default MovieCard;
