import React,{Component} from 'react'
import {AddToList} from '../actions'
import {connect }  from 'react-redux'




class  ListComponent extends Component{
 
constructor(props)
{
    super(props)   
    
}
 
//----------------handleClick method to capture the text from input field -------//
 handleClick=(e)=>{
    this.value=e.target.value;
}
//----------------Submit method to update the list in store by passing the input text value to action creator-------------
 Submit=()=>{
   this.props.AddToList(this.value);
}
 
    render(){
        console.log(this.props)
        return(
        <div className="ui segment">
         
          <input
          onChange = {this.handleClick}
           />
            <button 
            className = " primary ui button"
            onClick={this.Submit}>Add Item</button>
            <ul>{this.props.list.map((i,index)=><li key={index}>{i}</li>)}</ul>
            
        </div>)
 
 
    }
}
//action type
//action cretor
//reducer
//state
 
const mapToProps = state =>
{
    return {
            list:state.list
            
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        AddToList:(item)=>dispatch(AddToList(item))
    };
 
}
export  default connect(mapToProps,mapDispatchToProps)(ListComponent)
