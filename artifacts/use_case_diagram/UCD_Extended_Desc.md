# Use Case - Login
### Actors
* User

### Description
The user can (if they have created an account log in to their account, giving them access to further features such as leaving a rating.

### Preconditions
* The user must have already created a valid account
* The user must know their username credentials
* The user must know their password credentials

### Post Conditions
* The user will be allowed to post ratings
* The user will be allowed to post reviews/comments
* The user will be able to log out

---

# Use Case - Submit Rating
### Actors
* User
* Developer

### Description
The user or developer can create a rating and submit it

### Preconditions
* The user or developer must have already logged in to their account

### Postconditions
* Upon refresh of the page, the average star rating will update

---

# Use Case - Submit Review/Comment
### Actors
* User
* Developer

### Description
The user or developer can create a review and submit it

### Preconditions
* The user or developer must have already logged in to their account
* The user must make sure that the review/comment must adhere to the rules provided on the about page

### Postconditions
* Upon refresh of the page, the comment will appear and become viewable
