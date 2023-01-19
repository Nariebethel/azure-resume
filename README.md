# Azure-Resume
Azure Resume Project following ACG Project Video

The purpose of this project is to gain hands on experience working with Azure Cloud  Blob storage, functions, and Azure CDN. 

## The Azure Resume Project consists of:
1) Azure CDN (Content Delivery Network) for HTTPS and custom domain
	- CDN - Delivers web content to users
2) Github CI/CD, which allowed automating, test
3) Azure to host my static resume on Azure Blob storage
    - Continuous integration and continuous delivery
	- Holds the resume built using HTML, CSS, & JavaScript
4) Incorporated JavaScript code to display a visitor counter
      - Calls an API
5) The Azure function interacts with the CosmoDB, which stores the counter
6) Used .Net Core 7.0.2 to develop the Azure Function
      - Azure Functions Core Tools
7) Visual Studio Code
      - For both Front-end and back-end programming
8) Used Azure CLI to create and manage resources

## Code Snippets
- main.js is where the visitor counter code is located
```javascript
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
```
- script.js contains the sentence automation code
```javascript
/*========== Typing Animation ============*/
var typed = new Typed(".typing", {
    strings: ["INSERT", "INSERT", "INSERT", "INSERT", "INSERT"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
})
```
