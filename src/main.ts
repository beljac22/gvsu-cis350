import { Session } from "./session"
import question from "./utils"



var RUNNING: boolean = true;
var session: Session = new Session()

while (RUNNING){
    if (!session.getLoggedIn()){
        var user = await question("Enter username: ");
        var passw = await question("Enter password: ");
        session.log_in(user,passw);
        continue;}
    console.log("\nREMEDY RATING\n--------\n1. Show all Remedys\n2. Rate Remedy\n")
    switch (await question("Choose a menu option: ")) {
        case "1": {
            session.getRemedies().forEach(function (value) {
                console.log(`\n${value.getName()}`);
                console.log(`Cleanliness - ${value.getCleanlinessRating()}`);
                console.log(`Accessability - ${value.getAccessabilityRating()}`);
                console.log(`Touch Free - ${value.getTouchFreeRating()}`);
                console.log(`Capacity - ${value.getCapacity()}`);
                console.log("COMMENTS")
                value.getComments().forEach(function (comment) {
                    console.log(`\t${comment.getAuthor()}\n\t--------\n\t${comment.getText()}`)
                })
            })
        break}
        case "2": {
            var remedy = await question("Enter the name of a Remedy to rate: ")
            var value = await question("Enter a value: ")
            session.postRating(remedy, +value)
            break
        }
        default: {
            console.log("Invalid Menu choice. Try again.")
            break
        }
    }
}



process.exit(0) //This will NOT crash the program but it won't stop being red for some reason smh