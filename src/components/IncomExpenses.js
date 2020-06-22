import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    
    const getIncome=()=>{
        let income = 0;
        for(var i=0; i<transactions.length; i++){
            if(transactions[i].amount>0)
                income += transactions[i].amount;
        }
        return income;
    }
    
    const getExpenxe=()=>{
        let expense = 0;
        for(var i=0; i<transactions.length; i++){
            if(transactions[i].amount<0)
                expense += transactions[i].amount;
        }
        return expense;
    }
   /* const amounts = transactions.map(transaction => transaction.amount);
    
    const income = amounts
        .filter(item => item>0)
        .reduce((acc, item) =>(acc += item),0)
        .toFixed(2);

    const expense = amounts
        .filter(item => item<0)
        .reduce((acc, item) =>(acc += item),0) * -1
        .toFixed(2);
    */
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>            
                <p className="money plus">Rs. {getIncome()}</p>
            </div>
            <div>
                <h4>Expense</h4>            
                <p className="money minus">Rs. {getExpenxe()}</p>
            </div>
        </div>
    )
}
