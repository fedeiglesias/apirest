import { Router } from 'express';
import {allowRoles} from '../middlewares/auth';
import {login, logout} from '../controllers/auth';
import {getUserDataById, getUserDataByUsername} from '../controllers/users';
import {getPoliciesByUsername, getUserByPoliceId} from '../controllers/policies';


const routes = Router();

routes.post('/login', allowRoles('guest'), login);
routes.post('/logout', allowRoles('user','admin'), logout);

// Get user by userid -> Can be accessed by "users" and "admin"
routes.get('/users/:id', allowRoles('user','admin'), getUserDataById);
// Get user by username -> Can be accessed by "users" and "admin"
routes.get('/users/username/:username', allowRoles('user','admin'), getUserDataByUsername);
// Get policies by username -> Can be accessed by "admin"
routes.get('/users/:username/policies', allowRoles('admin'), getPoliciesByUsername);
// Get user by policy number -> Can be accessed by "admin" 
routes.get('/policies/:policy/user', allowRoles('admin'), getUserByPoliceId);


export default routes;
