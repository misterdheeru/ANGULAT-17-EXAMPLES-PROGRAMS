import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 
  let userroll = "Admin"
 

  if(userroll === "user")
  {
    return true;
  }
  else
  {
    alert("YOU DONT HAVE ANY ACCESS")
    return false;
  }

};
