
class BlogPost {

    id;
    title;
    body;
    userId;
    imgUrl;
    keywords;

    constructor(id, title, body, userId, imgUrl, keywords) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.imgUrl = imgUrl;
        this.keywords = keywords;
    }
}

export default BlogPost;