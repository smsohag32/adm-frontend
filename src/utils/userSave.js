import axios from "axios"

// save user to mongodb database
const userSave = async(user)=>{
    const email = user.email;
    const userInfo = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        university: '',
        address: ''
    }
    const res = await axios.put(`https://adm-backend.vercel.app/users/${email}`, userInfo);
    const data = res.data;
    return data;
}

export default userSave;