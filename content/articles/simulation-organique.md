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

Cet article fait suite aux [premières simulation du capitalisme à (re)lire ici]({filename}/articles/simulation-économique.md).

Les articles arrivent lentement sur le blog, je sais bien.
Mais vous n'imaginez pas le temps que ça prend pour développer toutes ces simulations et autres articles interactifs (parce que c'est moi qui code tout de mes mimines).

Quoi qu'il en soit, dans l'article précédent nous avons vu que le capitalisme, qui repose sur la monnaie résèrve de valeur, on ne le dira jamais assez, semble bel et bien être un simple jeu de chance.
Les chanceux gagnent, les malchanceux perdent.
Notez que les tricheurs gagnent aussi, ce qui n'est pas anodin.

On pourrait même se demander si tous les "gagnants" ne sont pas des tricheur oO
(--*Tête qui explose !*--)

Mais ce n'est pas le sujet et, surtout, répondre a cette question n'a aucun intérêt.
J'vous jure.

## Petit rappel

Nous allons cette fois-ci mettre à l'épreuve l'économie organique.
Parce que c'est facile de triquiter, mais autrement plus exigeant de proposer !

Comme précédemment dit, tout ce que nous allons voir dans cet article n'est que simulation relativement simplifiée et ne sert bien sûr pas de démonstration formelle.
Néanmoins, avoir dans ces simulations de meilleurs résultats que le capitalisme serait déjà une belle promesse d'avenir.

Je dis ça, je dis rien...

Dans les simulations qui vont suivre, chaque balle représente une personne.
Ces personnes se promènent dans la vie et, parfois (souvent même) rencontrent d'autres personnes.
Ceci est représenté par le choc entre deux balles.

Et, lors d'une rencontre, selon les critères de la simulation, il peut y avoir échange économique (un paiement de l'un vers l'autre).
Ici, quand A paye B, on imagine que B lui a vendu quelque chose.
Ce "quelque chose" n'a néanmoins aucune importance pour nos simulation: des carottes ou des cigarettes, c'est pareil.

Enfin, plus un cercle est gros, plus il est riche.
Et réciproquement plus un cercle est petit, plus il est pauvre.

Notez que les simulations ne sont pas enregistrées à l'avance, c'est vous qui les lancez, une à une, et vous pourrez observer comment les choses évoluent.

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
* Un jour dure ici 1 seconde (les citoyens créent donc leur monnaie chaque seconde).
* Un mois dure ici 5 secondes (le temps avant que la monnaie non dépensée ne périme).
* Quand un individu en rencontre un autre, le premier (choisi au hasard) paye l'autre une unité de monnaie.
* Ici, la [monnaie d'investissement]({filename}/definitions/monnaie-d-investissement.md) ne sert à rien.

<button id="simulationOrgaBaseStart" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulationOrgaBasePause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationOrgaBase"></div>

Alors, qu'est-ce qu'on remarque ?

Déjà, c'est hypnotique, ces balles qui rebondissent sans fin.
Comme un aquarium, en plus rapide.

Mais surtout, voici les points **extrêmement** importants, impactants et tout et tout:

* Il y a des écarts de richesse, mais ils sont restreints.
* **Il n'y a pas de *très pauvre***, c'est fou !
* Il n'y a pas non plus de *très riche* !
* Comme la courbe de l'[expérience économique ]({filename}/definitions/experience-economique.md), les niveaux des citoyens montent rapidement au début de la simulation, puis se stabilisent pour grandir de plus en plus lentement.

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
Après ces 5 secondes, ils grossissent moins car quand la nouvelle monnaie est créée, la plus vieille périme (et s'ajoute à l'expérience économique de son porteur), ce qui stabilise les tailles.

Maintenant, qu'est-ce qu'on observe ?

Et bien, certes, au début, c'est plutôt inégal, normal avec de tels écarts de départ !
Mais bien vite, ces écarts se remplissent et les balles les plus petites ne sont plus très loin des plus grosses.

Cette simulation est, encore une fois, très importante.
Elle révèle à quel point la formule mathématique (la racine cubique, voir [l'expérience économique]({filename}/definitions/experience-economique.md)) est capitale dans la régulation naturelle de l'injustice économique.

**Sans contrôle, sans intervention de l'état, sans chômage ni autre aide économique, sans absolument rien, les inégalités se sont régulées.**
N'est-ce pas révolutionnaire ?
Ça ne vous fait peut-être ni chaud ni froid mais moi je trouve ça extraordinaire !

J'insiste sur cette notion de *contrôle*, à laquelle je suis incroyablement opposé.
Le contrôle impose un contrôleur, ce qui a plusieurs conséquences délétères:

* Le contrôleur doit être payé, fournir un travail.
* Le contrôleur doit, lui aussi, être contrôlé. Mais où s'arrête la chaîne du contrôle ?
* Le contrôleur doit pouvoir sanctionner le contrôlé.
* Ce qui implique que le contrôleur soit supérieur au contrôlé. Donc il y a hiérarchie intrinsèque !

Or, la hiérarchie, c'est terrible !

> Il n'est pas noble de se sentir supérieur à autrui. Il n'est noble que d'être supérieur à qui l'on était autrefois.
>
> Kingsman

Bref, nous traiterons de cette problématique du contrôle et de la hiérarchie dans un article futur.

## Soyons réalistes

Revenons à nos balles et ajoutons du réalisme à notre simulation.
Dans la vraie vie, il est plutôt rare que les citoyens se payent entre eux: les transactions leboncoin et les braderies ne sont pas la norme.

En économie organique, entreprises, associations et services publics sont tous homogénéisés en une seule forme: [l'écosystème]({filename}/definitions/ecosysteme.md).
Cette simulation sera donc la dernière, impliquand citoyens et écosystèmes.

C'est la dernière parce qu'il n'y a rien à ajouter: ni banques, ni état, ni rien du tout.

L'objectif de cette dernière est surtout d'observer l'éventuelle stabilité de l'économie organique.
Elle présente donc les caractéristiques suivantes:

* Les citoyens ne se payent plus quand il s'entrechoquent.
* Quand un citoyen touche un écosystème, il le paye 1 unité de monnaie citoyenne (s'il le peut) qui part directement dans le salaire d'un des acteurs de l'écosystème.
* Quand un citoyen touche un écosystème, il y investit 1 unité de monnaie d'investissement (s'il le peut) qui s'ajoute à la trésorerie de l'écosystème (et donc influe sur sa taille).
* Chaque écosystème a 3 acteurs du début à la fin. Pas de recrutement, pas de licenciement.


<button id="simulationOrgaCompaniesStart" type="button" class="btn btn-lg btn-outline-primary">Go</button>
<button id="simulationOrgaCompaniesPause" type="button" class="btn btn-lg btn-outline-primary">Pause</button>
<div id="simulationOrgaCompanies"></div>

Bon, cette simulation néglige certains éléments de l'économie organique, ce qui implique certaines limites:

* L'investissement est pour toujours: une fois engagé, un citoyen n'arrête jamais d'investir dans un écosystème.
* Ce qui implique que les écosystèmes ne réduisent ni ne disparaissent.
* Aucun citoyen ne meurt ni ne nait. Donc le système finit par être un peu gros pour son cadre.
* Enfin, les écosystèmes ne dépensent jamais la monnaie d'investissement reçue, comme s'ils n'avaient aucun frais.

Néanmoins, cette simulation fort limitée fait belle démonstration de certains points:

* Bien qu'elle grossisse sans fin, ce qui est normal vis-à-vis de nos limitations, **il n'y a pas explosion**. Le grossissement se fait doucement.
* Contrairement au capitalisme, **les citoyens ne sont pas plus pauvres en présence d'écosystèmes**, c'est peut-être même le contraire.
* **Les citoyens qui ne sont acteurs d'aucun écosystème** (ceux de la couleur des bords du cadre) **ne sont pas beaucoup moins riches que les autres**, alors qu'ils ne touchent pas de salaire. Le plein emploi n'est pas un but, il n'est pas nécessaire !
* Enfin, parfois un point devient tout petit, surtout quand la densité est forte, ce qui veut dire qu'il a dépensé toute sa monnaie citoyenne. Mais alors il regrossit rapidement à sa taille normale. **Il n'y a aucune pauvreté durable**.

## Conclusion

Toutes ces simulations sont, encore une fois, loin d'être des démonstrations valables pour les académiciens.
Mais pour le peu qu'elles représentent, la différence entre le comportement de la monnaie résèrve de valeur et des monnaies organiques est flagrante.

Cela est très encourageant et valide, à son échelle, l'idée qu'on peut se faire spontanément de l'économie organique.
Contrairement à ses prédécesseurs, cette dernière fait preuve spontanément d'équité, de stabilité et de durabilité.

Et surtout, là où de nombreuses entités de pouvoir (état, banques centrales, etc) tentent de corriger les injustices inhérentes à la monnaie résèrve de valeur, aucun contrôle ni aucune correction n'est nécessaire pour réguler l'économie organique.
Ce point est central étant donné qu'il assure qu'en plus d'être un outil d'échanges économiques plus juste, l'économie organique permet également un dispersement du pouvoir économique et, donc, du pouvoir tout court.

Tout cela est prometteur.
Néanmoins, c'est moi qui le dit, en toute subjectivité.

Alors le mieux à faire reste de tester tout ça pour de vrai.
