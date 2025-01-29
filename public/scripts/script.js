$(document).ready(function () {
  console.log("ready!");

  $('.generate-dog').click(() => {
      const selectedBreed = $('#for-breads').val(); // Get the selected breed

      $.ajax({
          url: '/fetch_dog', // Laravel endpoint
          type: 'GET',
          data: { breed: selectedBreed }, // Send the selected breed as a query parameter
          success: function (response) {
              if (response.image_url) {
                  // Clear previous images
                  $('#image-container').html('');

                  // Create a new img element with the fetched URL
                  const imgElement = $('<img>')
                      .attr('src', response.image_url)
                      .attr('alt', 'Random Dog');

                  // Append the img element to the container
                  $('#image-container').append(imgElement);
              } else {
                  console.error('Failed to fetch image:', response.error);
              }

              console.log(response);
          },
          error: function (xhr) {
              console.error('Error:', xhr.responseText);
          }
      });
  });
});
