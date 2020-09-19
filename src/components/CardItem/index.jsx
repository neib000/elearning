import React, { Component } from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles,
} from "@material-ui/core";
import style from "./style";
import { withRouter } from "react-router-dom";
class CardItem extends Component {
  goToDetail = () => {
    this.props.history.push("/detail/" + this.props.item.maKhoaHoc);
  };
  render() {
    const { tenKhoaHoc, hinhAnh, moTa } = this.props.item;
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              className={this.props.classes.heightImg}
              image={hinhAnh}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {tenKhoaHoc}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {moTa.substr(0, 31)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className={this.props.classes.btn}
              variant="contained"
              color="inherit"
              onClick={this.goToDetail}
            >
              View Detail
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withRouter(withStyles(style, { withTheme: true })(CardItem));
