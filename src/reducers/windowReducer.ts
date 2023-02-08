import {createSlice} from "@reduxjs/toolkit"

const windowSlice = createSlice({

    name:"window",
    initialState : {
            tabOpen : true,
            modalOpen: false,
            currentPage: '',
        
    },
    reducers:{
            toggleWindowTab :(state,action) =>{
                state.tabOpen = action.payload.tabOpen
        },
        toggleModal :(state,action) =>{
                state.modalOpen = action.payload.modalOpen
        }
        ,toggleCurrent :(state,action) =>{
        state.currentPage = action.payload.currentPage
        }
    }

})
export const {toggleWindowTab,toggleModal,toggleCurrent} = windowSlice.actions;

export default windowSlice.reducer ;