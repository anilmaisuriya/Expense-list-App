import './Expenseitem.css'
import Expensedate from './Expensedate';

function Expenseitem(props){


return(


    <div className="expense-item">
     <Expensedate date={props.date  }/>
    <div className="expense-item-des">
    <h2>{props.title}</h2>
    <div className="expense-item-des-ps">{props.amount}</div>
    </div>
    </div>

);

}

export default Expenseitem;