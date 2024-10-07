export class Remedy {
    private readonly name: string
    private clean_rating: number
    private accessability_rating: number
    private touch_free_rating: number
    private readonly capacity: number
    private readonly comments: Comment[]

    public constructor(name: string, clean_rating: number, accessability_rating: number, touch_free_rating: number, capacity: number, comments: Comment[]) {
        this.name = name;
        this.clean_rating = clean_rating;
        this.accessability_rating = accessability_rating;
        this.touch_free_rating = touch_free_rating;
        this.capacity = capacity;
        this.comments = comments
    }
    public getName(): string {
        return this.name
    }

    public getCleanlinessRating(): number {
        return this.clean_rating
    }

    public getAccessabilityRating(): number {
        return this.accessability_rating
    }

    public getTouchFreeRating(): number {
        return this.touch_free_rating
    }

    public getCapacity(): number {
        return this.capacity
    }
    
    public getComments(): Comment[]{
        return this.comments
    }

    public updateCleanlinessRating(new_rating: number): boolean {
        var is_new = new_rating == this.clean_rating
        this.clean_rating = <number> new_rating
        return is_new
    }

    public updateAccessabilityRating(new_rating: number): boolean {
        var is_new = new_rating == this.accessability_rating
        this.clean_rating = <number> new_rating
        return is_new
    }

    public updateTouchFreeRating(new_rating: number): boolean {
        var is_new = new_rating == this.accessability_rating
        this.clean_rating = <number> new_rating
        return is_new
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

import {createInterface} from "readline";

const rl = createInterface({
    input: process.stdin, //this will not crash the application I promise trust me bro
    output: process.stdout
});

const question = (questionText: string) =>
    new Promise<string>(resolve => rl.question(questionText, resolve));

export default question;