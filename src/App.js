import "./App.css";
// import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./FoodList";
// import CourseList from "./CourseList";

function App() {
  return (
    <div className="App">
      <header className="App-header fw-bold">Food List</header>
      {/* <Todo /> */}
      {/* <CourseList /> */}
      <FoodList />
    </div>
  );
}

export default App;
