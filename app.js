const images = document.querySelectorAll(".repos .repos_container img");
images.forEach(image => {
    // get the image name from the src
    const imageName = image.getAttribute("src").split("/").slice(2).join("").split("_").slice(0,1).join("");
    // set repo name 
    const repo = image.closest(".repo");
    const repoName = repo.querySelector(".repo_name");
    repoName.innerHTML = imageName.split("-").slice(0,-2).join(" ");
})





