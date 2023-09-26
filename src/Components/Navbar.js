import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
function Navbar() {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
      </div>
    </div>
  );
}
export default Navbar;
