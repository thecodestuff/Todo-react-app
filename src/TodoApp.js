import React, {Component} from 'react'
import Form from './Form.js'

class TodoApp extends Component{
  constructor(){
    super();
    this.state = {
      items:['item1','item2']
    }
  }

  handleSubmit = item =>{
   this.setState({
     items:this.state.items.concat(item)
   }); 
  }
  render(){
    return(
      <div className="list">
        <p>Your productive friend</p>
        <Form handleSubmit={this.handleSubmit}/>
        <ul>
        {
          this.state.items.map( (item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
        </ul>
      </div>
   );
  }
}

export default TodoApp;
