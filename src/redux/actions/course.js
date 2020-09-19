import { creatorAction } from "./index";
import { request } from "../../configs/request";
import { SET_COURSES } from "./type";

//async action là 1 arrow fc bình thường
export const fetchCourse = (dispatch, history) => {
  request(
    "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    "GET"
  )
    .then((res) => {
      console.log(res);
      //dis.patch action
      //Sau khi nâng cấp this.props không còn nữa vì nó không phải component
      dispatch(creatorAction(SET_COURSES, res.data));
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
