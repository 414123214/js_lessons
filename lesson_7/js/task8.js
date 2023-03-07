const bannerImageAdress = "../img/05.jpg"
const bannerTitle = "Заголовок"
const bannerLink = "https://www.google.com/"
function getBanner(bannerImageAdress, bannerTitle, bannerLink) {
  document.write(
    `<div style="width: 100%; position: relative;"><a target="_blank" href="${bannerLink}"><h2 style="position: absolute; top: 50%; left: 50%; font-size: 70px; font-weight: 700; text-transform: uppercase; transform:translate(-50%, -50%); color: #fff">${bannerTitle}</h2><img style="max-width: 100%; object-fit: cover;" src="${bannerImageAdress}" alt="banner"></a></div>`
  )
}
getBanner(bannerImageAdress, bannerTitle, bannerLink)
