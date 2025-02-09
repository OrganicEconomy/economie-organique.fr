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

> Le capitalisme est un jeu de dés. Si vous avez de la chance ou que vous trichez, vous gagnez. Si vous êtes intègre et malchanceux, vous perdez.

# La base

Avant tout, il est pertinent de préciser qu'une simulation reste quoi qu'il arrive une simulation.
En tout cas, c'est ce que me dit ma femme.

Ce que je veux dire c'est qu'il n'est et ne sera jamais possible de simuler la vraie vie.
Et de toute façon ça ne servirait à rien de simuler la vraie vie vu qu'une simulation est justement sensée simplifier pour nous permettre de comprendre un peu ; car personne ne comprend rien à la vraie vie oO.

Nous allons donc faire quelques hypothèses simplificatrices pour avoir un aperçu de la réalité.

Dans l'ensemble de cet article, les gens seront représentés par des balles.

Chaque personne va ainsi se promener dans un espace fini et chaque contact avec une autre personne (ici un choc entre deux balles) représentera une interaction économique, terme pompeux pour dire "l'un paye l'autre".

Ce qui est amusant c'est que les simulation ne sont pas enregistrées à l'avance, c'est-à-dire que c'est vous qui allez les lancer, une à une, et vous pourrez observer comment les choses évoluent.

Il se peut d'ailleurs que, dans un cas particulier, les observations faites ici soient en désaccord avec ce que vous voyez.
C'est peu probable, mais possible.
Dans tous les cas, partagez nous l'info.

Pour lancer une simulation, il suffit de cliquer sur le bouton *Go* juste au-dessus.
Pour la mettre en pause, recliquez sur *Pause*.

Simple.

# Premier cas, un monde de (pas) bisounours

Imaginons une première situation qui nous servira de base.
Le cas le plus simple que l'on puisse imaginer.

Ici, chaque personne est donc une balle et tout le monde commence avec la même taille et la même vitesse que tous les autres.
Un monde où tout le monde a les mêmes chances, quoi.
De l'amour et des papillons.

C'est beau !

Notez que la taille de la balle indique la quantité d'argent que la personne détient.
Donc, plus elle est grosse, plus elle est riche.
Toute ressemblance avec des personnes réelles est pure coincidence.

Et plus elle est petite, plus elle est pauvre.
Il va sans dire.

Je vous laisse cliquer sur ce premier cas et regarder un peu comment ça évolue.
 
<button id="simulation0Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation0Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationBase"></div>

Au début, ça ne sautera pas aux yeux, les balles bougent et rebondissent, ok.
Mais si vous laissez tourner la simulation assez longtemps, des écarts commencent à se creuser.
Des balles prennent une belle dimension tandis que certaines se promènent, minuscules petits pois baladés sur une piste de bowling.

Ce qui est frappant avec ce premier cas, c'est qu'il y ait déjà pas mal à redire.

Premièrement, même **dans un cas aussi simple et complètement hasardeux, des inégalités apparaissent et s'installent**.
Sans aucune stratégie, aucune !, des riches et des pauvres apparaissent.

Notez cependant que cela prend un peu de temps et que, parfois, les inégalités se renversent.

Cette simulation, aussi limitée soit-elle, pourrait déjà suffire à démontrer que la monnaie capitaliste (à savoir n'importe quelle monnaie que vous connaissez et qui existe aujourd'hui) crée spontanément et mécaniquement des riches et des pauvres.

Car j'insiste sur le côté hasardeux des paramètres de la simulation :

* Ce n'est pas le plus pauvre qui paye le plus riche, c'est au hasard.
* Et pourtant on protège quand même les plus pauvres, ici : arrivés une certaine petite taille limite, ils ne dépensent plus.

# Quelques inégalités

En partant tous égaux, on voit déjà que le système, hors de toute contrainte (les balles n'ont pas à manger et peuvent rester pauvres sans souffrir), mène déjà à un déséquilibrage systématique.

Alors, comme on est là pour tester, ajoutons un brin d'injustice.
Juste un brin.
Et, malheureusement, je pourrais reformuler sans rougir : "ajoutons un brin de réalisme".

Maintenant, les personnes, toujours sous forme de balles, vont avoir des tailles de départ différentes.
Certaines auront une cuillère d'argent dans la bouche, et d'autre un tison dans le... 'fin vous cernez la métaphore positionnelle.

Ajoutons également des vitesses aléatoires.
Certaines auront beaucoup d'interactions (les rapides) et d'autres moins (les lentes).
Cela représente, d'une certaine manière, la proportion à faire des échanges.
Un point presque immobile représentera un hermite dans sa cabane en montagne ; là où une balle de fusil sera une accro au shopping.

Voyons voir ce que ça donne.

<button id="simulation1Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation1Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationRandomSpeedAndSize"></div>

Ici, on peut faire d'autres petites observations qui semblent plutôt refléter une certaine réalité.

La première est que, quand on commence gros (riche), on a quand même de très grandes chances de le finir.
Ce qui en dit long sur l'incomensurable injustice que représente notamment l'héritage.

Aussi, il semblerait que les plus lents s'en sortent mieux que les plus rapides.
Ce n'est pas vraiment surprenant, mais c'est à noter.

**La conclusion de cette première partie est très importante parce qu'elle met en déroute pas mal d'idées reçues.**
Beaucoup, qui ne se penchent jamais sur l'économie, ce qu'on comprend, sont tentés par quelques raccourcis tels que :

* "*C'est parce que l'humain est mauvais*"
* "*C'est à cause des entreprises*"
* "*C'est à cause des politiciens*"
* Et tout un tas d'autres phrases préconstruites du même accabit.

Mais la vérité est plus simple et, pourtant, plus difficile à admettre : **une monnaie réserve de valeur** est, par construction, une monnaie capitaliste et **implique spontanément des inégalités catastrophiques**.

Voilà, tout est déjà plus ou moins dit.
Mais allons tout de même plus loin, histoire de voir si les choses s'améliorent ou empirent.
Pas de spoilers.

# La start-up nation

Maintenant, complexifions un peu le tout.
Parce que les échanges entre particuliers, c'est sympa mais pas très démonstratif.

De nos jours, il est plutôt rare de faire du CtoC (terme de com' pour dire de particulier à particulier).
En fait, tout n'est que BtoC et BtoB (les entreprises vendent aux autres entreprises et aux particuliers).

Donc, sans plus attendre, ajoutons cela et modifions un peu notre simulation.

Voici ce qu'il y a de neuf :

* Maintenant, quand une balle en touche une autre, rien ne se passe.
* Les carrés représentent des entreprises.
* Quand une entreprise atteint une certaine taille, il embauche une personne au hasard (qui aura alors la même couleur que l'entreprise).
* Quand une entreprise réduit en taille, elle licencie au hasard.
* Chaque entreprise verse un salaire toutes les 5 secondes à chacun de ses employés.
* Quand un individu touche une entreprise, il lui paye une valeur fixe.

<button id="simulation2Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation2Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationWithCompanies"></div>

<button id="simulation3Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation3Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationWithBank"></div>
