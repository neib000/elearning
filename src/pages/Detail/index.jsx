import React, { Component } from 'react'

 class Detail extends Component {
    render() {
        return (
            <div>
                Course Detail
            </div>
        )
    }

    componentDidMount(){
        //component nào có gắn path của route thì mới gọi ra được match
        const course_id = this.props.match.params.course_id;
        console.log(course_id);

        //call api lấy thông tin khóa học lên
    }
}

export default Detail;