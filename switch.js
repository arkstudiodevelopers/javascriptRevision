function usingSwitchCase(num) {
    var answer;
    switch (num) {
        case 1:
            answer = "The first choice";
            break;
        case 2:
            answer = "The second choice";
            break;
        case 3:
            answer = "The third choice";
            break;
        default:
            answer = "other staff";
    }
    return answer;
}
console.log(usingSwitchCase(3));
// default statement acts as an else in if statement

// switch statement that multiple inputs give the same output
function usingSwitchCaseTwo(numb) {
    let quiz;
    switch (numb) {
        case 1:
        case 2:
            quiz = "what is your name";
            break;
        case 3:
        case 4:
            quiz = "where do you live";
            break;
        default:
            quiz = "Get your options stright";
    }
    return quiz;
}
console.log(usingSwitchCaseTwo(5));