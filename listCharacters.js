const infoAvatar = document.querySelector('.card-info');

const listInfo = (name, species, gender, image, status)=>{
    infoAvatar.innerHTML +=
    `
        <div class="card-body">
        <img src="${image}" class="card-img-top" alt="${image}" id="imageAvatar">
        <h3 class="card-title" id="nameAvatar">${name}</h3>
        <span class="card-text">${species} - ${gender}</span>
        <span class="card-text">${status}</span>
        </div>
    `
}

export default listInfo