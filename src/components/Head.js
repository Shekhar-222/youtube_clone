import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {

    const dispatch= useDispatch()



    const toggleMenuHandler=()=>{

        dispatch(toggleMenu())

    }


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() =>{toggleMenuHandler()}}  
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADy8vKDg4M3Nzc+Pj6Ghob19fU5OTkzMzPS0tIVFRW1tbVzc3Ph4eGLi4t7e3tNTU27u7tmZmacnJxbW1vBwcFFRUVUVFSioqLp6emsrKxhYWGSkpLg4ODHx8fU98TiAAAB5UlEQVR4nO3da1IiMRQGUGZoukFAFLV96/53qU3N/JvSVEJ505lzVnC/SkI6VB6LBQAAAAAAAAAAAMBPG37XaDhTustD96tW3eGyPOBVdIpvXBXmG+ptv7+6ss66iq4/waok4Gt09Ule8wMO0bUnyu+nz9GlJ3rOTvgSXXqil+yE6+jSE62zE26iS0+0yU54HV16ouvshMvo0hMtsxNeRJee6CI74Sw+aco+aubRiAVNOI85P3++PzlG1/+tY1nAxeLpJjrCl26eSgN+Gna3/bJG/e3uXH9kAAAAAAAAAAD8lPf+btXVaHXXv58h33EbvWXmS9viDUO1HygpPlKyj64/QVHEXXT1SXYFCaNrT5QfcIwuPdGYnXAOo3CSPxLnsQm6ZBt0++ct7qNLT3SfnXAu43CfnbD939L258P/4JtmFiMxfxSeNL+2+Oyola8Pi7roH+P+YR29nP+n9cO+4FcUAAAAAAAAACDEMD5Wevfl43iOuy+bv7+0/jtoC7fUNH+PcPt3Qdf/Bsuka70JSxrxEF16okN2wvb36rd/3qL9MzPtvzMzh/l+kj/nt//eU/tvds3jPaT8t5AmQ/0TxqZ0jVj7qZnCEzOTt77eMyXb/q084Enb75ACAAAAAAAAAAAApPsAtcs1XnQo7SwAAAAASUVORK5CYII="
          alt="menu"
        />
       <img className="h-8 mx-2" src={logo} alt="menu" />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div>
        <img className="h-8 col-span-1" src={user} alt="user" />
      </div>
    </div>
  );
};

export default Head;
