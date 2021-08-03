import axios from 'axios'


export const signup = async(url, values) => {
    console.log("this is coming from function", values,{})
   return await axios.post(url,values );
}