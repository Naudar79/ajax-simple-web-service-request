//Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload
xhr.onload = function()
{
    //check if the status is 200(means everything is okay)
    if (this.status === 200)
    {
        //return server response as an object with JSON.parse
        let result = (JSON.parse(this.responseText));
        console.log(result['quote']);
        console.log(result['author']);
        console.log('photo');
        document.getElementById("quote").innerHTML=result["quote"];
        document.getElementById("author").innerHTML=result["author"];
        document.getElementById("photo").src=result["photo"];
    }
}
//call send
xhr.send();