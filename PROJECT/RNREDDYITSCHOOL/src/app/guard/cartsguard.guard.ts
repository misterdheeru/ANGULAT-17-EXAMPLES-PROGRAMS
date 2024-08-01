import { CanActivateFn } from '@angular/router';

export const cartsguardGuard: CanActivateFn = (route, state) => {
  
  const userrole = "Admin"
  
  if(userrole=="Admin")
  {
    return true;
  }
  else{
    alert("YOU DONT AVE ANY ACCESS")
    return false;
  }
 
};
