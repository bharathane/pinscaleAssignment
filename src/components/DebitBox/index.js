import { BsCurrencyDollar } from "react-icons/bs";

import "./index.css";

const DebitBox = (props) => {
  const { Debitdata } = props;

  const { sum } = Debitdata;

  return (
    <div className="debt-con">
      <div>
        <h1 className="debt-amt-text">
          <BsCurrencyDollar />
          {sum}
        </h1>
        <p className="deb-text">Debit</p>
      </div>
      <img
        src="https://res.cloudinary.com/reddyimgs/image/upload/v1690551063/Group_1_duvjof.svg"
        alt="debit"
        className="debt-image"
      />
    </div>
  );
};

export default DebitBox;
