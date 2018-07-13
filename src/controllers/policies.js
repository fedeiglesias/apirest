import {_getPoliciesByUserId, _getPolicyById} from '../services/policies';
import {_getUserById, _getUserByUsername} from '../services/users';


// Get policies by :username
export const getPoliciesByUsername = async (req, res) => {
  const username = req.params.username
  if(!username){ 
    res.status(400).send('The Username is required');
    return;
  }
  const user = await _getUserByUsername(username)
  if(!user){ 
    res.sendStatus(400);
    return;
  }
  
  const policies = await _getPoliciesByUserId(user.id);
  res.send(policies);
}


 // Get User by policy :policy
export const getUserByPoliceId = async (req, res) => {
  const policyId = req.params.policy;
  
  if(!policyId){ 
    res.status(400).send('The Policy ID is required');
    return;
  }

  const policy = await _getPolicyById(policyId);
  if(!policy){ 
    res.status(404).send('The Policy with the given ID is not found');
    return;
  }

  const user = await _getUserById(policy.clientId);
  if(!user){
    res.status(404).send('This Policy does not have assigned a Client');
    return;
  }
  
  res.send(user)
}
