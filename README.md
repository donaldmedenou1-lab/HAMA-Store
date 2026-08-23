# HAMA Store — site vitrine

Site web professionnel pour HAMA Store, boutique de téléphones et produits électroniques.

## Structure
- `index.html` : page principale
- `css/style.css` : design responsive
- `js/script.js` : filtres produits + formulaire WhatsApp
- `img/` : images locales temporaires à remplacer

## Informations intégrées
- HAMA Store
- 97 00 57 44
- 93 37 31 71
- mamahanif568@gmail.com
- Snapchat : hanif20253919
- TikTok : @soua977

## Remplacer les images
Remplace simplement les fichiers dans `img/` en gardant les mêmes noms :
`iphone.jpg`, `samsung.jpg`, `airpods.jpg`, `watch.jpg`, `headphones.jpg`, `charger.jpg`.

## Ouvrir le site
Double-clique sur `index.html`, ou ouvre-le avec Chrome/Edge.

## Modifier les prix
Les prix ne sont pas affichés pour l'instant afin d'éviter d'afficher un tarif incorrect. Ils pourront être ajoutés quand tu me donneras les modèles et prix.


## Logo
Le logo fictif est dans `img/logo-hama.svg`.

Pour mettre le vrai logo plus tard :
1. garde de préférence le format SVG ou PNG ;
2. remplace `img/logo-hama.svg` par ton vrai logo ;
3. conserve le même nom `logo-hama.svg` si tu veux éviter de modifier le HTML.

Le site possède déjà un emplacement de logo dans l'en-tête et le pied de page.


## Envoi des demandes
- **WhatsApp** : ouvre WhatsApp avec le message préparé vers le numéro HAMA Store.
- **Email** : ouvre l'application email configurée sur l'ordinateur avec `mamahanif568@gmail.com`, l'objet et le message déjà remplis.

Important : la version actuelle utilise `mailto:`. Elle ne nécessite pas de serveur, mais elle dépend d'une application/service email configuré sur l'appareil. Pour un envoi automatique même sans application email, il faudra ensuite connecter un service de formulaire/email (par exemple Formspree, EmailJS ou un backend).


## Formulaire email — Formspree

Le formulaire est maintenant préparé pour **Formspree**. Formspree permet d'envoyer un formulaire HTML vers son service sans créer de serveur PHP/Node. Le formulaire doit utiliser une URL `action` unique et les champs doivent avoir un attribut `name`.

### Connexion en 4 étapes
1. Crée un compte sur Formspree.
2. Crée un nouveau formulaire avec **New Form**.
3. Dans **Integration**, récupère l'endpoint de ton formulaire, par exemple `https://formspree.io/f/xxxxxxxx`.
4. Dans `index.html`, remplace :
   `https://formspree.io/f/REMPLACE_MOI`
   par ton endpoint personnel.

L'adresse de réception configurée dans Formspree peut être `mamahanif568@gmail.com`.

### Important
Ne mets jamais une clé API privée dans `index.html` ou `script.js`. Pour ce site, l'endpoint public du formulaire suffit.


## Images catalogue
Les 6 fichiers du dossier `img/` ont été remplacés par des visuels locaux haute qualité de présentation :
- `iphone.jpg`
- `samsung.jpg`
- `airpods.jpg`
- `headphones.jpg`
- `charger.jpg`
- `watch.jpg`

Ils servent de visuels temporaires pour la maquette commerciale. Quand tu m'enverras les vraies photos des produits, je pourrai les remplacer en conservant exactement les mêmes emplacements et proportions.


## Formulaire gratuit — FormSubmit
Le formulaire utilise maintenant FormSubmit à la place de Formspree. FormSubmit indique que son endpoint HTML est gratuit, ne nécessite pas de compte pour la connexion de base et qu'une première soumission déclenche une demande de confirmation de l'adresse email. citeturn0search0turn0search2

### Première activation
1. Mets le site en ligne (GitHub Pages, Netlify, etc.).
2. Ouvre la page du site.
3. Envoie une première demande de test depuis le formulaire.
4. Vérifie la boîte `mamahanif568@gmail.com` et clique sur le lien de confirmation FormSubmit.
5. Après confirmation, les nouvelles demandes seront transférées à cette adresse.

Le formulaire utilise aussi `_subject`, `_template`, un honeypot `_honey` et reCAPTCHA activé. FormSubmit recommande de conserver la protection anti-spam. citeturn0search2turn0search8

### Important
FormSubmit précise que le formulaire ne fonctionnera pas correctement si tu ouvres simplement `index.html` comme fichier local : il doit être servi par un serveur web. citeturn0search8
