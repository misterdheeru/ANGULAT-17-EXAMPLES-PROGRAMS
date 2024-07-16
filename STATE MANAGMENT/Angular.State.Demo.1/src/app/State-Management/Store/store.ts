import { StoreModule } from "@ngrx/store";
import { rootReducer } from "../Reduce/Reducers";

export const myStore = StoreModule.forRoot(rootReducer)