export const AddNewUser =(newUser)=>{
  return{
    type:"ADD_NEW_USER",
    payload:newUser
  }

}
 export const deleteUser=(id)=>{
  return{
    type:"DELETE_USER",
   payload:id
  }
 }
 export const editUser=(data)=>{
  return {
    type:"EDIT_USER",
    payload:{data}
  }
 }