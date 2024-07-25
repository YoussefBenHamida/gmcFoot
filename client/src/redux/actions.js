import axios from "axios"
import { GET_Auth_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, ADD_MATCH_SUCCESS , ADD_MATCH_FAILURE} from "./actionTypes"
import { GET_MATCHS} from "./actionTypes";


export const registerUser=(newUser)=>async(dispatch)=>{
    try{
   const res= await axios.post("http://localhost:5000/foot/register",newUser)
dispatch({
    type:REGISTER_USER,
    payload:res.data
})
    }
    catch(error){
        console.log(error)
    }

}

//login user
export const loginUser=(user)=>async(dispatch)=>{
    try{
        const res=await axios.post("http://localhost:5000/foot/login",user)
dispatch({
    type:LOGIN_USER,
    payload:res.data
})
    }
    catch(error){
        console.log(error)
    }

}

//get auth user
export const getAuthUser=()=>async(dispatch)=>{
    const config={
        headers:{
            "authorization":localStorage.getItem("token")
        }
    }
    try{
const res=await axios.get("http://localhost:5000/foot/user",config)
dispatch({
    type:GET_Auth_USER,
    payload:res.data
})
    }
    catch(error){
console.log(error)
    }
}

//logout
export const logout=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
}



// Filter and get matchs
export const getMatchs  = (filters = {}) => async (dispatch) => {

  const { localisation, prix, nombre_de_joueur,nom_de_terrain } = filters;

  // Build the query parameters string
  const params = new URLSearchParams();
  if (localisation) params.append('localisation', localisation);
  if (prix) params.append('prix', prix);
  if (nombre_de_joueur) params.append('nombre_de_joueur', nombre_de_joueur);
  if (nom_de_terrain) params.append('nom_de_terrain', nom_de_terrain);

try{
  const res = await axios.get(`http://localhost:5000/foot/getMatchBy?${params.toString()}`)
  dispatch({
    type:GET_MATCHS,
    payload:res.data
})
    }
    catch(error){
        console.log(error)
    };
}

// add Match
export const addMatch=(newMatch)=> async (dispatch) =>{
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
          'http://localhost:5000/foot/addMatch',
          newMatch,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        dispatch({ type: ADD_MATCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_MATCH_FAILURE, payload: error.message });
    }
    };


export const deleteMatch=(id)=>(dispatch)=>{
    axios.delete(`http://localhost:5000/foot/deleteMatch/${id}`)
    .then((res)=>dispatch(getMatchs()))
    .catch((err)=>console.log(err))
}