// Données des roadmaps - Kpataa
// Deux catégories, comme sur roadmap.sh :
// - ROLES : roadmaps par métier (le chemin complet pour un rôle donné)
// - SKILLS : roadmaps par compétence (un sujet précis, indépendant du métier)
// Chaque item : { label, level: "core"|"option", note?, resource?: { label, url } }

const ROLES = {
  "web-dev": {
    type: "role",
    title: "Développeur Web",
    subtitle: "Du HTML au full-stack, avec les ressources disponibles au Togo",
    icon: "🌐",
    sections: [
      {
        title: "1. Bases indispensables",
        items: [
          { label: "Fonctionnement d'Internet, HTTP/HTTPS, DNS", level: "core", resource: { label: "MDN - Comment fonctionne le web", url: "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/How_the_Web_works" } },
          { label: "Ligne de commande (bash) et système de fichiers", level: "core", resource: { label: "Voir roadmap compétence Linux", url: "roadmap.html?id=linux" } },
          { label: "Git et GitHub (branches, pull requests, résolution de conflits)", level: "core", resource: { label: "Voir roadmap compétence Git & GitHub", url: "roadmap.html?id=git-github" } },
          { label: "Éditeur de code : VS Code, extensions utiles", level: "core", resource: { label: "Documentation VS Code", url: "https://code.visualstudio.com/docs" } }
        ]
      },
      {
        title: "2. HTML",
        items: [
          { label: "Structure sémantique (header, main, section, article)", level: "core", resource: { label: "MDN - HTML", url: "https://developer.mozilla.org/fr/docs/Web/HTML" } },
          { label: "Formulaires et validation native", level: "core", resource: { label: "MDN - Formulaires web", url: "https://developer.mozilla.org/fr/docs/Learn/Forms" } },
          { label: "Accessibilité de base (attributs ARIA, alt, labels)", level: "option", resource: { label: "MDN - Accessibilité", url: "https://developer.mozilla.org/fr/docs/Web/Accessibility" } }
        ]
      },
      {
        title: "3. CSS",
        items: [
          { label: "Box model, sélecteurs, spécificité", level: "core", resource: { label: "MDN - CSS", url: "https://developer.mozilla.org/fr/docs/Web/CSS" } },
          { label: "Flexbox et Grid", level: "core", resource: { label: "CSS Tricks - Guide Flexbox/Grid", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" } },
          { label: "Responsive design (mobile-first, media queries)", level: "core", resource: { label: "MDN - Responsive design", url: "https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design" } },
          { label: "Sass/SCSS ou Tailwind CSS", level: "option", resource: { label: "Documentation Tailwind CSS", url: "https://tailwindcss.com/docs" } }
        ]
      },
      {
        title: "4. JavaScript",
        items: [
          { label: "Syntaxe de base, types, fonctions, portée", level: "core", resource: { label: "Voir roadmap compétence JavaScript", url: "roadmap.html?id=javascript" } },
          { label: "DOM et gestion des événements", level: "core", resource: { label: "MDN - Manipulation du DOM", url: "https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model" } },
          { label: "ES6+ (arrow functions, destructuring, modules)", level: "core" },
          { label: "Asynchrone : Promises, async/await, fetch API", level: "core", resource: { label: "MDN - Fonctions asynchrones", url: "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous" } },
          { label: "TypeScript", level: "option", resource: { label: "Documentation TypeScript", url: "https://www.typescriptlang.org/docs/" } }
        ]
      },
      {
        title: "5. Frontend avancé",
        items: [
          { label: "Un framework : React, Vue ou Svelte (choisir un seul pour démarrer)", level: "core", resource: { label: "React - Apprendre", url: "https://react.dev/learn" } },
          { label: "Gestion d'état (Context API, Zustand, Redux)", level: "option" },
          { label: "Routing côté client", level: "core" },
          { label: "Outils de build : Vite, bundlers", level: "core", resource: { label: "Documentation Vite", url: "https://vite.dev/guide/" } }
        ]
      },
      {
        title: "6. Notions backend pour le full-stack",
        items: [
          { label: "Node.js et Express, ou équivalent", level: "core", resource: { label: "Documentation Node.js", url: "https://nodejs.org/fr/docs" } },
          { label: "API REST, méthodes HTTP, codes de statut", level: "core" },
          { label: "Bases de données SQL (PostgreSQL/MySQL) et NoSQL (MongoDB)", level: "core", resource: { label: "Voir roadmap compétence SQL", url: "roadmap.html?id=sql" } }
        ]
      },
      {
        title: "7. Déploiement",
        items: [
          { label: "Hébergement statique (Netlify, Vercel, GitHub Pages)", level: "core", resource: { label: "Documentation GitHub Pages", url: "https://docs.github.com/fr/pages" } },
          { label: "Déploiement sur un VPS ou hébergeur local", level: "option" },
          { label: "Nom de domaine .tg et DNS", level: "option" }
        ]
      },
      {
        title: "8. Écosystème togolais",
        items: [
          { label: "IAI-Togo : licence pro informatique, formation continue", level: "core", note: "Institut Africain d'Informatique, Lomé.", resource: { label: "iai-togo.tg", url: "https://new.iai-togo.tg/" } },
          { label: "ESGIS : licence Informatique Réseaux et Télécommunication", level: "core" },
          { label: "HETEC (HEST) : licence/master développement d'applications", level: "core" },
          { label: "GDG Lomé et DevFest Lomé : meetups et conférence annuelle", level: "core", note: "Communauté Google Developer Groups, ateliers réguliers.", resource: { label: "gdg.community.dev/gdg-lome", url: "https://gdg.community.dev/gdg-lome/" } },
          { label: "Djanta Academy (Djanta Tech Hub) : formation aux compétences numériques", level: "option" }
        ]
      }
    ]
  },

  "backend": {
    type: "role",
    title: "Développeur Backend",
    subtitle: "Langages, bases de données, architecture et sécurité",
    icon: "🛠️",
    sections: [
      {
        title: "1. Choisir un langage",
        items: [
          { label: "Node.js (JavaScript/TypeScript)", level: "core", resource: { label: "Documentation Node.js", url: "https://nodejs.org/fr/docs" } },
          { label: "Python (Django, FastAPI)", level: "core", resource: { label: "Voir roadmap compétence Python", url: "roadmap.html?id=python" } },
          { label: "PHP (Laravel)", level: "option", resource: { label: "Documentation Laravel", url: "https://laravel.com/docs" } },
          { label: "Java (Spring Boot) ou Go", level: "option" }
        ]
      },
      {
        title: "2. Fondamentaux",
        items: [
          { label: "Structures de données et algorithmes", level: "core" },
          { label: "Programmation orientée objet", level: "core" },
          { label: "Gestion des erreurs et logs", level: "core" }
        ]
      },
      {
        title: "3. Bases de données",
        items: [
          { label: "SQL : modélisation, jointures, index, transactions", level: "core", resource: { label: "Voir roadmap compétence SQL", url: "roadmap.html?id=sql" } },
          { label: "PostgreSQL ou MySQL en pratique", level: "core", resource: { label: "Documentation PostgreSQL", url: "https://www.postgresql.org/docs/" } },
          { label: "NoSQL : MongoDB, Redis (cache)", level: "core", resource: { label: "Documentation MongoDB", url: "https://www.mongodb.com/docs/manual/" } },
          { label: "ORM (Prisma, Sequelize, SQLAlchemy)", level: "option" }
        ]
      },
      {
        title: "4. API et authentification",
        items: [
          { label: "REST : conception, versionnement, pagination", level: "core" },
          { label: "GraphQL", level: "option", resource: { label: "Documentation GraphQL", url: "https://graphql.org/learn/" } },
          { label: "Authentification JWT, sessions, OAuth2", level: "core", resource: { label: "jwt.io - Introduction aux JWT", url: "https://jwt.io/introduction" } }
        ]
      },
      {
        title: "5. Architecture",
        items: [
          { label: "MVC et design patterns courants", level: "core" },
          { label: "Architecture microservices", level: "option" },
          { label: "Files de messages (RabbitMQ, Kafka)", level: "option" }
        ]
      },
      {
        title: "6. Sécurité",
        items: [
          { label: "OWASP Top 10 (injection SQL, XSS, CSRF)", level: "core", resource: { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" } },
          { label: "Validation des entrées, gestion des secrets (.env)", level: "core" },
          { label: "Limitation de débit (rate limiting), CORS", level: "core" }
        ]
      },
      {
        title: "7. Tests et déploiement",
        items: [
          { label: "Tests unitaires et d'intégration", level: "core" },
          { label: "Docker et conteneurisation", level: "core", resource: { label: "Voir roadmap compétence Docker", url: "roadmap.html?id=docker" } },
          { label: "CI/CD basique (GitHub Actions)", level: "option", resource: { label: "Documentation GitHub Actions", url: "https://docs.github.com/fr/actions" } },
          { label: "Administration d'un serveur Linux", level: "core", resource: { label: "Voir roadmap compétence Linux", url: "roadmap.html?id=linux" } }
        ]
      },
      {
        title: "8. Écosystème togolais",
        items: [
          { label: "Centre Informatique de Calcul (CIC), Université de Lomé", level: "core", note: "Licences pro réseaux/informatique, master sécurité réseaux.", resource: { label: "univ-lome.tg", url: "https://univ-lome.tg/course/informatique-et-systemes/" } },
          { label: "PyCon Togo : conférence nationale Python", level: "core", resource: { label: "pycontg.pytogo.org", url: "https://pycontg.pytogo.org/" } },
          { label: "IAI-Togo et HETEC : formations backend et bases de données", level: "option" }
        ]
      }
    ]
  },

  "devops": {
    type: "role",
    title: "DevOps & Cloud",
    subtitle: "Infrastructure, automatisation et exploitation",
    icon: "☁️",
    sections: [
      {
        title: "1. Bases système",
        items: [
          { label: "Administration Linux (processus, permissions, services)", level: "core", resource: { label: "Voir roadmap compétence Linux", url: "roadmap.html?id=linux" } },
          { label: "Scripting bash/shell", level: "core" },
          { label: "Réseaux : TCP/IP, DNS, load balancing", level: "core", resource: { label: "Voir roadmap compétence Réseaux", url: "roadmap.html?id=reseaux" } }
        ]
      },
      {
        title: "2. Versioning et collaboration",
        items: [
          { label: "Git avancé (rebase, cherry-pick, GitFlow)", level: "core", resource: { label: "Voir roadmap compétence Git & GitHub", url: "roadmap.html?id=git-github" } }
        ]
      },
      {
        title: "3. Conteneurisation",
        items: [
          { label: "Docker : images, volumes, réseaux", level: "core", resource: { label: "Voir roadmap compétence Docker", url: "roadmap.html?id=docker" } },
          { label: "Docker Compose pour environnements multi-services", level: "core" },
          { label: "Kubernetes : pods, services, déploiements", level: "option", resource: { label: "Documentation Kubernetes", url: "https://kubernetes.io/fr/docs/home/" } }
        ]
      },
      {
        title: "4. Intégration et livraison continues",
        items: [
          { label: "GitHub Actions ou GitLab CI", level: "core", resource: { label: "Documentation GitHub Actions", url: "https://docs.github.com/fr/actions" } },
          { label: "Jenkins", level: "option", resource: { label: "Documentation Jenkins", url: "https://www.jenkins.io/doc/" } },
          { label: "Stratégies de déploiement (blue-green, canary)", level: "option" }
        ]
      },
      {
        title: "5. Infrastructure as Code",
        items: [
          { label: "Terraform", level: "core", resource: { label: "Documentation Terraform", url: "https://developer.hashicorp.com/terraform/docs" } },
          { label: "Ansible", level: "option", resource: { label: "Documentation Ansible", url: "https://docs.ansible.com/" } }
        ]
      },
      {
        title: "6. Cloud",
        items: [
          { label: "Fondamentaux AWS, Azure ou GCP (compute, storage, IAM)", level: "core", resource: { label: "Voir roadmap compétence Cloud", url: "roadmap.html?id=cloud" } },
          { label: "Certification niveau associate/fundamentals", level: "option" }
        ]
      },
      {
        title: "7. Observabilité",
        items: [
          { label: "Monitoring : Prometheus, Grafana", level: "core", resource: { label: "Documentation Prometheus", url: "https://prometheus.io/docs/introduction/overview/" } },
          { label: "Centralisation des logs (ELK, Loki)", level: "option" }
        ]
      },
      {
        title: "8. Écosystème togolais",
        items: [
          { label: "Djanta Tech Hub / Djanta Academy : formations compétences numériques", level: "core", note: "Lancé en 2026, avec Djanta Lab pour la recherche et l'innovation.", resource: { label: "togofirst.com", url: "https://www.togofirst.com/fr/tic/0805-18921-le-togo-inaugure-le-djanta-tech-hub-nouveau-levier-pour-les-startups-numeriques" } },
          { label: "GDG Lomé : ateliers Google Cloud", level: "core", resource: { label: "gdg.community.dev/gdg-lome", url: "https://gdg.community.dev/gdg-lome/" } },
          { label: "DevFest Lomé : conférence annuelle IA et cloud", level: "option" }
        ]
      }
    ]
  },

  "cyber": {
    type: "role",
    title: "Cybersécurité & Réseaux",
    subtitle: "Sécurité offensive, défensive et gouvernance",
    icon: "🔐",
    sections: [
      {
        title: "1. Fondamentaux réseaux",
        items: [
          { label: "Modèle OSI et TCP/IP", level: "core", resource: { label: "Voir roadmap compétence Réseaux", url: "roadmap.html?id=reseaux" } },
          { label: "Routage, switching, VLAN, sous-réseaux", level: "core" },
          { label: "Certification CCNA (recommandée en base)", level: "option", resource: { label: "Cisco - Certification CCNA", url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccna/index.html" } }
        ]
      },
      {
        title: "2. Administration système",
        items: [
          { label: "Administration Linux et Windows Server", level: "core", resource: { label: "Voir roadmap compétence Linux", url: "roadmap.html?id=linux" } },
          { label: "Active Directory et gestion des identités", level: "core" }
        ]
      },
      {
        title: "3. Sécurité réseau",
        items: [
          { label: "Pare-feu, segmentation réseau, VPN", level: "core" },
          { label: "IDS/IPS et détection d'intrusion", level: "core" },
          { label: "Durcissement (hardening) des systèmes", level: "core" }
        ]
      },
      {
        title: "4. Cryptographie",
        items: [
          { label: "Chiffrement symétrique et asymétrique", level: "core" },
          { label: "PKI, certificats et TLS", level: "core" }
        ]
      },
      {
        title: "5. Sécurité applicative et audit",
        items: [
          { label: "OWASP Top 10", level: "core", resource: { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" } },
          { label: "Tests d'intrusion (pentest), outils : Nmap, Metasploit, Burp Suite", level: "core", resource: { label: "Documentation Nmap", url: "https://nmap.org/book/man.html" } },
          { label: "Analyse de trafic avec Wireshark", level: "core", resource: { label: "Documentation Wireshark", url: "https://www.wireshark.org/docs/" } },
          { label: "SIEM et gestion des incidents", level: "option" }
        ]
      },
      {
        title: "6. Gouvernance et conformité",
        items: [
          { label: "Loi n°2018-026 sur la cybersécurité et la cybercriminalité (Togo)", level: "core", note: "Cadre légal togolais, base des obligations de sécurité.", resource: { label: "ancy.gouv.tg", url: "https://ancy.gouv.tg/" } },
          { label: "Normes ISO 27001, gestion des risques", level: "core" },
          { label: "Protection des données personnelles", level: "option" }
        ]
      },
      {
        title: "7. Certifications",
        items: [
          { label: "CompTIA Security+", level: "core", resource: { label: "CompTIA Security+", url: "https://www.comptia.org/certifications/security" } },
          { label: "CEH (Certified Ethical Hacker)", level: "option" },
          { label: "CCNA Security / CISSP (niveau avancé)", level: "option" }
        ]
      },
      {
        title: "8. Écosystème togolais",
        items: [
          { label: "ANCy : Agence Nationale de la Cybersécurité du Togo", level: "core", note: "Autorité nationale, organise des Capture The Flag et campagnes de sensibilisation.", resource: { label: "ancy.gouv.tg", url: "https://ancy.gouv.tg/" } },
          { label: "CERT.tg : centre national de réponse aux incidents cyber", level: "core", note: "Opéré par Cyber Defense Africa pour le compte de l'ANCy.", resource: { label: "cert.tg", url: "https://cert.tg/" } },
          { label: "Lomé Digital School : parcours cybersécurité", level: "core", resource: { label: "lomedigitalschool.com", url: "https://lomedigitalschool.com/cybersecurite/" } },
          { label: "Master sécurité des réseaux, Université de Lomé", level: "option" }
        ]
      }
    ]
  },

  "data-ia": {
    type: "role",
    title: "Data & Intelligence Artificielle",
    subtitle: "Des statistiques au machine learning appliqué",
    icon: "📊",
    sections: [
      {
        title: "1. Mathématiques et statistiques",
        items: [
          { label: "Algèbre linéaire de base", level: "core" },
          { label: "Statistiques descriptives et probabilités", level: "core" }
        ]
      },
      {
        title: "2. Programmation",
        items: [
          { label: "Python : syntaxe, structures de données", level: "core", resource: { label: "Voir roadmap compétence Python", url: "roadmap.html?id=python" } },
          { label: "Pandas et NumPy", level: "core", resource: { label: "Documentation Pandas", url: "https://pandas.pydata.org/docs/" } },
          { label: "SQL pour l'analyse de données", level: "core", resource: { label: "Voir roadmap compétence SQL", url: "roadmap.html?id=sql" } }
        ]
      },
      {
        title: "3. Visualisation",
        items: [
          { label: "Matplotlib, Seaborn", level: "core", resource: { label: "Documentation Matplotlib", url: "https://matplotlib.org/stable/tutorials/index.html" } },
          { label: "Power BI ou Tableau", level: "option" }
        ]
      },
      {
        title: "4. Machine Learning",
        items: [
          { label: "Scikit-learn : régression, classification, clustering", level: "core", resource: { label: "Scikit-learn - Tutoriels", url: "https://scikit-learn.org/stable/tutorial/index.html" } },
          { label: "Évaluation de modèles (validation croisée, métriques)", level: "core" },
          { label: "Feature engineering", level: "option" }
        ]
      },
      {
        title: "5. Deep Learning",
        items: [
          { label: "Réseaux de neurones, bases", level: "option" },
          { label: "TensorFlow ou PyTorch", level: "option", resource: { label: "PyTorch - Tutoriels", url: "https://pytorch.org/tutorials/" } }
        ]
      },
      {
        title: "6. Mise en production",
        items: [
          { label: "Déploiement de modèles (API Flask/FastAPI)", level: "option", resource: { label: "Documentation FastAPI", url: "https://fastapi.tiangolo.com/" } },
          { label: "Notions de MLOps et monitoring", level: "option" }
        ]
      },
      {
        title: "7. Écosystème togolais",
        items: [
          { label: "PyCon Togo : conférence nationale de la communauté Python", level: "core", resource: { label: "pycontg.pytogo.org", url: "https://pycontg.pytogo.org/" } },
          { label: "Djanta Lab : laboratoire de recherche et innovation", level: "option" },
          { label: "HETEC : parcours intelligence artificielle", level: "option" }
        ]
      }
    ]
  },

  "mobile": {
    type: "role",
    title: "Développement Mobile",
    subtitle: "Natif ou cross-platform, de l'idée au Play Store",
    icon: "📱",
    sections: [
      {
        title: "1. Choisir une approche",
        items: [
          { label: "Cross-platform : Flutter (Dart) ou React Native", level: "core", resource: { label: "Documentation Flutter", url: "https://docs.flutter.dev/" } },
          { label: "Natif Android : Kotlin", level: "option", resource: { label: "Android Developers - Kotlin", url: "https://developer.android.com/kotlin" } },
          { label: "Natif iOS : Swift", level: "option", resource: { label: "Apple Developer - Swift", url: "https://developer.apple.com/swift/" } }
        ]
      },
      {
        title: "2. UI/UX mobile",
        items: [
          { label: "Principes de design mobile-first", level: "core" },
          { label: "Material Design (Android) / Human Interface Guidelines (iOS)", level: "core", resource: { label: "Material Design", url: "https://m3.material.io/" } }
        ]
      },
      {
        title: "3. Architecture et état",
        items: [
          { label: "MVVM ou architecture propre", level: "core" },
          { label: "Gestion d'état : Provider/Riverpod (Flutter) ou Redux (RN)", level: "core" }
        ]
      },
      {
        title: "4. Données et API",
        items: [
          { label: "Consommation d'API REST", level: "core" },
          { label: "Stockage local (SQLite, Hive)", level: "core" },
          { label: "Firebase (auth, base de données temps réel)", level: "option", resource: { label: "Documentation Firebase", url: "https://firebase.google.com/docs" } }
        ]
      },
      {
        title: "5. Fonctionnalités natives",
        items: [
          { label: "Notifications push", level: "core" },
          { label: "Géolocalisation et permissions", level: "core" },
          { label: "Paiement mobile (Flooz, T-Money, Mobile Money)", level: "option", note: "Intégrations pertinentes pour le marché togolais." }
        ]
      },
      {
        title: "6. Publication",
        items: [
          { label: "Google Play Store : préparation et publication", level: "core", resource: { label: "Play Console - Guide de lancement", url: "https://support.google.com/googleplay/android-developer/answer/9859152" } },
          { label: "Apple App Store : préparation et publication", level: "option" }
        ]
      },
      {
        title: "7. Écosystème togolais",
        items: [
          { label: "GDG Lomé : ateliers Android/Flutter", level: "core", resource: { label: "gdg.community.dev/gdg-lome", url: "https://gdg.community.dev/gdg-lome/" } },
          { label: "IAI-Togo et HETEC : bootcamps développement mobile", level: "option" },
          { label: "Djanta Start : incubation pour startups mobiles", level: "option" }
        ]
      }
    ]
  },

  "product-manager": {
    type: "role",
    title: "Product Manager",
    subtitle: "Piloter un produit numérique, de l'idée à la mise en marché",
    icon: "🧭",
    sections: [
      {
        title: "1. Le rôle",
        items: [
          { label: "Différence Product Manager / Product Owner", level: "core", resource: { label: "Atlassian - Product management", url: "https://www.atlassian.com/agile/product-management" } },
          { label: "Cycle de vie d'un produit", level: "core" }
        ]
      },
      {
        title: "2. Découverte utilisateur",
        items: [
          { label: "Entretiens utilisateurs et personas", level: "core" },
          { label: "Analyse de la concurrence", level: "core" }
        ]
      },
      {
        title: "3. Stratégie produit",
        items: [
          { label: "Vision et roadmap produit", level: "core" },
          { label: "Priorisation (RICE, MoSCoW, Kano)", level: "core" }
        ]
      },
      {
        title: "4. Exécution",
        items: [
          { label: "Rédaction de specs et user stories", level: "core" },
          { label: "Méthodologies agiles : Scrum, Kanban", level: "core", resource: { label: "Scrum.org - Ressources", url: "https://www.scrum.org/resources" } },
          { label: "Gestion du backlog", level: "core" }
        ]
      },
      {
        title: "5. Data et métriques",
        items: [
          { label: "KPIs produit, tableaux de bord", level: "core" },
          { label: "A/B testing", level: "option" }
        ]
      },
      {
        title: "6. Outils",
        items: [
          { label: "Jira, Notion, Linear", level: "core" },
          { label: "Lecture de maquettes Figma", level: "option" }
        ]
      },
      {
        title: "7. Écosystème togolais",
        items: [
          { label: "Djanta Start (Djanta Tech Hub) : accompagnement de startups", level: "core" },
          { label: "CUBE : incubateur et formation entrepreneuriat numérique", level: "option" }
        ]
      }
    ]
  },

  "ux-ui": {
    type: "role",
    title: "UX/UI Designer",
    subtitle: "Concevoir des interfaces utiles, claires et agréables à utiliser",
    icon: "🎨",
    sections: [
      {
        title: "1. Fondamentaux du design",
        items: [
          { label: "Théorie des couleurs, typographie, grille", level: "core" },
          { label: "Principes d'ergonomie et de hiérarchie visuelle", level: "core" }
        ]
      },
      {
        title: "2. Recherche utilisateur (UX)",
        items: [
          { label: "Entretiens, personas, parcours utilisateur", level: "core", resource: { label: "Google - Certificat UX Design", url: "https://www.coursera.org/professional-certificates/google-ux-design" } },
          { label: "Architecture de l'information", level: "core" }
        ]
      },
      {
        title: "3. Conception",
        items: [
          { label: "Wireframes basse et haute fidélité", level: "core" },
          { label: "Prototypage interactif", level: "core" }
        ]
      },
      {
        title: "4. Interface (UI)",
        items: [
          { label: "Design systems et composants réutilisables", level: "core" },
          { label: "Accessibilité visuelle (contraste, tailles de police)", level: "core" }
        ]
      },
      {
        title: "5. Outils",
        items: [
          { label: "Figma", level: "core", resource: { label: "Centre d'aide Figma", url: "https://help.figma.com/" } },
          { label: "Adobe XD ou Sketch", level: "option" }
        ]
      },
      {
        title: "6. Tests et itération",
        items: [
          { label: "Tests d'utilisabilité", level: "core" },
          { label: "Itération à partir des retours", level: "core" }
        ]
      },
      {
        title: "7. Écosystème togolais",
        items: [
          { label: "GDG Lomé : ateliers design occasionnels", level: "option" },
          { label: "Djanta Academy : formations compétences numériques", level: "option" }
        ]
      }
    ]
  },

  "data-analyst": {
    type: "role",
    title: "Data Analyst",
    subtitle: "Transformer des données brutes en décisions",
    icon: "📈",
    sections: [
      {
        title: "1. Tableurs",
        items: [
          { label: "Excel ou Google Sheets avancé (TCD, formules)", level: "core", resource: { label: "Support Google Sheets", url: "https://support.google.com/docs/topic/9054603" } }
        ]
      },
      {
        title: "2. SQL",
        items: [
          { label: "Requêtes et agrégations", level: "core", resource: { label: "Voir roadmap compétence SQL", url: "roadmap.html?id=sql" } }
        ]
      },
      {
        title: "3. Programmation",
        items: [
          { label: "Python pour l'analyse (Pandas)", level: "core", resource: { label: "Voir roadmap compétence Python", url: "roadmap.html?id=python" } }
        ]
      },
      {
        title: "4. Visualisation",
        items: [
          { label: "Power BI ou Tableau", level: "core", resource: { label: "Documentation Power BI", url: "https://learn.microsoft.com/power-bi/" } },
          { label: "Looker Studio (gratuit)", level: "option" }
        ]
      },
      {
        title: "5. Statistiques",
        items: [
          { label: "Statistiques descriptives, corrélation", level: "core" }
        ]
      },
      {
        title: "6. Communication",
        items: [
          { label: "Storytelling avec les données, tableaux de bord", level: "core" }
        ]
      },
      {
        title: "7. Écosystème togolais",
        items: [
          { label: "PyCon Togo : conférence nationale Python", level: "core", resource: { label: "pycontg.pytogo.org", url: "https://pycontg.pytogo.org/" } },
          { label: "Djanta Lab : recherche et innovation", level: "option" }
        ]
      }
    ]
  },

  "support-it": {
    type: "role",
    title: "Support IT / Helpdesk",
    subtitle: "Assister les utilisateurs et maintenir le parc informatique",
    icon: "🖥️",
    sections: [
      {
        title: "1. Systèmes",
        items: [
          { label: "Bases Windows, macOS et Linux", level: "core" },
          { label: "Installation et configuration de postes", level: "core" }
        ]
      },
      {
        title: "2. Réseaux",
        items: [
          { label: "Notions réseau de base", level: "core", resource: { label: "Voir roadmap compétence Réseaux", url: "roadmap.html?id=reseaux" } }
        ]
      },
      {
        title: "3. Diagnostic et support",
        items: [
          { label: "Méthodologie de résolution de problèmes", level: "core" },
          { label: "Gestion de tickets (ITSM)", level: "core" }
        ]
      },
      {
        title: "4. Administration",
        items: [
          { label: "Active Directory, gestion des comptes", level: "core" },
          { label: "Gestion de parc informatique", level: "core" }
        ]
      },
      {
        title: "5. Sécurité de base",
        items: [
          { label: "Sensibilisation aux bonnes pratiques", level: "core" }
        ]
      },
      {
        title: "6. Certifications",
        items: [
          { label: "CompTIA A+", level: "core", resource: { label: "CompTIA A+", url: "https://www.comptia.org/certifications/a" } },
          { label: "ITIL Foundation", level: "option", resource: { label: "ITIL - Axelos", url: "https://www.axelos.com/certifications/itil-service-management" } }
        ]
      },
      {
        title: "7. Écosystème togolais",
        items: [
          { label: "IAI-Togo et ESGIS : formations réseaux et systèmes", level: "core" }
        ]
      }
    ]
  },

  "project-manager": {
    type: "role",
    title: "Chef de Projet IT",
    subtitle: "Planifier, coordonner et livrer des projets informatiques",
    icon: "📋",
    sections: [
      {
        title: "1. Fondamentaux",
        items: [
          { label: "Cycle de vie d'un projet", level: "core" },
          { label: "Waterfall vs Agile", level: "core" }
        ]
      },
      {
        title: "2. Planification",
        items: [
          { label: "Charte de projet, périmètre (WBS)", level: "core" },
          { label: "Planning et diagramme de Gantt", level: "core" }
        ]
      },
      {
        title: "3. Pilotage",
        items: [
          { label: "Gestion des risques", level: "core" },
          { label: "Gestion du budget", level: "core" }
        ]
      },
      {
        title: "4. Outils",
        items: [
          { label: "Jira, Trello ou MS Project", level: "core" }
        ]
      },
      {
        title: "5. Certifications",
        items: [
          { label: "PMP (Project Management Professional)", level: "option", resource: { label: "PMI - Certification PMP", url: "https://www.pmi.org/certifications/project-management-pmp" } },
          { label: "PRINCE2", level: "option", resource: { label: "PRINCE2 - Certification", url: "https://www.prince2.com/eur/prince2-certification" } },
          { label: "Professional Scrum Master (PSM)", level: "option", resource: { label: "Scrum.org - Certifications PSM", url: "https://www.scrum.org/professional-scrum-certifications" } }
        ]
      },
      {
        title: "6. Écosystème togolais",
        items: [
          { label: "CUBE et Djanta Tech Hub : accompagnement de projets numériques", level: "core" }
        ]
      }
    ]
  }
};

const SKILLS = {
  "git-github": {
    type: "skill",
    title: "Git & GitHub",
    subtitle: "Le contrôle de version, un incontournable pour tous les métiers tech",
    icon: "🔧",
    sections: [
      {
        title: "1. Bases de Git",
        items: [
          { label: "Installation et configuration (git config)", level: "core", resource: { label: "Git - Guide de démarrage", url: "https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Les-bases-de-Git" } },
          { label: "init, add, commit, status, log", level: "core" },
          { label: "Fichier .gitignore", level: "core" }
        ]
      },
      {
        title: "2. Branches et fusion",
        items: [
          { label: "Créer, changer, fusionner une branche (merge)", level: "core" },
          { label: "Gérer les conflits", level: "core" },
          { label: "Rebase", level: "option" }
        ]
      },
      {
        title: "3. Travailler avec GitHub",
        items: [
          { label: "Créer un dépôt, remote, push, pull, clone", level: "core", resource: { label: "GitHub Docs - Démarrer", url: "https://docs.github.com/fr/get-started" } },
          { label: "Pull requests et revue de code", level: "core" },
          { label: "Issues, projects, GitHub Actions", level: "option", resource: { label: "Documentation GitHub Actions", url: "https://docs.github.com/fr/actions" } }
        ]
      },
      {
        title: "4. Bonnes pratiques",
        items: [
          { label: "Convention de nommage des commits", level: "core" },
          { label: "GitFlow ou trunk-based development", level: "option" }
        ]
      }
    ]
  },

  "linux": {
    type: "skill",
    title: "Linux & Ligne de commande",
    subtitle: "Administration système et manipulation en ligne de commande",
    icon: "🐧",
    sections: [
      {
        title: "1. Bases",
        items: [
          { label: "Système de fichiers, navigation (cd, ls, pwd)", level: "core", resource: { label: "Documentation Ubuntu - Bases du terminal", url: "https://ubuntu.com/tutorials/command-line-for-beginners" } },
          { label: "Manipulation de fichiers (cp, mv, rm, mkdir)", level: "core" },
          { label: "Permissions (chmod, chown)", level: "core" }
        ]
      },
      {
        title: "2. Processus et services",
        items: [
          { label: "Gestion des processus (ps, top, kill)", level: "core" },
          { label: "Services systemd", level: "core" }
        ]
      },
      {
        title: "3. Scripting",
        items: [
          { label: "Scripts bash, variables, boucles, conditions", level: "core" },
          { label: "Cron pour les tâches planifiées", level: "option" }
        ]
      },
      {
        title: "4. Réseau et paquets",
        items: [
          { label: "Gestion de paquets (apt, yum)", level: "core" },
          { label: "Commandes réseau de base (ping, curl, ssh)", level: "core" }
        ]
      }
    ]
  },

  "docker": {
    type: "skill",
    title: "Docker & Conteneurisation",
    subtitle: "Empaqueter et exécuter des applications de façon reproductible",
    icon: "🐳",
    sections: [
      {
        title: "1. Concepts",
        items: [
          { label: "Différence conteneur / machine virtuelle", level: "core", resource: { label: "Docker - Vue d'ensemble", url: "https://docs.docker.com/get-started/docker-overview/" } },
          { label: "Images et conteneurs", level: "core" }
        ]
      },
      {
        title: "2. Utilisation",
        items: [
          { label: "Dockerfile : construire une image", level: "core", resource: { label: "Docker - Référence Dockerfile", url: "https://docs.docker.com/reference/dockerfile/" } },
          { label: "Volumes et persistance des données", level: "core" },
          { label: "Réseaux Docker", level: "core" }
        ]
      },
      {
        title: "3. Multi-conteneurs",
        items: [
          { label: "Docker Compose", level: "core", resource: { label: "Docker Compose - Documentation", url: "https://docs.docker.com/compose/" } }
        ]
      },
      {
        title: "4. Pour aller plus loin",
        items: [
          { label: "Optimisation d'images (multi-stage build)", level: "option" },
          { label: "Orchestration avec Kubernetes", level: "option", resource: { label: "Documentation Kubernetes", url: "https://kubernetes.io/fr/docs/home/" } }
        ]
      }
    ]
  },

  "sql": {
    type: "skill",
    title: "SQL & Bases de données relationnelles",
    subtitle: "Modéliser, interroger et optimiser des données structurées",
    icon: "🗄️",
    sections: [
      {
        title: "1. Bases",
        items: [
          { label: "SELECT, WHERE, ORDER BY, LIMIT", level: "core", resource: { label: "PostgreSQL - Tutoriel", url: "https://www.postgresql.org/docs/current/tutorial.html" } },
          { label: "Types de données et contraintes", level: "core" }
        ]
      },
      {
        title: "2. Modélisation",
        items: [
          { label: "Clés primaires, clés étrangères", level: "core" },
          { label: "Normalisation (1NF, 2NF, 3NF)", level: "core" }
        ]
      },
      {
        title: "3. Requêtes avancées",
        items: [
          { label: "Jointures (INNER, LEFT, RIGHT)", level: "core" },
          { label: "Agrégations (GROUP BY, HAVING)", level: "core" },
          { label: "Sous-requêtes et CTE", level: "option" }
        ]
      },
      {
        title: "4. Performance",
        items: [
          { label: "Index et plans d'exécution", level: "core" },
          { label: "Transactions et niveaux d'isolation", level: "option" }
        ]
      }
    ]
  },

  "javascript": {
    type: "skill",
    title: "JavaScript",
    subtitle: "Le langage du web, côté client comme côté serveur",
    icon: "📜",
    sections: [
      {
        title: "1. Fondamentaux",
        items: [
          { label: "Variables, types, opérateurs", level: "core", resource: { label: "MDN - Réapprendre JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide" } },
          { label: "Fonctions et portée (scope)", level: "core" },
          { label: "Tableaux et objets", level: "core" }
        ]
      },
      {
        title: "2. ES6+",
        items: [
          { label: "Arrow functions, template literals", level: "core" },
          { label: "Destructuring, spread/rest", level: "core" },
          { label: "Modules import/export", level: "core" }
        ]
      },
      {
        title: "3. Asynchrone",
        items: [
          { label: "Callbacks et Promises", level: "core", resource: { label: "MDN - Programmation asynchrone", url: "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous" } },
          { label: "async/await", level: "core" },
          { label: "fetch API et gestion des erreurs réseau", level: "core" }
        ]
      },
      {
        title: "4. Environnements",
        items: [
          { label: "JavaScript dans le navigateur (DOM, événements)", level: "core" },
          { label: "Node.js côté serveur", level: "core", resource: { label: "Documentation Node.js", url: "https://nodejs.org/fr/docs" } }
        ]
      }
    ]
  },

  "python": {
    type: "skill",
    title: "Python",
    subtitle: "Un langage polyvalent : backend, data, automatisation",
    icon: "🐍",
    sections: [
      {
        title: "1. Fondamentaux",
        items: [
          { label: "Syntaxe, types, structures de données", level: "core", resource: { label: "Documentation Python", url: "https://docs.python.org/fr/3/tutorial/" } },
          { label: "Fonctions et modules", level: "core" }
        ]
      },
      {
        title: "2. Programmation orientée objet",
        items: [
          { label: "Classes, héritage, encapsulation", level: "core" }
        ]
      },
      {
        title: "3. Écosystème",
        items: [
          { label: "Gestion des paquets (pip, venv)", level: "core" },
          { label: "Tests avec pytest", level: "option" }
        ]
      },
      {
        title: "4. Spécialisations",
        items: [
          { label: "Web : Django ou FastAPI", level: "option", resource: { label: "Documentation FastAPI", url: "https://fastapi.tiangolo.com/" } },
          { label: "Data : Pandas, NumPy", level: "option", resource: { label: "Documentation Pandas", url: "https://pandas.pydata.org/docs/" } },
          { label: "Automatisation de scripts", level: "option" }
        ]
      }
    ]
  },

  "reseaux": {
    type: "skill",
    title: "Réseaux TCP/IP",
    subtitle: "Les fondations de toute infrastructure et de la cybersécurité",
    icon: "🌐",
    sections: [
      {
        title: "1. Modèles de référence",
        items: [
          { label: "Modèle OSI (les 7 couches)", level: "core" },
          { label: "Modèle TCP/IP", level: "core" }
        ]
      },
      {
        title: "2. Adressage",
        items: [
          { label: "Adressage IPv4, sous-réseaux (subnetting)", level: "core" },
          { label: "IPv6, bases", level: "option" }
        ]
      },
      {
        title: "3. Équipements et protocoles",
        items: [
          { label: "Switching, VLAN", level: "core" },
          { label: "Routage statique et dynamique", level: "core" },
          { label: "DNS, DHCP, NAT", level: "core" }
        ]
      },
      {
        title: "4. Sécurité réseau de base",
        items: [
          { label: "Pare-feu et listes de contrôle d'accès (ACL)", level: "core" },
          { label: "VPN", level: "option" }
        ]
      }
    ]
  },

  "cloud": {
    type: "skill",
    title: "Cloud (AWS / Azure / GCP)",
    subtitle: "Les fondamentaux communs aux principaux fournisseurs cloud",
    icon: "☁️",
    sections: [
      {
        title: "1. Concepts",
        items: [
          { label: "IaaS, PaaS, SaaS", level: "core" },
          { label: "Régions et zones de disponibilité", level: "core" }
        ]
      },
      {
        title: "2. Services de base",
        items: [
          { label: "Calcul : machines virtuelles (EC2, VM, Compute Engine)", level: "core", resource: { label: "AWS - Documentation EC2", url: "https://docs.aws.amazon.com/ec2/" } },
          { label: "Stockage objet (S3, Blob Storage, Cloud Storage)", level: "core" },
          { label: "Bases de données managées", level: "core" }
        ]
      },
      {
        title: "3. Réseau et sécurité cloud",
        items: [
          { label: "IAM : gestion des accès et permissions", level: "core" },
          { label: "VPC et groupes de sécurité", level: "core" }
        ]
      },
      {
        title: "4. Pour aller plus loin",
        items: [
          { label: "Facturation et optimisation des coûts", level: "option" },
          { label: "Certification fondamentale (AWS Cloud Practitioner, etc.)", level: "option" }
        ]
      }
    ]
  }
};

// Fusion pour la recherche par id, quelle que soit la catégorie
const ALL_ROADMAPS = Object.assign({}, ROLES, SKILLS);
