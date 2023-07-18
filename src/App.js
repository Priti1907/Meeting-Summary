import "./App.css";
import AddMeeting from "./Components/AddMeeting";
import AddUser from "./Components/AddUser";
import MeetingDetails from "./Components/MeetingDetails";
import NavsideIcon from "./Components/NavsideIcon";
import UserAccess from "./Components/UserAccess";

function App() {
  return (
    <div className="App">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
       style={{ 
       marginLeft: "320px",
       }} >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input
          placeholder="Search"
          style={{
            textAlign: "center",
            marginLeft: "10px",
            marginTop: "30px",
            borderRadius: "20px",
          }}
        />
        <h6
          style={{
            textAlign: "center",
            marginLeft: "-1020px",
            paddingTop: "20px",
          }}
        >
          Create Meeting Summary and Tasks
        </h6>
       
        <MeetingDetails  />  <br/>
      <AddUser />
      <br />
      <UserAccess />
      <br />
      <AddMeeting /><br/>
      </div>
    </div>
  );
}

export default App;
