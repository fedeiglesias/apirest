//import {getToken, decodeToken} from '../helpers/auth'
import {_getUserById} from '../services/users'

export const allowRoles = (...allowed) =>
  async (req, res, next) => {
    let role = "guest"
    if(req.session.userId){
      const user = await _getUserById(req.session.userId);
      role = user.role;
    }
    
    //This role not have Access
    if(allowed.indexOf(role) === -1){
      res.status(403).send('You do not have permission to access this resource');
      return;
    }

    next()
  }