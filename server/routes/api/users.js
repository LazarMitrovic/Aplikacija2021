import express from 'express';
import { getUsers, getUsersById, createUsers, updateUserById, deleteUserById, validateUser} from '../../controllers/uContreollers.js';



const router = express.Router();

//http://localhost:3001/api/users
router.get('/',getUsers);
router.get('/:id',getUsersById);
router.post('/',createUsers);
router.put('/:id',updateUserById);
router.delete('/:id',deleteUserById);
router.post('/valid',validateUser)

export default router;