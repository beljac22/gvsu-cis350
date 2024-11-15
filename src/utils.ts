export class Remedy {
    private readonly name: string
    private readonly avg_rating: number
    private readonly capacity: number
    private readonly comments: Comment[]
    private readonly building: Building

    public constructor(name: string, avg_rating: number, capacity: number, comments: Comment[], building: Building) {
        this.name = name;
        this.avg_rating = avg_rating;
        this.capacity = capacity;
        this.comments = comments
        this.building = building
    }

    public getName(): string {
        return this.name
    }

    public getAvgRating(): number {
        return this.avg_rating
    }

    public getCapacity(): number {
        return this.capacity
    }
    
    public getComments(): Comment[]{
        return this.comments
    }

    public getBuildingName(): Building{
        return this.building
    }

}

export class User{
    private readonly api_key: string
    private readonly username: string
    // not sure if we wanna implement this but I'm putting email in for now
    private readonly email: string


    public constructor(username: string, email: string, api_key: string){
        this.username = username;
        this.email = email;
        this.api_key = api_key;
    }

    public getToken(): string {
        return this.api_key
    }
    public getEmail(): string {
        return this.email
    }
    public getUsername(): string {
        return this.username
    }
}

export class Comment{
    private readonly text: string
    private readonly author_username: string

    public constructor(author_username: string, text: string){
        this.text = text
        this.author_username = author_username
    }
    public getText(): string{
        //ideally this is where we would put swearword filtering IMO
        return this.text
    }
    public getAuthor(): string{
        //ideally this is where we would put swearword filtering IMO
        return this.author_username
    }
}

export class Building{
    private readonly name: string
    private readonly longitude: number
    private readonly latitude: number
    private readonly description: string


    public constructor(name: string, longitude: number, latitude: number, description: string){
        this.name = name
        this.longitude = longitude
        this.latitude = latitude
        this.description = description
    }
    public getName(): string{
        return this.name
    }

    public getLongitude(): number{
        return this.longitude
    }

    public getLatitude(): number{
        return this.latitude
    }

    public getDescription(): string{
        return this.description
    }
}
/*
import {createInterface} from "readline";

const rl = createInterface({
    input: process.stdin, //this will not crash the application I promise trust me bro
    output: process.stdout
});

const question = (questionText: string) =>
    new Promise<string>(resolve => rl.question(questionText, resolve));

export default question;*/