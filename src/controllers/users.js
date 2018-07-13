import {_getUserById, _getUserByUsername} from '../services/users';


// Get user by :id
export const getUserDataById = async (req, res) => {
  const id = req.params.id;
  if(!id){ res.status(400).send('The User ID is required'); }
  const user = await _getUserById(id);
  if(!user){ res.sendStatus(404); }
  res.send(user);
}


// Get user by :username
export const getUserDataByUsername = async (req, res) => {
  const username = req.params.username;
  if(!username){ res.status(400).send('The Username is required'); }
  const user = await _getUserByUsername(username);
  if(!user){ res.status(404).send('The User with the given username is not found'); }
  res.send(user);
}
