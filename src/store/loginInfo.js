export default {
    namespaced: true,
    state: {
      isLogged: false,
      token:'',
      refreshToken:'',
      sessionId:'',
      isAdmin: false
    },
    getters: {
      isLogged:(state)=>state.isLogged,
      token:(state)=>state.token,
      refreshToken:(state)=>state.refreshToken,
      sessionId:(state)=>state.sessionId,
      isAdmin:(state)=>state.isAdmin
    },
    mutations: {
      SET_ISLOGGED:(state,val)=>{state.isLogged=val},
      SET_TOKEN:(state,val)=>{state.token=val},
      SET_REFRESH_TOKEN:(state,val)=>{state.refreshToken=val},
      SET_SESSION_ID:(state,val)=>{state.sessionId=val},
      SET_IS_ADMIN:(state,val)=>{state.isAdmin=val},
      CLEAR_LOGIN_DATA: (state,val) => {
        state.isLogged = false;
        state.token = "";
        state.refreshToken = ""
        state.sessionId = ""
        state.isAdmin = false
      }
    }
  };