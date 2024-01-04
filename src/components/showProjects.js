const projects = [
  {
    id: ["All", "Electronic"],
    name: "Buck Converter",
    github_url: null,
    drive_url:
      "https://drive.google.com/file/d/16yGnnstRwqyekB-gg0_EN5ROPei8SHt6/view?usp=sharing",
    drive_icon: "/assets/icons/drive.svg",
    img: "/assets/img/buck.png",
    alt: "Buck Converter manual",
  },
  {
    id: ["All", "Electronic"],
    name: "IoT-USCO",
    github_url: "https://github.com/xmunder/IoT-Usco-Project",
    github_icon: "/assets/icons/github.svg",
    drive_url:
      "https://drive.google.com/file/d/1mlF23dkRVumWdiayWZ8pxzhu-qmB-FIJ/view?usp=sharing",
    drive_icon: "/assets/icons/drive.svg",
    img: "/assets/img/iot.png",
    alt: "IoT Platform and Hardware",
  },
  {
    id: ["All", "Electronic"],
    name: "PID Auto-Tuning",
    github_url: null,
    drive_url:
      "https://drive.google.com/file/d/1inAgj18hQT2TenAvGqxq8SSo4OA7SmAR/view?usp=sharing",
    drive_icon: "/assets/icons/drive.svg",
    img: "/assets/img/ahkr.png",
    alt: "Auto-Tuning Controllers AH-KR",
  },
  {
    id: ["All", "Electronic"],
    name: "Real-time monitoring",
    github_url: null,
    drive_url:
      "https://drive.google.com/file/d/18A53tz3AW2l8oq3h2RRh3HY_YfTrq1hm/view?usp=sharing",
    drive_icon: "/assets/icons/drive.svg",
    img: "/assets/img/labview.png",
    alt: "Real-time monitoring with LabVIEW",
  },
];

class ShowProjects extends HTMLElement {
  constructor() {
    super();
    const filterButtons = this.querySelectorAll("[filter-button]");
    const projectsContainer = document.getElementById("projectList");
    let filteredProjects = [];

    const showProjects = (projectsToShow) => {
      projectsContainer.innerHTML = "";
      projectsToShow.map((element) => {
        projectsContainer.innerHTML += `
            <div class="bg-gradient-to-r from-onyx via-jet to-smoky-black mb-2 p-4 flex flex-col border-[1.25px] border-jet rounded-3xl w-full">
            <img class="w-full h-[125px]" src="${element.img}" alt="${
          element.alt
        }">
            <div class="flex flex-col">
            <h3 class="font-semibold text-[14px] mt-4">${element.name}</h3>
            <div class="flex flex-row justify-between mt-1">
                <p class="font-light text-[12px] text-light-gray-70">${
                  element.id[1]
                }</p>
                <div class="flex flex-row">
                    ${
                      element.github_url !== null
                        ? `<a class="mr-2" href="${element.github_url}" target="_blank"> <img class="w-5 h-5" src="${element.github_icon}" alt="Github Icon"></a>`
                        : ``
                    }
                    ${
                      element.drive_url !== null
                        ? `<a href="${element.drive_url}" target="_blank"><img class="w-5 h-5" src="${element.drive_icon}" alt="Drive Icon"></a>`
                        : ``
                    }
                </div>
            </div>
            </div>
            </div>
        `;
      });
    };

    const filterProjects = (buttonId) => {
      filteredProjects =
        buttonId === "All"
          ? projects
          : projects.filter((project) => project.id.includes(buttonId));
      showProjects(filteredProjects);
    };

    filterButtons.forEach((button) => {
      button.classList.add("active:text-vegas-gold", "hover:text-vegas-gold");
      button.addEventListener("click", (e) => {
        filterButtons.forEach((otherButton) => {
          otherButton !== button
            ? otherButton.classList.remove("text-vegas-gold")
            : button.classList.add("text-vegas-gold");
        });
        const buttonId = e.target instanceof HTMLElement && e.target.innerText;
        filterProjects(buttonId);
      });
    });
    showProjects(projects);
  }
}
customElements.define("show-projects", ShowProjects);
