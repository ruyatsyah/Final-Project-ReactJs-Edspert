import Character from "../assets/img/character.png";
import PropTypes from "prop-types";
import Typography from "./Typhography";
import { useNavigate } from "react-router-dom";


function Section(props) {
  const navigate = useNavigate()

  return (
    <div className="px-[29px] self-center pt-5 -mr-8">
      <div
        key={props.title}
        className="rounded-3xl w-[352px] h-[293px] border-[1px]"
      >
        <div className="h-[128px] flex bg-[#152A46] rounded-t-3xl pt-[20px]">
          <button onClick={() => navigate('/detail')}><img className="ml-[28px] -mt-2" src={Character} alt="Character" /></button>
          <div className="ml-[17px]">
           <a href="#" onClick={() => navigate('/detail')}>
            <div>
            <Typography variant="alert" size="subtitle">
              {props.intensive}
            </Typography>
            <Typography variant="primary" size="title">
              {props.title}
            </Typography>
            <Typography size="body" variant="primary">
              {props.content}
            </Typography>
            </div>
           </a>
          </div>
        </div>
        <a href="#" onClick={() => navigate('/detail')}>
        <div className="h-[164px] px-[24px] py-[10px]">
          <Typography variant="black" size="title">
            {props.titledua}
          </Typography>
          <Typography variant="black" size="title">
            {props.contentdua}
          </Typography>
          <p className="text-sm mt-2">
            <span className="mr-6 text-slate-400">Batch</span> {props.batch}
          </p>
          <p className="text-sm">
            <span className="mr-5 text-slate-400">Mentor</span>{props.mentor}
          </p>
          <p className="text-center line-through text-sm mt-3">
            {props.price}
          </p>
          <p className="text-medium text-end text-[#0ACF83] font-semibold text-[20px] -m-5 mr-0">
            {props.discount}
          </p>
        </div>
        </a>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.string,
};

export default Section;
