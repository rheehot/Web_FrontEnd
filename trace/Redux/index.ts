import { combineReducers } from "node_modules/redux";
import { HYDRATE } from "next-redux-wrapper";
import review from "./review";
import SignUp from "./SignUp";
import user from "./user";
import ModalPage from "./ModalPage";
import login from "./login";
import alertHandle from "./alertHandle";
import getAuth from "./getAuth";

const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        default: {
            const combineReducer = combineReducers({
                review,
                SignUp,
                user,
                ModalPage,
                login,
                alertHandle,
                getAuth,
            });
            return combineReducer(state, action);
        }
    }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
