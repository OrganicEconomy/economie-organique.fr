Title: Simulations organiques
Date: 2025-03-26 15:00
Category: Simulation interactive
Tags: simulation, capitalisme, économie-organique
Slug: simulations-organiques
Lang: fr
Author: Gus
Summary: Après nos simulations du capitalisme, mettons à la même épreuve l'économie organique pour voir comment elle s'en sort.
Status: published
Custom_scripts: economic-simulator.js, simulation-organiques.js
Featured_image: images/simulations-organiques-min.jpg

Cet article fait suite aux [premières simulation du capitalisme à (re)lire ici](/petites-simulations-économiques).

Les articles arrivent lentement sur le blog, je sais bien.
Mais vous n'imaginez pas le temps que ça prend pour développer toutes ces simulations et autres articles interactifs (parce que c'est moi qui code tout de mes mimines).

Quoi qu'il en soit, dans l'article précédent nous avons vu que le capitalisme, qui repose sur la monnaie résèrve de valeur, on ne le dira jamais assez, semble bel et bien être un simple jeu de chance.
Les chanceux gagnent, les malchanceux perdent.
Notez que les tricheurs gagnent aussi, ce qui n'est pas anodin.

On pourrait même se demander si tous les "gagnants" ne sont pas des tricheur oO
*Tête qui explose !*

Mais ce n'est pas le sujet et, surtout, répondre a cette question n'a aucun intérêt.
J'vous jure.

## Petit rappel

Nous allons cette fois-ci mettre à l'épreuve l'économie organique.
Parce que c'est facile de triquiter, mais proposer, c'est encore mieux !

Comme précédemment dit, tout ce que nous allons voir dans cet article n'est que simulation relativement simplifiée et ne sert bien sûr pas de démonstration formelle.
Néanmoins, avoir dans ces simulations de meilleurs résultats que le capitalisme serait déjà une belle promesse d'avenir.
Je dis ça, je dis rien...

Dans les simulations qui vont suivre, chaque balle représente une personne.
Ces personnes se promène dans la vie et, parfois (souvent même) rencontrent d'autres personnes.
Ceci est représenté par le choc entre deux balles.

Et, lors d'une rencontre, selon les critères de la simulation, il peut y avoir échange économique (un paiement de l'un vers l'autre).

Ici, les échanges économiques sont à sens unique : A paye B, mais en échange B ne donne rien à A.
C'est parce que c'est une simulation, bien que dans la pratique, il y aurait bien sûr échange.
Là, je vous laisse imaginer les histoires de chaque balle ;).

Enfin, plus un cercle est gros, plus il est riche.
Et réciproquement plus un cercle est petit, plus il est pauvre.

Notez que les simulation ne sont pas enregistrées à l'avance, c'est vous qui les lancez, une à une, et vous pourrez observer comment les choses évoluent.

Il se peut d'ailleurs que, dans un cas particulier, les remarques faites ici soient en désaccord avec ce que vous observez.
C'est peu probable, mais possible.

Pour lancer une simulation, cliquez sur le bouton *Go* juste au-dessus.
Pour la mettre en pause, cliquez sur *Pause*.

## Avant de commencer

Ici, on simule l'économie organique.
Si vous ne connaissez pas ou si à un moment vous ne comprenez plus rien, relisez [la page d'informations => ici](/), ça pourrait vous aider.

## Premier cas, les gens

Dans cette première simulation, voici les éléments à comprendre:

* Chaque individu commence niveau 1, c'est à dire avec une expérience de 0 (zéro).
* Un jour représente ici 1 seconde (les citoyens créent donc leur monnaie chaque seconde).
* Un mois représente ici 5 secondes (le temps avant que la monnaie non dépensée ne périme).
* Quand un individu en rencontre un autre, le premier (choisi au hasard) paye l'autre une unité de monnaie.
* Ici, la [monnaie d'investissement]({filename}/definitions/monnaie-d-investissement.md) ne sert à rien.

<button id="simulationOrgaBaseStart" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulationOrgaBasePause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationOrgaBase"></div>

Alors, qu'est-ce qu'on remarque ?

Déjà, c'est hypnotique, ces balles qui rebondissent sans fin.
Comme un aquarium, en plus rapide.

Mais surtout, voici les points **extrêmemet** importants, impactants et tout et tout:

* Il y a des écarts de richesse, ce qui n'est pas une mauvaise chose, mais ils sont restreints.
* **Il n'y a pas de *très pauvre***, c'est fou ! Personne ne prend même particulièrement de retard sur les autres.
* De même, il n'y a pas de *très riche* ! Et personne ne prend d'avance particulière sur tout le monde.
* Comme la courbe de l'[expérience économique ]({filename}/definitions/experience-economique.md), les niveau des citoyens montent rapidement au début de la simulation, puis se stabilisent pour grandir de plus en plus lentement.

Evidemment, si on laisse tourner très longtemps la simulation, les balles deviennent relativement grosses.
Ceci est dû au fait qu'il n'y a pas de "départs" (la mort, hein) ni d'arrivées (la naissance, en fait), éléments qu'il y aurait dans le monde réel.

Mais même dans ce cadre, il n'y a pas d'*explosion* : les balles grossissent encore et encore, lentement mais sûrement, sans qu'il n'y ait de réaction en chaîne violente.

Enfin, et c'est le poète qui est en moi qui parle, le gonflement des balles lors de la création monétaire à chaque seconde fait comme des batements de coeur, ce qui reflète joliement le côté *vivant* de l'économie organique.

## Soyons inégaux

Seconde situation, maintenant imaginons que chaque citoyen démarre avec une expérience économique différente.

En pratique, c'est comme si des gens inscrits et utilisant la monnaie organique depuis longtemps se joignaient à des personnes découvrant le concept et démarrant tout juste.

Mais alors là, j'aime autant vous dire qu'on ne parle pas des mêmes inégalités que dans notre simulation du capitalisme.
Dans cette dernière, les gens commençaient avec un capital entre 0 et 30€.
Ce qui, à l'échelle de la simulation est pas mal, mais encore tout à fait limité.
Et on a vu que cette inégalité, aussi petite soit elle, a eu un impact énorme, colossal sur les situations économiques persistantes des balles/gens.

Ici, les balles commencent avec une expérience économique entre 0 et 500, ce qui est bien pire !
Mais voyons comment ça se passe.

<button id="simulationOrgaInegalStart" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulationOrgaInegalPause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationOrgaInegal"></div>

Pour comprendre ce qu'il se passe: les premières 5 secondes (le premier mois), chacun grossit selon son expérience économique.
Après les 5 secondes, ils grossissent moins car quand la nouvelle monnaie est créée, la plus vieille périme (et s'ajoute à l'expérience économique de son porteur), ce qui stabilise les tailles.

Maintenant, qu'est-ce qu'on observe ?

Et bien, certes, au début, c'est plutôt inégal, normal avec un tel gouffre d'inégalité !
Mais bien vite, les écarts se remplissent et les balles les plus petites ne sont plus très loin des plus grosses.

Cette simulation est, encore une fois, très importante.
Elle révèle à quel point la formule mathématique (la racine cubique, voir [l'expérience économique]({filename}/definitions/experience-economique.md)) est capitale dans la régulation naturelle de l'injustice économique.

**Sans contrôle, sans intervention de l'état, sans subvention, sans absolument rien, les inégalités se sont régulées.**
N'est-ce pas révolutionnaire ?
Ça ne vous fait peut-être ni chaud ni froid mais moi je trouve ça extraordinaire !
