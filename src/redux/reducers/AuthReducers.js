const INITIAL_STATE={
    username:'',
    isLogin:false
}


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state,isLogin:true,username:action.payload};
        default:
            return state;
    }
}