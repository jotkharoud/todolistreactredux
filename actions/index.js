//action generator

 export  const AddToList=(item)=>{         //item is the value passed is the text entered in input field
       console.log(item)
       return {
           type:'Add_Value',
           value:item,
         }
   }

