# FallProject

The Boba Bubble!

This site that I have created is focused on a fictional Boba Tea shop.

The media queries are set with the max width of 500px and 700px. The purposes of those two sizes are to change the "About Boba" images from one image to another when the screen is at a the certain pixel size (either goes below 500px or at least 700px). One image will be set to "hidden" while the other is displayed and vice versa.

The Javascript feature is used for the responsive "Navigation bar" at the top of the page, the "Gallery" portion of the site, the "Back to Top" button. 

CSS

For the Nav-bar, it is responsive when at smaller pixel sizes (around less than 700px). When it hits lower than 700px (or in mobile), then the hamburger bar menu is enabled with all of the links that appear on the drop-down menu.

There are nth-childs to the footer ul list items to set the social media symbols to be set both margins left and right to 'auto'.

There are nth-child to the footer ul list items to set the social media symbols to be set both margins left and right to 'auto'.

Javascript

With all of the syntax used, 'var' is used multiple times to assign a value to an element (in this case,
it is assigned to the value 'x' to get the element's id of 'myNavbar') 

On the Gallery portion, both 'var' and 'let' is used to change the images by incrementing/decrementing values based on the length of how many images there are on the index. As it starts on index value 0, the set functions will add the current index value by one or decrease by one. It will then update the gallery with the image with the current index value.

Another value that I have set 'var' to is the "Back to Top" button. It is assigned to get the element's id "myBtn". As the user scrolls down at least 20px from the top of the document, the button will show up on the bottom right side of the window. It is set to stay persistant on the page until the user is either clicks on the button or scrolls to the top, then it disappears.





