import {createStore} from 'redux'
 
 
//---------Initial State----------------//
let initialState={
    name:"syed",
     list:[],
     no:"false",
},

  
 
 
//------------------reducer ----------------//
const ListReducer =(state=initialState, action )=>{
    switch(action.type){
    case 'Add_Value':return{
                    ...state,
                   
                    list:[...state.list,action.value]
                      
                    }
    default : return state
    
    }
}
    
 
const store = createStore(ListReducer)
export default store
