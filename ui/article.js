
// rameshcool.imad.hasura-app.io/articles/article-one will result in article-one
var currentArticleTitle = window.location.pathname.split('/')[2];

function loadCommentForm () {
    var commentFormHtml = '
    <h5>Submit a comment<h5/>
    <textarea id="comment_text" rows="5" cols="100" placeholder="Enter your comment here..."></textarea>
    <br/>
    <input type="submit" id="submit" value="Submit" />
    <br/>
    ';
    
    document.getElementById('comment_form').innerHTML = commentFormHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('submit');
    submit.onclick = function () {
       // create a request object
       var request = new XMLHttpRequest();
       
       // capture the response and store it in a variable
}