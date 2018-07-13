import fetch from 'node-fetch';

export const _getPoliciesByUserId = async user => {
  const response = await fetch('http://www.mocky.io/v2/580891a4100000e8242b75c5');
  const json = await response.json();
  const policies = json.policies;
  const policy = policies.filter(el => el.clientId == user);
  return policy;
}

export const _getPolicyById = async id => {
  const response = await fetch('http://www.mocky.io/v2/580891a4100000e8242b75c5');
  const json = await response.json();
  const policies = json.policies;
  const policy = policies.find(el => el.id === id);
  return policy;
}