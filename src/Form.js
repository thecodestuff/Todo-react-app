import React, {Component} from 'react'

// component to handle input
class Form extends Component{
  constructor(props){
    super(props);
    this.initialState = { 
      task:'',
    }

    this.state = this.initialState
  }

  handleChange = event =>{
    const {name, value} = event.target
    this.setState({
      [name]:value,
    });
  }

  submitForm = ()=>{
    this.props.handleSubmit(this.state.task)
  }

  render(){
    const {task} = this.state;
    return(
      <form>
        <input type="text" name="task" value={task} onChange={this.handleChange} />
        <button type="button" onClick={this.submitForm}>Add</button>
      </form>
    );
  }
}

export default Form;


