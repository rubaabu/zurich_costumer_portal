export const isAuthenticated = () => {

  const isAuth = localStorage.getItem('auth');

  console.log("isAuth", isAuth);

  if(isAuth){
    return true;
  }

  return false;

};
