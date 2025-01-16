# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.


# Install packages #
 - Please install packages by command : npm install

# Problem4
- To run  : npm run start:problem4

# Problem5
- To run  : npm run start:problem5
- Test apis : 
    - Create a resource. 
    ```
    curl --location --request POST 'localhost:8080/resource/create' \--header 'Content-Type: application/json' \--data-raw '{ "resourceName" : "test", "resourceDescription": "test"}'
     ```
   
    - List resources with basic filters.
    ```
    curl --location --request POST 'localhost:8080/resource/list' \ --header 'Content-Type: application/json' \ --data-raw '{ "resourceName" : "test" }'
    ```
    - Get details of a resource.
    ```
    curl --location --request POST 'localhost:8080/resource/detail' \ --header 'Content-Type: application/json' \ --data-raw '{ "_id": 1 }'
    ```
    - Update resource details.
    ```
    curl --location --request POST 'localhost:8080/resource/update' \ --header 'Content-Type: application/json' \ --data-raw '{ "_id": 1, "data": { "resourceName": "test2" } }'
    ```
    - Delete a resource.
    ```
    curl --location --request POST 'localhost:8080/resource/delete' \ --header 'Content-Type: application/json' \ --data-raw '{ "_id": 2 }'
    ```
# Problem 6 
- Please read [README.md](/src/problem6/README.md)