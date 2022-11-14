// the business logic of my trivia application

export class TriviaDatabase {
    static getTriviaQuestions(difficultySelected) {
        // no need for variables, the return is used to return our promise here(this is just a method that returns a Promise object)
        // and the return also takes in a callback function that I wrote with an arrow notation
        return new Promise((promiseResolved, promiseRejected) => {

            let triviaRequest = new XMLHttpRequest();
            const triviaApiUrl = `https://opentdb.com/api.php?amount=15&category=12&difficulty=${difficultySelected}&type=multiple`
            triviaRequest.onload = function () {
                if (this.status === 200) {
                    promiseResolved(triviaRequest.response);
                }
                else {
                    // in this branch, I still want to get the response even if my API call was unsuccessful
                    promiseRejected(triviaRequest.response);
                }
            }
            // time to open and send the request; and to also tell JAvaScript the type of API request we want to make: a Get request
            triviaRequest.open("GET", triviaApiUrl, true);
            triviaRequest.send();
        });


    }

}