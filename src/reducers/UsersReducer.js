import { v4 as uuid } from "uuid";
let initialState = {
	users: [
		{
			name: "John add",
			gen: 20,
			email: "john@example.com",
			id: uuid(),
		},
		{
			name: "Jane add",
			gen: 21,
			email: "jane@gmail .com",
			id: uuid(),
		},
		{
			name: "kofi",
			gen: 20,
			email: "kofi@example.com",
			id: uuid(),
		},
	],
};

let UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NEW_USER":
			return { ...state, users: [...state.users, action.payload] };
		case "DELETE_USER":
			const savedUsers = state.users.filter(
				(user) => user.id !== action.payload
			);
			return { ...state, users:  savedUsers };
			case "EDIT_USER":
				const updatedUsers = state.users.map((user)=>{
					if(user.id === action.payload.newInfo.id){
						return action.payload.newInfo
					}
					else return user
				})
				return { ...state, users: updatedUsers };
				
		default:
			return state;
	}
};

export default UsersReducer;
