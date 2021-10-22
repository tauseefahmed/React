import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todolist: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handlecomplete = this.handlecomplete.bind(this)


    }

    handlecomplete() {

    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })



    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.setState(
            prevState => ({
                todolist: [...prevState.todolist, e.target[0].value]
            })
        )
        this.setState({
            value: ""
        })
    }

    render() {
        let output = this.state.todolist;
        output = output.map((ot) => (
            <li key={ot.toString()} className="mb-2" onClick={this.handlecomplete}>{ot}</li>
        ))
        return (
            <div className="meanContainer">

                <form onSubmit={this.handleFormSubmit} className="form-inline">
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} className="col-auto mb-2 todoField"></input>
                    <input type="submit" value="Submit" className="btn btn-success col-auto"></input>
                </form>
                <div className="todoListItem mt-3">
                    <ul className="todoUL">
                        {output}
                    </ul>
                </div>
            </div>
        )
    }
}