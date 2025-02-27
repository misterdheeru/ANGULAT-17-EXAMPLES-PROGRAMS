import { createReducer, on } from '@ngrx/store';
import { courses } from '../../MODELS/cards.Model';
import { setCourse } from '../ACTIONS/courseCards.Actions';

export interface COURSES {
  courses: courses[];
}
export const INITIONALDATA = {
  courses: [
    {
      ID: 1,
      Name: 'SUPER 30 Dot Net Job Guarantee Program',
      FACULITYNAME: 'RNREDDY',
      StartBy: ' 5/07/2024',
      Dur: '60 Days',
      img: 'https://s3.ap-south-1.amazonaws.com/nareshit.images/full-stack-dot-net-placement-assistance-program-nareshit.jpg',
    },
    {
      ID: 2,
      Name: 'Full Stack Python Job Assistance  Program',
      FACULITYNAME: 'RNREDDY',
      StartBy: ' 5/07/2024',
      Dur: '60 Days',
      img: 'https://s3.ap-south-1.amazonaws.com/nareshit.images/python.jpg',
    },

    {
      ID: 3,
      Name: 'Full Stack Java Job Assistance  Program',
      FACULITYNAME: 'RNREDDY',
      StartBy: ' 5/07/2024',
      Dur: '60 Days',
      img: 'https://s3.ap-south-1.amazonaws.com/nareshit.images/Java.jpg',
    },
  ],
};

export const CourseReduser = createReducer(
  INITIONALDATA,
  on(setCourse, (state, DATA) => {
    return {
      ...state,
      courses: DATA.COURSES,
    };
  })
);
