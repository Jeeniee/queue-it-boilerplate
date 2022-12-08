// Triggered when the waiting room page is loaded
// console.log("test====");
// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);
// console.log("script", script)

// queueViewModel.pageReady(function (data) {
$(document).ready(function () {
  console.log("page is ready!");

  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");
  console.log("pageid", pageid)
  console.log("culture", culture)
  console.log("test")

  // checks waiting room phase
  if (pageid === "before") {

  }

  if (pageid === "queue") {
    // $('#lbHeaderH2').text("Queue it 테스트 페이지입니다.");
    // $('#lbHeaderP').text("Queue it Boilerplate입니다. Queue it Boilerplate입니다. Queue it Boilerplate입니다. Queue it Boilerplate입니다. Queue it Boilerplate입니다. Queue it Boilerplate입니다. Queue it Boilerplate입니다. Queue it Boilerplate입니다.");
    // $('#main-top-message').html("메인 메세지를 입력하세요");
    // $('#hlThisIsQueueIt').html("More details about the line");

    // $('.warning-box').before('<iframe style="border:none;" height="400" data-tweet-url="https://twitter.com/netflix" src="<a class='twitter-timeline' href='https://twitter.com/netflix?ref_src=twsrc%5Etfw'>Tweets by netflix</a>
    //   <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"></iframe>');


    // $('.warning-box').before('<iframe style="border:none;"  width="100%" height="400" data-tweet-url="https://twitter.com/Meta" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/Meta%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20Meta%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>');
    // // $('.warning-box').before('<iframe style="border:none;" width="100%" height="500" data-tweet-url="https://twitter.com/netflix" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/netflix%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20netflix%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>');


    // $('.warning-box').after('<iframe width="100%" height="315" src="https://www.youtube.com/embed/bd1gEYTrCzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

    // $('#footer').html("푸터푸터푸터");



    // checking culture id
    if (culture === "en-US") {
      $("#MainPart_lbQueueNumberText").text('Your queue number:');
      $("#MainPart_lbUsersInLineAheadOfYouText").text('Number of users in front of you:');
    }
  }

  if (pageid === "after") {

  }

  if (pageid === "error") {

    var errorid = $("body").attr("data-errorid");

    // old queue number
    if (errorid === "4") {
    }

    // Max No Of Redirects Per QId
    if (errorid === "5") {
    }
  }
});

