/*Calls the function */
window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    /*API Call */
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("website called functionApi");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}