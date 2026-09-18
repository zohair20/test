import { Question } from '../../types';

export const PART_1_QUESTIONS: Question[] = [
  {
    "id": "p1-q1",
    "part": 1,
    "topic": "Adressage IP et sous-réseaux",
    "difficulty": "Moyen",
    "question": "Sachant que sur un réseau informatique une machine utilise l'adresse IP 192.168.0.160 avec comme masque de sous-réseau 255.255.255.192 (/26). Quelle est l'adresse réseau à laquelle appartient cette machine (opération ET logique bit à bit) ?",
    "options": [
      "192.168.0.128",
      "192.168.0.138",
      "192.168.0.148",
      "192.168.0.160"
    ],
    "choices": [
      "192.168.0.128",
      "192.168.0.138",
      "192.168.0.148",
      "192.168.0.160"
    ],
    "correctAnswer": 0,
    "explanation": "160 en binaire vaut 10100000. Le dernier octet du masque 192 vaut 11000000. L'opération ET bit à bit donne 10000000 = 128 en décimal. L'adresse réseau est donc 192.168.0.128. (Source : Concours ENSET Mohammedia 2022, Q38).",
    "source": "Ancien concours"
  },
  {
    "id": "p1-q2",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Facile",
    "question": "Combien de couches compte le modèle de référence OSI de l'ISO ?",
    "options": [
      "4 couches",
      "5 couches",
      "7 couches",
      "8 couches"
    ],
    "choices": [
      "4 couches",
      "5 couches",
      "7 couches",
      "8 couches"
    ],
    "correctAnswer": 2,
    "explanation": "Le modèle OSI (Open Systems Interconnection) est divisé en exactement 7 couches : Physique, Liaison, Réseau, Transport, Session, Présentation et Application.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q3",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Facile",
    "question": "Quelle couche du modèle OSI est responsable du routage des paquets et de l'adressage logique ?",
    "options": [
      "Couche 2 — Liaison de données",
      "Couche 3 — Réseau",
      "Couche 4 — Transport",
      "Couche 5 — Session"
    ],
    "choices": [
      "Couche 2 — Liaison de données",
      "Couche 3 — Réseau",
      "Couche 4 — Transport",
      "Couche 5 — Session"
    ],
    "correctAnswer": 1,
    "explanation": "La couche 3 (Réseau) s'occupe de l'adressage logique (ex: IP) et de la détermination du meilleur chemin (routage) à travers les réseaux interconnectés.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q4",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Moyen",
    "question": "Dans le modèle TCP/IP, quelle couche regroupe les couches Session, Présentation et Application du modèle OSI ?",
    "options": [
      "Couche Transport",
      "Couche Application",
      "Couche Internet",
      "Couche Accès Réseau"
    ],
    "choices": [
      "Couche Transport",
      "Couche Application",
      "Couche Internet",
      "Couche Accès Réseau"
    ],
    "correctAnswer": 1,
    "explanation": "La couche Application du modèle TCP/IP englobe les fonctions des couches 5 (Session), 6 (Présentation) et 7 (Application) du modèle OSI.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q5",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Moyen",
    "question": "Quelle est l'unité de données de protocole (PDU) manipulée au niveau de la couche Transport (Couche 4) lors de l'utilisation de TCP ?",
    "options": [
      "Trame (Frame)",
      "Paquet (Packet)",
      "Segment",
      "Bit"
    ],
    "choices": [
      "Trame (Frame)",
      "Paquet (Packet)",
      "Segment",
      "Bit"
    ],
    "correctAnswer": 2,
    "explanation": "Au niveau de la couche 4 (Transport) avec TCP, l'unité de données s'appelle un 'segment' (ou 'datagramme' pour UDP). Au niveau 2 c'est la trame, et au niveau 3 c'est le paquet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q6",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Moyen",
    "question": "Quelle couche du modèle OSI se charge du chiffrement, de la compression et de la conversion des formats de données (ex: ASCII, Unicode, JPEG) ?",
    "options": [
      "Couche Session",
      "Couche Présentation",
      "Couche Application",
      "Couche Liaison"
    ],
    "choices": [
      "Couche Session",
      "Couche Présentation",
      "Couche Application",
      "Couche Liaison"
    ],
    "correctAnswer": 1,
    "explanation": "La couche Présentation (couche 6) est responsable de la syntaxe et de la sémantique des données transmises, incluant le chiffrement, le déchiffrement, la compression et le formatage.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q7",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Facile",
    "question": "Quel terme désigne l'ajout d'en-têtes protocolaires successifs lors de la descente d'un message à travers la pile réseau ?",
    "options": [
      "Désencapsulation",
      "Encapsulation",
      "Multiplexage",
      "Fragmentation"
    ],
    "choices": [
      "Désencapsulation",
      "Encapsulation",
      "Multiplexage",
      "Fragmentation"
    ],
    "correctAnswer": 1,
    "explanation": "L'encapsulation est le processus par lequel chaque couche ajoute son propre en-tête (header) et parfois une queue (trailer) aux données reçues de la couche supérieure.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q8",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Moyen",
    "question": "À quelle couche du modèle OSI opère un commutateur réseau classique (Switch non-manageable de niveau 2) ?",
    "options": [
      "Couche Physique (Couche 1)",
      "Couche Liaison de données (Couche 2)",
      "Couche Réseau (Couche 3)",
      "Couche Transport (Couche 4)"
    ],
    "choices": [
      "Couche Physique (Couche 1)",
      "Couche Liaison de données (Couche 2)",
      "Couche Réseau (Couche 3)",
      "Couche Transport (Couche 4)"
    ],
    "correctAnswer": 1,
    "explanation": "Un commutateur classique de niveau 2 fonctionne à la couche Liaison de données en utilisant les adresses MAC pour acheminer les trames vers les bons ports.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q9",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Difficile",
    "question": "Quel sous-niveau de la couche Liaison de données IEEE 802 gère le contrôle d'accès au support physique (CSMA/CD, CSMA/CA) ?",
    "options": [
      "LLC (Logical Link Control)",
      "MAC (Media Access Control)",
      "PHY (Physical)",
      "IP (Internet Protocol)"
    ],
    "choices": [
      "LLC (Logical Link Control)",
      "MAC (Media Access Control)",
      "PHY (Physical)",
      "IP (Internet Protocol)"
    ],
    "correctAnswer": 1,
    "explanation": "La couche Liaison IEEE 802 est subdivisée en deux sous-couches : LLC (802.2) qui gère le multiplexage logique et MAC (802.3, 802.11) qui gère l'accès au support physique et l'adressage matériel.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q10",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Facile",
    "question": "Quel composant matériel réseau fonctionne exclusivement au niveau de la couche 1 (Physique) en répétant les signaux sans analyser les adresses ?",
    "options": [
      "Le routeur",
      "La passerelle applicative",
      "Le concentrateur (Hub)",
      "Le commutateur (Switch)"
    ],
    "choices": [
      "Le routeur",
      "La passerelle applicative",
      "Le concentrateur (Hub)",
      "Le commutateur (Switch)"
    ],
    "correctAnswer": 2,
    "explanation": "Le concentrateur (Hub) ou répéteur opère au niveau 1 (Physique) : il diffuse bêtement tout signal reçu sur un port vers tous les autres ports sans aucune inspection d'adresses.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q11",
    "part": 1,
    "topic": "Modèle OSI & TCP/IP",
    "difficulty": "Moyen",
    "question": "Dans le modèle OSI, quelle couche gère l'établissement, le maintien et la clôture des sessions de communication entre applications ?",
    "options": [
      "Couche Transport",
      "Couche Session",
      "Couche Réseau",
      "Couche Application"
    ],
    "choices": [
      "Couche Transport",
      "Couche Session",
      "Couche Réseau",
      "Couche Application"
    ],
    "correctAnswer": 1,
    "explanation": "La couche Session (couche 5) fournit les mécanismes de gestion du dialogue, d'ouverture, de synchronisation (points de reprise) et de fermeture des sessions.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q12",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Facile",
    "question": "Quelle est la taille en bits d'une adresse IPv4 et d'une adresse IPv6 respectivement ?",
    "options": [
      "32 bits et 64 bits",
      "32 bits et 128 bits",
      "64 bits et 128 bits",
      "128 bits et 256 bits"
    ],
    "choices": [
      "32 bits et 64 bits",
      "32 bits et 128 bits",
      "64 bits et 128 bits",
      "128 bits et 256 bits"
    ],
    "correctAnswer": 1,
    "explanation": "Une adresse IPv4 est codée sur 32 bits (4 octets), tandis qu'une adresse IPv6 est codée sur 128 bits (16 octets), offrant un espace d'adressage quasi-illimité.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q13",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Moyen",
    "question": "Quelle plage d'adresses IPv4 correspond à la classe B selon le modèle historique des classes d'adresses ?",
    "options": [
      "1.0.0.0 à 126.255.255.255",
      "128.0.0.0 à 191.255.255.255",
      "192.0.0.0 à 223.255.255.255",
      "224.0.0.0 à 239.255.255.255"
    ],
    "choices": [
      "1.0.0.0 à 126.255.255.255",
      "128.0.0.0 à 191.255.255.255",
      "192.0.0.0 à 223.255.255.255",
      "224.0.0.0 à 239.255.255.255"
    ],
    "correctAnswer": 1,
    "explanation": "Les adresses de classe B commencent par les bits '10' au premier octet, ce qui correspond à la plage décimale 128.0.0.0 à 191.255.255.255.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q14",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Facile",
    "question": "Laquelle des adresses suivantes est une adresse IPv4 privée définie par la RFC 1918 ?",
    "options": [
      "8.8.8.8",
      "172.20.14.5",
      "195.154.120.1",
      "208.67.222.222"
    ],
    "choices": [
      "8.8.8.8",
      "172.20.14.5",
      "195.154.120.1",
      "208.67.222.222"
    ],
    "correctAnswer": 1,
    "explanation": "La RFC 1918 définit 3 blocs privés : 10.0.0.0/8, 172.16.0.0/12 (qui inclut 172.20.14.5) et 192.168.0.0/16. Elles ne sont pas routables publiquement sur Internet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q15",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Facile",
    "question": "Quelle est l'adresse de bouclage local (loopback) standard en IPv6 ?",
    "options": [
      "::1",
      "127.0.0.1",
      "fe80::1",
      "ff02::1"
    ],
    "choices": [
      "::1",
      "127.0.0.1",
      "fe80::1",
      "ff02::1"
    ],
    "correctAnswer": 0,
    "explanation": "L'adresse de bouclage local (localhost) en IPv6 est représentée par ::1 (l'équivalent de 127.0.0.1 en IPv4).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q16",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Moyen",
    "question": "En IPv6, quel préfixe indique une adresse lien-local (Link-Local) auto-attribuée sur une interface ?",
    "options": [
      "fc00::/7",
      "fe80::/10",
      "ff00::/8",
      "2001::/16"
    ],
    "choices": [
      "fc00::/7",
      "fe80::/10",
      "ff00::/8",
      "2001::/16"
    ],
    "correctAnswer": 1,
    "explanation": "Les adresses lien-local IPv6 commencent toujours par le préfixe fe80::/10. Elles sont obligatoires pour la communication sur le même segment physique (ex: NDP).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q17",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Difficile",
    "question": "Quel mécanisme remplace le protocole ARP en IPv6 pour la découverte des adresses MAC des voisins ?",
    "options": [
      "DHCPv6",
      "NDP (Neighbor Discovery Protocol) avec messages ICMPv6",
      "SLAAC",
      "RIPng"
    ],
    "choices": [
      "DHCPv6",
      "NDP (Neighbor Discovery Protocol) avec messages ICMPv6",
      "SLAAC",
      "RIPng"
    ],
    "correctAnswer": 1,
    "explanation": "En IPv6, ARP n'existe plus. Il est remplacé par NDP (Neighbor Discovery Protocol) qui utilise les messages ICMPv6 Neighbor Solicitation (NS) et Neighbor Advertisement (NA).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q18",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Moyen",
    "question": "Comment écrit-on l'adresse IPv6 2001:0db8:0000:0000:0000:ff00:0042:8329 sous sa forme la plus compressée conforme à la RFC 5952 ?",
    "options": [
      "2001:db8::ff00:42:8329",
      "2001:0db8::ff0:42:8329",
      "2001:db8:0:0:0:ff00:42:8329",
      "2001:db8::ff:42:8329"
    ],
    "choices": [
      "2001:db8::ff00:42:8329",
      "2001:0db8::ff0:42:8329",
      "2001:db8:0:0:0:ff00:42:8329",
      "2001:db8::ff:42:8329"
    ],
    "correctAnswer": 0,
    "explanation": "Selon la RFC 5952 : on supprime les zéros non significatifs (0db8 -> db8, 0042 -> 42) et on remplace la plus longue séquence contiguë de zéros par '::'.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q19",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Moyen",
    "question": "Quel type d'adresse a été complètement supprimé en IPv6 au profit du multicast ciblé ?",
    "options": [
      "Unicast",
      "Multicast",
      "Broadcast (Diffusion générale)",
      "Anycast"
    ],
    "choices": [
      "Unicast",
      "Multicast",
      "Broadcast (Diffusion générale)",
      "Anycast"
    ],
    "correctAnswer": 2,
    "explanation": "En IPv6, la notion d'adresse de broadcast a été complètement éliminée afin d'éviter la saturation des hôtes du réseau local. Elle est remplacée par des groupes multicast précis.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q20",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Facile",
    "question": "À quelle classe d'adresses IPv4 est réservée la plage 224.0.0.0 à 239.255.255.255 ?",
    "options": [
      "Classe A",
      "Classe C",
      "Classe D (Multicast)",
      "Classe E (Expérimentale)"
    ],
    "choices": [
      "Classe A",
      "Classe C",
      "Classe D (Multicast)",
      "Classe E (Expérimentale)"
    ],
    "correctAnswer": 2,
    "explanation": "La classe D (224.0.0.0/4) est dédiée au multicast (diffusion sélective vers un groupe d'hôtes).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q21",
    "part": 1,
    "topic": "IPv4 / IPv6",
    "difficulty": "Difficile",
    "question": "Quel champ de l'en-tête IPv4 a été renommé 'Hop Limit' dans l'en-tête IPv6 ?",
    "options": [
      "Time to Live (TTL)",
      "Type of Service (ToS)",
      "Checksum",
      "Header Length (IHL)"
    ],
    "choices": [
      "Time to Live (TTL)",
      "Type of Service (ToS)",
      "Checksum",
      "Header Length (IHL)"
    ],
    "correctAnswer": 0,
    "explanation": "Le champ TTL (Time to Live) en IPv4 a été renommé 'Hop Limit' en IPv6. Il est décrémenté de 1 par chaque routeur traversé pour éviter les boucles infinies.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q22",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Moyen",
    "question": "Combien d'adresses IP utilisables pour des hôtes offre un sous-réseau avec un masque /24 ?",
    "options": [
      "256 hôtes",
      "254 hôtes",
      "255 hôtes",
      "128 hôtes"
    ],
    "choices": [
      "256 hôtes",
      "254 hôtes",
      "255 hôtes",
      "128 hôtes"
    ],
    "correctAnswer": 1,
    "explanation": "Un /24 laisse 32 - 24 = 8 bits pour les hôtes, soit 2^8 = 256 adresses. En soustrayant l'adresse réseau (.0) et l'adresse de broadcast (.255), il reste 254 hôtes utilisables.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q23",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Moyen",
    "question": "Quelle est l'adresse de broadcast (diffusion) du réseau 192.168.10.0/26 ?",
    "options": [
      "192.168.10.63",
      "192.168.10.64",
      "192.168.10.127",
      "192.168.10.255"
    ],
    "choices": [
      "192.168.10.63",
      "192.168.10.64",
      "192.168.10.127",
      "192.168.10.255"
    ],
    "correctAnswer": 0,
    "explanation": "Un /26 a un pas de 64 adresses (2^(32-26) = 64). La plage va de 192.168.10.0 (réseau) à 192.168.10.63 (broadcast).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q24",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Difficile",
    "question": "Quel est le masque de sous-réseau en notation décimale pointée correspondant à /28 ?",
    "options": [
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.248",
      "255.255.255.192"
    ],
    "choices": [
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.248",
      "255.255.255.192"
    ],
    "correctAnswer": 1,
    "explanation": "Un /28 possède 28 bits à 1. Dans le dernier octet, il y a 4 bits à 1 : 128 + 64 + 32 + 16 = 240. Le masque est donc 255.255.255.240.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q25",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Difficile",
    "question": "Pour une liaison point-à-point entre deux routeurs, quel masque de sous-réseau minimise le gaspillage d'adresses IPv4 ?",
    "options": [
      "/29",
      "/30",
      "/31",
      "/28"
    ],
    "choices": [
      "/29",
      "/30",
      "/31",
      "/28"
    ],
    "correctAnswer": 1,
    "explanation": "Le masque /30 fournit 4 adresses totales : 1 réseau, 2 adresses hôtes (parfait pour deux routeurs) et 1 broadcast (la RFC 3021 permet aussi /31 dans certains équipements, mais /30 reste le standard d'examen classique).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q26",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Moyen",
    "question": "Quelle est l'adresse réseau de l'hôte 172.16.45.14 avec un masque 255.255.240.0 (/20) ?",
    "options": [
      "172.16.0.0",
      "172.16.32.0",
      "172.16.40.0",
      "172.16.48.0"
    ],
    "choices": [
      "172.16.0.0",
      "172.16.32.0",
      "172.16.40.0",
      "172.16.48.0"
    ],
    "correctAnswer": 1,
    "explanation": "Le masque 255.255.240.0 a un pas de 16 dans le 3ème octet (256 - 240 = 16). Les réseaux sont 172.16.0.0, 172.16.16.0, 172.16.32.0, 172.16.48.0. 45 se trouve entre 32 et 47. Le réseau est donc 172.16.32.0.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q27",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Moyen",
    "question": "Que signifie le sigle CIDR dans le contexte de l'adressage IP ?",
    "options": [
      "Classless Inter-Domain Routing",
      "Common Interface Domain Routing",
      "Classful Internet Dynamic Routing",
      "Control Information Data Route"
    ],
    "choices": [
      "Classless Inter-Domain Routing",
      "Common Interface Domain Routing",
      "Classful Internet Dynamic Routing",
      "Control Information Data Route"
    ],
    "correctAnswer": 0,
    "explanation": "CIDR signifie Classless Inter-Domain Routing. Introduit en 1993, il remplace le système rigide des classes A, B et C par un masque de longueur arbitraire (/prefix).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q28",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Difficile",
    "question": "Combien de sous-réseaux utilisables peut-on créer en empruntant 3 bits d'hôte sur un réseau de classe C ?",
    "options": [
      "6 sous-réseaux",
      "8 sous-réseaux",
      "16 sous-réseaux",
      "4 sous-réseaux"
    ],
    "choices": [
      "6 sous-réseaux",
      "8 sous-réseaux",
      "16 sous-réseaux",
      "4 sous-réseaux"
    ],
    "correctAnswer": 1,
    "explanation": "Avec 3 bits empruntés, on peut former 2^3 = 8 sous-réseaux (/27). Chaque sous-réseau dispose de 2^(8-3) = 32 adresses, soit 30 hôtes utiles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q29",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Facile",
    "question": "Quelle opération logique bit-à-bit applique un équipement réseau entre une adresse IP et son masque pour déterminer l'adresse du sous-réseau ?",
    "options": [
      "OU logique (OR)",
      "ET logique (AND)",
      "OU Exclusif (XOR)",
      "NON logique (NOT)"
    ],
    "choices": [
      "OU logique (OR)",
      "ET logique (AND)",
      "OU Exclusif (XOR)",
      "NON logique (NOT)"
    ],
    "correctAnswer": 1,
    "explanation": "L'équipement effectue un 'ET logique' (AND) bit-à-bit entre l'adresse IP et le masque de sous-réseau pour isoler l'identifiant du réseau.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q30",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Moyen",
    "question": "Combien de bits restent pour la partie hôte dans un sous-réseau IPv4 avec un préfixe /27 ?",
    "options": [
      "3 bits",
      "4 bits",
      "5 bits",
      "7 bits"
    ],
    "choices": [
      "3 bits",
      "4 bits",
      "5 bits",
      "7 bits"
    ],
    "correctAnswer": 2,
    "explanation": "Puisqu'une adresse IPv4 comporte 32 bits au total : 32 - 27 = 5 bits d'hôte, permettant 2^5 - 2 = 30 hôtes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q31",
    "part": 1,
    "topic": "Adressage IP & Subnetting",
    "difficulty": "Moyen",
    "question": "Si l'adresse d'un hôte est 10.1.1.65/26, quelle est la dernière adresse IP utilisable pour un hôte dans ce sous-réseau ?",
    "options": [
      "10.1.1.125",
      "10.1.1.126",
      "10.1.1.127",
      "10.1.1.64"
    ],
    "choices": [
      "10.1.1.125",
      "10.1.1.126",
      "10.1.1.127",
      "10.1.1.64"
    ],
    "correctAnswer": 1,
    "explanation": "Le sous-réseau est 10.1.1.64/26. La diffusion est 10.1.1.127. La dernière adresse assignable à un hôte est donc 10.1.1.126.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q32",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Moyen",
    "question": "Quelle métrique est utilisée par le protocole de routage à vecteur de distance RIP (Routing Information Protocol) ?",
    "options": [
      "La bande passante",
      "Le délai de transmission",
      "Le nombre de sauts (Hop Count)",
      "Le coût financier"
    ],
    "choices": [
      "La bande passante",
      "Le délai de transmission",
      "Le nombre de sauts (Hop Count)",
      "Le coût financier"
    ],
    "correctAnswer": 2,
    "explanation": "RIP utilise uniquement le nombre de routeurs traversés (nombre de sauts ou 'hop count') comme métrique. Le nombre maximal de sauts autorisé par RIP est de 15 (16 = inaccessible).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q33",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Moyen",
    "question": "Quel algorithme de calcul du plus court chemin est utilisé par le protocole à état de liens OSPF ?",
    "options": [
      "Algorithme de Bellman-Ford",
      "Algorithme de Dijkstra (SPF)",
      "Algorithme de Floyd-Warshall",
      "Algorithme de Kruskal"
    ],
    "choices": [
      "Algorithme de Bellman-Ford",
      "Algorithme de Dijkstra (SPF)",
      "Algorithme de Floyd-Warshall",
      "Algorithme de Kruskal"
    ],
    "correctAnswer": 1,
    "explanation": "OSPF (Open Shortest Path First) utilise l'algorithme de Dijkstra (Shortest Path First) pour calculer l'arbre des chemins les plus courts sans boucle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q34",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Difficile",
    "question": "Quel protocole de routage extérieur (EGP) est le standard mondial utilisé pour échanger des routes entre systèmes autonomes (AS) sur Internet ?",
    "options": [
      "OSPF",
      "EIGRP",
      "BGP (Border Gateway Protocol)",
      "IS-IS"
    ],
    "choices": [
      "OSPF",
      "EIGRP",
      "BGP (Border Gateway Protocol)",
      "IS-IS"
    ],
    "correctAnswer": 2,
    "explanation": "BGP (actuellement BGP-4) est le protocole de routage à vecteur de chemins (path-vector) qui assure le routage entre les différents Autonomous Systems (AS) sur Internet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q35",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Facile",
    "question": "Comment écrit-on la route par défaut (passerelle par défaut) en IPv4 dans une table de routage ?",
    "options": [
      "127.0.0.1/8",
      "0.0.0.0/0",
      "255.255.255.255/32",
      "192.168.1.1/24"
    ],
    "choices": [
      "127.0.0.1/8",
      "0.0.0.0/0",
      "255.255.255.255/32",
      "192.168.1.1/24"
    ],
    "correctAnswer": 1,
    "explanation": "La route par défaut est représentée par 0.0.0.0 avec un masque de 0.0.0.0 (0.0.0.0/0). Elle correspond à toutes les destinations qui ne matchent aucune route plus spécifique.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q36",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Difficile",
    "question": "En cas de conflit entre plusieurs routes menant à la même destination via différents protocoles, quel critère permet à un routeur de choisir la source la plus digne de confiance ?",
    "options": [
      "Le coût de lien",
      "La distance administrative",
      "Le MTU",
      "Le TTL"
    ],
    "choices": [
      "Le coût de lien",
      "La distance administrative",
      "Le MTU",
      "Le TTL"
    ],
    "correctAnswer": 1,
    "explanation": "La distance administrative (AD) mesure la fiabilité d'une source de routage. Plus la valeur est faible, plus la source est privilégiée (ex: Directement connecté = 0, Statique = 1, OSPF = 110, RIP = 120).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q37",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Moyen",
    "question": "Quelle technique de prévention des boucles de routage dans les protocoles à vecteur de distance empêche de renvoyer une information de routage sur l'interface d'où elle a été apprise ?",
    "options": [
      "Poison Reverse",
      "Split Horizon",
      "Route Summarization",
      "Holddown Timer"
    ],
    "choices": [
      "Poison Reverse",
      "Split Horizon",
      "Route Summarization",
      "Holddown Timer"
    ],
    "correctAnswer": 1,
    "explanation": "La règle du Split Horizon stipule qu'une route apprise sur une interface ne doit jamais être réémise sur cette même interface.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q38",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Difficile",
    "question": "Dans une architecture multi-zones OSPF, quelle zone obligatoire constitue la zone dorsale (Backbone) ?",
    "options": [
      "Zone 1",
      "Zone 0 (Area 0)",
      "Zone Stub",
      "Zone NSSA"
    ],
    "choices": [
      "Zone 1",
      "Zone 0 (Area 0)",
      "Zone Stub",
      "Zone NSSA"
    ],
    "correctAnswer": 1,
    "explanation": "L'Area 0 (ou 0.0.0.0) est la zone dorsale obligatoire en OSPF. Toutes les autres zones doivent être directement ou virtuellement connectées à l'Area 0 pour échanger du trafic inter-zone.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q39",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Moyen",
    "question": "Lorsqu'un routeur a plusieurs entrées dans sa table de routage qui correspondent à l'adresse de destination d'un paquet, quelle règle de sélection applique-t-il en priorité ?",
    "options": [
      "La route avec la plus petite distance administrative",
      "La route avec le masque de sous-réseau le plus long (Longest Prefix Match)",
      "La route la plus ancienne",
      "La première route de la table"
    ],
    "choices": [
      "La route avec la plus petite distance administrative",
      "La route avec le masque de sous-réseau le plus long (Longest Prefix Match)",
      "La route la plus ancienne",
      "La première route de la table"
    ],
    "correctAnswer": 1,
    "explanation": "Le routeur applique la règle du 'Longest Prefix Match' (correspondance de préfixe la plus spécifique / masque le plus long) pour acheminer le paquet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q40",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Moyen",
    "question": "Quel numéro de port et quel protocole de transport BGP utilise-t-il pour établir ses sessions de voisinage de confiance ?",
    "options": [
      "Port UDP 520",
      "Port TCP 179",
      "Port IP 89",
      "Port TCP 80"
    ],
    "choices": [
      "Port UDP 520",
      "Port TCP 179",
      "Port IP 89",
      "Port TCP 80"
    ],
    "correctAnswer": 1,
    "explanation": "BGP s'exécute sur la couche Transport en établissant une connexion TCP fiable sur le port 179 entre les pairs BGP (BGP peers).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q41",
    "part": 1,
    "topic": "Routage",
    "difficulty": "Difficile",
    "question": "Quelle est la valeur de distance administrative par défaut d'une route statique sur un routeur Cisco ?",
    "options": [
      "0",
      "1",
      "90",
      "110"
    ],
    "choices": [
      "0",
      "1",
      "90",
      "110"
    ],
    "correctAnswer": 1,
    "explanation": "Une route directement connectée a une AD de 0. Une route statique a une AD par défaut de 1 (plus prioritaire qu'OSPF qui a 110 et RIP qui a 120).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q42",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Facile",
    "question": "Combien d'octets composent une adresse MAC (adresse matérielle Ethernet IEEE 802) ?",
    "options": [
      "4 octets (32 bits)",
      "6 octets (48 bits)",
      "8 octets (64 bits)",
      "16 octets (128 bits)"
    ],
    "choices": [
      "4 octets (32 bits)",
      "6 octets (48 bits)",
      "8 octets (64 bits)",
      "16 octets (128 bits)"
    ],
    "correctAnswer": 1,
    "explanation": "Une adresse MAC est codée sur 48 bits, soit 6 octets (généralement notée en hexadécimal, ex: 00:1A:2B:3C:4D:5E). Les 3 premiers octets correspondent à l'OUI du constructeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q43",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Facile",
    "question": "Quel est le rôle du protocole ARP (Address Resolution Protocol) ?",
    "options": [
      "Résoudre une adresse IP à partir d'un nom de domaine",
      "Associer une adresse IP connue à une adresse physique MAC sur le réseau local",
      "Attribuer dynamiquement des configurations IP aux hôtes",
      "Router les paquets entre différents sous-réseaux"
    ],
    "choices": [
      "Résoudre une adresse IP à partir d'un nom de domaine",
      "Associer une adresse IP connue à une adresse physique MAC sur le réseau local",
      "Attribuer dynamiquement des configurations IP aux hôtes",
      "Router les paquets entre différents sous-réseaux"
    ],
    "correctAnswer": 1,
    "explanation": "ARP permet à une machine de connaître l'adresse MAC correspondant à une adresse IP destination sur le réseau local en envoyant une requête 'ARP Request' en broadcast.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q44",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Moyen",
    "question": "Quelle adresse MAC de destination est utilisée pour une trame de diffusion générale (Broadcast Ethernet) ?",
    "options": [
      "00:00:00:00:00:00",
      "FF:FF:FF:FF:FF:FF",
      "01:00:5E:00:00:01",
      "FE:80:00:00:00:01"
    ],
    "choices": [
      "00:00:00:00:00:00",
      "FF:FF:FF:FF:FF:FF",
      "01:00:5E:00:00:01",
      "FE:80:00:00:00:01"
    ],
    "correctAnswer": 1,
    "explanation": "L'adresse MAC broadcast FF:FF:FF:FF:FF:FF (tous les bits à 1) indique que la trame doit être traitée par toutes les cartes réseau du domaine de diffusion.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q45",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Moyen",
    "question": "Quel protocole de niveau 2 (norme IEEE 802.1D) a été conçu pour empêcher les boucles physiques dans une topologie de commutateurs redondants ?",
    "options": [
      "STP (Spanning Tree Protocol)",
      "OSPF",
      "BGP",
      "VTP"
    ],
    "choices": [
      "STP (Spanning Tree Protocol)",
      "OSPF",
      "BGP",
      "VTP"
    ],
    "correctAnswer": 0,
    "explanation": "Le protocole STP (Spanning Tree Protocol) bloque de manière logique les ports redondants pour créer une topologie sans boucle, et les réactive automatiquement en cas de panne.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q46",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Difficile",
    "question": "Quel rôle élit STP en premier dans l'ensemble du réseau commuté pour servir de point de référence à l'arbre ?",
    "options": [
      "Le Designated Port",
      "Le Root Bridge (Pont Racine)",
      "Le Backup Bridge",
      "Le Root Port"
    ],
    "choices": [
      "Le Designated Port",
      "Le Root Bridge (Pont Racine)",
      "Le Backup Bridge",
      "Le Root Port"
    ],
    "correctAnswer": 1,
    "explanation": "STP commence par élire le 'Root Bridge' (le commutateur ayant la plus petite Bridge ID : priorité la plus basse, ou en cas d'égalité, plus petite adresse MAC).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q47",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Moyen",
    "question": "Comment un commutateur réseau remplit-il sa table CAM (table d'adresses MAC) ?",
    "options": [
      "En inspectant l'adresse MAC source de chaque trame entrante sur ses ports",
      "En inspectant l'adresse MAC destination de chaque trame entrante",
      "Par échange périodique avec le serveur DHCP",
      "Par configuration manuelle obligatoire de chaque port"
    ],
    "choices": [
      "En inspectant l'adresse MAC source de chaque trame entrante sur ses ports",
      "En inspectant l'adresse MAC destination de chaque trame entrante",
      "Par échange périodique avec le serveur DHCP",
      "Par configuration manuelle obligatoire de chaque port"
    ],
    "correctAnswer": 0,
    "explanation": "Le commutateur apprend de manière dynamique en observant l'adresse MAC source des trames qui arrivent sur ses ports et en associant cette MAC au numéro de port dans sa table CAM.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q48",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Moyen",
    "question": "Quelle action effectue un commutateur lorsqu'il reçoit une trame unicast dont l'adresse MAC de destination est inconnue dans sa table ?",
    "options": [
      "Il détruit immédiatement la trame",
      "Il renvoie un message ICMP d'erreur à l'expéditeur",
      "Il diffuse la trame sur tous ses ports sauf le port d'entrée (Flooding)",
      "Il envoie une requête DNS"
    ],
    "choices": [
      "Il détruit immédiatement la trame",
      "Il renvoie un message ICMP d'erreur à l'expéditeur",
      "Il diffuse la trame sur tous ses ports sauf le port d'entrée (Flooding)",
      "Il envoie une requête DNS"
    ],
    "correctAnswer": 2,
    "explanation": "C'est l'inondation (Unknown Unicast Flooding) : le commutateur transmet la trame sur tous les autres ports du même VLAN dans l'espoir que le destinataire réponde.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q49",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Difficile",
    "question": "Quelle attaque réseau consiste à envoyer de fausses réponses ARP pour tromper les tables ARP d'autres machines et détourner leur trafic ?",
    "options": [
      "SYN Flood",
      "ARP Poisoning / ARP Spoofing",
      "Smurf Attack",
      "DNS Amplification"
    ],
    "choices": [
      "SYN Flood",
      "ARP Poisoning / ARP Spoofing",
      "Smurf Attack",
      "DNS Amplification"
    ],
    "correctAnswer": 1,
    "explanation": "L'ARP Poisoning (ou usurpation ARP) consiste à injecter de fausses annonces ARP gratuites pour associer l'IP d'une passerelle à la MAC de l'attaquant (attaque Man-in-the-Middle).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q50",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Facile",
    "question": "Quelle commande sous Windows ou Linux permet d'afficher la table de correspondance IP - MAC en cache ?",
    "options": [
      "arp -a",
      "route print",
      "netstat -r",
      "ip link"
    ],
    "choices": [
      "arp -a",
      "route print",
      "netstat -r",
      "ip link"
    ],
    "correctAnswer": 0,
    "explanation": "La commande 'arp -a' affiche le contenu actuel de la table de cache ARP du système d'exploitation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q51",
    "part": 1,
    "topic": "Switching & ARP",
    "difficulty": "Moyen",
    "question": "Quelle est la taille maximale d'une charge utile (MTU standard) transportée dans une trame Ethernet conventionnelle ?",
    "options": [
      "512 octets",
      "1024 octets",
      "1500 octets",
      "9000 octets"
    ],
    "choices": [
      "512 octets",
      "1024 octets",
      "1500 octets",
      "9000 octets"
    ],
    "correctAnswer": 2,
    "explanation": "La MTU (Maximum Transmission Unit) standard d'Ethernet est de 1500 octets. Au-delà, on parle de 'Jumbo Frames' (jusqu'à 9000 octets).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q52",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Facile",
    "question": "Quelle norme IEEE standardise le marquage (tagging) des trames pour le transport de multiples VLAN sur un lien Trunk ?",
    "options": [
      "IEEE 802.1D",
      "IEEE 802.1Q",
      "IEEE 802.3",
      "IEEE 802.11"
    ],
    "choices": [
      "IEEE 802.1D",
      "IEEE 802.1Q",
      "IEEE 802.3",
      "IEEE 802.11"
    ],
    "correctAnswer": 1,
    "explanation": "La norme IEEE 802.1Q ajoute un tag de 4 octets dans l'en-tête Ethernet, incluant un identifiant de VLAN (VLAN ID) sur 12 bits (valeurs de 1 à 4094).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q53",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Moyen",
    "question": "Quel équipement est indispensable pour permettre la communication entre deux hôtes situés dans deux VLANs différents ?",
    "options": [
      "Un concentrateur (Hub)",
      "Un commutateur de niveau 2 non-manageable",
      "Un équipement de niveau 3 (Routeur ou Switch L3)",
      "Un serveur DHCP"
    ],
    "choices": [
      "Un concentrateur (Hub)",
      "Un commutateur de niveau 2 non-manageable",
      "Un équipement de niveau 3 (Routeur ou Switch L3)",
      "Un serveur DHCP"
    ],
    "correctAnswer": 2,
    "explanation": "Les VLANs séparent les domaines de diffusion au niveau 2. La communication inter-VLAN nécessite obligatoirement un routage de niveau 3 (ex: Router-on-a-stick ou Switch multicouche).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q54",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Facile",
    "question": "Quelle forme de NAT permet à plusieurs machines d'un réseau privé de partager une seule adresse IP publique grâce aux numéros de ports de transport ?",
    "options": [
      "NAT Statique",
      "NAT Dynamique sans surcharge",
      "PAT (Port Address Translation) / NAT Overload",
      "NAT 1:1"
    ],
    "choices": [
      "NAT Statique",
      "NAT Dynamique sans surcharge",
      "PAT (Port Address Translation) / NAT Overload",
      "NAT 1:1"
    ],
    "correctAnswer": 2,
    "explanation": "Le PAT (Port Address Translation), souvent appelé NAT Overload, associe chaque connexion interne à un numéro de port source unique sur l'adresse IP publique du routeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q55",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Moyen",
    "question": "Quel est le rôle d'un port en mode 'Access' sur un commutateur manageable ?",
    "options": [
      "Transporter le trafic de plusieurs VLANs simultanément avec tags 802.1Q",
      "Appartenir à un seul VLAN et transmettre des trames non étiquetées (untagged) aux périphériques finaux",
      "Connecter exclusivement deux commutateurs entre eux",
      "Délivrer une alimentation PoE uniquement"
    ],
    "choices": [
      "Transporter le trafic de plusieurs VLANs simultanément avec tags 802.1Q",
      "Appartenir à un seul VLAN et transmettre des trames non étiquetées (untagged) aux périphériques finaux",
      "Connecter exclusivement deux commutateurs entre eux",
      "Délivrer une alimentation PoE uniquement"
    ],
    "correctAnswer": 1,
    "explanation": "Un port en mode Access est configuré pour un unique VLAN et délivre des trames standard non taguées vers un équipement utilisateur (PC, imprimante).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q56",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Difficile",
    "question": "Dans la norme 802.1Q, qu'appelle-t-on le 'VLAN Natif' sur une liaison Trunk ?",
    "options": [
      "Le VLAN réservé pour le protocole STP",
      "Le VLAN dont les trames transitent sur le Trunk sans étiquette 802.1Q (Untagged)",
      "Le VLAN qui ne peut jamais être routé",
      "Le VLAN d'administration par défaut 999"
    ],
    "choices": [
      "Le VLAN réservé pour le protocole STP",
      "Le VLAN dont les trames transitent sur le Trunk sans étiquette 802.1Q (Untagged)",
      "Le VLAN qui ne peut jamais être routé",
      "Le VLAN d'administration par défaut 999"
    ],
    "correctAnswer": 1,
    "explanation": "Sur un Trunk 802.1Q, le VLAN natif (par défaut VLAN 1 sur Cisco) est le seul VLAN dont les trames sont envoyées et reçues sans étiquette (untagged).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q57",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Moyen",
    "question": "Quelle technique de routage inter-VLAN utilise une seule interface physique de routeur découpée en sous-interfaces logiques dotées d'encapsulation 802.1Q ?",
    "options": [
      "Router-on-a-stick",
      "Dual-homing",
      "Static routing L1",
      "Port Mirroring"
    ],
    "choices": [
      "Router-on-a-stick",
      "Dual-homing",
      "Static routing L1",
      "Port Mirroring"
    ],
    "correctAnswer": 0,
    "explanation": "L'architecture 'Router-on-a-stick' utilise une seule liaison trunk connectée à un routeur, dont l'interface physique est subdivisée en sous-interfaces virtuelles (ex: fa0/0.10, fa0/0.20).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q58",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Difficile",
    "question": "Pourquoi le NAT peut-il poser des problèmes aux protocoles tels que FTP en mode actif ou SIP (VoIP) ?",
    "options": [
      "Parce qu'ils utilisent uniquement TCP",
      "Parce qu'ils intègrent des adresses IP et des ports applicatifs directement à l'intérieur de la charge utile (payload) du paquet",
      "Parce qu'ils ne supportent pas IPv4",
      "Parce qu'ils sont chiffrés avec TLS obligatoirement"
    ],
    "choices": [
      "Parce qu'ils utilisent uniquement TCP",
      "Parce qu'ils intègrent des adresses IP et des ports applicatifs directement à l'intérieur de la charge utile (payload) du paquet",
      "Parce qu'ils ne supportent pas IPv4",
      "Parce qu'ils sont chiffrés avec TLS obligatoirement"
    ],
    "correctAnswer": 1,
    "explanation": "Certains protocoles transmettent des adresses IP dans les données applicatives (payload). Un routeur NAT classique ne modifie que les en-têtes IP/TCP, nécessitant une passerelle applicative (ALG) pour fonctionner.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q59",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Facile",
    "question": "Quel est l'identifiant de VLAN (VLAN ID) par défaut sur la quasi-totalité des commutateurs Ethernet du marché ?",
    "options": [
      "VLAN 0",
      "VLAN 1",
      "VLAN 100",
      "VLAN 4095"
    ],
    "choices": [
      "VLAN 0",
      "VLAN 1",
      "VLAN 100",
      "VLAN 4095"
    ],
    "correctAnswer": 1,
    "explanation": "Le VLAN 1 est le VLAN par défaut en usine. Tous les ports y sont affectés initialement et il ne peut pas être supprimé.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q60",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Moyen",
    "question": "Quelle est la taille maximale du champ VLAN ID dans l'en-tête 802.1Q ?",
    "options": [
      "8 bits (256 VLANs)",
      "12 bits (4096 VLANs)",
      "16 bits (65536 VLANs)",
      "24 bits"
    ],
    "choices": [
      "8 bits (256 VLANs)",
      "12 bits (4096 VLANs)",
      "16 bits (65536 VLANs)",
      "24 bits"
    ],
    "correctAnswer": 1,
    "explanation": "Le VID (VLAN Identifier) est codé sur 12 bits, ce qui autorise 2^12 = 4096 identifiants (les valeurs 0 et 4095 étant réservées, la plage valide va de 1 à 4094).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q61",
    "part": 1,
    "topic": "VLAN & NAT",
    "difficulty": "Moyen",
    "question": "Quelle méthode de configuration NAT mappe une adresse IP privée spécifique vers une adresse IP publique unique de façon permanente ?",
    "options": [
      "NAT Statique (One-to-One)",
      "NAT Dynamique",
      "PAT",
      "Masquerading"
    ],
    "choices": [
      "NAT Statique (One-to-One)",
      "NAT Dynamique",
      "PAT",
      "Masquerading"
    ],
    "correctAnswer": 0,
    "explanation": "Le NAT statique établit une traduction bijective permanente entre une IP privée interne et une IP publique dédiée (couramment utilisé pour héberger un serveur web ou mail).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q62",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Facile",
    "question": "Quelle est la principale différence fonctionnelle entre TCP et UDP ?",
    "options": [
      "TCP est orienté connexion et fiable, UDP est sans connexion et non fiable (best-effort)",
      "TCP est plus rapide qu'UDP pour le streaming vidéo",
      "UDP garantit la livraison et l'ordonnancement des paquets",
      "TCP fonctionne à la couche 3 et UDP à la couche 4"
    ],
    "choices": [
      "TCP est orienté connexion et fiable, UDP est sans connexion et non fiable (best-effort)",
      "TCP est plus rapide qu'UDP pour le streaming vidéo",
      "UDP garantit la livraison et l'ordonnancement des paquets",
      "TCP fonctionne à la couche 3 et UDP à la couche 4"
    ],
    "correctAnswer": 0,
    "explanation": "TCP garantit l'arrivée des données en ordre et sans perte grâce aux accusés de réception (ACK) et retransmissions, tandis qu'UDP transmet des datagrammes sans poignée de main ni garantie de livraison.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q63",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Facile",
    "question": "Quelle séquence d'échanges constitue la poignée de main à trois voies (Three-Way Handshake) de TCP lors de l'établissement d'une connexion ?",
    "options": [
      "SYN -> SYN-ACK -> ACK",
      "ACK -> SYN -> SYN-ACK",
      "HELLO -> ACK -> DATA",
      "FIN -> ACK -> FIN-ACK"
    ],
    "choices": [
      "SYN -> SYN-ACK -> ACK",
      "ACK -> SYN -> SYN-ACK",
      "HELLO -> ACK -> DATA",
      "FIN -> ACK -> FIN-ACK"
    ],
    "correctAnswer": 0,
    "explanation": "Le client envoie un segment avec le flag SYN, le serveur répond par un segment avec SYN et ACK armés, puis le client confirme avec un segment ACK.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q64",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Moyen",
    "question": "Quel mécanisme TCP permet au récepteur d'indiquer à l'émetteur la quantité de données qu'il est capable d'accepter en mémoire tampon sans être submergé ?",
    "options": [
      "Le contrôle de congestion",
      "Le fenêtrage glissant (Window Size / Sliding Window)",
      "La somme de contrôle (Checksum)",
      "Le Three-way Handshake"
    ],
    "choices": [
      "Le contrôle de congestion",
      "Le fenêtrage glissant (Window Size / Sliding Window)",
      "La somme de contrôle (Checksum)",
      "Le Three-way Handshake"
    ],
    "correctAnswer": 1,
    "explanation": "Le contrôle de flux TCP repose sur le champ 'Window Size' (taille de la fenêtre glissante) qui indique le nombre d'octets que le récepteur peut stocker dans son buffer de réception.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q65",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Facile",
    "question": "Quel est le port d'écoute standard pour le protocole SSH (Secure Shell) ?",
    "options": [
      "Port 21",
      "Port 22",
      "Port 23",
      "Port 25"
    ],
    "choices": [
      "Port 21",
      "Port 22",
      "Port 23",
      "Port 25"
    ],
    "correctAnswer": 1,
    "explanation": "SSH utilise par défaut le port TCP 22. Le port 21 est pour FTP, 23 pour Telnet et 25 pour SMTP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q66",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Facile",
    "question": "Quels sont les numéros de ports conventionnels pour HTTP et HTTPS respectivement ?",
    "options": [
      "80 et 8080",
      "80 et 443",
      "443 et 8443",
      "25 et 110"
    ],
    "choices": [
      "80 et 8080",
      "80 et 443",
      "443 et 8443",
      "25 et 110"
    ],
    "correctAnswer": 1,
    "explanation": "HTTP non sécurisé écoute sur le port TCP 80, tandis que HTTPS (HTTP sécurisé avec TLS) écoute sur le port TCP 443.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q67",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Moyen",
    "question": "Quel flag TCP est envoyé pour réinitialiser ou refuser abruptement une connexion (par exemple lorsqu'un port est fermé) ?",
    "options": [
      "FIN",
      "SYN",
      "RST (Reset)",
      "URG"
    ],
    "choices": [
      "FIN",
      "SYN",
      "RST (Reset)",
      "URG"
    ],
    "correctAnswer": 2,
    "explanation": "Le drapeau RST (Reset) ordonne la réinitialisation immédiate d'une connexion TCP en cas d'erreur ou si la destination n'écoute pas sur ce port.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q68",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Difficile",
    "question": "Quel algorithme de contrôle de congestion TCP commence par une phase d'augmentation exponentielle appelée 'Slow Start' ?",
    "options": [
      "Algorithme de Nagle",
      "Algorithme de Jacobson (Slow Start et Congestion Avoidance)",
      "Algorithme de Dijkstra",
      "Algorithme de Token Bucket"
    ],
    "choices": [
      "Algorithme de Nagle",
      "Algorithme de Jacobson (Slow Start et Congestion Avoidance)",
      "Algorithme de Dijkstra",
      "Algorithme de Token Bucket"
    ],
    "correctAnswer": 1,
    "explanation": "Le contrôle de congestion TCP (RFC 5681) utilise le démarrage lent (Slow Start) où la fenêtre de congestion (cwnd) double à chaque RTT jusqu'au seuil ssthresh, puis passe en évitement de congestion.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q69",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Facile",
    "question": "Quel protocole de couche Application repose prioritairement sur UDP port 53 pour ses résolutions standard courantes ?",
    "options": [
      "DNS",
      "FTP",
      "SMTP",
      "BGP"
    ],
    "choices": [
      "DNS",
      "FTP",
      "SMTP",
      "BGP"
    ],
    "correctAnswer": 0,
    "explanation": "Les requêtes et réponses DNS courantes transitent en UDP sur le port 53 pour minimiser la latence (TCP 53 est utilisé pour les transferts de zone ou les réponses > 512 octets).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q70",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Moyen",
    "question": "Quelle plage de numéros de ports correspond aux 'ports bien connus' (Well-Known Ports) réservés par l'IANA ?",
    "options": [
      "0 à 1023",
      "1024 à 49151",
      "49152 à 65535",
      "1 à 255"
    ],
    "choices": [
      "0 à 1023",
      "1024 à 49151",
      "49152 à 65535",
      "1 à 255"
    ],
    "correctAnswer": 0,
    "explanation": "Les ports de 0 à 1023 sont les 'Well-Known Ports' réservés aux services système fondamentaux. De 1024 à 49151 sont les ports enregistrés, et de 49152 à 65535 les ports dynamiques/éphémères.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q71",
    "part": 1,
    "topic": "TCP / UDP & Ports",
    "difficulty": "Difficile",
    "question": "Quelle combinaison de flags TCP caractérise l'attaque par déni de service SYN Flood ?",
    "options": [
      "Envoi massif de segments SYN sans jamais finaliser avec l'ACK final, saturant la table des demi-connexions du serveur",
      "Envoi continu de segments FIN pour fermer les sessions",
      "Envoi de segments RST vers le routeur",
      "Envoi de trames broadcast UDP port 7"
    ],
    "choices": [
      "Envoi massif de segments SYN sans jamais finaliser avec l'ACK final, saturant la table des demi-connexions du serveur",
      "Envoi continu de segments FIN pour fermer les sessions",
      "Envoi de segments RST vers le routeur",
      "Envoi de trames broadcast UDP port 7"
    ],
    "correctAnswer": 0,
    "explanation": "Le SYN Flood inonde la cible de requêtes SYN avec de fausses adresses IP sources ; le serveur alloue des ressources (SYN-RCVD) en attendant l'ACK qui ne vient jamais, épuisant sa file d'attente (backlog queue).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q72",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Facile",
    "question": "Quel acronyme résume les 4 étapes chronologiques de négociation d'un bail DHCP IPv4 ?",
    "options": [
      "DORA (Discover, Offer, Request, Acknowledge)",
      "REST (Request, Establish, Send, Terminate)",
      "ACID (Alloc, Check, Init, Done)",
      "PING (Probe, Identify, Negotiate, Grant)"
    ],
    "choices": [
      "DORA (Discover, Offer, Request, Acknowledge)",
      "REST (Request, Establish, Send, Terminate)",
      "ACID (Alloc, Check, Init, Done)",
      "PING (Probe, Identify, Negotiate, Grant)"
    ],
    "correctAnswer": 0,
    "explanation": "Le processus DHCP suit la séquence DORA : DHCPDiscover (client broadcast), DHCPOffer (serveur unicast/broadcast), DHCPRequest (client sélectionne l'offre), DHCPAck (serveur valide le bail).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q73",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Moyen",
    "question": "Quels ports UDP sont utilisés respectivement par le client DHCP et le serveur DHCP en IPv4 ?",
    "options": [
      "Client UDP 68, Serveur UDP 67",
      "Client UDP 67, Serveur UDP 68",
      "Port TCP 53 et 54",
      "Port UDP 161 et 162"
    ],
    "choices": [
      "Client UDP 68, Serveur UDP 67",
      "Client UDP 67, Serveur UDP 68",
      "Port TCP 53 et 54",
      "Port UDP 161 et 162"
    ],
    "correctAnswer": 0,
    "explanation": "En IPv4, le serveur DHCP écoute sur le port UDP 67 et le client reçoit les réponses sur le port UDP 68.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q74",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Facile",
    "question": "Quel type d'enregistrement DNS associe un nom d'hôte à une adresse IPv4 ?",
    "options": [
      "Enregistrement A",
      "Enregistrement AAAA",
      "Enregistrement CNAME",
      "Enregistrement MX"
    ],
    "choices": [
      "Enregistrement A",
      "Enregistrement AAAA",
      "Enregistrement CNAME",
      "Enregistrement MX"
    ],
    "correctAnswer": 0,
    "explanation": "L'enregistrement 'A' mappe un nom de domaine vers une adresse IPv4 (32 bits). Pour IPv6 (128 bits), on utilise l'enregistrement 'AAAA' (quad-A).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q75",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Moyen",
    "question": "Quel type d'enregistrement DNS sert à définir un alias pointant vers un autre nom canonique ?",
    "options": [
      "CNAME (Canonical Name)",
      "PTR (Pointer)",
      "NS (Name Server)",
      "SOA (Start of Authority)"
    ],
    "choices": [
      "CNAME (Canonical Name)",
      "PTR (Pointer)",
      "NS (Name Server)",
      "SOA (Start of Authority)"
    ],
    "correctAnswer": 0,
    "explanation": "L'enregistrement CNAME (Canonical Name) permet d'associer un alias à un autre domaine (ex: www.domaine.com CNAME domaine.com).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q76",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Moyen",
    "question": "Quel enregistrement DNS identifie les serveurs de messagerie électronique (Mail Exchange) chargés de recevoir les courriels pour un domaine ?",
    "options": [
      "Enregistrement MX",
      "Enregistrement TXT",
      "Enregistrement PTR",
      "Enregistrement SRV"
    ],
    "choices": [
      "Enregistrement MX",
      "Enregistrement TXT",
      "Enregistrement PTR",
      "Enregistrement SRV"
    ],
    "correctAnswer": 0,
    "explanation": "L'enregistrement MX (Mail Exchanger) spécifie les serveurs SMTP destinataires du courrier électronique d'un domaine avec leur priorité relative.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q77",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Difficile",
    "question": "Quelle zone DNS spéciale est interrogée pour effectuer une résolution inverse (obtenir un nom d'hôte à partir d'une adresse IPv4 avec un enregistrement PTR) ?",
    "options": [
      "in-addr.arpa",
      "ip6.arpa",
      "root-servers.net",
      "dns.reversed"
    ],
    "choices": [
      "in-addr.arpa",
      "ip6.arpa",
      "root-servers.net",
      "dns.reversed"
    ],
    "correctAnswer": 0,
    "explanation": "La résolution inverse IPv4 utilise le domaine spécial 'in-addr.arpa' où les octets de l'adresse IP sont inversés (ex: 4.3.2.1.in-addr.arpa pour 1.2.3.4) avec des enregistrements PTR.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q78",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre une requête DNS récursive et une requête itérative ?",
    "options": [
      "Une requête récursive exige que le serveur DNS contacté résolve complètement le nom en interrogeant lui-même d'autres serveurs si nécessaire",
      "Une requête récursive ne fonctionne qu'en local",
      "Une requête itérative renvoie toujours directement l'adresse IP",
      "La requête récursive utilise obligatoirement TCP"
    ],
    "choices": [
      "Une requête récursive exige que le serveur DNS contacté résolve complètement le nom en interrogeant lui-même d'autres serveurs si nécessaire",
      "Une requête récursive ne fonctionne qu'en local",
      "Une requête itérative renvoie toujours directement l'adresse IP",
      "La requête récursive utilise obligatoirement TCP"
    ],
    "correctAnswer": 0,
    "explanation": "Dans une requête récursive, le résolveur demande au serveur de lui donner la réponse finale complète. Dans une requête itérative, le serveur renvoie la meilleure référence vers un autre serveur faisant autorité.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q79",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Difficile",
    "question": "Quelle extension du protocole DNS ajoute une signature cryptographique aux enregistrements pour authentifier l'origine et garantir l'intégrité des réponses ?",
    "options": [
      "DNSSEC (DNS Security Extensions)",
      "DoH (DNS over HTTPS)",
      "DoT (DNS over TLS)",
      "mDNS"
    ],
    "choices": [
      "DNSSEC (DNS Security Extensions)",
      "DoH (DNS over HTTPS)",
      "DoT (DNS over TLS)",
      "mDNS"
    ],
    "correctAnswer": 0,
    "explanation": "DNSSEC utilise la cryptographie asymétrique pour signer les zones DNS (clés RRSIG, DNSKEY, DS), empêchant les attaques d'empoisonnement de cache (DNS Cache Poisoning).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q80",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Facile",
    "question": "Quel agent réseau permet de relayer les requêtes DHCP broadcast d'un client vers un serveur DHCP situé sur un autre sous-réseau ?",
    "options": [
      "Agent de relais DHCP (DHCP Relay / IP Helper-Address)",
      "Un commutateur L1",
      "Un proxy HTTP",
      "Une passerelle NAT"
    ],
    "choices": [
      "Agent de relais DHCP (DHCP Relay / IP Helper-Address)",
      "Un commutateur L1",
      "Un proxy HTTP",
      "Une passerelle NAT"
    ],
    "correctAnswer": 0,
    "explanation": "Puisque les routeurs bloquent les diffusions, un 'DHCP Relay Agent' (ou ip helper-address) intercepte les broadcasts DHCP et les réexpédie en unicast vers le serveur DHCP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q81",
    "part": 1,
    "topic": "DHCP & DNS",
    "difficulty": "Moyen",
    "question": "Que représente le paramètre TTL (Time to Live) dans un enregistrement DNS ?",
    "options": [
      "La durée de validité pendant laquelle un résolveur ou un client peut garder la réponse dans son cache local",
      "Le nombre de routeurs que le paquet DNS peut traverser",
      "Le délai de timeout avant d'abandonner la requête",
      "La durée du bail DHCP associé"
    ],
    "choices": [
      "La durée de validité pendant laquelle un résolveur ou un client peut garder la réponse dans son cache local",
      "Le nombre de routeurs que le paquet DNS peut traverser",
      "Le délai de timeout avant d'abandonner la requête",
      "La durée du bail DHCP associé"
    ],
    "correctAnswer": 0,
    "explanation": "En DNS, le TTL (exprimé en secondes) indique combien de temps les serveurs intermédiaires et clients peuvent conserver la réponse en cache avant de la redemander.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q82",
    "part": 1,
    "topic": "HTTP / HTTPS",
    "difficulty": "Facile",
    "question": "Quel code d'état HTTP signale un succès standard de la requête (OK) ?",
    "options": [
      "200 OK",
      "201 Created",
      "301 Moved Permanently",
      "404 Not Found"
    ],
    "choices": [
      "200 OK",
      "201 Created",
      "301 Moved Permanently",
      "404 Not Found"
    ],
    "correctAnswer": 0,
    "explanation": "Le code 200 indique que la requête HTTP a été traitée avec succès par le serveur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q83",
    "part": 1,
    "topic": "HTTP / HTTPS",
    "difficulty": "Moyen",
    "question": "Quelle méthode HTTP est par définition 'idempotente' et conçue pour remplacer intégralement une ressource existante à l'URL ciblée ?",
    "options": [
      "POST",
      "PUT",
      "PATCH",
      "CONNECT"
    ],
    "choices": [
      "POST",
      "PUT",
      "PATCH",
      "CONNECT"
    ],
    "correctAnswer": 1,
    "explanation": "PUT est idempotente : répéter la requête N fois produit le même résultat sur la ressource (contrairement à POST qui crée de nouvelles entités à chaque appel).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q84",
    "part": 1,
    "topic": "HTTP / HTTPS",
    "difficulty": "Facile",
    "question": "Que signifie le code d'état HTTP 403 ?",
    "options": [
      "Ressource non trouvée",
      "Accès interdit (Forbidden)",
      "Erreur interne du serveur",
      "Mauvaise requête (Bad Request)"
    ],
    "choices": [
      "Ressource non trouvée",
      "Accès interdit (Forbidden)",
      "Erreur interne du serveur",
      "Mauvaise requête (Bad Request)"
    ],
    "correctAnswer": 1,
    "explanation": "Le code 403 Forbidden signifie que le serveur a compris la requête mais refuse formellement de l'exécuter pour des raisons d'autorisations.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q85",
    "part": 1,
    "topic": "HTTP / HTTPS",
    "difficulty": "Moyen",
    "question": "Quel protocole cryptographique sous-jacent assure la confidentialité et l'intégrité des échanges dans HTTPS ?",
    "options": [
      "IPsec",
      "TLS (Transport Layer Security)",
      "SSH",
      "Kerberos"
    ],
    "choices": [
      "IPsec",
      "TLS (Transport Layer Security)",
      "SSH",
      "Kerberos"
    ],
    "correctAnswer": 1,
    "explanation": "HTTPS utilise TLS (successeur de SSL) pour négocier des clés symétriques de session chiffrées au-dessus d'une connexion TCP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q86",
    "part": 1,
    "topic": "HTTP / HTTPS",
    "difficulty": "Difficile",
    "question": "Quelle amélioration majeure a été introduite dans HTTP/2 par rapport à HTTP/1.1 pour réduire la latence ?",
    "options": [
      "Le multiplexage de requêtes multiples sur une seule connexion TCP persistante avec trames binaires",
      "L'abandon total de TCP au profit d'UDP",
      "La suppression des en-têtes HTTP",
      "L'obligation d'utiliser des adresses IPv6"
    ],
    "choices": [
      "Le multiplexage de requêtes multiples sur une seule connexion TCP persistante avec trames binaires",
      "L'abandon total de TCP au profit d'UDP",
      "La suppression des en-têtes HTTP",
      "L'obligation d'utiliser des adresses IPv6"
    ],
    "correctAnswer": 0,
    "explanation": "HTTP/2 introduit le format binaire, la compression HPACK des en-têtes et le multiplexage de multiples flux bidirectionnels simultanés sur une unique connexion TCP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q87",
    "part": 1,
    "topic": "HTTP / HTTPS",
    "difficulty": "Difficile",
    "question": "Sur quel protocole de transport repose HTTP/3 (norme RFC 9114) pour éliminer le problème du blocage en tête de ligne (Head-of-Line Blocking) ?",
    "options": [
      "TCP",
      "QUIC (au-dessus d'UDP)",
      "SCTP",
      "DCCP"
    ],
    "choices": [
      "TCP",
      "QUIC (au-dessus d'UDP)",
      "SCTP",
      "DCCP"
    ],
    "correctAnswer": 1,
    "explanation": "HTTP/3 s'appuie sur le protocole QUIC (Quick UDP Internet Connections) qui s'exécute sur UDP, intégrant nativement le chiffrement TLS 1.3 et éliminant le blocage en tête de ligne de TCP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q88",
    "part": 1,
    "topic": "Wi-Fi & Sécurité réseau",
    "difficulty": "Moyen",
    "question": "Quel protocole de sécurité Wi-Fi moderne remplace la poignée de main 4-way WPA2 par l'échange SAE (Simultaneous Authentication of Equals) pour résister aux attaques par dictionnaire hors-ligne ?",
    "options": [
      "WEP",
      "WPA",
      "WPA2-PSK",
      "WPA3-Personal"
    ],
    "choices": [
      "WEP",
      "WPA",
      "WPA2-PSK",
      "WPA3-Personal"
    ],
    "correctAnswer": 3,
    "explanation": "WPA3 utilise le protocole SAE (Simultaneous Authentication of Equals, basé sur le protocole Dragonfly) qui immunise le réseau contre les attaques par dictionnaire passives hors-ligne.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q89",
    "part": 1,
    "topic": "Wi-Fi & Sécurité réseau",
    "difficulty": "Moyen",
    "question": "Quelle est la principale différence entre un pare-feu sans état (Stateless) et un pare-feu à état (Stateful / SPI) ?",
    "options": [
      "Le pare-feu à état suit l'état et le contexte des connexions actives (table d'état) pour autoriser dynamiquement les paquets retour légitimes",
      "Le pare-feu sans état est plus lent",
      "Le pare-feu à état ne fonctionne qu'au niveau 7",
      "Le pare-feu sans état chiffre toutes les trames"
    ],
    "choices": [
      "Le pare-feu à état suit l'état et le contexte des connexions actives (table d'état) pour autoriser dynamiquement les paquets retour légitimes",
      "Le pare-feu sans état est plus lent",
      "Le pare-feu à état ne fonctionne qu'au niveau 7",
      "Le pare-feu sans état chiffre toutes les trames"
    ],
    "correctAnswer": 0,
    "explanation": "Un pare-feu 'Stateful' maintient une table de connexions (ex: sessions TCP établies) et autorise automatiquement les paquets retours appartenant à une session déjà approuvée.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q90",
    "part": 1,
    "topic": "Wi-Fi & Sécurité réseau",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'une DMZ (Zone Démilitarisée) dans une architecture de sécurité réseau d'entreprise ?",
    "options": [
      "Un sous-réseau isolé hébergeant les serveurs accessibles depuis l'extérieur tout en protégeant le réseau local interne",
      "Un réseau sans aucun pare-feu",
      "Un réseau virtuel exclusivement réservé aux tests de logiciels malveillants",
      "Une plage d'adresses IP non routables"
    ],
    "choices": [
      "Un sous-réseau isolé hébergeant les serveurs accessibles depuis l'extérieur tout en protégeant le réseau local interne",
      "Un réseau sans aucun pare-feu",
      "Un réseau virtuel exclusivement réservé aux tests de logiciels malveillants",
      "Une plage d'adresses IP non routables"
    ],
    "correctAnswer": 0,
    "explanation": "La DMZ est une zone intermédiaire sécurisée entre Internet et le réseau interne de l'entreprise. En cas de compromission d'un serveur public (web, mail), l'attaquant ne peut pas accéder directement au réseau local.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q91",
    "part": 1,
    "topic": "Wi-Fi & Sécurité réseau",
    "difficulty": "Difficile",
    "question": "Dans le protocole IPsec, quel mode chiffre à la fois la charge utile et l'en-tête IP d'origine en ajoutant un nouvel en-tête IP externe pour relier deux passerelles (VPN Site-à-Site) ?",
    "options": [
      "Mode Transport",
      "Mode Tunnel",
      "Mode AH simple",
      "Mode Pass-through"
    ],
    "choices": [
      "Mode Transport",
      "Mode Tunnel",
      "Mode AH simple",
      "Mode Pass-through"
    ],
    "correctAnswer": 1,
    "explanation": "Le mode Tunnel d'IPsec encapsule et chiffre l'intégralité du paquet IP d'origine derrière un nouvel en-tête IP public, ce qui en fait le mode standard pour les VPN de site à site.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q92",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Facile",
    "question": "Quel protocole de la couche Réseau est utilisé par la commande 'ping' pour tester la connectivité et la latence avec un hôte distant ?",
    "options": [
      "TCP",
      "UDP",
      "ICMP (Internet Control Message Protocol)",
      "IGMP"
    ],
    "choices": [
      "TCP",
      "UDP",
      "ICMP (Internet Control Message Protocol)",
      "IGMP"
    ],
    "correctAnswer": 2,
    "explanation": "La commande ping émet des paquets ICMP Echo Request (Type 8) et attend des réponses ICMP Echo Reply (Type 0).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q93",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Moyen",
    "question": "Comment l'utilitaire 'traceroute' (ou 'tracert') parvient-il à cartographier chaque routeur traversé sur le chemin d'un paquet ?",
    "options": [
      "En incrémentant le champ TTL (Time to Live) à partir de 1 et en recevant les messages ICMP 'Time Exceeded' des routeurs",
      "En interrogeant directement la table BGP centrale",
      "En lisant l'adresse MAC de chaque équipement",
      "En envoyant des requêtes ARP broadcast"
    ],
    "choices": [
      "En incrémentant le champ TTL (Time to Live) à partir de 1 et en recevant les messages ICMP 'Time Exceeded' des routeurs",
      "En interrogeant directement la table BGP centrale",
      "En lisant l'adresse MAC de chaque équipement",
      "En envoyant des requêtes ARP broadcast"
    ],
    "correctAnswer": 0,
    "explanation": "Traceroute envoie des paquets successifs avec TTL=1, TTL=2, TTL=3... Chaque routeur décrémente le TTL ; lorsqu'il atteint 0, le routeur rejette le paquet et renvoie une notification ICMP Type 11 (Time Exceeded), révélant son IP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q94",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Facile",
    "question": "Quelle commande Linux moderne de la suite iproute2 remplace la commande historique 'ifconfig' pour afficher et configurer les adresses IP ?",
    "options": [
      "ip addr show (ou ip a)",
      "route -n",
      "netstat -l",
      "ping -c"
    ],
    "choices": [
      "ip addr show (ou ip a)",
      "route -n",
      "netstat -l",
      "ping -c"
    ],
    "correctAnswer": 0,
    "explanation": "La commande moderne recommandée sur Linux est 'ip addr show' (abrégée en 'ip a'), faisant partie du paquet iproute2 qui remplace net-tools.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q95",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Moyen",
    "question": "Quelle option de la commande 'netstat' permet d'afficher les sockets en écoute avec leurs numéros de ports au format numérique sous Linux ?",
    "options": [
      "netstat -tuln",
      "netstat -a",
      "netstat -r",
      "netstat -s"
    ],
    "choices": [
      "netstat -tuln",
      "netstat -a",
      "netstat -r",
      "netstat -s"
    ],
    "correctAnswer": 0,
    "explanation": "-t (TCP), -u (UDP), -l (Listening), -n (Numeric ports/IPs sans résolution DNS).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q96",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Moyen",
    "question": "Quel outil en ligne de commande moderne remplace 'nslookup' pour interroger de manière détaillée les enregistrements DNS sous Linux ?",
    "options": [
      "dig (Domain Information Groper)",
      "curl",
      "nmap",
      "tcpdump"
    ],
    "choices": [
      "dig (Domain Information Groper)",
      "curl",
      "nmap",
      "tcpdump"
    ],
    "correctAnswer": 0,
    "explanation": "L'outil 'dig' (Domain Information Groper) est l'utilitaire de référence pour diagnostiquer les serveurs DNS et inspecter les réponses protocolaires brutes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q97",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Difficile",
    "question": "Quel outil d'analyse réseau permet de capturer et d'inspecter les paquets directement depuis la ligne de commande Linux ?",
    "options": [
      "tcpdump",
      "iptables",
      "ethtool",
      "dhclient"
    ],
    "choices": [
      "tcpdump",
      "iptables",
      "ethtool",
      "dhclient"
    ],
    "correctAnswer": 0,
    "explanation": "tcpdump est l'analyseur de paquets en ligne de commande le plus puissant sous Unix/Linux, basé sur la bibliothèque libpcap (équivalent console de Wireshark).",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q98",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Facile",
    "question": "Quelle commande sous Windows vide le cache local des résolutions DNS du client ?",
    "options": [
      "ipconfig /flushdns",
      "ipconfig /release",
      "ipconfig /renew",
      "netsh reset"
    ],
    "choices": [
      "ipconfig /flushdns",
      "ipconfig /release",
      "ipconfig /renew",
      "netsh reset"
    ],
    "correctAnswer": 0,
    "explanation": "La commande 'ipconfig /flushdns' vide le cache de résolution de noms DNS de Windows.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q99",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Moyen",
    "question": "Quel scanner de ports et d'audit réseau réputé permet de découvrir les hôtes actifs, les ports ouverts et les versions d'OS sur un réseau ?",
    "options": [
      "Nmap (Network Mapper)",
      "Putty",
      "FileZilla",
      "Cisco Packet Tracer"
    ],
    "choices": [
      "Nmap (Network Mapper)",
      "Putty",
      "FileZilla",
      "Cisco Packet Tracer"
    ],
    "correctAnswer": 0,
    "explanation": "Nmap est le scanner de réseau de référence pour la cartographie des réseaux et la détection des services ouverts et des vulnérabilités.",
    "source": "Conforme au programme"
  },
  {
    "id": "p1-q100",
    "part": 1,
    "topic": "Configuration réseau",
    "difficulty": "Difficile",
    "question": "Quelle commande Linux permet d'afficher la table de routage du noyau avec les passerelles et métriques sous forme numérique ?",
    "options": [
      "ip route show (ou route -n)",
      "arp -n",
      "iptables -L",
      "systemctl status network"
    ],
    "choices": [
      "ip route show (ou route -n)",
      "arp -n",
      "iptables -L",
      "systemctl status network"
    ],
    "correctAnswer": 0,
    "explanation": "'ip route show' ou 'route -n' affiche directement la table de routage du noyau Linux.",
    "source": "Conforme au programme"
  }
];
