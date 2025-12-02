function setActive(btn) {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  const Frontend = [
    {
      name: "React.js",
      description: "Component-based library for building interactive user interfaces with virtual DOM",
      features: ["JSX", "Hooks", "Redux", "Next"],
      iconPack: "brands",
      icon: "fa-react",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "Next.js",
      description: "Full-stack React framework with server-side rendering and static generation",
      features: ["SSR", "SSG", "API Routes"],
      iconPack: "brands",
      icon: "fa-js",
      textColor: "black",
      iconBG: "black",
      cardBG: "black-light",
      labelBG: "black-light-one"
    },
    {
      name: "Vue.js",
      description: "Progressive framework for building user interfaces with excellent developer experience",
      features: ["Composition API", "Vuex", "Nuxt"],
      iconPack: "brands",
      icon: "fa-vuejs",
      textColor: "green",
      iconBG: "green",
      cardBG: "green-light",
      labelBG: "green-light-one"
    },
    {
      name: "Angular",
      description: "Comprehensive platform for building scalable web applications",
      features: ["TypeScript", "RxJS", "CLI"],
      iconPack: "brands",
      icon: "fa-angular",
      textColor: "orange5",
      iconBG: "orange5",
      cardBG: "orange5-light",
      labelBG: "orange5-light-one"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      features: ["JIT", "Components", "Responsive"],
      iconPack: "brands",
      icon: "fa-css3-alt",
      textColor: "babyBlue",
      iconBG: "babyBlue",
      cardBG: "babyBlue-light",
      labelBG: "babyBlue-light-one"
    },
    {
      name: "Vite",
      description: "Next generation frontend tooling with lightning fast builds",
      features: ["HMR", "ESM", "Rollup"],
      iconPack: "solid",
      icon: "fa-bolt",
      textColor: "vilot",
      iconBG: "vilot",
      cardBG: "vilot-light",
      labelBG: "vilot-light-one"
    }
  ];
  
  const Backend = [
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine for server-side development",
      features: ["Express.js", "NPM", "TypeScript"],
      iconPack: "brands",
      icon: "fa-node-js",
      textColor: "green",
      iconBG: "green",
      cardBG: "green-light",
      labelBG: "green-light-one"
    },
    {
      name: "Python",
      description: "Versatile programming language with powerful frameworks for web development",
      features: ["Django", "FastAPI", "Flask"],
      iconPack: "brands",
      icon: "fa-python",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "Go",
      description: "Fast, statically typed language designed for modern software development",
      features: ["Gin", "Goroutines", "Microservices"],
      iconPack: "brands",
      icon: "fa-golang",
      textColor: "red",
      iconBG: "red",
      cardBG: "red-light",
      labelBG: "red-light-one"
    },
    {
      name: "Java",
      description: "Enterprise-grade platform with robust frameworks for large-scale applications",
      features: ["Spring Boot", "Hibernate", "Maven"],
      iconPack: "brands",
      icon: "fa-java",
      textColor: "vilot",
      iconBG: "vilot",
      cardBG: "vilot-light",
      labelBG: "vilot-light-one"
    },
    {
      name: ".NET",
      description: "Cross-platform framework for building modern, cloud-based applications",
      features: [".NET Core", "C#", "Entity Framework", "Azure"],
      iconPack: "brands",
      icon: "fa-microsoft",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "Ruby",
      description: "Dynamic language focused on simplicity and productivity",
      features: ["Rails", "Sinatra", "RubyGems"],
      iconPack: "solid",
      icon: "fa-r",
      textColor: "Teal",
      iconBG: "Teal",
      cardBG: "Teal-light",
      labelBG: "Teal-light-one"
    }
  ];

  const Mobile = [
    {
      name: "React Native",
      description: "Cross-platform mobile development using React and JavaScript",
      features: ["Expo", "Navigation", "Redux"],
      iconPack: "brands",
      icon: "fa-react",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "Flutter",
      description: "Google's UI toolkit for building natively compiled applications",
      features: ["Dart", "Widgets", "Material"],
      iconPack: "brands",
      icon: "fa-google",
      textColor: "babyBlue",
      iconBG: "babyBlue",
      cardBG: "babyBlue-light",
      labelBG: "babyBlue-light-one"
    },
    {
      name: "iOS Native",
      description: "Native iOS development using Swift and Xcode",
      features: ["Swift", "SwiftUI", "Core Data"],
      iconPack: "brands",
      icon: "fa-apple",
      textColor: "grey",
      iconBG: "grey",
      cardBG: "grey-light",
      labelBG: "grey-light-one"
    },
    {
      name: "Android Native",
      description: "Native Android development using Kotlin and Android Studio",
      features: ["Kotlin", "Jetpack", "Room"],
      iconPack: "brands",
      icon: "fa-android",
      textColor: "green",
      iconBG: "green",
      cardBG: "green-light",
      labelBG: "green-light-one"
    },
    {
      name: "Xamarin",
      description: "Microsoft's cross-platform solution using C# and .NET",
      features: ["C#", "Forms", "MVVM"],
      iconPack: "brands",
      icon: "fa-microsoft",
      textColor: "vilot",
      iconBG: "vilot",
      cardBG: "vilot-light",
      labelBG: "vilot-light-one"
    },
    {
      name: "PWA",
      description: "Progressive Web Apps with native-like mobile experiences",
      features: ["Service Worker", "Manifest", "Offline"],
      iconPack: "solid",
      icon: "fa-globe",
      textColor: "orange5",
      iconBG: "orange5",
      cardBG: "orange5-light",
      labelBG: "orange5-light-one"
    }
  ];
  
  const Cloud = [
    {
      name: "Amazon AWS",
      description: "Comprehensive cloud computing platform with extensive services",
      features: ["EC2", "Lambda", "S3"],
      iconPack: "brands",
      icon: "fa-aws",
      textColor: "orange5",
      iconBG: "orange5",
      cardBG: "orange5-light",
      labelBG: "orange5-light-one"
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise cloud platform with integrated development tools",
      features: ["App Service", "Functions", "DevOps"],
      iconPack: "brands",
      icon: "fa-microsoft",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "Google Cloud",
      description: "Google's cloud computing platform with AI and ML capabilities",
      features: ["Compute Engine", "Cloud Run", "BigQuery"],
      iconPack: "brands",
      icon: "fa-google",
      textColor: "red",
      iconBG: "red",
      cardBG: "red-light",
      labelBG: "red-light-one"
    },
    {
      name: "Docker",
      description: "Containerization platform for consistent application deployment",
      features: ["Containers", "Images", "Compose"],
      iconPack: "brands",
      icon: "fa-docker",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "Kubernetes",
      description: "Container orchestration system for automating deployment and scaling",
      features: ["Pods", "Services", "Helm"],
      iconPack: "solid",
      icon: "fa-k",
      textColor: "vilot",
      iconBG: "vilot",
      cardBG: "vilot-light",
      labelBG: "vilot-light-one"
    },
    {
      name: "CI/CD Pipeline",
      description: "Automated build, test, and deployment workflows",
      features: ["Jenkins", "GitHub Actions", "GitLab CI"],
      iconPack: "solid",
      icon: "fa-gears",
      textColor: "grey",
      iconBG: "grey",
      cardBG: "grey-light",
      labelBG: "grey-light-one"
    }
  ];

  const Database = [
    {
      name: "PostgreSQL",
      description: "Advanced open-source relational database with JSON support",
      features: ["ACID", "JSON", "Extensions"],
      iconPack: "solid",
      icon: "fa-database",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    },
    {
      name: "MongoDB",
      description: "Flexible NoSQL document database for modern applications",
      features: ["Documents", "Aggregation", "Sharding"],
      iconPack: "solid",
      icon: "fa-m",
      textColor: "green",
      iconBG: "green",
      cardBG: "green-light",
      labelBG: "green-light-one"
    },
    {
      name: "Redis",
      description: "In-memory data structure store for caching and real-time applications",
      features: ["Cache", "Pub/Sub", "Streams"],
      iconPack: "solid",
      icon: "fa-fire",
      textColor: "red",
      iconBG: "red",
      cardBG: "red-light",
      labelBG: "red-light-one"
    },
    {
      name: "MySQL",
      description: "Popular open-source relational database management system",
      features: ["InnoDB", "Replication", "Clustering"],
      iconPack: "solid",
      icon: "fa-database",
      textColor: "yellow",
      iconBG: "yellow",
      cardBG: "yellow-light",
      labelBG: "yellow-light-one"
    },
    {
      name: "Elasticsearch",
      description: "Distributed search and analytics engine for complex queries",
      features: ["Search", "Analytics", "Kibana"],
      iconPack: "solid",
      icon: "fa-chart-line",
      textColor: "vilot",
      iconBG: "vilot",
      cardBG: "vilot-light",
      labelBG: "vilot-light-one"
    },
    {
      name: "GraphQL",
      description: "Query language and runtime for APIs with flexible data fetching",
      features: ["Schema", "Resolvers", "Apollo"],
      iconPack: "solid",
      icon: "fa-diagram-project",
      textColor: "blue",
      iconBG: "blue",
      cardBG: "blue-light",
      labelBG: "blue-light-one"
    }
  ];
  
  function showFrontend() {
    document.getElementById("section-title").innerHTML = "Frontend Technologies";
    document.getElementById("section-subtitle").innerHTML =
      "Modern frameworks and libraries for creating exceptional user interfaces";

      const container = document.getElementById("cards-container");
      cartona = ``
      Frontend.forEach(tech => {
        cartona += `
          <div class="col-md-6 col-xl-4">
            <div class="tech-card p-5 rounded-4 bg-${tech.cardBG}">
              <div class="icon-box mb-3 rounded-4 d-flex justify-content-center align-items-center bg-${tech.iconBG}">
                <i class="fa-${tech.iconPack} ${tech.icon} fs-4 text-white"></i>
              </div>
              <h5 class="text-brown fw-bolder py-2">${tech.name}</h5>
              <p class="w-100 pb-2">${tech.description}</p>
              <div class="d-flex flex-wrap gap-2">
                ${tech.features.map(feature => `
                  <span class="badge text-${tech.textColor} fw-semibold px-3 py-2 rounded-5 bg-${tech.labelBG}">
                    ${feature}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      container.innerHTML = cartona
  }

  showFrontend(); 

  function showBackend() {
    document.getElementById("section-title").innerHTML = "Backend Technologies";
    document.getElementById("section-subtitle").innerHTML =
      "Powerful tools for building server-side applications";

      const container = document.getElementById("cards-container");
      cartona = ``
      Backend.forEach(tech => {
        cartona += `
        <div class="col-md-6 col-xl-4">
            <div class="tech-card p-5 rounded-4 bg-${tech.cardBG}">
              <div class="icon-box mb-3 rounded-4 d-flex justify-content-center align-items-center bg-${tech.iconBG}">
                <i class="fa-${tech.iconPack} ${tech.icon} fs-4 text-white"></i>
              </div>
              <h5 class="text-brown fw-bolder py-2">${tech.name}</h5>
              <p class="w-100 pb-2">${tech.description}</p>
              <div class="d-flex flex-wrap gap-2">
                ${tech.features.map(feature => `
                  <span class="badge text-${tech.textColor} fw-semibold px-3 py-2 rounded-5 bg-${tech.labelBG}">
                    ${feature}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      container.innerHTML = cartona
  }

  function showMobile() {
    document.getElementById("section-title").innerHTML = "Mobile Development";
    document.getElementById("section-subtitle").innerHTML =
      "Create modern cross-platform & native apps";

      const container = document.getElementById("cards-container");
      cartona = ``
      Mobile.forEach(tech => {
        cartona += `
        <div class="col-md-6 col-xl-4">
            <div class="tech-card p-5 rounded-4 bg-${tech.cardBG}">
              <div class="icon-box mb-3 rounded-4 d-flex justify-content-center align-items-center bg-${tech.iconBG}">
                <i class="fa-${tech.iconPack} ${tech.icon} fs-4 text-white"></i>
              </div>
              <h5 class="text-brown fw-bolder py-2">${tech.name}</h5>
              <p class="w-100 pb-2">${tech.description}</p>
              <div class="d-flex flex-wrap gap-2">
                ${tech.features.map(feature => `
                  <span class="badge text-${tech.textColor} fw-semibold px-3 py-2 rounded-5 bg-${tech.labelBG}">
                    ${feature}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      container.innerHTML = cartona
  }

  function showCloud() {
    document.getElementById("section-title").innerHTML = "Cloud & DevOps";
    document.getElementById("section-subtitle").innerHTML =
      "Tools for deployment, automation & cloud services";

      const container = document.getElementById("cards-container");
      cartona = ``
      Cloud.forEach(tech => {
        cartona += `
        <div class="col-md-6 col-xl-4">
            <div class="tech-card p-5 rounded-4 bg-${tech.cardBG}">
              <div class="icon-box mb-3 rounded-4 d-flex justify-content-center align-items-center bg-${tech.iconBG}">
                <i class="fa-${tech.iconPack} ${tech.icon} fs-4 text-white"></i>
              </div>
              <h5 class="text-brown fw-bolder py-2">${tech.name}</h5>
              <p class="w-100 pb-2">${tech.description}</p>
              <div class="d-flex flex-wrap gap-2">
                ${tech.features.map(feature => `
                  <span class="badge text-${tech.textColor} fw-semibold px-3 py-2 rounded-5 bg-${tech.labelBG}">
                    ${feature}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      container.innerHTML = cartona
  }

  function showDatabase() {
    document.getElementById("section-title").innerHTML = "Database Technologies";
    document.getElementById("section-subtitle").innerHTML =
      "Modern databases for structured & unstructured data";

      const container = document.getElementById("cards-container");
      cartona = ``
      Database.forEach(tech => {
        cartona += `
        <div class="col-md-6 col-xl-4">
            <div class="tech-card p-5 rounded-4 bg-${tech.cardBG}">
              <div class="icon-box mb-3 rounded-4 d-flex justify-content-center align-items-center bg-${tech.iconBG}">
                <i class="fa-${tech.iconPack} ${tech.icon} fs-4 text-white"></i>
              </div>
              <h5 class="text-brown fw-bolder py-2">${tech.name}</h5>
              <p class="w-100 pb-2">${tech.description}</p>
              <div class="d-flex flex-wrap gap-2">
                ${tech.features.map(feature => `
                  <span class="badge text-${tech.textColor} fw-semibold px-3 py-2 rounded-5 bg-${tech.labelBG}">
                    ${feature}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      container.innerHTML = cartona
  }

  const btns = document.querySelectorAll(".budget-btn");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });