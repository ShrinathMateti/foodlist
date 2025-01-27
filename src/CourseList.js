import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      course: "",
    };
  }

  readCourse = (e) => {
    this.setState({ course: e.target.value });
  };

  addCourse = () => {
    this.setState((prevState) => ({
      courses: [...prevState.courses, prevState.course],
      course: '',
    }));
  };

  render() {
    return (
        <div className="container mt-5">
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Course"
                className="form-control mb-3"
                value={this.state.course}
                onChange={this.readCourse}
              />
              <button
                className="btn btn-secondary w-100"
                onClick={this.addCourse}
                onSubmit={this.addCourse}
              >
                Add Course
              </button>
            </div>
            <ul className="list-group">
              {this.state.courses.map((course, index) => (
                <li key={index} className="list-group-item">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      
    );
  }
}

export default CourseList;
