import "./index.css";
import TxnList from "../AllTxnList";

const TransactionsCard = () => {
  return (
    <div className="last-txn-card">
      <h1>Last Transactions</h1>
      <TxnList />
    </div>
  );
};

export default TransactionsCard;
