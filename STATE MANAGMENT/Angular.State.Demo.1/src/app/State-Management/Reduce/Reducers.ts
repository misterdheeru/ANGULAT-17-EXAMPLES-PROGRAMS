let initialstate = {
  Id: '',
  Name: '',
  Salary: '',
  Email:''
};

export function EmployeesReducers(state = initialstate, action: any) {

    switch(action.type)
    {
        case 'emp-name':
        return {...state , Name :action.payload};
        default :
        return state

    }

}

export const rootReducer = {EmployeesReducers}
