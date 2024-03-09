import { useSelector } from "react-redux";

function HomePage() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (
      <div>
        <h1>Hello {user.firstName} {user.lastName}</h1>
      </div>
    );
  }
  
  export default HomePage;