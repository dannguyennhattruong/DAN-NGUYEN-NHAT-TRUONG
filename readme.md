# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

## API Service Specification

This document outlines the specification for the API service module responsible for managing and updating a live scoreboard for a website.

## Overview

The API service will:

1. Maintain a scoreboard that shows the top 10 users by score.

2. Handle API calls to update user scores.

3. Ensure the scoreboard is updated in real-time.

4. Include mechanisms to prevent unauthorized score updates.

## User Module 
1. User Model 
    - userId : user identifier
    - score : use for ranking on leaderboard
    - name : username
    - avatar : user's profile image 
    - create_at : Date created
    - change_at : Date modified
## Auth Module
Authentication and Authorization
Use JWT (JSON Web Tokens) for API authentication.

Tokens will include user metadata and a secure signature to prevent tampering.

## Auth API Endpoints
1. Validate JWT 
- Endpoint : POST /api/validate-jwt
- Description: Validate user who exists in system
- Request Headers: Authorization: Bearer token for authentication.
- Request Body: Empty 
- Response:
```
{
    status : 'OK',
    valid : true
}
```

## USER API Endpoints
1. Get Top 10 Scores
- Endpoint: GET /api/scores
- Description: Retrieves the top 10 scores from the scoreboard.
- Response:
```
[
  { "userId": "user1", "score": 500 },
  { "userId": "user2", "score": 480 },
  ...
]
```

2. Update User Score
- Endpoint: POST /api/scores/update
- Description: Updates the score of a user based on an action.
- Request Headers:
- Authorization: Bearer token for authentication.
- Request Body:
```
{
  "userId": "user1",
  "increment": 1
}
```
- Response:

```{ "message": "Score updated successfully", "newScore": 11 } ```
- Error Codes:

    - 400: Invalid request data

    - 401: Unauthorized

    - 404: User not found

    - 500: Internal Server Error



## Improvement :

1. Validate all incoming requests to ensure proper format.

2. Reject requests with invalid or missing data.

3. Rate Limit Request | example:  10 requests per minute

4. Use server-side logic to validate the legitimacy of score increments.

5. Save logs every user do an action and update score (for example a log record : {
    id : 1, 
    log_at : ///,
    log_by : user_id,
    action : 'Update name',
    score_updated : 2
}) . Keeping logs helps us ensure users aren't cheating.

6. Add a caching layer (e.g., Redis) to store the top 10 scores, reducing database load.

7. Implement an analytics service to track user performance and trends.

8. Include automated tests for all endpoints.

9. Allow dynamic score weight adjustments for different actions in the future.
