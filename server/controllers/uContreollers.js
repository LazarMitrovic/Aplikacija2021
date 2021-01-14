import usersModel from '../model/uModel.js';
import mongoose from 'mongoose';
//get
export const getUsers = async (req,res,next)=>{
    try {
        const users = await usersModel.find({}).exec();
        console.log(users);
        res.status(200).json(users)    
    } catch (error) {
        next(error);
    }
    
};
//get by id
export const getUsersById = async (req,res,next)=>{
    try {
        const user = await usersModel.findById(req.params.id).exec();
        if (user){
            res.status(200).json(user);
        }
        else{
        res.status(404).send('404 is not found');
        }    
    } 
    catch (error) {
        next(error);    
    }
};
//post
export const createUsers = async (req,res,next)=>{
    
    try {
        if (!req.body.username || !req.body.password){
            res.status(400).send('Bad request')
        }
        else{
           
            const newId = new mongoose.Types.ObjectId();
            const newUser = new usersModel({ 
                _id: newId,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                age: req.body.age,
            });
            
            await  newUser.save();
            res.status(200).json(newUser);
        }    
    } catch (error) {
        next(error);
    }
};
//put by Id
export const updateUserById = async (req,res,next)=>{
    try {
        const user = await usersModel.findById(req.params.id).exec();
    if (user){
        const updataPasswordInfo = req.body;

        if (updataPasswordInfo.currentPassword != user.password){
            res.status(400).send('paswword doesnt match')
        }
        else {
            user.password = updataPasswordInfo.newPassword;
            await user.save();
            //usersModel.updateOne({_id: req.params.id}, { $set: {password: updataPasswordInfo.newPassword}});
            res.status(200).send(); 
        }
    }
    else{
        res.status(404).send('404 is not found');
    }    
    } catch (error) {
        next(error);   
    }
};

//delete
export const deleteUserById = async (req,res,next)=>{
    try {
        const delUser = await usersModel.findById(req.params.id).exec();
        if (delUser){
        await usersModel.deleteOne({_id: req.params.id});
        res.status(200).send(delUser);
        }
        else{
            res.status(404).send('NOT FOUND');
        }    
    } catch (error) {
        next(error); 
    }
};

//validate
export const validateUser = async (req,res,next)=>{
  
    const users = await usersModel.find({email:req.body.email, password:req.body.password}).exec();
    console.log(req.body.email);
    if (users.length > 0){
        
        const dataLog={
            email: users[0].email,
            password: users[0].password
        };
        console.log(dataLog);
        res.status(200).send(dataLog);
    }
     
    else {
         res.status(200).send(false)
     }
    }
   
    
      
 
    


