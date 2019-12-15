import {
    SupportApi
} from "../../../api"

const initialState = {
    message: {
        customer_email:"",
    },
    imBusy:false
  };

const postSendContact = (dispatch) => (state) =>{
    const{
        message,
    } = state

        dispatch ({
            ...state,
            imBusy:true,
        })

    return SupportApi.sendTicket(message).then((response) => {
        const {
            msg,
            code,
            data,
            error,
        } = response

        console.log('code', code)

            dispatch({
                ...state,
                ...data,
                imBusy:false,
                message:{
                    customer_email:""
                }
            })
            return data
    })
}

export {
    initialState,
    postSendContact,
}