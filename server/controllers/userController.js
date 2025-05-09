const User = require("../models/user");
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');






// const loginController = async(req,res)=>{
//     try {
//         const {email,password} = req.body;
        
//         if(!email || !password){
//             return res.status(401).json({message:"all fields required",status:401})
//         }
        
//         const findbyEmail = await User.findOne({email})
//         if(!findbyEmail){
//             return res.status(200).json({message:"user not found please signup ",status:404})
//         }
        
//         const decryptedPassword = bcrypt.compare(password,findbyEmail.password)
//         // const matchPassword = findbyEmail.password == password;
//         if(!decryptedPassword){
//             return res.status(200).json({message:"incorrect password",status:400})
            
//         } 
        
//         const token = await jwt.sign({userid:findbyEmail._id,name:findbyEmail.username,email:findbyEmail.email},'this_is_secret_key')
        
//         // console.log(hashedPassword,password);
//         return res.status(200).json({message:"user logged in succesfully using bcrypt",status:200,token})
//     } catch (error) {
//         return res.status(200).json({message:"something went wrong ",status:500})

//     }
// }

const getUser = async (req, res) => {
  try {
    const allUser = await User.find({});
    if (!allUser) {
      return res.status(401).json({ message: "something wrong" });
    }
    res.json(allUser);
    return res.status(200).json({ message: "fetched all data" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const { contact, password } = req.body;

    // const searchEmail = await User.findOne(email);
    if (!contact || !password || !email) {
      return res.status(401).json({ message: "fill data", status: 401 });
    }
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { contact: contact, password: password } }
    );
    updatedUser.save();
    return res.status(200).json({ message: "user updated" });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

const userDeletion = async(req,res)=>{
    try {
        const {email} = req.query;
        if(!email){
            return res.status(401).json({message:"should have email query"})
        }


         await User.findOneAndDelete({email})

        return res.status(200).json({message:"user deleted succesfully"})

    } catch (error) {
        return res.status(500).json({message:"something went wrong",error})
    }
}

// Export using exports object (CommonJS style)
module.exports = {  getUser, updateUser,userDeletion};
