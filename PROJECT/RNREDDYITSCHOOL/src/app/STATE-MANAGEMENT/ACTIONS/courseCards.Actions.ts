import { createAction, props } from "@ngrx/store";
import { courses } from "../../MODELS/cards.Model";

export const setCourse = createAction("[SET COURSE]" , props<{COURSES:courses[]}>())