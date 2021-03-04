/** @format */

$(document).ready(() => {
  $(
    (quotes = () => {
      $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/quotes',
        success: (quotes) => {
          $('#quotes').empty(),
            $.each(quotes, (i, data) => {
              let a;
              data.id === 2 ? (a = '') : (a = 'active');

              $('#quotes').append(
                `<div class="carousel-item  ${a}">
              <div class="section2Card row d-flex justify-content-center">
                <div class="col-12 col-md-3 col-lg-1 col-sm-3">
                  <img src="${data.pic_url}" class="img-profile" />
                </div>
                <div class="col-12 col-md-4 col-lg-4 col-sm-3">
                  <p class="quote">
                    ${data.text}
                  </p>
                  <p class="s2Name">${data.name}</p>
                  <p class="s2P2">${data.title}</p>
                </div>
              </div>
            </div>`
              );
            });
        },
      });
    })
  );
  $(
    (popularTutorials = () => {
      $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/popular-tutorials',
        success: (data) => {
          $('#popularcontainer').empty(),
            $.each(data, (i, data) => {
              $('#popularcontainer').append(
                `<div
              class='card col-lg-2 col-md-4 col-sm-8 col-8'
              style='width: 18rem'>
              <img
                class='card-img-top'
                src='${data.thumb_url}'
                alt='Card image cap'
              />
              <img class='playbtnImng' src='images/play.png' />
              <div class='card-body'>
                <p class='cardheader'>${data.title}</p>
                <p class='cardDescription'the subtitle soesnt work cuz we cnt user - in var name</p>
                <div class='row'>
                  <img
                    src='${data.author_pic_url}'
                    class='cardOwnerPic'
                  />
                  <p class='cardOwnerName'>${data.author}</p>
                </div>
                <div class='row starsRow'>
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_off.png' class='star' />
                  <p class='cardDate'>${data.duration}</p>
                </div>
              </div>
            </div>`
              );
            });
        },
      });
    })
  );

  $(
    (latestVideos = () => {
      $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/latest-videos',
        success: (data) => {
          $('#latesVideos').empty();

          $.each(data, (i, datax) => {
            $('#latesVideos').append(
              `<div
              class='card col-lg-2 col-md-4 col-sm-8 col-8'
              style='width: 18rem'>
              <img
                class='card-img-top'
                src='${datax.thumb_url}'
                alt='Card image cap'
              />
              <img class='playbtnImng' src='images/play.png' />
              <div class='card-body'>
                <p class='cardheader'>${datax.title}</p>
                <p class='cardDescription'the subtitle soesnt work cuz we cnt user - in var name</p>
                <div class='row'>
                  <img
                    src='${datax.author_pic_url}'
                    class='cardOwnerPic'
                  />
                  <p class='cardOwnerName'>${datax.author}</p>
                </div>
                <div class='row starsRow'>
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_on.png' class='star' />
                  <img src='images/star_off.png' class='star' />
                  <p class='cardDate'>${datax.duration}</p>
                </div>
              </div>
            </div>`
            );
          });
        },
      });
    })
  );

  $(
    (coursesVideos = () => {
      $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/courses',

        success: (data) => {
          $('#coursVideo').empty();
          $.each(data.sorts, (id, datax) => {
            $('#sortList').append(
              `<a class='dropdown-item' href='#' onclick="handleCoursChanges('s','${datax}');">
                ${datax}
              </a>`
            );
          });
          $.each(data.topics, (id, datax) => {
            $('#topicList').append(
              `<a class='dropdown-item' href='#' onclick="handleCoursChanges('t','${datax}');">
                ${datax}
              </a>`
            );
          });

          $.each(data.courses, (i, datax) => {
            $('#coursVideo').append(`<div
            class="card col-lg-3 col-md-4 col-sm-12 col-12"
            style="width: 18rem"
          >
            <img
              class="card-img-top"
              src="${datax.thumb_url}"
              alt="Card image cap"
            />
            <img class="playbtnImng" src="images/play.png" />
            <div class="card-body">
              <p class="cardheader">${datax.title}</p>
              <p class="cardDescription">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                eiusmod.
              </p>
              <div class="row">
                <img src="${datax.author_pic_url}" class="cardOwnerPic" />
                <p class="cardOwnerName">${datax.author}</p>
              </div>
              <div class="row starsRow">
                <img src="images/star_on.png" class="star" />
                <img src="images/star_on.png" class="star" />
                <img src="images/star_on.png" class="star" />
                <img src="images/star_on.png" class="star" />
                <img src="images/star_off.png" class="star" />
                <p class="cardDate">${datax.duration}</p>
              </div>
            </div>
          </div>`);
          });
        },
      });
    })
  );
});

let load = false;

let sort = '';
let topic = '';
let q = '';

// $('#qInput').click(() => {
//   console.log('test');
// });

const handleCoursChanges = (param, value) => {
  if (param === 't') {
    topic = value;

    document.getElementById('topicDdBtn').innerText = value;
  }
  if (param === 's') {
    sort = value;
    document.getElementById('sortDdBtn').innerText = value;
  }
  if (param === 'q') {
    q = document.getElementById('qInput').value;
  }

  $('#coursVideo').empty();
  $('#coursVideo').append('<div class="loader"></div>');
  $.ajax({
    type: 'GET',
    url: `https://smileschool-api.hbtn.info/courses/`,
    data: { sort: sort, topic: topic, q: q },
    success: (data) => {
      console.log(data);
      console.log(q);
      $('#coursVideo').empty();
      $.each(data.courses, (i, datax) => {
        $('#coursVideo').append(` <div
            class="card col-lg-3 col-md-4 col-sm-12 col-12"
            style="width: 18rem"
          >
            <img
              class="card-img-top"
              src="${datax.thumb_url}"
              alt="Card image cap"
            />
            <img class="playbtnImng" src="images/play.png" />
            <div class="card-body">
              <p class="cardheader">${datax.title}</p>
              <p class="cardDescription">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                eiusmod.
              </p>
              <div class="row">
                <img src="${datax.author_pic_url}" class="cardOwnerPic" />
                <p class="cardOwnerName">${datax.author}</p>
              </div>
              <div class="row starsRow">
                <img src="images/star_on.png" class="star" />
                <img src="images/star_on.png" class="star" />
                <img src="images/star_on.png" class="star" />
                <img src="images/star_on.png" class="star" />
                <img src="images/star_off.png" class="star" />
                <p class="cardDate">${datax.duration}</p>
              </div>
            </div>
          </div>`);
      });
    },
  });
};
