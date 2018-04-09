export class Post {
    public id: number;
    public userId: number;
    public title: string;
    public body: string;

    constructor(id: number, userId: number, title: string, body: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}
