#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# Part 9 questions (100 total)
# 1-25: Technologies Web & Architecture Client/Serveur
# 26-50: Cybersécurité & Cryptographie
# 51-75: Sécurité des Applications Web (OWASP Top 10)
# 76-100: Systèmes Distribués & Architectures de Données

p9_questions = [
    # 1-25 Technologies Web
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Quel protocole de la couche application constitue la base de la communication de données pour le World Wide Web ?",
        "choices": ["HTTP (Hypertext Transfer Protocol)", "FTP (File Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)", "SNMP (Simple Network Management Protocol)"],
        "correctAnswer": 0,
        "explanation": "HTTP est le protocole de couche application standard utilisé pour transmettre des documents hypermédias (comme le HTML) entre clients (navigateurs) et serveurs Web.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Que signifie le fait que le protocole HTTP est qualifié de protocole 'sans état' (stateless) ?",
        "choices": [
            "Le serveur ne conserve aucune information sur les requêtes précédentes d'un même client entre deux cycles requête/réponse",
            "Le protocole ne supporte aucun chiffrement",
            "Les paquets ne contiennent pas d'adresses IP",
            "Le serveur redémarre après chaque requête traitée"
        ],
        "correctAnswer": 0,
        "explanation": "Le protocole HTTP est sans état car chaque transaction requête-réponse est traitée de manière totalement indépendante sans que le serveur ne retienne l'état du client.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quelle méthode HTTP est définie comme étant à la fois sûre (safe) et idempotente selon les spécifications RFC 7231 ?",
        "choices": ["GET", "POST", "PATCH", "CONNECT"],
        "correctAnswer": 0,
        "explanation": "La méthode GET est sûre (elle ne modifie pas l'état de la ressource sur le serveur) et idempotente (l'exécuter N fois produit le même résultat sur le serveur qu'une seule fois).",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quelle est la distinction fondamentale entre les méthodes HTTP PUT et PATCH pour la modification de ressources ?",
        "choices": [
            "PUT remplace intégralement la ressource ciblée par la charge utile fournie, tandis que PATCH applique une modification partielle",
            "PUT est non-idempotent alors que PATCH est idempotent",
            "PUT ne s'utilise que pour créer des fichiers et PATCH pour les supprimer",
            "Il n'y a aucune différence sémantique entre les deux méthodes"
        ],
        "correctAnswer": 0,
        "explanation": "PUT remplace l'intégralité de la ressource représentée par l'URI (idempotent), tandis que PATCH ne transmet qu'un ensemble d'instructions de modification partielle de la ressource.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Quel code de statut HTTP indique que la ressource demandée a été créée avec succès à la suite d'une requête POST ?",
        "choices": ["201 Created", "200 OK", "204 No Content", "301 Moved Permanently"],
        "correctAnswer": 0,
        "explanation": "Le code 201 Created signale que la requête a abouti et qu'une nouvelle ressource a été créée sur le serveur, généralement accompagnée d'un en-tête Location.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Que signifie le code de statut HTTP 204 No Content ?",
        "choices": [
            "Le serveur a traité la requête avec succès mais ne renvoie aucun contenu dans le corps de la réponse",
            "La ressource n'a pas été trouvée sur le serveur",
            "Le client n'a pas envoyé de corps de requête",
            "Une erreur interne s'est produite lors de l'exécution"
        ],
        "correctAnswer": 0,
        "explanation": "204 No Content indique que le serveur a bien exécuté l'action (ex: suppression DELETE réussie) sans avoir besoin de renvoyer un corps de message.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Quelle est la différence fondamentale entre les redirections HTTP 301 et 302 ?",
        "choices": [
            "301 indique un déplacement permanent (mise en cache recommandée par les navigateurs/moteurs), tandis que 302 indique un déplacement temporaire",
            "301 est une erreur client et 302 une erreur serveur",
            "301 force l'utilisation de HTTPS et 302 reste en HTTP",
            "301 est réservé aux images et 302 aux pages HTML"
        ],
        "correctAnswer": 0,
        "explanation": "301 Moved Permanently informe que l'URI a changé de façon définitive, alors que 302 Found signale une redirection provisoire vers une autre URI.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quelle est la différence sémantique stricte entre les codes d'erreur HTTP 401 Unauthorized et 403 Forbidden ?",
        "choices": [
            "401 signifie que l'authentification est requise ou a échoué, tandis que 403 signifie que le client est authentifié mais ne possède pas les permissions suffisantes",
            "401 est temporaire et 403 est permanent",
            "401 provient du pare-feu et 403 du serveur d'application",
            "401 concerne l'adresse IP et 403 le mot de passe"
        ],
        "correctAnswer": 0,
        "explanation": "401 Unauthorized correspond à un défaut d'authentification (manque de jeton/identifiants), tandis que 403 Forbidden correspond à un refus d'autorisation malgré une identité connue.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Que signifie le code d'erreur HTTP 502 Bad Gateway ?",
        "choices": [
            "Un serveur agissant comme passerelle ou proxy a reçu une réponse invalide du serveur en amont (upstream server)",
            "Le serveur Web est surchargé et n'a pas répondu dans le délai imparti",
            "L'adresse de la passerelle réseau par défaut du client est incorrecte",
            "Le certificat SSL du client a expiré"
        ],
        "correctAnswer": 0,
        "explanation": "502 Bad Gateway se produit lorsqu'un serveur intermédiaire (comme Nginx ou un load balancer) reçoit une réponse corrompue ou nulle du serveur d'application d'arrière-plan.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quelle amélioration majeure a été introduite dans HTTP/2 par rapport à HTTP/1.1 pour réduire la latence de chargement des pages ?",
        "choices": [
            "Le multiplexage de flux binaires sur une unique connexion TCP persistante, éliminant le blocage en tête de ligne (Head-of-Line Blocking) applicatif",
            "Le remplacement complet de TCP par UDP",
            "La suppression de tous les en-têtes HTTP",
            "Le chiffrement automatique sans certificat TLS"
        ],
        "correctAnswer": 0,
        "explanation": "HTTP/2 introduit des trames binaires et le multiplexage de multiples requêtes/réponses simultanées sur un seul socket TCP, évitant d'ouvrir de multiples connexions parallèles.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Sur quel protocole de transport de la couche 4 repose HTTP/3 pour résoudre le blocage en tête de ligne TCP ?",
        "choices": ["QUIC (fondé sur UDP)", "SCTP", "DCCP", "IPsec"],
        "correctAnswer": 0,
        "explanation": "HTTP/3 utilise QUIC qui s'exécute au-dessus d'UDP. Ainsi, la perte d'un paquet sur un flux n'interrompt pas les autres flux indépendants, contrairement à TCP.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "À quoi sert le mécanisme CORS (Cross-Origin Resource Sharing) dans les navigateurs Web ?",
        "choices": [
            "À permettre à des serveurs d'autoriser explicitement des requêtes XMLHttpRequest ou Fetch provenant d'une origine (domaine/port/protocole) différente de la leur",
            "À synchroniser automatiquement les caches de deux serveurs distants",
            "À bloquer les scripts JavaScript exécutés en local",
            "À accélérer le téléchargement des polices de caractères"
        ],
        "correctAnswer": 0,
        "explanation": "Par défaut, la Same-Origin Policy (SOP) interdit au JavaScript d'accéder aux réponses de requêtes vers d'autres origines. CORS permet au serveur cible de définir qui a le droit d'accéder à ses ressources via des en-têtes comme Access-Control-Allow-Origin.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Dans le mécanisme CORS, qu'est-ce qu'une requête de 'pré-vol' (preflight request) et quelle méthode HTTP utilise-t-elle ?",
        "choices": [
            "Une requête préliminaire utilisant la méthode OPTIONS pour vérifier auprès du serveur s'il accepte l'origine, la méthode et les en-têtes personnalisés",
            "Une requête GET envoyée en arrière-plan pour mesurer le temps de réponse",
            "Une requête HEAD pour récupérer uniquement la taille du corps de réponse",
            "Une requête TRACE pour tester le chemin réseau"
        ],
        "correctAnswer": 0,
        "explanation": "Pour les requêtes non simples (contenant par exemple des en-têtes comme Authorization ou des méthodes comme PUT/DELETE), le navigateur envoie automatiquement une requête OPTIONS pré-vol.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Quel drapeau (flag) de cookie HTTP empêche formellement son accès et sa manipulation par le code JavaScript côté client (ex: document.cookie) ?",
        "choices": ["HttpOnly", "Secure", "SameSite", "Max-Age"],
        "correctAnswer": 0,
        "explanation": "Le flag HttpOnly interdit l'accès au cookie via l'API DOM (document.cookie), protégeant ainsi le jeton de session contre le vol en cas d'attaque XSS.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quel est le comportement du drapeau 'SameSite=Strict' sur un cookie HTTP ?",
        "choices": [
            "Le cookie n'est jamais envoyé lors de requêtes inter-sites (cross-site), même lorsqu'un utilisateur clique sur un lien externe entrant vers le site",
            "Le cookie n'est transmis que sur les connexions HTTPS chiffrées",
            "Le cookie ne peut être lu que sur le serveur qui l'a émis pendant 1 heure",
            "Le cookie est chiffré dans la base de données du navigateur"
        ],
        "correctAnswer": 0,
        "explanation": "SameSite=Strict garantit que le cookie ne quittera jamais le contexte de première partie (first-party), offrant une barrière totale contre les attaques CSRF.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Quelles sont les trois parties distinctes constituant la structure d'un jeton JWT (JSON Web Token), séparées par des points ?",
        "choices": ["En-tête (Header), Charge utile (Payload), Signature", "Identifiant, Mot de passe, Timestamp", "Algorithme, Données, Clé privée", "Issuer, Audience, Expiration"],
        "correctAnswer": 0,
        "explanation": "Un JWT est composé de trois sections encodées en Base64Url : le Header (métadonnées/algorithme), le Payload (claims/données utilisateur), et la Signature cryptographique.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Pourquoi les données contenues dans le Payload d'un JWT standard ne doivent-elles jamais contenir de secrets sensibles (comme un mot de passe en clair) ?",
        "choices": [
            "Parce que le Payload n'est que simplement encodé en Base64Url et n'est pas chiffré, le rendant lisible par quiconque intercepte le jeton",
            "Parce que le format JSON ne supporte pas les chaînes de plus de 16 caractères",
            "Parce que la signature modifie aléatoirement les octets du Payload",
            "Parce que les navigateurs suppriment automatiquement les champs secrets"
        ],
        "correctAnswer": 0,
        "explanation": "Le JWT standard garantit l'intégrité et l'authenticité grâce à sa signature, mais ne garantit pas la confidentialité : son contenu est facilement décodable par n'importe quel observateur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quelle technologie Web permet d'établir une communication bidirectionnelle permanente en duplex intégral (full-duplex) sur une unique connexion TCP ?",
        "choices": ["WebSocket", "Server-Sent Events (SSE)", "Long Polling HTTP", "AJAX XMLHttpRequest"],
        "correctAnswer": 0,
        "explanation": "WebSocket démarre par une négociation de mise à niveau HTTP (Upgrade handshake) puis maintient un canal bidirectionnel persistant à très faible surcharge.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quelle est la principale caractéristique de la technologie Server-Sent Events (SSE) par rapport aux WebSockets ?",
        "choices": [
            "SSE est un flux unidirectionnel du serveur vers le client reposant sur le protocole HTTP standard",
            "SSE nécessite l'installation d'un binaire natif côté client",
            "SSE ne peut transmettre que des fichiers binaires audio/vidéo",
            "SSE utilise le protocole UDP au lieu de TCP"
        ],
        "correctAnswer": 0,
        "explanation": "SSE (EventSource) utilise une connexion HTTP standard persistante (Content-Type: text/event-stream) pour pousser des événements du serveur au navigateur de manière unidirectionnelle.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Quelle est la différence fondamentale entre les stockages Web côté client 'localStorage' et 'sessionStorage' ?",
        "choices": [
            "localStorage persiste indéfiniment même après la fermeture du navigateur, alors que sessionStorage est détruit dès la fermeture de l'onglet ou de la session de navigation",
            "localStorage est chiffré sur le disque alors que sessionStorage est en clair",
            "sessionStorage permet de stocker 50 Go tandis que localStorage est limité à 5 Ko",
            "localStorage est envoyé au serveur à chaque requête HTTP"
        ],
        "correctAnswer": 0,
        "explanation": "localStorage persiste sans limite de temps jusqu'à suppression manuelle/programmatique, tandis que sessionStorage est strictement restreint à la durée de vie de l'onglet courant.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Dans l'architecture d'une API RESTful, quelle contrainte préconise que chaque réponse inclue des liens hypermédias guidant le client vers les actions possibles suivantes ?",
        "choices": [
            "HATEOAS (Hypermedia As The Engine Of Application State)",
            "Statelessness (Absence d'état)",
            "Client-Server Separation",
            "Cacheability (Mise en cache)"
        ],
        "correctAnswer": 0,
        "explanation": "HATEOAS est le niveau le plus élevé de maturité REST (modèle de Richardson niveau 3) où le serveur guide dynamiquement la navigation du client via des liens hypermédias.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quel problème récurrent des API REST GraphQL résout-il en permettant au client de spécifier exactement la forme des données attendues ?",
        "choices": [
            "La sur-récupération (over-fetching) et la sous-récupération (under-fetching) de données",
            "La latence de routage DNS",
            "L'impossibilité de mettre en cache les requêtes",
            "L'obligation d'utiliser des bases de données SQL"
        ],
        "correctAnswer": 0,
        "explanation": "GraphQL permet de formuler une requête déclarant précisément les champs requis sur un seul point de terminaison (/graphql), évitant le sur-téléchargement ou les requêtes multiples en cascade.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Dans le cycle de rendu d'un navigateur Web, quelle opération critique se produit lorsqu'une modification géométrique force le calcul de la position et de la taille de chaque élément de la page ?",
        "choices": ["Le Reflow (ou Layout)", "Le Repaint", "Le Garbage Collection", "Le CSS Parsing"],
        "correctAnswer": 0,
        "explanation": "Le Reflow (ou calcul de disposition/Layout) recalcule l'arborescence géométrique des boîtes d'éléments du Render Tree, ce qui est particulièrement coûteux en ressources CPU.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Facile",
        "question": "Qu'est-ce qu'une Single Page Application (SPA) par opposition à une Multi-Page Application (MPA) classique ?",
        "choices": [
            "Une application chargeant une seule page HTML initiale et modifiant dynamiquement le DOM via JavaScript lors de la navigation sans recharger la page entière",
            "Une application ne contenant qu'une seule image sur l'écran",
            "Un site Web incapable de communiquer avec une base de données",
            "Une application réservée exclusivement aux téléphones mobiles"
        ],
        "correctAnswer": 0,
        "explanation": "Dans une SPA (ex: React, Vue, Angular), le routage est géré côté client : les interactions téléchargent des fragments de données (JSON) et mettent à jour l'interface sans rechargement complet.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Web",
        "difficulty": "Moyen",
        "question": "Quel est le rôle d'un Content Delivery Network (CDN) dans l'architecture Web ?",
        "choices": [
            "Distribuer et mettre en cache des contenus statiques (images, CSS, JS) sur un réseau mondial de serveurs relais (Edge servers) au plus près géographique des utilisateurs",
            "Compiler le code source du serveur en langage machine",
            "Stocker les tables de base de données relationnelles principales",
            "Attribuer les noms de domaine de premier niveau (TLD)"
        ],
        "correctAnswer": 0,
        "explanation": "Un CDN réduit la latence réseau (RTT) et la charge du serveur d'origine en servant les ressources depuis des serveurs de cache situés à la périphérie du réseau mondial.",
        "source": "Ancien examen"
    },

    # 26-50 Cybersécurité & Cryptographie
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Quels sont les trois objectifs fondamentaux de sécurité de l'information composant la triade CIA ?",
        "choices": [
            "Confidentialité, Intégrité et Disponibilité (Confidentiality, Integrity, Availability)",
            "Contrôle, Identification et Authentification",
            "Chiffrement, Inspection et Audit",
            "Conformité, Isolation et Autorisation"
        ],
        "correctAnswer": 0,
        "explanation": "La triade CIA (Confidentialité pour le secret des données, Intégrité pour la non-altération, Disponibilité pour l'accessibilité permanente) est le socle de la cybersécurité.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Quel principe de sécurité garantit qu'un auteur ne peut pas nier avoir envoyé un message ou exécuté une action donnée ?",
        "choices": ["La non-répudiation", "La haute disponibilité", "L'obfuscation", "L'idempotence"],
        "correctAnswer": 0,
        "explanation": "La non-répudiation (assurée généralement par des signatures numériques et des journaux d'audit certifiés) empêche l'émetteur de contester la paternité d'un acte ou document.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Quels sont les trois facteurs d'authentification classiques utilisés dans l'authentification multi-facteurs (MFA/2FA) ?",
        "choices": [
            "Ce que l'on sait (mot de passe), ce que l'on possède (smartphone/clé U2F), ce que l'on est (biométrie)",
            "L'adresse IP, le port réseau, le système d'exploitation",
            "L'heure de connexion, la vitesse de frappe, la résolution d'écran",
            "Le nom d'utilisateur, l'adresse e-mail, la question secrète"
        ],
        "correctAnswer": 0,
        "explanation": "Une authentification est dite à facteurs multiples (MFA) si elle combine au moins deux facteurs de natures distinctes : connaissance, possession ou inhérence (biométrie).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Quelle est la caractéristique essentielle d'une fonction de hachage cryptographique dite 'à sens unique' (résistance aux préimages) ?",
        "choices": [
            "Étant donné une empreinte hachée h, il est calculatoirement impossible de retrouver le message originel m tel que H(m) = h",
            "Il est impossible de hacher des nombres négatifs",
            "La fonction génère une empreinte dont la taille dépend de la taille de l'entrée",
            "Le hachage ne fonctionne qu'avec des clés de 2048 bits"
        ],
        "correctAnswer": 0,
        "explanation": "La résistance aux préimages garantit l'irréversibilité de la fonction : on ne peut pas remonter au texte en clair à partir de la valeur de hachage.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que la 'résistance aux collisions' pour une fonction de hachage cryptographique ?",
        "choices": [
            "Il est calculatoirement infaisable de trouver deux messages distincts quelconques m1 ≠ m2 produisant la même empreinte H(m1) = H(m2)",
            "Deux ordinateurs ne peuvent pas calculer un hachage en même temps sur le même réseau",
            "La fonction ne produit jamais d'erreurs mémoire",
            "L'algorithme de hachage ne peut pas être parallélisé"
        ],
        "correctAnswer": 0,
        "explanation": "Une collision se produit lorsque deux entrées différentes ont la même empreinte. Une fonction est résistante aux collisions s'il est impossible d'en trouver une paire en pratique.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Pourquoi les algorithmes de hachage MD5 et SHA-1 sont-ils formellement interdits dans les applications cryptographiques modernes ?",
        "choices": [
            "Des attaques pratiques permettant de générer des collisions ont été démontrées avec succès contre eux",
            "Ils consomment trop de mémoire vive",
            "Ils ne sont pas compatibles avec le format UTF-8",
            "Leur code source a été supprimé d'Internet"
        ],
        "correctAnswer": 0,
        "explanation": "Des attaques pratiques ont cassé la résistance aux collisions de MD5 (dès 2004) et de SHA-1 (attaque SHAttered en 2017), imposant le recours à SHA-256 ou SHA-3.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Quel est le rôle fondamental d'un 'sel' (salt) cryptographique aléatoire lors du stockage des mots de passe hachés ?",
        "choices": [
            "Garantir que deux mots de passe identiques produisent des hachages distincts et neutraliser les attaques par tables arc-en-ciel (rainbow tables)",
            "Chiffrer le disque dur du serveur de base de données",
            "Réduire la longueur du mot de passe saisi",
            "Envoyer une notification par SMS à l'utilisateur"
        ],
        "correctAnswer": 0,
        "explanation": "Le sel est une chaîne aléatoire unique concaténée au mot de passe avant hachage. Il rend inutilisables les tables de hachages précalculés (rainbow tables).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Pourquoi privilégie-t-on des algorithmes lents et coûteux comme bcrypt, Argon2 ou PBKDF2 pour hacher les mots de passe plutôt que SHA-256 ?",
        "choices": [
            "Leur coût de calcul configurable en temps et en mémoire ralentit drastiquement les attaques par force brute et par dictionnaires sur GPU/ASIC",
            "SHA-256 ne peut pas hacher plus de 8 caractères",
            "bcrypt utilise des clés asymétriques RSA",
            "Argon2 génère des mots de passe automatiquement"
        ],
        "correctAnswer": 0,
        "explanation": "SHA-256 est conçu pour être rapide (des milliards d'essais/s sur GPU). Les fonctions de dérivation de clés (KDF) comme Argon2 imposent un facteur de travail rendant la force brute prohibitive.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Pourquoi le mode de chiffrement par blocs ECB (Electronic Codebook) avec AES est-il considéré comme non sécurisé pour les messages structurés ?",
        "choices": [
            "Des blocs de texte en clair identiques sont chiffrés en blocs de texte chiffré identiques, préservant et exposant les motifs visuels des données",
            "Il ne supporte pas les clés supérieures à 64 bits",
            "Il dévoile la clé secrète dans le premier bloc",
            "Il nécessite obligatoirement une connexion Internet"
        ],
        "correctAnswer": 0,
        "explanation": "En mode ECB, chaque bloc est chiffré indépendamment sans vecteur d'initialisation. Si deux blocs sont identiques, leurs chiffrés sont identiques, révélant la structure interne (l'exemple célèbre du pingouin Tux).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Quel mode d'opération moderne pour le chiffrement par bloc fournit à la fois la confidentialité et l'intégrité authentifiée des données (AEAD) ?",
        "choices": [
            "GCM (Galois/Counter Mode)",
            "ECB (Electronic Codebook)",
            "CBC standard sans HMAC",
            "OFB (Output Feedback)"
        ],
        "correctAnswer": 0,
        "explanation": "AES-GCM combine le chiffrement en mode compteur (CTR) avec une multiplication de Galois pour calculer un tag d'authentification (AEAD), empêchant toute altération non détectée.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Sur quelle difficulté mathématique repose la sécurité de l'algorithme de chiffrement asymétrique RSA ?",
        "choices": [
            "La difficulté calculatoire de factoriser le produit de deux très grands nombres premiers",
            "Le calcul du logarithme discret sur courbes elliptiques",
            "La résolution du problème du sac à dos NP-complet",
            "L'inversion matricielle en dimension infinie"
        ],
        "correctAnswer": 0,
        "explanation": "Le chiffrement RSA repose sur la facilité de multiplier deux grands nombres premiers p et q pour obtenir n = p*q, et l'extrême difficulté de décomposer n en facteurs premiers.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Sur quel problème mathématique repose le protocole d'échange de clés Diffie-Hellman classique ?",
        "choices": [
            "Le problème du logarithme discret dans un corps fini",
            "La factorisation d'entiers composés",
            "Le calcul du plus grand commun diviseur (PGCD)",
            "Le théorème des quatre couleurs"
        ],
        "correctAnswer": 0,
        "explanation": "Diffie-Hellman exploite la difficulté du logarithme discret : étant donnés g, p et g^a mod p, il est calculatoirement infaisable de retrouver l'exposant secret a.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Dans le mécanisme de signature numérique, quelle clé le signataire utilise-t-il pour signer et quelle clé le destinataire utilise-t-il pour vérifier ?",
        "choices": [
            "Le signataire signe avec sa clé privée ; le destinataire vérifie avec la clé publique du signataire",
            "Le signataire signe avec la clé publique du destinataire ; le destinataire vérifie avec sa propre clé privée",
            "Le signataire signe avec une clé symétrique partagée ; le destinataire vérifie avec son mot de passe",
            "Les deux utilisent exclusivement la même clé publique"
        ],
        "correctAnswer": 0,
        "explanation": "Pour signer, on chiffre l'empreinte avec sa propre clé privée (que l'on est le seul à détenir) ; n'importe qui peut vérifier la validité de la signature avec la clé publique correspondante.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Quel est le rôle d'une Autorité de Certification (CA) dans une Infrastructure à Clés Publiques (PKI) ?",
        "choices": [
            "Émettre et signer numériquement des certificats numériques (X.509) liant une identité (nom/domaine) à une clé publique vérifiée",
            "Héberger les bases de données chiffrées des entreprises",
            "Surveiller le trafic réseau pour détecter les virus",
            "Gérer l'attribution des adresses IPv4 publiques"
        ],
        "correctAnswer": 0,
        "explanation": "La CA est un tiers de confiance qui atteste, en le signant, qu'une clé publique donnée appartient bien au propriétaire du nom de domaine ou de l'entité mentionnée dans le certificat.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "À quoi sert le protocole OCSP (Online Certificate Status Protocol) par rapport aux listes de révocation CRL traditionnelles ?",
        "choices": [
            "À vérifier en temps réel auprès de l'autorité émettrice si un certificat numérique X.509 spécifique a été révoqué sans télécharger toute la liste CRL",
            "À renouveler automatiquement les mots de passe des utilisateurs",
            "À chiffrer les sessions de messagerie électronique",
            "À compresser les paquets de la négociation TLS"
        ],
        "correctAnswer": 0,
        "explanation": "OCSP permet au navigateur d'interroger la CA sur le statut d'un certificat précis en temps réel, évitant le téléchargement régulier de listes de révocation volumineuses (CRL).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Difficile",
        "question": "Qu'est-ce que l'agrafage OCSP (OCSP Stapling) dans une connexion TLS ?",
        "choices": [
            "Le serveur Web interroge lui-même périodiquement le répondeur OCSP et transmet la réponse signée et horodatée au client directement lors du TLS handshake",
            "L'obligation pour le client de présenter son propre certificat personnel",
            "L'attachement d'une clé USB physique au serveur Web",
            "La fusion de deux certificats SSL distincts en un seul"
        ],
        "correctAnswer": 0,
        "explanation": "L'OCSP Stapling décharge les clients de la requête vers la CA, améliore la vitesse de connexion et préserve la vie privée de l'utilisateur (la CA ne sait pas quel site l'utilisateur visite).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Quelle propriété cryptographique essentielle la confidentialité persistante (Perfect Forward Secrecy - PFS) garantit-elle dans les échanges TLS ?",
        "choices": [
            "La compromission ultérieure de la clé privée à long terme du serveur ne permettra pas de déchiffrer les sessions de communication passées déjà enregistrées",
            "Les mots de passe des utilisateurs ne peuvent jamais être réinitialisés",
            "Le certificat du serveur est valable à vie sans renouvellement",
            "Les paquets réseau ne peuvent pas être interceptés par un proxy"
        ],
        "correctAnswer": 0,
        "explanation": "Avec PFS (utilisant des clés de session éphémères comme DHE ou ECDHE), chaque session génère une clé éphémère détruite après usage, protégeant l'historique enregistré contre tout déchiffrement futur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Qu'est-ce qu'un code d'authentification de message fondé sur le hachage (HMAC) ?",
        "choices": [
            "Une construction cryptographique combinant une fonction de hachage et une clé secrète partagée pour vérifier l'intégrité et l'authenticité d'un message",
            "Un programme qui génère des mots de passe aléatoires",
            "Un algorithme de compression sans perte",
            "Un protocole de routage pour réseaux sécurisés"
        ],
        "correctAnswer": 0,
        "explanation": "HMAC (RFC 2104) applique une fonction de hachage de manière itérative avec une clé secrète pour garantir que le message n'a été ni falsifié ni émis par un tiers non autorisé.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Difficile",
        "question": "Dans le contexte des attaques par canaux auxiliaires (Side-Channel Attacks), qu'est-ce qu'une attaque temporelle (Timing Attack) ?",
        "choices": [
            "Une attaque exploitant les variations infimes de temps d'exécution d'un algorithme (ex: comparaison de chaînes caractère par caractère) pour déduire des secrets ou clés privées",
            "Une attaque envoyant des millions de paquets à minuit pile",
            "Une attaque modifiant l'horloge système du BIOS",
            "Une interruption du signal GPS des serveurs"
        ],
        "correctAnswer": 0,
        "explanation": "Les comparaisons non constantes s'arrêtent au premier octet erroné. Un attaquant mesurant le temps de réponse peut deviner le secret octet par octet, d'où l'usage de comparaisons en temps constant.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "En contrôle d'accès, quelle est la distinction fondamentale entre les modèles RBAC (Role-Based Access Control) et ABAC (Attribute-Based Access Control) ?",
        "choices": [
            "RBAC accorde des privilèges selon des rôles statiques prédéfinis, tandis qu'ABAC évalue dynamiquement des attributs du sujet, de la ressource, de l'action et du contexte environnemental",
            "RBAC n'utilise aucun mot de passe alors qu'ABAC en exige deux",
            "RBAC est réservé aux systèmes Linux et ABAC à Windows",
            "Il n'y a aucune différence pratique entre les deux modèles"
        ],
        "correctAnswer": 0,
        "explanation": "RBAC assigne des permissions à des rôles (ex: Admin, Éditeur). ABAC offre une granularité beaucoup plus fine en prenant en compte l'heure, la géolocalisation, le type de document, etc.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Facile",
        "question": "Quelle est la taille en bits de l'espace de clés de l'algorithme de chiffrement standardisé AES-256 ?",
        "choices": ["256 bits", "128 bits", "512 bits", "2048 bits"],
        "correctAnswer": 0,
        "explanation": "AES-256 utilise une clé symétrique de 256 bits (offrant 2^256 combinaisons possibles), ce qui est considéré comme résistant à toute tentative d'attaque par force brute actuelle.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'attaque dite 'de l'anniversaire' (Birthday Attack) en cryptanalyse ?",
        "choices": [
            "Une attaque probabiliste exploitant le paradoxe des anniversaires pour trouver une collision de hachage en seulement environ 2^(n/2) opérations au lieu de 2^n",
            "Une attaque ciblant la date de naissance des administrateurs système",
            "Une attaque qui s'active automatiquement le jour de l'an",
            "Une méthode de piratage des calendriers partagés"
        ],
        "correctAnswer": 0,
        "explanation": "Selon le paradoxe des anniversaires, trouver deux entrées produisant la même empreinte sur n bits nécessite environ 2^(n/2) essais, réduisant la sécurité d'une fonction de hachage de moitié.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Dans le protocole TLS 1.3, combien d'allers-retours réseau (RTT) sont nécessaires pour négocier la session avant de commencer à émettre des données chiffrées ?",
        "choices": [
            "1 seul aller-retour (1-RTT), voire 0-RTT pour les sessions reprises",
            "2 allers-retours obligatoires (2-RTT)",
            "3 allers-retours (3-RTT)",
            "4 allers-retours avec vérification DNS"
        ],
        "correctAnswer": 0,
        "explanation": "TLS 1.3 a simplifié le handshake par rapport à TLS 1.2 (qui prenait 2-RTT) en fusionnant la négociation des suites cryptographiques et l'échange de clés en un seul aller-retour (1-RTT).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Difficile",
        "question": "Pourquoi la cryptographie post-quantique fait-elle l'objet d'une standardisation intensive par le NIST ?",
        "choices": [
            "Parce que l'algorithme quantique de Shor exécuté sur un ordinateur quantique à grande échelle casserait efficacement RSA, DSA et la cryptographie sur courbes elliptiques",
            "Parce que les câbles de fibre optique quantique remplacent le cuivre",
            "Parce qu'AES-256 deviendra totalement inefficace",
            "Parce que les navigateurs Web refusent les clés de plus de 4096 bits"
        ],
        "correctAnswer": 0,
        "explanation": "L'algorithme de Shor résout la factorisation des entiers et le logarithme discret en temps polynomial, menaçant la cryptographie asymétrique actuelle (RSA/ECC).",
        "source": "Ancien examen"
    },
    {
        "topic": "Cybersécurité & Cryptographie",
        "difficulty": "Moyen",
        "question": "Quel composant d'une architecture de sécurité est chargé d'isoler une mémoire sécurisée et d'exécuter des calculs cryptographiques sensibles protégés matériellement ?",
        "choices": [
            "Le HSM (Hardware Security Module) ou la puce TPM (Trusted Platform Module)",
            "La carte graphique GPU",
            "Le contrôleur DMA",
            "Le ventilateur de dissipation thermique"
        ],
        "correctAnswer": 0,
        "explanation": "Un HSM ou TPM est un composant matériel inviolable spécialement dédié au stockage sécurisé des clés cryptographiques et à l'exécution d'opérations de chiffrement/signature.",
        "source": "Ancien examen"
    },

    # 51-75 Sécurité des Applications Web (OWASP Top 10)
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Quel est le mécanisme fondamental de la vulnérabilité par Injection SQL (SQLi) ?",
        "choices": [
            "L'insertion de commandes SQL malveillantes dans des champs de saisie utilisateur non filtrés, altérant la logique d'exécution de la requête sur la base de données",
            "Le téléchargement d'un fichier binaire exécutable dans le dossier temporaire",
            "Le blocage du port d'écoute 3306 par un pare-feu",
            "La suppression accidentelle d'une table par l'administrateur"
        ],
        "correctAnswer": 0,
        "explanation": "Une injection SQL survient lorsque des données fournies par l'utilisateur sont directement concaténées dans une chaîne de requête SQL au lieu d'être traitées comme de simples paramètres.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Quelle est la contre-mesure universellement recommandée et la plus efficace pour neutraliser totalement les failles d'injection SQL ?",
        "choices": [
            "L'utilisation exclusive de requêtes préparées avec des paramètres liés (Prepared Statements / Parameterized Queries)",
            "La vérification de la longueur du mot de passe en JavaScript côté client",
            "Le chiffrement des tables de la base de données avec AES-128",
            "Le renommage des tables de la base de données avec des préfixes secrets"
        ],
        "correctAnswer": 0,
        "explanation": "Les requêtes préparées séparent rigoureusement le code SQL de la structure des données : les entrées utilisateur ne peuvent en aucun cas être interprétées comme du code exécutable.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Quel est le principe d'une attaque Cross-Site Scripting (XSS) ?",
        "choices": [
            "Injecter du code script malveillant (typiquement JavaScript) dans une page Web vulnérable, qui s'exécutera dans le navigateur des autres utilisateurs",
            "Envoyer des courriers électroniques indésirables à partir d'un faux serveur SMTP",
            "Voler les mots de passe root d'un serveur Linux par débordement de tampon",
            "Créer des liens symboliques infinis sur le disque dur du serveur"
        ],
        "correctAnswer": 0,
        "explanation": "La faille XSS permet à un pirate d'exécuter des scripts dans le contexte de sécurité de la session du navigateur de la victime (pouvant voler des cookies, défigurer le site, etc.).",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quelle est la différence entre une faille XSS Réfléchie (Reflected) et une faille XSS Stockée (Stored/Persistent) ?",
        "choices": [
            "La XSS Stockée est enregistrée durablement sur le serveur (ex: en base de données ou commentaires) et affecte tous les visiteurs, tandis que la XSS Réfléchie est renvoyée immédiatement dans la réponse via un lien forgé",
            "La XSS Réfléchie ne fonctionne que sur les téléphones mobiles",
            "La XSS Stockée ne nécessite pas de navigateur pour s'exécuter",
            "La XSS Réfléchie altère le code source de l'application sur le serveur"
        ],
        "correctAnswer": 0,
        "explanation": "La XSS stockée est permanente : le script réside en base de données et touche toute personne ouvrant la page. La XSS réfléchie nécessite d'inciter la victime à cliquer sur une URL piégée.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quel en-tête HTTP de sécurité permet à un serveur de restreindre précisément les domaines à partir desquels des scripts, images et styles peuvent être chargés par le navigateur ?",
        "choices": [
            "Content-Security-Policy (CSP)",
            "Strict-Transport-Security (HSTS)",
            "X-Content-Type-Options",
            "Access-Control-Allow-Origin"
        ],
        "correctAnswer": 0,
        "explanation": "CSP est un mécanisme de défense en profondeur puissant permettant aux administrateurs de bloquer les scripts inline non autorisés et de restreindre les sources de contenu exécutable.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Quel est le mécanisme d'une attaque Cross-Site Request Forgery (CSRF) ?",
        "choices": [
            "Exploiter l'authentification existante de la victime dans son navigateur pour lui faire émettre à son insu une requête HTTP non désirée vers une application de confiance",
            "Voler les fichiers sources du serveur Web par FTP",
            "Remplacer le certificat SSL du serveur par un faux certificat",
            "Déchiffrer les clés privées RSA en injectant des valeurs nulles"
        ],
        "correctAnswer": 0,
        "explanation": "En CSRF, le navigateur transmet automatiquement les cookies de session au site cible ; l'application pense donc que l'action (ex: virement bancaire) provient de la volonté de l'utilisateur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quelle est la méthode de défense standard pour protéger les formulaires Web contre les attaques CSRF ?",
        "choices": [
            "L'inclusion d'un jeton anti-CSRF imprévisible, unique et secret associé à la session utilisateur (Synchronizer Token Pattern)",
            "L'utilisation d'une connexion Wi-Fi sécurisée",
            "Le blocage des requêtes contenant le mot 'password'",
            "L'affichage d'un compte à rebours de 30 secondes avant soumission"
        ],
        "correctAnswer": 0,
        "explanation": "Le jeton anti-CSRF est transmis dans le formulaire ou un en-tête. Le site pirate ne pouvant pas lire ce jeton secret (règle SOP), il ne peut pas forger une requête légitime valide.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Qu'est-ce qu'une faille IDOR (Insecure Direct Object Reference) classée dans les problèmes de contrôle d'accès défaillant (Broken Access Control) ?",
        "choices": [
            "Une vulnérabilité où l'application expose une référence directe à un objet interne (ex: /facture?id=1024) sans vérifier si l'utilisateur connecté a le droit d'y accéder",
            "Une erreur de syntaxe dans le fichier de configuration de la base de données",
            "Un dépassement de pile provoqué par une boucle infinie",
            "L'absence d'index sur une clé étrangère SQL"
        ],
        "correctAnswer": 0,
        "explanation": "Une IDOR survient lorsqu'un attaquant peut accéder aux données d'autrui simplement en modifiant un identifiant direct dans l'URL ou le corps de la requête sans contrôle d'autorisation.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quel est l'objectif de l'en-tête HTTP 'Strict-Transport-Security' (HSTS) ?",
        "choices": [
            "Forcer le navigateur à ne communiquer avec le site Web qu'exclusivement via des connexions sécurisées HTTPS, même si l'utilisateur saisit 'http://'",
            "Empêcher les attaques par déni de service distribué (DDoS)",
            "Chiffrer le disque dur du client",
            "Désactiver l'historique de navigation"
        ],
        "correctAnswer": 0,
        "explanation": "HSTS empêche les attaques de dégradation SSL (SSL-Strip) et les attaques MitM en interdisant formellement au navigateur toute connexion non chiffrée en clair vers le domaine.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Qu'est-ce qu'une attaque par falsification de requête côté serveur (Server-Side Request Forgery - SSRF) ?",
        "choices": [
            "Inciter le serveur vulnérable à effectuer une requête HTTP vers une ressource interne (ex: réseau local ou service de métadonnées cloud 169.254.169.254) non accessible depuis l'extérieur",
            "Intercepter les connexions des clients sur un point d'accès Wi-Fi",
            "Écraser la table de routage du système d'exploitation",
            "Envoyer des requêtes en boucle pour épuiser la RAM du client"
        ],
        "correctAnswer": 0,
        "explanation": "SSRF exploite une fonctionnalité du serveur qui charge une URL distante pour amener le serveur à interroger ses propres services internes privés ou des métadonnées sensibles de conteneurs cloud.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Qu'est-ce qu'une attaque par 'bourrage d'identifiants' (Credential Stuffing) ?",
        "choices": [
            "Tester automatiquement des millions de paires identifiant/mot de passe volées lors de fuites de données antérieures sur d'autres sites, en exploitant la réutilisation des mots de passe",
            "Injecter des octets nuls dans les champs de texte",
            "Remplir le disque dur du serveur avec de faux comptes",
            "Déchiffrer les mots de passe avec des lasers"
        ],
        "correctAnswer": 0,
        "explanation": "Comme de nombreux utilisateurs réutilisent le même mot de passe sur plusieurs services, les pirates utilisent des listes publiques de comptes compromis pour tenter de se connecter en masse.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Comment prévient-on efficacement les attaques par force brute sur les formulaires de connexion Web ?",
        "choices": [
            "En appliquant une limitation du débit de requêtes (Rate Limiting), des verrouillages temporaires de comptes, des CAPTCHA et de l'authentification multi-facteurs (MFA)",
            "En masquant le code HTML du formulaire",
            "En réduisant la taille de la police de caractères",
            "En supprimant les cookies après chaque clic"
        ],
        "correctAnswer": 0,
        "explanation": "Le rate limiting (ex: bloquer après 5 tentatives infructueuses) et l'ajout de CAPTCHA ou de délai progressif rendent les attaques par dictionnaire ou force brute impossibles en pratique.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "En quoi consiste une attaque par traversée de répertoires (Path Traversal / Directory Traversal) ?",
        "choices": [
            "Utiliser des séquences telles que '../' dans les paramètres de fichiers pour accéder à des répertoires et fichiers arbitraires du système d'exploitation hors de la racine Web",
            "Supprimer tous les sous-dossiers d'un disque dur",
            "Changer les droits chmod de tous les utilisateurs",
            "Créer des chemins réseau virtuels sans passerelle"
        ],
        "correctAnswer": 0,
        "explanation": "Si une application transmet directement une entrée non vérifiée à une fonction d'ouverture de fichier (ex: fopen), un pirate peut injecter ../../../etc/passwd pour lire des fichiers système.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Difficile",
        "question": "Qu'est-ce qu'une attaque par désérialisation non sécurisée (Insecure Deserialization) ?",
        "choices": [
            "L'injection d'objets sérialisés malveillants que l'application désérialise sans validation stricte, pouvant mener à l'exécution de code arbitraire à distance (RCE)",
            "L'interruption d'une transaction SQL pendant un commit",
            "Le ralentissement de la sérialisation JSON sur les navigateurs anciens",
            "L'altération de l'ordre des éléments dans un tableau statique"
        ],
        "correctAnswer": 0,
        "explanation": "La désérialisation d'objets binaires (ex: Java ObjectInputStream, Python pickle, PHP unserialize) peut instancier des 'gadget chains' et déclencher l'exécution de commandes système sur le serveur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quel est le principe d'une attaque par injection de commandes système (OS Command Injection) ?",
        "choices": [
            "L'exécution de commandes du système d'exploitation hôte (ex: via system(), exec() ou shell_exec()) via des données non assainies injectées par l'utilisateur",
            "L'installation d'une nouvelle version de Windows par le navigateur",
            "La modification de la table des partitions du client",
            "L'envoi de commandes AT au modem"
        ],
        "correctAnswer": 0,
        "explanation": "Si une application passe des entrées utilisateur à un interpréteur de commandes (ex: ping -c 1 $ip avec ip='8.8.8.8; cat /etc/shadow'), l'attaquant peut exécuter n'importe quelle commande système.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Difficile",
        "question": "Qu'est-ce que la technique ASLR (Address Space Layout Randomization) déployée par les systèmes d'exploitation modernes ?",
        "choices": [
            "Une protection mémoire qui positionne de manière aléatoire les zones clés d'un programme (pile, tas, bibliothèques) pour rendre les exploits par buffer overflow imprévisibles",
            "Une méthode de brassage des adresses IP locales",
            "Un algorithme de tri aléatoire des données en mémoire",
            "Une optimisation des accès au disque dur"
        ],
        "correctAnswer": 0,
        "explanation": "En randomisant l'emplacement mémoire des fonctions et tampons, l'ASLR empêche un attaquant de sauter de manière fiable vers une adresse mémoire prédéterminée (ex: shellcode ou Return-to-libc).",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Difficile",
        "question": "Quel est le rôle d'un 'Stack Canary' (canari de pile) dans la prévention des attaques logicielles ?",
        "choices": [
            "Une valeur aléatoire secrète placée juste avant l'adresse de retour dans la pile d'exécution dont l'altération provoque l'arrêt immédiat du programme en cas de débordement de tampon",
            "Un antivirus qui surveille les courriels entrants",
            "Un script qui nettoie les fichiers temporaires toutes les nuits",
            "Un test unitaire automatique pour les fonctions récursives"
        ],
        "correctAnswer": 0,
        "explanation": "Si un buffer overflow écrase la pile pour détourner le pointeur d'instruction, il modifie d'abord la valeur du canari. Le compilateur vérifie cette valeur avant le retour de fonction et avorte le processus.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'attaque par 'empoisonnement de cache' (Web Cache Poisoning) ?",
        "choices": [
            "Forcer un serveur mandataire (proxy) ou CDN intermédiaire à mettre en cache une réponse HTTP malveillante qui sera ensuite servie à tous les utilisateurs légitimes du site",
            "Supprimer le fichier cache du disque dur du serveur",
            "Remplir le cache avec des images de grande taille",
            "Bloquer les connexions DNS du cache local"
        ],
        "correctAnswer": 0,
        "explanation": "En exploitant des en-têtes non inclus dans la clé de cache (unkeyed inputs), l'attaquant pousse une réponse contenant du code malveillant dans le cache partagé pour cibler d'autres internautes.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Quel composant logiciel d'infrastructure est spécialement conçu pour analyser, filtrer et bloquer le trafic HTTP/HTTPS malveillant à destination d'une application Web ?",
        "choices": [
            "Un WAF (Web Application Firewall)",
            "Un commutateur (Switch) de niveau 2",
            "Un câble coaxial blindé",
            "Un contrôleur RAID matériel"
        ],
        "correctAnswer": 0,
        "explanation": "Un WAF inspecte les requêtes de la couche 7 (Application) pour intercepter en amont les attaques courantes comme les injections SQL, failles XSS et inclusions de fichiers.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Quelle est la définition d'une vulnérabilité 'Zero-Day' (Jour Zéro) ?",
        "choices": [
            "Une faille de sécurité logicielle inconnue de l'éditeur ou pour laquelle aucun correctif officiel (patch) n'a encore été publié",
            "Une faille découverte le premier jour de chaque mois",
            "Un bogue qui se corrige tout seul au bout de 24 heures",
            "Une panne matérielle causée par une coupure de courant"
        ],
        "correctAnswer": 0,
        "explanation": "Le terme 'Zero-Day' indique que les développeurs ont eu 'zéro jour' pour concevoir un correctif depuis la découverte publique de la vulnérabilité.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Qu'est-ce qu'une attaque par déni de service distribué (DDoS) par amplification (ex: amplification DNS ou NTP) ?",
        "choices": [
            "Envoyer de petites requêtes forgées avec l'adresse IP usurpée de la victime vers des serveurs réflecteurs ouverts qui renvoient des réponses considérablement plus volumineuses vers la victime",
            "Multiplier les processeurs d'un serveur pour saturer son alimentation",
            "Augmenter le volume sonore des ventilateurs de salle blanche",
            "Envoyer des courriels contenant des pièces jointes zippées"
        ],
        "correctAnswer": 0,
        "explanation": "Les protocoles basés sur UDP sans poignée de main permettent d'usurper l'IP source (IP spoofing) et de générer un facteur d'amplification de 50 à 500x pour submerger la bande passante de la cible.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Facile",
        "question": "Que préconise le principe de 'moindre privilège' (Least Privilege) en administration des systèmes et développement logiciel ?",
        "choices": [
            "Chaque module, utilisateur ou processus doit disposer uniquement des droits minimaux strictement indispensables à l'accomplissement de sa tâche légitime",
            "Tous les employés doivent partager le mot de passe root",
            "Les utilisateurs doivent avoir tous les droits par défaut",
            "Les bases de données ne doivent pas avoir de mots de passe"
        ],
        "correctAnswer": 0,
        "explanation": "Ce principe cardinal limite la surface d'attaque et l'impact d'une intrusion : si un compte ou service est compromis, l'attaquant ne dispose pas des privilèges administrateur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "À quoi sert un système de gestion des informations et des événements de sécurité (SIEM) ?",
        "choices": [
            "À collecter, corréler et analyser en temps réel les journaux d'événements (logs) de multiples équipements pour détecter des incidents de sécurité",
            "À sauvegarder les fichiers de configuration sur bande magnétique",
            "À mettre à jour automatiquement les antivirus sur les postes clients",
            "À router les paquets IP entre deux sous-réseaux"
        ],
        "correctAnswer": 0,
        "explanation": "Un SIEM centralise les journaux de routeurs, pare-feux, serveurs et applications pour détecter des anomalies comportementales et déclencher des alertes de sécurité.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quel risque de sécurité l'en-tête HTTP 'X-Content-Type-Options: nosniff' prévient-il ?",
        "choices": [
            "Le MIME-sniffing par le navigateur, empêchant ce dernier d'exécuter un fichier non exécutable (ex: une fausse image contenant du script) sous un autre type MIME",
            "Le téléchargement de virus sous format ZIP",
            "La mise en cache des mots de passe dans l'historique",
            "L'interception des paquets par un renifleur réseau (sniffer)"
        ],
        "correctAnswer": 0,
        "explanation": "Par défaut, certains navigateurs analysent le contenu d'un fichier pour deviner son type au lieu de respecter l'en-tête Content-Type, ouvrant la porte à des attaques XSS.",
        "source": "Ancien examen"
    },
    {
        "topic": "Sécurité Web & OWASP",
        "difficulty": "Moyen",
        "question": "Quelle est la définition d'un test d'intrusion (Penetration Test ou Pentest) ?",
        "choices": [
            "Une simulation autorisée d'attaque cybernétique visant à évaluer la sécurité d'un système informatique en identifiant et exploitant ses vulnérabilités réelles",
            "Un test de charge mesurant le nombre de requêtes par seconde",
            "Une vérification de la vitesse des ventilateurs de la baie serveur",
            "Un audit comptable des licences logicielles d'une entreprise"
        ],
        "correctAnswer": 0,
        "explanation": "Le pentest est réalisé par des experts en sécurité éthiques avec l'accord de l'organisation pour éprouver les défenses techniques et humaines en conditions réelles.",
        "source": "Ancien examen"
    },

    # 76-100 Systèmes Distribués & Architectures de Données
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Facile",
        "question": "Que stipule le célèbre Théorème CAP d'Eric Brewer concernant les systèmes de données distribués ?",
        "choices": [
            "Un système distribué ne peut garantir simultanément que deux des trois propriétés suivantes : Cohérence (Consistency), Disponibilité (Availability) et Tolérance au partitionnement (Partition tolerance)",
            "La vitesse d'un réseau est proportionnelle au nombre de processeurs",
            "Tous les ordinateurs distribués doivent redémarrer en même temps",
            "Un système distribué ne peut pas comporter plus de 3 nœuds"
        ],
        "correctAnswer": 0,
        "explanation": "Comme les coupures réseau (partitions) sont inévitables dans un réseau réel, un système distribué doit impérativement choisir entre la cohérence stricte (CP) ou la disponibilité sans faille (AP).",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Qu'apporte le théorème PACELC par rapport au théorème CAP traditionnel ?",
        "choices": [
            "S'il y a une Partition (P), choisir entre Disponibilité (A) et Cohérence (C) ; Sinon (Else), choisir entre Latence (L) et Cohérence (C)",
            "Il intègre des paramètres de coût financier et de consommation électrique",
            "Il prouve que les bases relationnelles sont obsolètes",
            "Il garantit une tolérance à 100% contre les pannes matérielles"
        ],
        "correctAnswer": 0,
        "explanation": "Formulé par Daniel Abadi, PACELC constate que même en fonctionnement normal sans panne (Else), un système distribué doit arbitrer entre répliquer les écritures (latence accrue) ou répondre vite.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Dans les systèmes de stockage distribués, qu'est-ce que le modèle de 'Cohérence Éventuelle' (Eventual Consistency) ?",
        "choices": [
            "Un modèle garantissant que si aucune nouvelle mise à jour n'a lieu, toutes les répliques convergeront à terme vers un état strictement identique",
            "Un système où les données ne sont garanties cohérentes que le week-end",
            "L'assurance que les écritures sont rejetées si elles ne sont pas instantanées",
            "Un stockage qui perd les données en cas de panne"
        ],
        "correctAnswer": 0,
        "explanation": "La cohérence éventuelle privilégie la haute disponibilité (modèle BASE) en tolérant des décalages temporaires de synchronisation entre répliques qui s'estompent avec le temps.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Difficile",
        "question": "Quelle est la définition de la Linéarisabilité (Linearizability ou Cohérence Forte) dans un système distribué ?",
        "choices": [
            "Chaque opération de lecture renvoie la valeur de l'écriture la plus récente, donnant l'illusion qu'il n'existe qu'une seule copie globale mise à jour instantanément",
            "Toutes les écritures sont stockées sur des bandes magnétiques séquentielles",
            "Les transactions doivent être exécutées par ordre alphabétique des clients",
            "Le système ne peut traiter qu'une seule requête par heure"
        ],
        "correctAnswer": 0,
        "explanation": "La linéarisabilité impose que toutes les opérations semblent s'exécuter de manière atomique à un point précis dans le temps réel entre leur appel et leur fin.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Quels sont les trois états possibles dans lesquels peut se trouver un nœud dans l'algorithme de consensus distribué Raft ?",
        "choices": [
            "Leader, Follower et Candidate",
            "Master, Slave et Worker",
            "Proposer, Acceptor et Learner",
            "Active, Passive et Standby"
        ],
        "correctAnswer": 0,
        "explanation": "Raft décompose le consensus en trois états explicites : un Leader élu gérant le journal, des Followers passifs, et des Candidates sollicitant des votes lors d'une élection.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Comment l'algorithme de consensus Raft évite-t-il les blocages lors d'un partage d'égalité des voix (split-vote) pendant l'élection d'un leader ?",
        "choices": [
            "En attribuant des délais d'attente d'élection (election timeouts) aléatoires à chaque nœud pour décaler le déclenchement de la prochaine élection",
            "En élisant le serveur ayant la plus petite adresse MAC",
            "En demandant l'intervention manuelle d'un administrateur",
            "En redémarrant l'ensemble des serveurs du cluster"
        ],
        "correctAnswer": 0,
        "explanation": "Grâce aux timeouts aléatoires (ex: entre 150ms et 300ms), un nœud se réveillera avant les autres pour démarrer une nouvelle élection et aura le temps d'obtenir la majorité des voix.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Difficile",
        "question": "Dans le problème des généraux byzantins, quelle proportion maximale de nœuds défaillants ou traîtres un système asynchrone peut-il tolérer pour atteindre le consensus (BFT) ?",
        "choices": [
            "Moins d'un tiers des nœuds (f nœuds traîtres pour au moins 3f + 1 nœuds au total)",
            "Moins de la moitié des nœuds (50%)",
            "Exactement 25% des nœuds",
            "Aucun nœud traître n'est toléré"
        ],
        "correctAnswer": 0,
        "explanation": "Lamport a démontré qu'en présence de pannes byzantines (comportements malveillants ou arbitraires), il faut strictement au moins 3f + 1 nœuds pour résister à f défaillances.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le Hachage Cohérent (Consistent Hashing) utilisé dans des caches distribués comme Memcached ou Amazon Dynamo ?",
        "choices": [
            "Une méthode de distribution où les nœuds et les clés sont mappés sur un anneau circulaire, minimisant la redistribution des clés lors de l'ajout ou du retrait de serveurs",
            "Un algorithme qui crypte les disques durs en continu",
            "Une fonction de hachage qui ne génère jamais de collisions",
            "Une technique qui stocke toutes les clés sur un seul serveur central"
        ],
        "correctAnswer": 0,
        "explanation": "Avec le hachage conventionnel (hash(k) mod N), changer N force à réassigner presque toutes les clés. Le hachage cohérent ne déplace qu'environ K/N clés, préservant la stabilité du cache.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Quel problème les 'nœuds virtuels' (vnodes) résolvent-ils dans un anneau de hachage cohérent ?",
        "choices": [
            "Ils assurent une répartition uniforme de la charge et des données sur les serveurs physiques en évitant les 'points chauds' (hotspots)",
            "Ils remplacent les machines physiques pour réduire les coûts cloud",
            "Ils dupliquent la mémoire vive pour accélérer les requêtes SQL",
            "Ils empêchent les câbles réseau de se déconnecter"
        ],
        "correctAnswer": 0,
        "explanation": "En attribuant plusieurs points virtuels sur l'anneau à chaque machine physique, les vnodes lissent statistiquement les intervalles de l'anneau pour équilibrer la charge.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Quelle est la faiblesse majeure du protocole classique de validation à deux phases (Two-Phase Commit - 2PC) ?",
        "choices": [
            "C'est un protocole bloquant : si le coordinateur tombe en panne après le vote de préparation, les participants restent bloqués en maintenant leurs verrous indéfiniment",
            "Il est incompatible avec les bases de données relationnelles",
            "Il envoie tous les mots de passe en clair sur le réseau",
            "Il nécessite obligatoirement des câbles de fibre optique"
        ],
        "correctAnswer": 0,
        "explanation": "Le protocole 2PC souffre du risque de blocage (blocking problem) : si le coordinateur échoue au cours de la phase 2, les nœuds ne peuvent ni valider ni annuler sans risquer d'incohérence.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le patron de conception Saga pour la gestion des transactions réparties dans les architectures microservices ?",
        "choices": [
            "Une suite de transactions locales où chaque service met à jour sa propre base et émet un événement, avec des transactions compensatoires pour annuler en cas d'échec",
            "Une configuration RAID pour disques SSD",
            "Un planning de sauvegarde automatisé pour bases Oracle",
            "Un langage de programmation dédié au calcul haute performance"
        ],
        "correctAnswer": 0,
        "explanation": "La Saga remplace les verrous globaux distribués (2PC) par des transactions locales indépendantes ; si l'une échoue, des opérations de compensation (annulations explicites) sont jouées à l'envers.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Quelle est la différence entre une Saga par 'Chorégraphie' et une Saga par 'Orchestration' ?",
        "choices": [
            "En chorégraphie, les services réagissent de manière autonome aux événements des autres ; en orchestration, un orchestrateur central indique à chaque service quelle transaction exécuter",
            "L'orchestration est pour le frontend et la chorégraphie pour le backend",
            "La chorégraphie ne supporte pas les transactions compensatoires",
            "Il n'y a aucune différence technique"
        ],
        "correctAnswer": 0,
        "explanation": "La chorégraphie est décentralisée et pilotée par événements. L'orchestration utilise un composant chef d'orchestre (machine à états) qui pilote séquentiellement les appels aux services.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "À quoi servent les Horloges Vectorielles (Vector Clocks) dans un système distribué ?",
        "choices": [
            "À déterminer l'ordre causal partiel des événements et à détecter formellement les conflits de mises à jour concurrentes sans horloge physique universelle",
            "À synchroniser l'heure des serveurs avec les horloges atomiques par satellite GPS",
            "À mesurer la vitesse d'horloge du processeur central",
            "À accélérer l'affichage des graphismes vectoriels 3D"
        ],
        "correctAnswer": 0,
        "explanation": "Une horloge vectorielle maintient un tableau des versions pour chaque nœud, permettant de savoir si un événement en précède un autre causalement ou s'ils sont concurrents.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Facile",
        "question": "Qu'est-ce que le patron de conception 'Disjoncteur' (Circuit Breaker) dans une architecture distribuée ?",
        "choices": [
            "Un patron surveillant les appels aux services distants et s'ouvrant pour échouer immédiatement lorsque le taux d'erreur dépasse un seuil, protégeant le système contre les pannes en cascade",
            "Un interrupteur électrique physique installé dans la baie serveur",
            "Un pare-feu qui bloque l'accès à Internet",
            "Un composant qui réinitialise les mots de passe oubliés"
        ],
        "correctAnswer": 0,
        "explanation": "Le Circuit Breaker évite de saturer un service distant déjà à l'agonie en coupant les appels (état Ouvert) et en retournant immédiatement une réponse d'erreur ou une valeur de secours.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Quels sont les trois états d'un Circuit Breaker logiciel ?",
        "choices": [
            "Fermé (Closed - fonctionnement normal), Ouvert (Open - échec immédiat), Semi-ouvert (Half-Open - envoi de requêtes sondes pour tester le rétablissement)",
            "Allumé, Éteint et En veille",
            "Vert, Jaune et Rouge",
            "Actif, Bloqué et Supprimé"
        ],
        "correctAnswer": 0,
        "explanation": "Fermé : tout passe. Si les erreurs s'accumulent, il passe à Ouvert (les requêtes échouent instantanément). Après un délai, il passe à Semi-ouvert pour tester si le service cible a récupéré.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le patron de conception 'Cloisonnement' (Bulkhead Pattern) ?",
        "choices": [
            "Isoler les ressources d'exécution (pools de threads, connexions, mémoire) par composant afin que la défaillance d'un sous-système n'épuise pas toutes les ressources globales",
            "Installer des portes étanches autour des baies de stockage",
            "Sauvegarder les fichiers dans des archives compressées",
            "Interdire l'usage du langage Java sur les serveurs"
        ],
        "correctAnswer": 0,
        "explanation": "Inspiré des cloisons étanches des navires : si un compartiment prend l'eau (ex: un pool de threads saturé pour un service externe lent), les autres compartiments continuent de fonctionner.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Facile",
        "question": "Quel est le rôle d'une Passerelle d'API (API Gateway) dans une architecture microservices ?",
        "choices": [
            "Fournir un point d'entrée unique pour les clients gérant le routage des requêtes, l'agrégation, la terminaison TLS, l'authentification et la limitation de débit",
            "Remplacer les serveurs de bases de données",
            "Attribuer les adresses IP aux machines du réseau local",
            "Compiler le code TypeScript en code assembleur"
        ],
        "correctAnswer": 0,
        "explanation": "L'API Gateway isole la topologie interne des microservices des clients externes en centralisant les problématiques transverses (sécurité, authentification JWT, logs, rate limiting).",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Facile",
        "question": "À quoi sert le mécanisme de Découverte de Services (Service Discovery, ex: Consul, Eureka, CoreDNS) ?",
        "choices": [
            "Permettre aux microservices de localiser dynamiquement les adresses IP et ports réseau des instances disponibles des autres services dans un environnement élastique",
            "Trouver des logiciels gratuits sur Internet",
            "Rechercher des erreurs de syntaxe dans les fichiers sources",
            "Analyser le trafic Wi-Fi environnant"
        ],
        "correctAnswer": 0,
        "explanation": "Dans le cloud où les conteneurs démarrent et meurent en changeant d'IP en permanence, le Service Discovery tient un annuaire dynamique à jour pour le routage inter-services.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Dans les systèmes de stockage répliqués, quelle condition fondamentale sur le quorum (R + W > N) garantit la lecture d'une écriture à jour ?",
        "choices": [
            "La somme du quorum de lecture (R) et du quorum d'écriture (W) doit être strictement supérieure au nombre total de répliques (N)",
            "Le nombre d'écritures doit être égal à zéro",
            "Le nombre de répliques doit être un nombre pair supérieur à 10",
            "Tous les serveurs doivent avoir la même capacité disque"
        ],
        "correctAnswer": 0,
        "explanation": "D'après le principe des tiroirs de Dirichlet, si R + W > N, l'ensemble des nœuds lus et l'ensemble des nœuds écrits se chevauchent obligatoirement sur au moins un nœud à jour.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Quelle est la distinction entre une réplication 'Leader-Follower' (Primaire-Secondaire) synchrone et asynchrone ?",
        "choices": [
            "En réplication synchrone, le leader attend la confirmation d'écriture des répliques avant d'acquitter le client ; en asynchrone, il acquitte dès l'écriture locale",
            "En réplication synchrone, les serveurs sont reliés par un même fil électrique",
            "La réplication synchrone ne fonctionne qu'avec des disques SSD",
            "Il n'y a aucune différence en cas de crash du primaire"
        ],
        "correctAnswer": 0,
        "explanation": "La réplication synchrone garantit zéro perte de données (RPO=0) mais augmente la latence. La réplication asynchrone est plus rapide mais expose à une perte de transactions en cas de crash brutal.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le protocole gRPC développé par Google pour la communication entre microservices ?",
        "choices": [
            "Un framework RPC haute performance utilisant HTTP/2 pour le transport et Protocol Buffers (Protobuf) pour la sérialisation binaire des messages typés",
            "Une base de données graphique orientée documents",
            "Un protocole de routage pour câbles sous-marins",
            "Un remplaçant de Docker pour les machines virtuelles"
        ],
        "correctAnswer": 0,
        "explanation": "gRPC offre une sérialisation binaire compacte et ultra-rapide avec génération de code typé pour de nombreux langages, surpassant largement REST/JSON en latence inter-services.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Facile",
        "question": "Quel modèle de communication asynchrone découple totalement les émetteurs de messages des récepteurs à l'aide d'un courtier (Message Broker comme RabbitMQ ou Apache Kafka) ?",
        "choices": [
            "Le modèle Publication-Abonnement (Publish-Subscribe ou Pub/Sub)",
            "L'appel de procédure à distance synchrone (RPC)",
            "La communication directe par socket TCP point à point",
            "Le protocole Telnet"
        ],
        "correctAnswer": 0,
        "explanation": "En Pub/Sub, les producteurs envoient des messages à des sujets (topics) sans savoir qui les consommera ; les consommateurs s'abonnent aux sujets qui les intéressent, assurant un découplage total.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Difficile",
        "question": "Dans la théorie des systèmes distribués, qu'énonce l'impossibilité de FLP (Fischer, Lynch et Paterson) ?",
        "choices": [
            "Dans un système distribué asynchrone, aucun protocole de consensus déterministe ne peut garantir à la fois la terminaison, la correction et l'accord en présence même d'une seule panne d'arrêt imprévisible (crash failure)",
            "Il est impossible de connecter plus de 1024 ordinateurs sur un réseau",
            "La mémoire partagée est impossible sans processeur quantique",
            "Le protocole TCP ne peut pas fonctionner sur fibre optique"
        ],
        "correctAnswer": 0,
        "explanation": "Le résultat fondamental de FLP (1985) montre qu'on ne peut distinguer un nœud crashé d'un nœud infiniment lent dans un réseau asynchrone pur, imposant des hypothèses de synchronie partielle.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "À quoi sert l'algorithme d'équilibrage de charge 'Least Connections' par rapport au simple 'Round Robin' ?",
        "choices": [
            "Il dirige chaque nouvelle requête entrante vers le serveur d'application ayant actuellement le moins de connexions actives en cours de traitement",
            "Il éteint les serveurs qui consomment trop d'électricité",
            "Il envoie toutes les requêtes au premier serveur jusqu'à ce qu'il plante",
            "Il alterne aveuglément les serveurs selon une liste circulaire"
        ],
        "correctAnswer": 0,
        "explanation": "Le Round Robin ignore l'état réel des serveurs. Least Connections prend en compte la charge instantanée, ce qui est idéal lorsque les requêtes ont des durées de traitement très hétérogènes.",
        "source": "Ancien examen"
    },
    {
        "topic": "Systèmes Distribués",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'architecture 'CQRS' (Command Query Responsibility Segregation) ?",
        "choices": [
            "Un patron architectural qui sépare formellement le modèle d'écriture/modification de données (Commandes) du modèle de lecture/consultation (Requêtes)",
            "Une méthode de cryptographie pour disques durs SSD",
            "Un protocole de routage pour réseaux pair-à-pair",
            "Une technique de compression de bases de données relationnelles"
        ],
        "correctAnswer": 0,
        "explanation": "CQRS permet d'optimiser indépendamment les opérations de lecture (souvent dénormalisées et mises en cache pour la vitesse) et d'écriture (validées avec règles métier strictes).",
        "source": "Ancien examen"
    }
]

assert len(p9_questions) == 100, f"Expected 100 questions for Part 9, got {len(p9_questions)}"

# Write scripts/builders/part9_builder.ts
with open('scripts/builders/part9_builder.ts', 'w', encoding='utf-8') as f:
    f.write("import { Question } from '../../src/types';\n\n")
    f.write("export function buildPart9Questions(): Question[] {\n")
    f.write("  const qList: Omit<Question, 'id' | 'part'>[] = [\n")
    for q in p9_questions:
        f.write("    {\n")
        f.write(f"      topic: {json.dumps(q['topic'], ensure_ascii=False)},\n")
        f.write(f"      difficulty: {json.dumps(q['difficulty'], ensure_ascii=False)} as any,\n")
        f.write(f"      question: {json.dumps(q['question'], ensure_ascii=False)},\n")
        f.write(f"      choices: {json.dumps(q['choices'], ensure_ascii=False)},\n")
        f.write(f"      options: {json.dumps(q['choices'], ensure_ascii=False)},\n")
        f.write(f"      correctAnswer: {q['correctAnswer']},\n")
        f.write(f"      explanation: {json.dumps(q['explanation'], ensure_ascii=False)},\n")
        f.write(f"      source: {json.dumps(q['source'], ensure_ascii=False)}\n")
        f.write("    },\n")
    f.write("  ];\n\n")
    f.write("  return qList.map((q, idx) => ({\n")
    f.write("    ...q,\n")
    f.write("    id: `p9-q${idx + 1}`,\n")
    f.write("    part: 9\n")
    f.write("  }));\n")
    f.write("}\n")

print("Part 9 Builder successfully generated with 100 questions.")
