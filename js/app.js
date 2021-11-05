const currencyCode = "Ksh. ";

const galleryImages = [
  {
    id: 1,
    price: 1200,
    rating: 4,
    favourite: true,
    imageUrl: "./images/gallery1.png",
  },
  {
    id: 2,
    price: 1000,
    rating: 2,
    favourite: false,
    imageUrl: "./images/gallery2.png",
  },
  {
    id: 3,
    price: 1500,
    rating: 5,
    favourite: false,
    imageUrl: "./images/gallery3.png",
  },
  {
    id: 4,
    price: 1000,
    rating: 3,
    favourite: true,
    imageUrl: "./images/gallery4.png",
  },
  {
    id: 5,
    price: 1000,
    rating: 2,
    favourite: false,
    imageUrl: "./images/gallery5.png",
  },
  {
    id: 6,
    price: 1000,
    rating: 5,
    favourite: false,
    imageUrl: "./images/gallery6.png",
  },
  {
    id: 7,
    price: 1000,
    rating: 2,
    favourite: false,
    imageUrl: "./images/gallery7.png",
  },
  {
    id: 8,
    price: 1000,
    rating: 4,
    favourite: false,
    imageUrl: "./images/gallery8.png",
  },
  {
    id: 9,
    price: 1000,
    rating: 2,
    favourite: false,
    imageUrl: "./images/gallery9.png",
  },
  {
    id: 10,
    price: 1000,
    rating: 2,
    favourite: false,
    imageUrl: "./images/gallery10.png",
  },
  {
    id: 11,
    price: 1000,
    rating: 4,
    favourite: false,
    imageUrl: "./images/gallery11.png",
  },
  {
    id: 12,
    price: 1000,
    rating: 3,
    favourite: true,
    imageUrl: "./images/gallery12.png",
  },
];

const gallery = document.getElementById("gallery-section");
gallery.innerHTML = "";

galleryImages.forEach((image) => {
  gallery.innerHTML += `<div class="col-md-3 position-relative gallery-image mt-3">
    <div class="rating position-absolute end-0 start-0 mx-3 px-2 top-0 py-3 text-end">
        ${generateRatings(image.rating)}
    </div>
    <img src="${image.imageUrl}" alt="image" class="h-100 w-100 img-fluid">
    <div class="bottom-section position-absolute end-0 start-0 mx-3 px-2 bottom-0 py-3">
        <div class="row text-white">
            <div class="col-6 fs-6">${currencyCode} ${image.price}</div>
            <div class="col-6 text-end">
                <i class="${
                  image.favourite ? "fa fa-heart" : "far fa-heart"
                } fs-5 pointer" role="button"></i>
            </div>
        </div>
    </div>
</div>`;
});

function generateRatings(rating) {
  let ratingsHtml = "";
  [...Array(5)].forEach((_, i) => {
    if (rating >= i + 1) {
      ratingsHtml += `<i class="fa fa-star active-star"></i>`;
    } else {
      ratingsHtml += `<i class="fa fa-star"></i>`;
    }
  });

  return ratingsHtml;
}
