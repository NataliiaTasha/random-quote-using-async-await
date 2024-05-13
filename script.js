document.addEventListener("DOMContentLoaded",  function() {
    const button = document.querySelector(".button");
    const blockquote = document.querySelector("blockquote");

    const fetchQuote = async () => {
        try {
            const response = await fetch("https://thatsthespir.it/api");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            // console.log(json.quote);
            // console.log(json.author);
            // console.log(json.photo);
            
            //Clear blockquote
            blockquote.innerHTML = ""; 

            const container = document.createElement("div");
            const photo = document.createElement("img");
            photo.src = json.photo;
            const quote = document.createElement("q");
            quote.textContent = json.quote;
            const author = document.createElement("p");
            author.textContent = json.author;
            container.appendChild(photo);
            container.appendChild(quote);
            container.appendChild(author);
            blockquote.appendChild(container);

        } catch (error) {
            console.log("There was an error!", error);
        }
    }
    
    button.addEventListener("click", function() {
        fetchQuote();
    });
    
})

