import fetch from 'node-fetch'

export const _getUserById = async id => {
  const response = await fetch('http://www.mocky.io/v2/5808862710000087232b75ac');
  const json = await response.json();
  const users = json.clients;
  const user = users.find(el => el.id === id);
  return user;
}

export const _getUserByUsername = async username => {
  const response = await fetch('http://www.mocky.io/v2/5808862710000087232b75ac');
  const json = await response.json();
  const users = json.clients;
  const user = users.find(el => el.email === username);
  return user;
}