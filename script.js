$(document).ready(function () {


    $("#myform").submit(function () {

        var search = $("#books").val();
        if (search == "") {
            alert("Please enter something in the field");
        } else {

            let url, img, image, items, title, author, description, publisher, publishDate, pageCount, category, ratingAvg, ratingCount = "";





            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                for (i = 0; i < response.items.length; i++) {

                    title = $('<h4 class="title center-align">' + response.items[i].volumeInfo.title + '</h4>');

                    author = $('<h5 class="author center-align"> By: ' + response.items[i].volumeInfo.authors + '</h5>');

                    img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.imageLinks + '><button id="" class="btn blue darken-1 aligning imagebtn">Read More</button></a><br>');

                    // image: ((items[i].volumeInfo.imageLinks) ? items[i].volumeInfo.imageLinks.thumbnail : undefined)

                    description = $('<p flow-text>Description: ' + response.items[i].volumeInfo.description + '</p>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;


                    //                    TESTING
                    publisher = $('<blockquote class="left-align"> Publisher: ' + response.items[i].volumeInfo.publisher +
                        '<br> Published: ' + response.items[i].volumeInfo.publishedDate +
                        '<br> Pages: ' + response.items[i].volumeInfo.pageCount +
                        '<br> Genre: ' + response.items[i].volumeInfo.categories +
                        '<br> Rating: ' + response.items[i].volumeInfo.averageRating +
                        '<br> Ratings: ' + response.items[i].volumeInfo.ratingsCount +
                        '</blockquote>');


                    img.attr('src', url);
                    title.appendTo('#result');
                    author.appendTo('#result');
                    img.appendTo('#result');
                    description.appendTo('#result');

                    publisher.appendTo('#result');


                }
            });

        }
        return false;
    });
    $(document).ready(function () {
        if ($('#myform').length > 0) {
            $('#myform')[0].reset();
        }
    });
});