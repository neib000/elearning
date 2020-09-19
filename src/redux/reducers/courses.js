import { SET_COURSES } from "../actions/type";

let initialState = {
  courseList: [],
  // selectedCourse:null,
  // courseCourse:null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case SET_COURSES: {
          return {...state, courseList:payload}
      }
    default:
      return state;
  }
};

export default reducer;
