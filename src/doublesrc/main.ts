import { Session } from "./session"


var session: Session = new Session()
await session.login("TestUser3","pass345")
console.log(session.getRemedies())




process.exit(0) //This will NOT crash the program but it won't stop being red for some reason

