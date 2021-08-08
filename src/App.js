import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{

    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                //console.log(advice);//we are going level by level deeper into the api respose ... finally getting the randomly genrated qoutes...
                //h1 ko access nhi tha fetech function ka to hm usko access provide karenge ... statefunction me jjaa k ..
                this.setState({advice:advice});
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        const{advice}=this.state
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>
                           give me advice 
                        </span>
                    </button>
                </div>
            </div>
            
        )
    }
}

export default App;