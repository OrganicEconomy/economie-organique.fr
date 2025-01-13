Title: La vitesse réelle de la voiture
Date: 2025-03-04 15:00
Modified: 2025-03-04 15:00
Category: Blog
Tags: Voiture, Automobile, Vitesse
Slug: la-vitesse-reelle-de-la-voiture
Lang: fr
Author: Gus
Summary: Votre puissant bolide vous paraît rapide comme l'éclair ? Et bien, si nous prenons en compte tout ce que vous coûte votre voiture, vous seriez surpris de sa vitesse réelle oO !
Status: published
Custom_script: la-vitesse-relle-de-la-voiture.js
Featured_image: 

# TEST

<button type="button" class="btn btn-primary">Primary</button>

# Second Test

Nia niania, les voitures vont vite nia nia nia
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>

# 3ème test

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">Je vais à </span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-append">
    <span class="input-group-text">km/h</span>
  </div>
</div>

# Avant propos

Cet article se base sur *À la recherche du temps gagné*, de Jean-Pierre Dupuy.
Un texte paru dans le *Bulletin interministériel pour la RCB*, n°20, mars 1975 et également en annexe de *Énergie et équité* de Ivan Illich.
À partir de ses réflexions, je vous propose ici un outil concret pour calculer la vitesse moyenne réelle de votre propre véhicule et, même, d'aller un peu plus loin sur les implications économiques que cela a sur votre vie.

Rien que ça !

Notez également que cette article est une page web statique.
Cela signifie qu'aucune des informations que vous entrez ici ne sera envoyée ni collectée où que ce soit.
Votre calcul est et reste chez vous, sur votre ordinateur dans votre petit explorateur internet.
Néanmoins, je vous invide grandement à partager votre résultat, histoire qu'on voit ce que ça donne.

# Introduction

Je suis cetain que vous pensez que la voiture est une machine puissante et efficace ainsi qu'un outil de transport individuel particulièrement rapide.
N'est-ce pas ?
Et bien, comme dirait Sam : *"Sauf votre respect, vous vous trompez."*

Mais ici, point de fausse théorie ou d'arguments falacieux.
Nous allons faire de simples et beaux calculs qui vous permettrons de tester, avec vos propres valeurs, la vitesse moyenne réelle de votre voiture d'amour.

Sur ce, accrochez vos ceintures et démarrons !

# Une partie de 1000 bornes

Pour commencer, notre base sera le nombre de kilomètres que parcourt votre glorieux véhicule.

Soit vous connaissez le nombre de kilomètres par an, soit on peut calculer en fonction de la distance maison-travail (même si cette seconde version néglige les autres déplacements, mais ce n'est pas grâve).
Dans le doute, vous pouvez utiliser la valeur moyenne qui était de 11.700 km/an en 2023 (➔[source](https://www.statistiques.developpement-durable.gouv.fr/393-millions-de-voitures-en-circulation-en-france-au-1er-janvier-2024)).

<div id="accordion-km">
  <div class="card">
    <div class="card-header" id="headingKmPerYear">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseKmPerYear" aria-expanded="true" aria-controls="collapseKmPerYear">
          Chaque année, je parcours :
        </button>
      </h5>
    </div>
    <div id="collapseKmPerYear" class="collapse show" aria-labelledby="headingKmPerYear" data-parent="#accordion-km">
      <div class="card-body">
          <div class="input-group">
            <input type="text" class="form-control km-per-year" aria-label="km/an" value="11700">
            <div class="input-group-append">
              <span class="input-group-text">km/an (moyenne 11700 km)</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingKmHomeWork">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseKmHomeWork" aria-expanded="false" aria-controls="collapseKmHomeWork">
          OU Distance entre mon travail et mon lieu de vie
        </button>
      </h5>
    </div>
    <div id="collapseKmHomeWork" class="collapse" aria-labelledby="headingKmHomeWork" data-parent="#accordion-km">
      <div class="card-body">
        <div class="input-group">
          <input type="text" class="form-control km-home-work" aria-label="km">
          <div class="input-group-append">
            <span class="input-group-text">km (moyenne 13 km)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

# Rouler sur l'or

Dans la suite du calcul, nous allons ajouter aux kilomètres parcourus tout le temps que vous passez pour ou dans votre véhicule.
Tout ce temps sera ensuite converti en euro, en se basant sur votre revenu horaire.

Pour cela, il vous faut votre revenu annuel ou mensuel NET :

<div id="accordion-salary">
  <div class="card">
    <div class="card-header" id="headingEurosPerYear">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseEurosPerYear" aria-expanded="true" aria-controls="collapseEurosPerYear">
          Salaire NET annuel
        </button>
      </h5>
    </div>
    <div id="collapseEurosPerYear" class="collapse show" aria-labelledby="headingEurosPerYear" data-parent="#accordion-salary">
      <div class="card-body">
          <div class="input-group">
            <input type="text" class="form-control euros-per-year" aria-label="€">
            <div class="input-group-append">
              <span class="input-group-text">€/an</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingEurosPerMonth">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEurosPerMonth" aria-expanded="false" aria-controls="collapseEurosPerMonth">
          OU Salaire net mensuel
        </button>
      </h5>
    </div>
    <div id="collapseEurosPerMonth" class="collapse" aria-labelledby="headingEurosPerMonth" data-parent="#accordion-salary">
      <div class="card-body">
        <div class="input-group">
          <input type="text" class="form-control euro-per-month" aria-label="€">
          <div class="input-group-append">
            <span class="input-group-text">€/mois</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
Ainsi que votre temps de travail par semaine (en heures bien sûr) :

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je travaille </span>
  </div>
  <input type="text" class="form-control time-work-per-week" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/semaine</span>
  </div>
</div>

# Dépenser plutôt que se dépenser

Voyons maintenant les autres dépenses liées à votre chère automobile.
Dans chaque cas, si vous ne savez pas, vous pouvez laisser la valeur moyenne (quand il y en a une).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix de la voiture </span>
  </div>
  <input type="text" class="form-control car-price" aria-label="€">
  <div class="input-group-append">
    <span class="input-group-text">€</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix du permis de conduire</span>
  </div>
  <input type="text" class="form-control permis-price" aria-label="€" value="1204">
  <div class="input-group-append">
    <span class="input-group-text">€</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix carburant</span>
  </div>
  <input type="text" class="form-control gaz-price-per-liter" aria-label="€" value="1,65">
  <div class="input-group-append">
    <span class="input-group-text">€/L</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix assurance</span>
  </div>
  <input type="text" class="form-control insurance-price-per-year" aria-label="€" value="610">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Entretien</span>
  </div>
  <input type="text" class="form-control maintenance-price-per-year" aria-label="€" value="1000">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Parking</span>
  </div>
  <input type="text" class="form-control parking-price-per-year" aria-label="€" value="100">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">PV/Amandes</span>
  </div>
  <input type="text" class="form-control control-price-per-year" aria-label="€" value="46">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Lavage</span>
  </div>
  <input type="text" class="form-control wash-price-per-year" aria-label="€" value="60">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>

[➔ sources](https://bonpote.com/le-vrai-cout-dune-voiture-ou-de-la-voiture/)

# Le temps c'est de l'argent

Ensuite, parlons du temps que vous perdez dans votre voiture : dans les bouchons, à faire le plein ou à entretenir par vous-même.
Parce que, mine de rien, ça aussi ça compte.

Dans les bouchons, ça dépend de la ville où vous êtes.
Soit vous estimez vous-même, ou vous pouvez retrouver la moyenne pour votre ville [➔ là](https://www.tomtom.com/traffic-index/ranking/).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps de bouchon</span>
  </div>
  <input type="text" class="form-control traffic-jam-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

Pour le temps passé à faire le plein, c'est calculé automatiquement en fonction du nombre de kilomètres et de la consommation de votre véhicule.
En gros, c'est comme si vous faisiez le plein tous les 45 litres.
Mais après, vous pouvez faire vos calculs et modifier vous-même, comme toujours.

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps à faire le plein</span>
  </div>
  <input type="text" class="form-control gaz-fill-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

Pour l'entretien de votre splendide automobile, par contre, je vous laisse seul juge.
Saisissez 0 (zéro) si vous ne mettez jamais vos main dans ses parties intimes et que c'est quelqu'un d'autre qui le fait (garagiste, copain).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps d'entretien</span>
  </div>
  <input type="text" class="form-control maintenance-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

# L'état de la route

J'imagine que vous en avez un peu marre de remplir des champs comme si vous faisiez votre déclaration d'impôts.
Mais ne vous en faites pas, c'est la fin.
Ici, une dernière petite info pour la route.

Nous avons compté le temps passé dans et pour la voiture et l'argent (qui sera transposé en temps) dépense pour celle-ci également.
Il nous reste désormais à compter l'argent que l'état, et donc indirectement nous via les impôts, dépense pour entretenir notre voierie délicate.
Cela se compte en deux informations (dont la source se trouve [➔ ici](https://www.senat.fr/basile/visio.do?id=qSEQ230305619)) :

Le budget dédié aux infrastructures routières, que nous diviserons ici bien sûr par le nombre d'usager (820 millions en 2023) :
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget infrastructures</span>
  </div>
  <input type="text" class="form-control maintenance-budget-year" aria-label="Meuros/an" value="820">
  <div class="input-group-append">
    <span class="input-group-text">Meuros/an</span>
  </div>
</div>

Et ensuite le budget dédié aux ouvrages d'art qui peuplent nos espace de déplacement (123 millions en 2023 ; je sais, ça fait mal au fion de compter ça, mais c'est dans les compte mon p'tit père !) :
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget art</span>
  </div>
  <input type="text" class="form-control art-budget-year" aria-label="Meuros/an" value="123">
  <div class="input-group-append">
    <span class="input-group-text">Meuros/an</span>
  </div>
</div>

Je vous ai laissé les champs modifiables au cas où vous voudriez faire des tests, particulièrement pour voir ce que ça change si on ne les compte pas ;).

# Résultats

Après toutes ces informations, nous allons enfin pouvoir passer au calcul.
Et puis allez, je suis pas salaud, je vous regroupe tous les champs ici pour avoir tout sous ls yeux.

### Regroupement de tous les champs

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je parcours </span>
  </div>
  <input type="text" class="form-control km-per-year" aria-label="km/an" value="11700">
  <div class="input-group-append">
    <span class="input-group-text">km/an (moyenne 11700 km)</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">OU Distance maison/travail </span>
  </div>
  <input type="text" class="form-control km-home-work" aria-label="km">
  <div class="input-group-append">
    <span class="input-group-text">km (moyenne 13 km)</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je gagne </span>
  </div>
  <input type="text" class="form-control euros-per-year" aria-label="€">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">OU Je gagne </span>
  </div>
  <input type="text" class="form-control euro-per-month" aria-label="€">
  <div class="input-group-append">
    <span class="input-group-text">€/mois</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je travaille </span>
  </div>
  <input type="text" class="form-control time-work-per-week" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/semaine</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix de la voiture </span>
  </div>
  <input type="text" class="form-control car-price" aria-label="€">
  <div class="input-group-append">
    <span class="input-group-text">€</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix du permis de conduire</span>
  </div>
  <input type="text" class="form-control permis-price" aria-label="€" value="1204">
  <div class="input-group-append">
    <span class="input-group-text">€</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix carburant</span>
  </div>
  <input type="text" class="form-control gaz-price-per-liter" aria-label="€" value="1,65">
  <div class="input-group-append">
    <span class="input-group-text">€/L</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Prix assurance</span>
  </div>
  <input type="text" class="form-control insurance-price-per-year" aria-label="€" value="610">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Entretien</span>
  </div>
  <input type="text" class="form-control maintenance-price-per-year" aria-label="€" value="1000">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Parking</span>
  </div>
  <input type="text" class="form-control parking-price-per-year" aria-label="€" value="100">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">PV/Amandes</span>
  </div>
  <input type="text" class="form-control control-price-per-year" aria-label="€" value="46">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Lavage</span>
  </div>
  <input type="text" class="form-control wash-price-per-year" aria-label="€" value="60">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps de bouchon</span>
  </div>
  <input type="text" class="form-control traffic-jam-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps à faire le plein</span>
  </div>
  <input type="text" class="form-control gaz-fill-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps d'entretien</span>
  </div>
  <input type="text" class="form-control maintenance-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget infrastructures</span>
  </div>
  <input type="text" class="form-control maintenance-budget-year" aria-label="Meuros/an" value="820">
  <div class="input-group-append">
    <span class="input-group-text">Meuros/an</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget art</span>
  </div>
  <input type="text" class="form-control art-budget-year" aria-label="Meuros/an" value="123">
  <div class="input-group-append">
    <span class="input-group-text">Meuros/an</span>
  </div>
</div>

### Résultats

Voilà, vous pouvez finalement cliquer sur *Calculer* et profiter des résultats.

<button id="calculate" type="button" class="btn btn-block btn-primary">Calculer</button>

<div class="row justify-content-center">
<h2 class="col-12">La vitesse moyenne réelle de votre voiture est de</h2>
<h2><span id="resulting-speed">X</span> km/h</h2>.
</div>

### Détails du calcul

Si vous voulez comprendre les détails du calcul :

* Nous avons la distance ```d``` parcourue en un an : <span id="distance-d">X</span> km.
* Nous calulons le temps ```t``` composé des éléments suivants :
    * ```t1``` le temps passé dans la voiture : <span id="time-t1">X</span> heures.
    * ```t2``` le temps passé à travailler pour payer les frais de la voiture : <span id="time-t2">X</span> heures.
    * ```t3``` le temps passé à travailler pour payer les impôts qui financent les routes : <span id="time-t3">X</span> heures.
    * Soit ```t = t1 + t2 + t3``` = <span id="time-t">X</span> heures.
* Enfin, pour calculer la vitesse moyenne, il n'y a plus qu'à faire ```v = d / t``` (distance totale divisée par temps total).

# Aller encore plus loin
