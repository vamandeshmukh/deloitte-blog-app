
const DisplayComment = (props) => {

    return (
        <div>
            {props.commentElement &&
                <div className="border rounded px-3 py-3 mx-3 my-3 bg-white">
                    <p>Written by : {props.commentElement.userName ? props.commentElement.userName : 'Anonymous'}</p>
                    <div className="border rounded bg-light">
                        <p>{props.commentElement.body}</p>
                    </div>
                </div>
            }
            {!props.commentElement &&
                <div className="border rounded px-3 py-3 mx-3 my-3 bg-white">
                    <p>Be the first one to comment here!</p>
                </div>
            }
        </div>
    );
};

export default DisplayComment;


