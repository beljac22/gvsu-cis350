import { Remedy } from "./utils"
import { User } from "./utils"
import { Comment } from "./utils"
import { Building } from "./utils"

export class Session{
    private user: User;
    private remedies: Remedy[] = [];
    private logged_in: boolean = false;
    
    public constructor() {}

    public async createUser(user: string, passw: string, email): Promise<boolean> {
        //This is there we would send a login request to SQLite Cloud,
        // but I don't feel like implementing that right now lmao

        //PLACEHOLDER
        var response: Response = await fetch("https://cuyq5gkgnk.sqlite.cloud:8090/v2/functions/create_user", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                    "username":`${user}`,
                    "passw": `${passw}`,
                    "email": `${email}`
                }
            )})
        if ((await response).status == 500) {
            throw new Error((await response.json()).error.title)}
        var response_body = (await response.json()).data
        this.user = new User(user,response_body.email,response_body.bearer_token)
        this.logged_in = true
        console.log("Logged in successfully.")
        await this.updateRemedies()
        return true
    }
    

    public async login(user: string, passw: string): Promise<boolean> {

        //PLACEHOLDER
        if (this.logged_in){
            throw new Error("User is already logged in.")
        }
        var response = await fetch("https://cuyq5gkgnk.sqlite.cloud:8090/v2/functions/log_in", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                    "username":`${user}`,
                    "passw": `${passw}`
                }
            )})
        if ((await response).status == 500) {
            throw new Error((await response.json()).error.title)}
        var response_body = (await response.json()).data
        this.user = new User(user,response_body.email,response_body.bearer_token)
        this.logged_in = true
        console.log("Logged in successfully.")
        await this.updateRemedies()
        return true
    }

    public getUser(): User{
        if (!this.getLoggedIn()){
            throw new Error("There is no authenticated User.")
        }
        return this.user
    }
    public getRemedies(): Remedy[]{
        return this.remedies
    }
    public getLoggedIn(): boolean{
        return this.logged_in
    }
    public async updateRemedies(): Promise<any> {
        const mackinaw = new Building("Mackinaw Hall", 42.9641, 85.8890, "This place is confusing")
        if (!this.getLoggedIn()){
            return false
        }
        this.remedies = []
        
        var response = await fetch("https://cuyq5gkgnk.sqlite.cloud:8090/v2/functions/get_remedies", {method: 'POST'})
        if (!response.ok) {
            throw new Error("Failed to connect to server")}
        ((await response.json()).result).forEach(remedy => {
            const comment_list: Comment[] = []
            remedy.comments.forEach((comment) => {
                const my_comment = new Comment(comment.author,comment.text)
                comment_list.push(my_comment)
            })
            this.remedies.push(new Remedy(remedy.name, remedy.average_rating, remedy.capacity, comment_list, mackinaw))
        });{
        } return true
        
        //PLACEHOLDER

        //var remedy1: Remedy = new Remedy("Bathroom 1",5,5,4.5,20, [new Comment("User1","W Bathroom")], mackinaw)
        //var remedy2: Remedy = new Remedy("Bathroom 2",3,3.5,3,30, [new Comment("User2","I mean it's alright")],mackinaw)
        //var remedy3: Remedy = new Remedy("Bathroom 3",1.5,1,1,60, [new Comment("User3","THIS PLACE SUCKS!!")], mackinaw)

        //this.remedies.push(remedy1)
        //this.remedies.push(remedy2)
        //this.remedies.push(remedy3)
        return true
    }

    public async postRating(remedy_id: number, rating: number): Promise<boolean> {
        if (!this.getLoggedIn()){
            throw new Error ("User is not logged in.")}
        var response = await fetch("https://cuyq5gkgnk.sqlite.cloud:8090/v2/functions/post_rating", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                    "rating": rating, // float 
                    "post_id": remedy_id, // int
                    "bearer_token": `${this.user.getToken()}` //string
                    }
                )})
        if ((await response).status == 500) {
            throw new Error((await response.json()).error.title)}
        return true
    }

    public async postComment(remedy_id: number, comment: string): Promise<boolean> {
        if (!this.getLoggedIn()){
            throw new Error ("User is not logged in.")}
        var response = await fetch("https://cuyq5gkgnk.sqlite.cloud:8090/v2/functions/post_comment", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                    "text":`${comment}`, // string 
                    "post_id": remedy_id, // int
                    "bearer_token": `${this.user.getToken()}` //string
                    }
                )})
        if ((await response).status == 500) {
            throw new Error((await response.json()).error.title)}
        return true
    }
}
