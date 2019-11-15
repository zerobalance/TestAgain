import React from 'react'

class Clock extends React.Component {
    state = {
        date: new Date()
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    shouldComponentUpdate(){
        return false;
    }

    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <br/>
            </div>
        )
    }
}

export default Clock;