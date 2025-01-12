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

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je parcours </span>
  </div>
  <input type="text" class="form-control km-per-year" aria-label="km/an" value="11700">
  <div class="input-group-append">
    <span class="input-group-text">km/an (moyenne 11700 km)</span>
  </div>
</div>

OU

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Distance maison/travail </span>
  </div>
  <input type="text" class="form-control km-home-work" aria-label="km">
  <div class="input-group-append">
    <span class="input-group-text">km (moyenne 13 km)</span>
  </div>
</div>

# Rouler sur l'or

Dans la suite du calcul, nous allons ajouter aux kilomètres parcourus tout le temps que vous passez pour ou dans votre véhicule.
Tout ce temps sera ensuite converti en euro, en se basant sur votre revenu horaire.

Pour cela, il nous faut votre revenu annuel ou mensuel NET ainsi que votre temps de travail par semaine (en heures).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je gagne </span>
  </div>
  <input type="text" class="form-control euros-per-year" aria-label="€">
  <div class="input-group-append">
    <span class="input-group-text">€/an</span>
  </div>
</div>
OU
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Je gagne </span>
  </div>
  <input type="text" class="form-control euro-per-month" aria-label="€">
  <div class="input-group-append">
    <span class="input-group-text">€/mois</span>
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
