import React from "react";
import Event3 from "./Jsevent3";

function event2(props){
    return(
        <div>
            <p>{props.num}</p>  {/* props - 부모에 있는 거 가져왔음 */}
            <Event3 />
        </div>
    )
}

export default event2;