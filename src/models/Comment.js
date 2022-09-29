
class Comment {

    id;
    body;
    userId;
    postId;

    constructor(id, body, userId, postId) {
        this.id = id;
        this.body = body;
        this.userId = userId;
        this.postId = postId;
    }
}

export default Comment;