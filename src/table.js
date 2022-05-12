import React, { Component } from "react";

class Table extends Component{
 handleUsername = (event) => {
    this.setState({
        username : event.target.value 
    })
}
handleTopic = (event) => {
    console.log(event.target.value);
    this.setState ({
        topic : event.target.value
    })
}
handleComment = (event) => {
    this.setState({
        comment : event.target.value
    })
}
handlesubmit = (event) =>{
    alert(`${this.state.username}  ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
} 
    constructor(props) {
        super(props) 
        this.state = {
            username :'',
            comment :'' ,
            topic :'' ,
            
        }
    }
    
    render() {
        return(
            <div>
                <form >
                Form Component By Class Method<br></br> <br></br>
                <label>User Name</label> 
                <input type='text' value={this.state.username} 
                onChange={this.handleUsername}/>
                <br></br>
                <br></br>

                <label>
                    Comment
                </label>
                <textarea value={this.state.comment}
                 onChange={this.handleComment}></textarea><br></br>
                <label>
                    Topic
                </label><br></br><br></br><select value={this.state.topic}
                 onChange={this.handleTopic}>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Twitter">Twitter</option>
                </select>
                <button type="submit" onClick={this.handlesubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Table