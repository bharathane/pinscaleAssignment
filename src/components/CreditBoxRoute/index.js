import { BsCurrencyDollar } from "react-icons/bs";

import "./index.css";

const CreditBox = (props) => {
  const { Creditdata } = props;

  const { sum } = Creditdata;

  return (
    <div className="cred-con">
      <div>
        <h1 className="cred-amt-txt">
          <BsCurrencyDollar />
          {sum}
        </h1>
        <p className="cred-txt">Credit</p>
      </div>
      <img
        src="https://res.cloudinary.com/reddyimgs/image/upload/v1690551063/Group_fnu7wc.png"
        alt="credit"
        className="cred-img"
      />
    </div>
  );
};
export default CreditBox;
