import { useState } from "react";

function WriteFb () {
    const [feedback, setFeedback] = useState("");
    return <div>
        <h2> WRITE YOUR FEED BACK :</h2>
        <ul>
            <li>
                <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            </li>
            <li>
                <button onClick={() => alert(feedback)}>Submit</button>
            </li>
            <li>
                <button onClick={() => setFeedback("")}>Clear</button>
            </li>
            <input type="text" placeholder="Enter your feedback"></input>
            <button onClick={() => alert(feedback)}>Submit</button>
        </ul>
    </div>
  
}

export default WriteFb;
