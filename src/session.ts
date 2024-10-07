import { Remedy } from "./utils"
import { User } from "./utils"
import { Comment } from "./utils"

export class Session{
    private user: User;
    private remedies: Remedy[] = [];
    private logged_in: boolean = false;
    
    public constructor() {}

    public log_in(user: string, passw: string): boolean {
        //This is there we would send a login request to SQLite Cloud,
        // but I don't feel like implementing that right now lmao

        //PLACEHOLDER
        this.user = new User("bellgowj","bellgowj@mail.gvsu.edu","1234")
        this.logged_in = true
        console.log("Logged in successfully.")
        
        this.updateRemedies()
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
    public updateRemedies(): boolean{
        if (!this.getLoggedIn()){
            return false
        }
        this.remedies = []
        
        //PLACEHOLDER
        var remedy1: Remedy = new Remedy("Bathroom 1",5,5,4.5,20, [new Comment("User1","W Bathroom")])
        var remedy2: Remedy = new Remedy("Bathroom 2",3,3.5,3,30, [new Comment("User2","I mean it's alright")])
        var remedy3: Remedy = new Remedy("Bathroom 3",1.5,1,1,60, [new Comment("User3","THIS PLACE SUCKS!!")])

        this.remedies.push(remedy1)
        this.remedies.push(remedy2)
        this.remedies.push(remedy3)
        return true
    }
    public postRating(remedy_id: string, value: number|null, comment: string|null = null): boolean{
        if (!this.getLoggedIn()){
            return false
        }
        console.log(`I sent a POST request to post a rating or comment for ${remedy_id} ${value}`)

        return true
    }
}

