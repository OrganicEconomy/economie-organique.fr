Title: Petites simulations économiques
Date: 2025-02-04 15:00
Modified: 2025-02-04 15:00
Category: Simulation interactive
Tags: simulation, capitalisme, économie-organique
Slug: petites-simulations-économiques
Lang: fr
Author: Gus
Summary: Dans cet article, je vous propose de faire quelques simulations pour voir un peu où nous mène fatalement et systématiquement une économie capitaliste et, en comparaison, où ne nous y mène pas une économie organique.
Status: published
Custom_scripts: matter.min.js, simulation-économique.js
Featured_image: images/petites-simulations-economiques-min.jpg

> Le capitalisme est un jeu de dés : soit vous avez de la chance ou vous trichez, et vous gagnez ; soit vous êtes intègre et malchanceux, et vous perdez.

Afin d'affirmer ou d'infirmer ce postulat, nous allons nous adonner dans cet article à plusieurs mises en situation.
Pour cela, nous allons faire des simulations graphiques, à base de balles rebondissantes, afin de voir un peu les implications d'une monnaie capitaliste.

Dans un prochain article, nous testerons la même chose avec, en comparaison, l'économie organique. 

Et vous allez voir que les résultats sont à la fois prévisibles et surprenants.

# La base

Avant tout, il est pertinent de préciser qu'une simulation reste quoi qu'il arrive une simulation.
En tout cas, c'est ce que me dit ma femme.

Ce que je veux dire c'est qu'il n'est et ne sera jamais possible de simuler la vraie vie.
Et de toute façon ça ne servirait à rien vu qu'une simulation est justement sensée simplifier pour nous permettre de comprendre un peu.

Nous allons donc faire quelques hypothèses simplificatrices pour avoir un aperçu de la réalité.

Dans l'ensemble de cet article, les gens seront représentés par des balles.

Chaque personne va ainsi se promener dans un espace fini et chaque contact avec une autre personne (ici un choc entre deux balles) représentera une interaction économique, terme pompeux pour dire "l'un paye l'autre".

Ce qui est amusant c'est que les simulation ne sont pas enregistrées à l'avance, c'est-à-dire que c'est vous qui allez les lancer, une à une, et vous pourrez observer comment les choses évoluent.

Il se peut d'ailleurs que, dans un cas particulier, les remarques faites ici soient en désaccord avec ce que vous observez.
C'est peu probable, mais possible.
Dans tous les cas, partagez nous l'info.

Pour lancer une simulation, il suffit de cliquer sur le bouton *Go* juste au-dessus.
Pour la mettre en pause, recliquez sur *Pause*.

Simple.

# Premier cas, un monde de (pas) bisounours

Imaginons une première situation qui nous servira de base.
Le cas le plus simple que l'on puisse imaginer.

Ici, chaque personne est donc une balle et tout le monde commence avec la même taille et la même vitesse que tous les autres.
Un monde où chacun a les mêmes chances, quoi.
De l'amour et des papillons.

C'est beau !

Notez que la taille de la balle indique la quantité d'argent que la personne détient.
Donc, plus elle est grosse, plus elle est riche.
Toute ressemblance avec des personnes réelles est pure coincidence.
Et plus elle est petite, plus elle est pauvre.
Il va sans dire.

Cette usage de la dimension a deux rôles : un esthétique (c'est parlant, visuel) et un réaliste (plus vous êtes riche, plus vous avez d'opportunités économiques).

Je vous laisse cliquer sur ce premier cas et regarder un peu comment ça évolue.
 
<button id="simulation0Start" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulation0Pause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationBase"></div>

Au début, ça ne sautera pas aux yeux, les balles bougent et rebondissent, ok.
Mais si vous laissez tourner la simulation assez longtemps, des écarts commencent à se creuser.
Des balles prennent une belle dimension tandis que certaines se promènent, minuscules petits pois sur une piste de bowling.

Ce qui est frappant avec ce premier essai, c'est que même **dans un cas aussi simple et complètement hasardeux, des inégalités apparaissent et s'installent**.

Sans aucune stratégie, aucune !, des riches et des pauvres durables apparaissent.
Les boules riches ne sont pourtant pas plus intelligentes ni plus fortes.
Et symétriquement, les boules les plus pauvres ne sont ni nulles, ni faibles, ni bêtes.

Notez cependant que cela prend un peu de temps et que, parfois, les inégalités peuvent se renversent.

Cette simulation, aussi limitée soit-elle, pourrait déjà suffire à démontrer que la monnaie capitaliste (à savoir qui se conserve en temps et en quantité) crée spontanément et mécaniquement des riches et des pauvres.

Car j'insiste sur le côté hasardeux des paramètres de la simulation :

* Ce n'est pas le plus pauvre qui paye le plus riche, c'est au hasard.
* Et pourtant on protège quand même les plus pauvres, ici : arrivés une certaine petite taille limite, ils ne dépensent plus.

# Quelques inégalités

En partant tous égaux, on voit déjà que le système, hors de toute contrainte, mène déjà à un déséquilibrage systématique.
Et pourtant les balles n'ont pas besoin de manger et peuvent rester pauvres sans souffrir.

Alors, comme on est là pour tester, ajoutons un brin d'injustice.
Juste un brin.
Et, malheureusement, on pourrait reformuler sans rougir : "ajoutons un brin de réalisme".

Maintenant, les personnes, toujours sous forme de balles, vont avoir des tailles de départ différentes.
Certaines auront une cuillère d'argent dans la bouche, et d'autre un tison dans le... enfin vous cernez la métaphore positionnelle.

Ajoutons également des vitesses aléatoires.
Certaines auront beaucoup d'interactions (les rapides) et d'autres moins (les lentes).
Cela représente, d'une certaine manière, la proportion à faire des échanges.
Un point presque immobile représentera un hermite dans sa cabane en montagne ; là où une balle de fusil sera une accro au shopping.

Voyons voir ce que ça donne.

<button id="simulation1Start" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulation1Pause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationRandomSpeedAndSize"></div>

Ici, on peut faire d'autres petites observations qui semblent plutôt refléter une certaine réalité.

La première est que, quand on commence gros (riche), on a quand même de très grandes chances de le finir.
Ce qui en dit long sur l'incomensurable injustice que représente notamment l'héritage.

Aussi, il semblerait que la vitesse n'ait pas vraiment d'importance, du moins comparée au capital de départ.

**La conclusion de cette première partie est très importante parce qu'elle met en déroute pas mal d'idées reçues.**

Beaucoup, qui ne se penchent jamais sur l'économie, ce qu'on comprend, sont tentés par quelques raccourcis tels que :

* "*C'est parce que l'humain est mauvais*"
* "*C'est à cause des entreprises*"
* "*C'est à cause des politiciens*"
* Et d'autres phrases du même accabit.

Mais la vérité est plus simple et, pourtant, plus difficile à admettre : **une monnaie réserve de valeur** est, par construction, une monnaie capitaliste et **implique spontanément des inégalités catastrophiques**.

Voilà, tout est déjà plus ou moins dit.
Mais allons tout de même plus loin, histoire de voir si les choses s'améliorent ou empirent.
Pas de spoilers.

# La start-up nation

Maintenant, complexifions un peu le tout.
Parce que les échanges entre particuliers, c'est sympa mais pas très réaliste.

De nos jours, il est plutôt rare de faire du CtoC (terme de com' pour dire de particulier à particulier: "Customer to Customer").
En fait, tout n'est que BtoC et BtoB (les entreprises vendent aux autres entreprises et aux particuliers).

Donc, sans plus attendre, ajoutons cela et modifions un peu notre simulation.

Voici ce qu'il y a de neuf:

* Maintenant, quand une balle en touche une autre, rien ne se passe.
* Les carrés représentent des entreprises.
* Quand une entreprise atteint une certaine taille, elle embauche une personne au hasard (qui aura alors la même couleur que l'entreprise).
* Quand une entreprise réduit en taille, elle licencie le dernier arrivé.
* Chaque entreprise verse un salaire toutes les 5 secondes à chacun de ses employés.
* Quand un individu touche une entreprise, il lui paye une valeur fixe, comme si un achat était fait.

<button id="simulation2Start" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulation2Pause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationWithCompanies"></div>

Même en modifiant les paramètres (salaire payé par les entreprises toutes les 5 secondes, dépenses faites par les personnes à chaque contact, dépense des entreprises entre elles à chaque contact et aussi limite du nombre d'employés par entreprise) : dans tous des cas, les entreprises ou une entreprise spécifique prend le dessus sur tout et devient énorme.

Ce qui reste représentatif d'une certaine réalité : plus une entreprise est grosse et présente dans l'esprit des clients (Google, Amazon, Facebook, Apple, Microsoft, par exemples), plus elle "attire" les dépenses et, donc, plus elle grossit.

<button id="simulation3Start" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulation3Pause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationWithBanks"></div>
