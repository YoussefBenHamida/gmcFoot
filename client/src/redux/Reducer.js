import { GET_Auth_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER,GET_MATCHS, ADD_MATCH_FAILURE,ADD_MATCH_SUCCESS} from "./actionTypes";


const initState={
    user:null,
    token:localStorage.getItem("token"),
    msg:null,
    matchs: []

}

export const Reducer=(state=initState,action)=>{
switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
        localStorage.setItem("token",action.payload.token)
        return{...state,
       user:action.payload.user

        }
    case GET_Auth_USER:
        return{
            ...state,
            user:action.payload.user
        }    

       case LOGOUT_USER:
        localStorage.removeItem("token")
        return{
            ...state,
            token:null,
            user:null
        } 
        case ADD_MATCH_SUCCESS:
      return {
        ...state,
        matches: [...state.matches, action.payload],
      };
      case ADD_MATCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
        case GET_MATCHS:
      return {
        ...state,
        matchs: action.payload,
      };  
   
    default:
        return state
}
}

