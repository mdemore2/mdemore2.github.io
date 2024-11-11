import "./style.css";
import portraitImage from "./assets/mark.jpeg";
import linkedIcon from "./assets/linkedin.svg";
import gitIcon from "./assets/github.svg";
import emailIcon from "./assets/email-outline.svg";
import phoneIcon from "./assets/phone-outline.svg";
import openIcon from "./assets/open-in-new.svg";
import twitterIcon from "./assets/twitter.svg";
import projectImage from "./assets/project.png";
import footerImage from "./assets/pexels-cottonbro-4709369.jpg";

buildPage();
buildAbout();

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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim dolor nec mi pulvinar accumsan. Vestibulum lobortis ultricies mauris, sed lacinia tellus facilisis et. Duis vel augue quis mi tincidunt porta sit amet in diam. Curabitur vulputate mi tincidunt nisi fermentum, et iaculis justo euismod. In tincidunt neque velit, eu bibendum erat luctus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  var links = document.createElement("div");
  var git = document.createElement("img");
  git.src = gitIcon;
  git.classList.add("icon");
  var linked = document.createElement("img");
  linked.src = linkedIcon;
  linked.classList.add("icon");
  var twitter = document.createElement("img");
  twitter.src = twitterIcon;
  twitter.classList.add("icon");
  links.appendChild(git);
  links.appendChild(linked);
  links.appendChild(twitter);
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

  for (let i = 0; i < 6; i++) {
    container.appendChild(buildCard());
  }

  work.appendChild(heading);
  work.append(container);
}

function buildCard() {
  var card = document.createElement("div");
  card.classList.add("card");
  var img = document.createElement("img");
  img.src = projectImage;
  img.classList.add("project-img");

  var textDiv = document.createElement("div");
  textDiv.classList.add("card-text");

  var titleDiv = document.createElement("div");
  titleDiv.classList.add("card-title");
  var title = document.createElement("h2");
  title.textContent = "my project";

  var cardIcons = document.createElement("div");
  var git = document.createElement("img");
  git.src = gitIcon;
  git.classList.add("icon");
  var open = document.createElement("img");
  open.src = openIcon;
  open.classList.add("icon");
  cardIcons.appendChild(git);
  cardIcons.appendChild(open);

  titleDiv.appendChild(title);
  titleDiv.appendChild(cardIcons);

  var description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim dolor nec mi pulvinar accumsan. Vestibulum lobortis ultricies mauris, sed lacinia tellus facilisis et. Duis vel augue quis mi tincidunt porta sit amet in diam. Curabitur vulputate mi tincidunt nisi fermentum, et iaculis justo euismod. In tincidunt neque velit, eu bibendum erat luctus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
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
  var callToAction = document.createElement("p");
  callToAction.textContent = "Please don't hesitate to reach out!";
  var address = document.createElement("p");
  address.innerHTML = "123 Drury Lane<br>Muffin, MN 12345";
  var info1 = document.createElement("span");
  var info2 = document.createElement("span");

  var number = document.createElement("p");
  number.textContent = "+1 555-555-5555";
  var emailAddr = document.createElement("p");
  emailAddr.textContent = "not.me@gmail.com";
  var links = document.createElement("span");

  var git = document.createElement("img");
  git.src = gitIcon;
  git.classList.add("icon");
  var linked = document.createElement("img");
  linked.src = linkedIcon;
  linked.classList.add("icon");
  var phone = document.createElement("img");
  phone.src = phoneIcon;
  phone.classList.add("icon");
  var email = document.createElement("img");
  email.src = emailIcon;
  email.classList.add("icon");

  var footer = document.createElement("img");
  footer.src = footerImage;
  footer.classList.add("footer");

  info1.appendChild(phone);
  info1.appendChild(number);

  info2.appendChild(email);
  info2.appendChild(emailAddr);

  links.appendChild(git);
  links.appendChild(linked);

  content.appendChild(title);
  content.appendChild(callToAction);
  content.appendChild(address);
  content.appendChild(info1);
  content.appendChild(info2);
  content.appendChild(links);

  contact.appendChild(content);
  contact.appendChild(footer);
}
