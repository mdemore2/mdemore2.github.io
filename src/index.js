import "./style.css";
import portraitImage from "./assets/mark.jpeg";
import linkedIcon from "./assets/linkedin.svg";
import gitIcon from "./assets/github.svg";
import tidalfyImage from "./assets/tidalfy_43.png";
import ledispiImage from "./assets/ledispi_43.jpg";
import readmeImage from "./assets/tidal-readme_43.png";
import homepageImage from "./assets/homepage_43.png";
import footerImage from "./assets/pexels-cottonbro-4709369.jpg";

buildPage();
buildAbout();

const projectList = [
  [
    "Tidal-README",
    readmeImage,
    "GitHub action workflow that automatically updates your GitHub profile readme with your most listened to music from Tidal.",
    "https://github.com/mdemore2/tidal-readme",
  ],
  [
    "LEDispi",
    ledispiImage,
    "Python app running on an rpi0 to display flight info for planes going by my window, with pushbullet integration to make it easily extensible.",
    "https://github.com/mdemore2/ledispi",
  ],
  [
    "Tidalfy",
    tidalfyImage,
    "Flask app to easily copy playlists between Tidal and Spotify, and vice-versa, to share with friends.",
    "https://github.com/mdemore2/tidalfy",
  ],
  [
    "This website",
    homepageImage,
    "Homepage for my personal website and portfolio built as an assignment from The Odin Project.",
    "https://github.com/mdemore2/mdemore2.github.io",
  ],
];

buildWork();
buildContact();

function buildPage() {
  var body = document.querySelector("body");
  var about = document.createElement("div");
  about.classList.add("about");
  var work = document.createElement("div");
  work.classList.add("work");
  var contact = document.createElement("div");
  contact.classList.add("contact");

  body.appendChild(about);
  body.appendChild(work);
  body.appendChild(contact);
}

function buildAbout() {
  var about = document.querySelector(".about");

  var portrait = document.createElement("div");
  portrait.classList.add("portrait");
  var img = document.createElement("img");
  img.src = portraitImage;
  var name = document.createElement("h1");
  name.textContent = "Mark Demore II";
  portrait.appendChild(img);
  portrait.appendChild(name);

  var bioDiv = document.createElement("div");
  bioDiv.classList.add("bio");
  var aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About Me";
  var bio = document.createElement("p");
  bio.textContent =
    "Computer engineer and Space Force officer building innovative solutions and integrating technology with real-world applications. Experienced in full-stack development, AI, and ML. Passionate about leveraging technology to solve complex problems.";
  var links = document.createElement("div");
  var git = document.createElement("img");
  var gitWrapper = document.createElement("a");
  git.src = gitIcon;
  gitWrapper.setAttribute("href", "https://github.com/mdemore2");
  git.classList.add("icon");
  gitWrapper.appendChild(git);
  var linkedWrapper = document.createElement("a");
  var linked = document.createElement("img");
  linked.src = linkedIcon;
  linkedWrapper.setAttribute(
    "href",
    "https://www.linkedin.com/in/mark-demore-ii-79bb63164"
  );
  linked.classList.add("icon");
  linkedWrapper.appendChild(linked);

  links.appendChild(gitWrapper);
  links.appendChild(linkedWrapper);
  links.classList.add("links");

  bioDiv.appendChild(aboutHeading);
  bioDiv.appendChild(bio);
  bioDiv.appendChild(links);

  about.appendChild(portrait);
  //  about.appendChild(name);
  about.appendChild(bioDiv);
}

function buildWork() {
  var work = document.querySelector(".work");
  var heading = document.createElement("h1");
  heading.textContent = "My Work";
  var container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(
    buildCard(
      projectList[0][0],
      projectList[0][1],
      projectList[0][2],
      projectList[0][3]
    )
  );
  container.appendChild(
    buildCard(
      projectList[1][0],
      projectList[1][1],
      projectList[1][2],
      projectList[1][3]
    )
  );
  container.appendChild(
    buildCard(
      projectList[2][0],
      projectList[2][1],
      projectList[2][2],
      projectList[2][3]
    )
  );
  container.appendChild(
    buildCard(
      projectList[3][0],
      projectList[3][1],
      projectList[3][2],
      projectList[3][3]
    )
  );

  work.appendChild(heading);
  work.append(container);
}

function buildCard(proj_title, proj_image, proj_description, git_link) {
  var card = document.createElement("div");
  card.classList.add("card");
  var img = document.createElement("img");
  img.src = proj_image;
  img.classList.add("project-img");

  var textDiv = document.createElement("div");
  textDiv.classList.add("card-text");

  var titleDiv = document.createElement("div");
  titleDiv.classList.add("card-title");
  var title = document.createElement("h2");
  title.textContent = proj_title;

  var cardIcons = document.createElement("div");
  var gitWrapper = document.createElement("a");
  gitWrapper.setAttribute("href", git_link);
  var git = document.createElement("img");
  git.src = gitIcon;
  git.classList.add("icon");
  gitWrapper.appendChild(git);

  cardIcons.appendChild(gitWrapper);

  titleDiv.appendChild(title);
  titleDiv.appendChild(cardIcons);

  var description = document.createElement("p");
  description.textContent = proj_description;
  textDiv.appendChild(titleDiv);
  textDiv.appendChild(description);

  card.appendChild(img);
  card.appendChild(textDiv);

  return card;
}

function buildContact() {
  var contact = document.querySelector(".contact");
  var title = document.createElement("h1");
  title.textContent = "Connect with me";
  var content = document.createElement("div");
  content.classList.add("contact-content");

  var links = document.createElement("span");

  var git = document.createElement("img");
  var gitWrapper = document.createElement("a");
  git.src = gitIcon;
  gitWrapper.setAttribute("href", "https://github.com/mdemore2");
  git.classList.add("icon");
  gitWrapper.appendChild(git);

  var linked = document.createElement("img");
  var linkedWrapper = document.createElement("a");
  linked.src = linkedIcon;
  linkedWrapper.setAttribute(
    "href",
    "https://www.linkedin.com/in/mark-demore-ii-79bb63164"
  );
  linked.classList.add("icon");
  linkedWrapper.appendChild(linked);

  var footer = document.createElement("img");
  footer.src = footerImage;
  footer.classList.add("footer");

  links.appendChild(gitWrapper);
  links.appendChild(linkedWrapper);

  content.appendChild(title);
  content.appendChild(links);

  contact.appendChild(content);
  contact.appendChild(footer);
}
