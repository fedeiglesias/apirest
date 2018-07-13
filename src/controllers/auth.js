import {_getUserByUsername} from "../services/users";

export const login = async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){ 
    res.status(400).send('The Username and password is required');
    return;
  }
  
  const user = await _getUserByUsername(email)
  if(!user){
    res.status(404).send('The User with the given username is not found');
    return;
  }

  // Here need to check de password

  // Save session
  req.session.userId = user.id
  
  res.status(200).send('Login successfull');
}

export const logout = async (req, res) => {
  req.session.destroy();
  res.status(200).send('Logout successfull');
}