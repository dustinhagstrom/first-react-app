import React from 'react';

const UserInfoComponent = () => {
  // were gonna change this later to use mock data
  const userData = undefined;

  if(!userData){
    return 'not log in'
  }

  return userData.name;
}

export default UserInfoComponent;