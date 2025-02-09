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
# Savoir simuler

Avant tout, il est pertinent de préciser qu'une simulation reste quoi qu'il arrive une simulation.
C'est con, dit comme ça, mais ce que je veux dire c'est qu'il n'est et ne sera jamais possible de simuler la vraie vie.
Et de toute façon ça ne servirait à rien de simuler la vraie vie vu qu'une simulation est justement sensée simplifier pour nous permettre de comprendre un peu ; car personne ne comprend rien à la vraie vie oO.

Néanmoins, cela n'empêche pas de faire quelques hypothèses simplificatrices pour avoir, au moins, un aperçu de la réalité.

Dans l'ensemble de cet article, j'ai fait le choix de représenter les gens par des balles.

Chaque personne, représentée par une balle, va ainsi se promener dans un espace fini et, à chaque contact avec une autre personne (ici un choc entre deux balles) représentera une interaction économique, terme pompeux pour dire "l'un paye l'autre".

Ce qui est amusant c'est que les simulation ne sont pas enregistrées à l'avance, c'est-à-dire que c'est vous qui allez les lancer, une à une, et vous pourrez observer comment les choses évoluent.

Pour lancer une simulation, il suffit de cliquer dessus.
Pour la mettre en pose, de recliquer dessus.
Simple.

# Premier cas, un monde de bisounours

Imaginons une première situation qui nous servira de base.
Le cas le plus simple que l'on puisse imaginer.

Ici, chaque personne est donc une balle et tout le monde commence avec la même taille et la même vitesse que tous les autres.
Un monde où tout le monde a les mêmes chances, quoi.
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
Des balles prennent une belle dimensions tandis que certaines se promènent, minuscules petits pois baladés dans une assiette de bowling.

Ce qui est frappant avec ce premier cas, c'est qu'il y ait déjà pas mal à redire.

Premièrement, même dans un cas aussi simple et complètement hasardeux, des inégalités apparaissent et s'installent.
Sans aucune stratégie, aucune !, des riches et des pauvres apparaissent.

Notez cependant que cela prend un peu de temps et que, parfois, les inégalités se renversent.

Cette simulation, aussi limitée soit-elle, pourrait déjà suffire à démontrer que la monnaie capitaliste (à savoir n'importe quelle monnaie que vous connaissez et qui existe aujourd'hui) crée spontanément et mécaniquement des riches et des pauvres.

Car j'insiste sur le côté hasardeux des paramètres de la simulation :

* Ce n'est pas le plus pauvre qui paye le plus riche, c'est au hasard.
* On protège quand même les plus pauvres, ici, vu qu'arrivé une certaine petite taille limite, il ne dépense plus.
* Enfin, pour ne pas mentir, c'est l'aire de la balle qui augmente et non pas son rayon. Si j'avais fait le rayon, les inégalités auraient l'air démente (bien qu'elles le soient). Ce qui veut dire que les écarts sont visibles mais pas exacerbés.

<button id="simulation1Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation1Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationRandomSpeed"></div>

<button id="simulation2Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation2Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationRandomSizes"></div>

<button id="simulation3Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation3Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationWithCompanies"></div>

<button id="simulation4Start" type="button" class="btn btn-sm btn-outline-primary">Go</button>
<button id="simulation4Pause" type="button" class="btn btn-sm btn-outline-primary">Pause</button>
<div id="simulationWithBank"></div>
