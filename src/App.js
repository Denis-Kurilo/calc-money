import React, { Component } from 'react';
import Total from './components/total/Total'
import Operation from './components/operation/Operation'
import History from './components/history/History'

class App extends Component {

    state = {
        transactions: [],
        description: this.state.description,
        amount: this.state.amount,
    }

    addTransaction(add){
        const transaction = {
            id: `cmr${(+new Date).toString(16)}`,
            description: '',
            amount: '',
        }
    }

    addAmount(e){
        this.setState({amount: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
            <header>
                <h1>Кошелек</h1>
            </header>
            <main>
                <div className="container">
                    <Total/>
                    <History/>
                    <Operation 
                        addTransaction={this.addTransaction}
                        addAmount={this.addAmount}
                    />
                </div>
            </main>
            </React.Fragment>
        );
    }
}

export default App;
