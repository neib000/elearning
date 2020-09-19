import { Container, Typography, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import React, { Component } from "react";
import CardItem from "../../components/CardItem";
// import axios from "axios";
import { style } from "./style";
import { connect } from "react-redux";
import { fetchCourse } from "../../redux/actions/course";
// import { SET_COURSES } from "../../redux/actions/type";
// import { creatorAction } from "../../redux/actions";
class Home extends Component {
  renderCourses = () => {
    return this.props.courseList.map((item, index) => {
      return (
        <Grid item key={index} xs={12} sm={6} md={3} lg={3} xl={3}>
          <CardItem item={item}  />
        </Grid>
      );
    });
  };
  render() {
    return (
      <div>
        <Typography
          className={this.props.classes.title}
          variant="h2"
          component="h1"
        >
          Danh sách khóa học
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {this.renderCourses()}
          </Grid>
        </Container>
      </div>
    );
  }
  componentDidMount() {
    // axios({
    //   url:
    //     "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    //   method: "GET",
    // })
    //   .then((res) => {
    //     //dis.patch action
    //     this.props.dispatch(creatorAction(SET_COURSES, res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //nâng cấp code tạo middleware
    this.props.dispatch(fetchCourse);
  }
}
const mapStateToProps = (state) => {
  return {
    courseList: state.courses.courseList,
  };
};
export default connect(mapStateToProps)(withStyles(style)(Home));
