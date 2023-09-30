Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Put it in a sample page, load it and check out the network tab in the Devtools.

Provide the test page and image that you used within the answer to this question. Then answer the question.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

        I used the file I created ('index.html') to test this. I used five server to preview the page. My network tab confirmed that a GET request was triggered with a status code of 304. Opening just the 'index.html' with Chrome reveals the same HTTP Get request behavior, but with a status of 200.


Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`

        This one also triggered a GET request with a status code of 304. Opening just the 'index.html' with Chrome reveals the same HTTP Get request bevhavior but with a status of 200.