
const express = require('express');
const router = express.Router();
const {postUserData, getUser, updateUser, userDeletion} = require('../controllers/userController.js');
const {loginController, registerControlller} = require('../controllers/authController.js');



console.log( typeof postUserData);

router.post('/register', registerControlller);

router.get("/users",getUser)
router.put('/updateuser/:email',updateUser)
router.delete('/deleteuser',userDeletion);
router.post('/login',loginController)

module.exports = router