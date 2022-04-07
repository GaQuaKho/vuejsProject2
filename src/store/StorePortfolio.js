import { createStore} from "vuex";
const StorePortfolio = {
    namespaced:true,
    state:{
        namePortfolio:'ShowAll',
        originPayload: [],
        currentPayload: []
    },
    mutations:{
        handlePayload(state,value) {
            if(value==="Show all") {
                state.currentPayload = state.originPayload;
         
              } else {
                state.currentPayload = state.originPayload.filter(item=>item.category==`${value.toLowerCase()}`)
              }
      
        },
        setPayload(state,value) {
            state.originPayload = value;
            state.currentPayload = value;
        }
    }

}
export default StorePortfolio;