Take a look at this code snippet

  https://jsbin.com/rufarat/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 
      The 'span' tag is used to wrap an inline element, so it doesn't have a margin-top; only block level elements have margin-top and margin-bottom.

2. Why can I not set the margin-top on the img with the id "pic" in the head section?
      The 'img' tag is an inline element, so you cannot set the margin-top on it. However, you can wrap this image in a 'div' tag (or other block level element) and change the margin on said 'div'.