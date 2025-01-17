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

# Avant propos

Cet article se base sur *À la recherche du temps gagné*, de Jean-Pierre Dupuy.
Un texte paru dans le *Bulletin interministériel pour la RCB*, n°20, mars 1975 et également en annexe de *Énergie et équité* de Ivan Illich.
À partir de ces réflexions, je vous propose ici un outil concret pour calculer la vitesse moyenne réelle de votre propre véhicule et, même, d'aller un peu plus loin sur les implications économiques que cela a sur votre vie.

Rien que ça !

Notez également que cet article est une page web statique.
Cela signifie qu'aucune des informations que vous entrez ici ne sera envoyée ni collectée où que ce soit.
Votre calcul est et reste chez vous, sur votre ordinateur dans votre petit explorateur internet.
Néanmoins, je vous invite grandement à partager votre résultat, histoire qu'on voit ce que ça donne.

# Introduction

Je suis certain que vous pensez que la voiture est une machine puissante et efficace ainsi qu'un outil de transport individuel particulièrement rapide.
N'est-ce pas ?
Et bien, comme dirait Sam : *"Sauf votre respect, vous vous trompez."*

Cela dit, ne faisons pas dans la théorie.
Contraints à l'ère des mathématiques comme seule loi, nous allons faire de simples et beaux calculs qui vous permettront de tester, avec vos propres valeurs, la vitesse moyenne réelle de votre voiture d'amour.

Alors, accrochez vos ceintures et démarrons !

# Une partie de 1000 bornes

Pour commencer, notre base sera le nombre de kilomètres que parcourt votre glorieux véhicule.

Il nous faut votre kilométrage annuel (enfin, celui de votre voiture), la distance maison-travail et le nombre d'aller-retour par semaine faits entre la dite maison et le dit travail.
Dans le doute, vous pouvez utiliser les valeurs moyennes indiquées en-dessous des champs (➔[source](https://www.statistiques.developpement-durable.gouv.fr/393-millions-de-voitures-en-circulation-en-france-au-1er-janvier-2024)).

<form>
  <div class="form-group">
    <label for="total-distance-1">Distance annuelle</label>
    <div class="input-group">
      <input id="km-per-year-1" type="text" class="form-control km-per-year">
      <div class="input-group-append">
        <span class="input-group-text">km/an</span>
      </div>
    </div>
    <small id="km-per-year-1-helper" class="form-text text-muted">Moyenne : 11700 km/an</small>
  </div>
  <div class="form-group">
    <label for="home-work-distance-1">Distance habitat-travail</label>
    <div class="input-group">
      <input id="km-home-work-1" type="text" class="form-control km-home-work">
      <div class="input-group-append">
        <span class="input-group-text">km</span>
      </div>
    </div>
    <small id="km-home-work-1-helper" class="form-text text-muted">Moyenne : 13 km</small>
  </div>
  <div class="form-group">
    <label for="days-home-work-1">Nombre d'aller/retour maison-travail</label>
    <div class="input-group">
      <input id="days-home-work-1" type="text" class="form-control days-home-work">
      <div class="input-group-append">
        <span class="input-group-text">a-r/Semaine</span>
      </div>
    </div>
  </div>
</form>


Il faut aussi connaître votre vitesse moyenne, soit elle est indiquée par votre tableau de bord "intelligent", soit vous pouvez vous baser sur une moyenne.

<form>
  <div class="form-group">
    <label for="average-base-speed-1">Vitesse moyenne</label>
    <div class="input-group">
      <input id="average-base-speed-1" type="text" class="form-control average-base-speed" aria-label="km/h">
      <div class="input-group-append">
        <span class="input-group-text">km/h (en moyenne)</span>
      </div>
    </div>
    <small id="average-base-speed-1-helper" class="form-text text-muted">
    Moyennes :
    <button type="button" class="btn btn-sm btn-outline-primary typology-city">Grande ville (18)</button>
    <button type="button" class="btn btn-sm btn-outline-primary typology-medium">Ville moyenne (26)</button>
    <button type="button" class="btn btn-sm btn-outline-primary typology-campaign">Campagne (35)</button>
    </small>
  </div>
</form>


# Rouler sur l'or

Dans la suite du calcul, nous allons ajouter aux kilomètres parcourus tout le temps que vous passez pour ou dans votre véhicule.
Tout ce temps sera ensuite converti en euro, en se basant sur votre revenu horaire.

Pour calculer ce dernier, il vous faut votre revenu annuel ainsi que votre temps de travail hebdomadaire.

<form>
  <div class="form-group">
    <label for="euros-per-year-1">Salaire NET annuel</label>
    <div class="input-group">
      <input id="euros-per-year-1" type="text" class="form-control euros-per-year">
      <div class="input-group-append">
        <span class="input-group-text">€/an</span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="time-work-per-week-1">Heures travaillées par semaine</label>
    <div class="input-group">
      <input id="time-work-per-week-1" type="text" class="form-control time-work-per-week">
      <div class="input-group-append">
        <span class="input-group-text">h/semaine</span>
      </div>
    </div>
  </div>
</form>

# Dépenser plutôt que se dépenser

Voyons maintenant les autres dépenses liées à votre chère automobile.
Si vous ne savez pas, vous pouvez utiliser la valeur moyenne ([➔ sources](https://bonpote.com/le-vrai-cout-dune-voiture-ou-de-la-voiture/)).

<form>
  <div class="form-group">
    <label for="car-price-1">Prix de la voiture </label>
    <div class="input-group">
      <input id="car-price-1" type="text" class="form-control car-price" aria-label="€">
      <div class="input-group-append">
        <span class="input-group-text">€</span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="permis-price-1">Prix du permis de conduire</label>
    <div class="input-group">
      <input id="permis-price-1" type="text" class="form-control permis-price">
      <div class="input-group-append">
        <span class="input-group-text">€</span>
      </div>
    </div>
    <small id="permis-price-1-helper" class="form-text text-muted">Moyenne : 1204 euros</small>
  </div>
  <div class="form-group">
    <label for="gaz-price-per-liter-1">Prix du carburant </label>
    <div class="input-group">
      <input id="gaz-price-per-liter-1" type="text" class="form-control gaz-price-per-liter">
      <div class="input-group-append">
        <span class="input-group-text">€/L</span>
      </div>
    </div>
    <small id="permis-price-1-helper" class="form-text text-muted">Prix du jour <a href="https://www.carburants.org/prix-du-jour/">➔ là</a></small>
  </div>
  <div class="form-group">
    <label for="gaz-consumption-1">Consommation carburant</label>
    <div class="input-group">
      <input id="gaz-consumption-1" type="text" class="form-control gaz-consumption" aria-label="L/100km">
      <div class="input-group-append">
        <span class="input-group-text">L/100km</span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="insurance-price-per-year-1">Prix assurance</label>
    <div class="input-group">
      <input id="insurance-price-per-year-1" type="text" class="form-control insurance-price-per-year">
      <div class="input-group-append">
        <span class="input-group-text">€/an</span>
      </div>
    </div>
    <small id="insurance-price-per-year-1-helper" class="form-text text-muted">Moyenne : 610 €/an</small>
  </div>
  <div class="form-group">
    <label for="maintenance-price-per-year-1">Entretien</label>
    <div class="input-group">
      <input id="maintenance-price-per-year-1" type="text" class="form-control maintenance-price-per-year">
      <div class="input-group-append">
        <span class="input-group-text">€/an</span>
      </div>
    </div>
    <small id="maintenance-price-per-year-1-helper" class="form-text text-muted">Moyenne : 1000 €/an</small>
  </div>
  <div class="form-group">
    <label for="parking-price-per-year-1">Parking</label>
    <div class="input-group">
      <input id="parking-price-per-year-1" type="text" class="form-control parking-price-per-year">
      <div class="input-group-append">
        <span class="input-group-text">€/an</span>
      </div>
    </div>
    <small id="parking-price-per-year-1-helper" class="form-text text-muted">Moyenne : 100 €/an</small>
  </div>
  <div class="form-group">
    <label for="control-price-per-year-1">PV/Amendes</label>
    <div class="input-group">
      <input id="control-price-per-year-1" type="text" class="form-control control-price-per-year">
      <div class="input-group-append">
        <span class="input-group-text">€/an</span>
      </div>
    </div>
    <small id="control-price-per-year-1-helper" class="form-text text-muted">Moyenne : 46 €/an</small>
  </div>
  <div class="form-group">
    <label for="wash-price-per-year-1">Lavage</label>
    <div class="input-group">
      <input id="wash-price-per-year-1" type="text" class="form-control wash-price-per-year">
      <div class="input-group-append">
        <span class="input-group-text">€/an</span>
      </div>
    </div>
    <small id="wash-price-per-year-1-helper" class="form-text text-muted">Moyenne : 60 €/an</small>
  </div>
</form>


# Le temps c'est de l'argent

Ensuite, parlons du temps que vous perdez dans votre voiture : dans les bouchons, à faire le plein ou à entretenir par vous-même.
Parce que, mine de rien, ça compte aussi.

Dans les bouchons, ça dépend de la ville où vous vivez.
Soit vous estimez vous-même, soit vous retrouvez la moyenne pour votre ville [➔ là](https://www.tomtom.com/traffic-index/ranking/?country=FR).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps de bouchon</span>
  </div>
  <input id="traffic-jam-time-per-year-1" type="text" class="form-control traffic-jam-time-per-year" aria-label="h">
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
  <input id="gaz-fill-time-per-year-1" type="text" class="form-control gaz-fill-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

Pour l'entretien de votre splendide automobile, par contre, je vous laisse seul juge.
Saisissez 0 (zéro) si vous ne mettez jamais vos mains dans ses parties intimes et que c'est quelqu'un d'autre qui le fait (garagiste, copain).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Temps d'entretien</span>
  </div>
  <input id="maintenance-time-per-year-1" type="text" class="form-control maintenance-time-per-year" aria-label="h">
  <div class="input-group-append">
    <span class="input-group-text">h/an</span>
  </div>
</div>

# L'état de la route

J'imagine que vous en avez un peu marre de remplir des champs comme si vous faisiez votre déclaration d'impôts.
Mais ne vous en faites pas, c'est la fin.
Ici, une dernière petite info pour la route.

Nous avons compté le temps passé dans et pour la voiture et l'argent (qui sera transposé en temps) dépensé pour celle-ci également.
Il nous reste désormais à compter l'argent que l'état, et donc indirectement nous via les impôts, dépense pour entretenir notre voirie délicate.

Cela se compte en plusieurs informations (dont les sources se trouvent [➔ ici](https://www.senat.fr/basile/visio.do?id=qSEQ230305619), [➔ là](https://www.unionroutiere.fr/wp-content/uploads/2024/02/Faits-et-chiffes-2023.pdf) et [➔ là](https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2024-09/Bilan%20SR%202023%20version%20site%20internet%2012%20septembre.pdf)) :

Le budget dédié aux infrastructures routières, que nous diviserons ici par le nombre d'usagers de la route (38,7 millions en 2022), est constitué de plusieurs chiffres clés (chiffres 2023) :

* la maintenance des routes : 910 millions d'euros ;
* la création et maintenance des ouvrages d'art : 123 millions ;
* la maintenance de la chaussée : 320 millions ;
* soit un total de : 1,353 milliards d'euros

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget infrastructures</span>
  </div>
  <input id="maintenance-budget-year-1" type="text" class="form-control maintenance-budget-year" placeholder="1353" value="1353">
  <div class="input-group-append">
    <span class="input-group-text">Millions d'euros/an</span>
  </div>
</div>

Mais ce n'est pas tout, ça va même empirer.
Ajoutons à cela le prix que nous payons pour les accidents liés à l'automobile :

* les morts : 12,7 milliards ;
* les hospitalisations : 24 milliards ;
* les victimes légères : 3,7 milliards ;
* les dégâts matériels : 11,2 milliards ;
* soit un total de 51,6 milliards (oui, là on parle de milliards).

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget santé</span>
  </div>
  <input id="health-budget-year-1" type="text" class="form-control health-budget-year" placeholder="51600" value="51600">
  <div class="input-group-append">
    <span class="input-group-text">Millions d'euros/an</span>
  </div>
</div>

J'imagine que ça fait beaucoup, mais sachez que certaines estimations donnent un résultat double.
Alors restons sur une estimation "basse" pour ne pas fausser nos calculs.

Enfin, quelques subventions de l'état en prime (payées bien sûr par nos impôts, hein) :

* [France 2030](https://www.economie.gouv.fr/france-2030-plan-soutien-filiere-automobile) : 1 milliard par an ;
* [l'enveloppe budgétaire pour le bonus écologique](https://www.autoplus.fr/environnement/le-bonus-ecologique-2025-entre-deja-en-vigueur-a-quoi-faut-il-sattendre-1356927.html) : 700 millions pour 2025 (c'était le double en 2024);
* [les autres bonus](https://www.auto-infos.fr/article/coup-de-frein-brutal-sur-le-bonus-et-malus-automobile-durci-la-double-peine-pour-2025.284201) : 300 millions pour 2025 (pareil, ça a bien baissé) ;
* soit un total de 2 milliards.

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Budget automobile</span>
  </div>
  <input id="auto-budget-year-1" type="text" class="form-control auto-budget-year" placeholder="2000" value="2000">
  <div class="input-group-append">
    <span class="input-group-text">Millions d'euros/an</span>
  </div>
</div>

Peut-être pensez-vous que cela devrait être rationalisé par rapport aux impôts que vous payez.
Mais en pratique, on le paye tous d'une manière ou d'une autre.

Néanmoins, je vous ai laissé les champs modifiables pour que vous puissiez faire des tests, comme voir ce que ça change si on met zéro.

Notez d'ailleurs que ce "simulateur" n'a rien d'officiel.
Mais il est open source et vous pouvez regarder le détail des calculs dans le code sur [github](https://github.com/OrganicEconomy/economie-organique.fr/blob/master/content/scripts/la-vitesse-relle-de-la-voiture.js).

# Résultats

Après toutes ces informations, nous allons enfin pouvoir passer au calcul.
Et puis allez, je suis pas salaud, je vous regroupe tous les champs ici pour avoir tout sous les yeux.

### Regroupement de tous les champs

<form>
  <div class="input-group">
    <input id="km-per-year-2" type="text" class="form-control km-per-year" placeholder="moyenne : 11700">
    <div class="input-group-append">
      <span class="input-group-text">km/an parcourus</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="km-home-work-2" type="text" class="form-control km-home-work" placeholder="moyenne : 13">
    <div class="input-group-append">
      <span class="input-group-text">km maison/travail</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="days-home-work-2" type="text" class="form-control days-home-work">
    <div class="input-group-append">
      <span class="input-group-text">aller-retour / semaine</span>
    </div>
  </div>

  <div class="input-group">
    <input id="average-base-speed-2" type="text" class="form-control average-base-speed" placeholder="moyennes : 18, 26 ou 35">
    <div class="input-group-append">
      <span class="input-group-text">km/h de moyenne</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="euros-per-year-2" type="text" class="form-control euros-per-year">
    <div class="input-group-append">
      <span class="input-group-text">€/an durement gagnés</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="time-work-per-week-2" type="text" class="form-control time-work-per-week">
    <div class="input-group-append">
      <span class="input-group-text">h/semaine bossées</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="car-price-2" type="text" class="form-control car-price">
    <div class="input-group-append">
      <span class="input-group-text">€ la voiture, c'est pas cher</span>
    </div>
  </div>

  <div class="input-group">
    <input id="permis-price-2" type="text" class="form-control permis-price" placeholder="Moyenne : 1204">
    <div class="input-group-append">
      <span class="input-group-text">€ pour le permis</span>
    </div>
  </div>

  <div class="input-group">
    <input id="gaz-price-per-liter-2" type="text" class="form-control gaz-price-per-liter" value="1,80">
    <div class="input-group-append">
      <span class="input-group-text">€/L d'essence</span>
    </div>
  </div>

  <div class="input-group">
    <input id="gaz-consumption-2" type="text" class="form-control gaz-consumption">
    <div class="input-group-append">
      <span class="input-group-text">L/100km consommés</span>
    </div>
  </div>

  <div class="input-group">
    <input id="insurance-price-per-year-2" type="text" class="form-control insurance-price-per-year" placeholder="Moyenne : 610">
    <div class="input-group-append">
      <span class="input-group-text">€/an d'assurance</span>
    </div>
  </div>

  <div class="input-group">
    <input id="maintenance-price-per-year-2" type="text" class="form-control maintenance-price-per-year" placeholder="Moyenne : 1000">
    <div class="input-group-append">
      <span class="input-group-text">€/an d'entretien</span>
    </div>
  </div>

  <div class="input-group">
    <input id="parking-price-per-year-2" type="text" class="form-control parking-price-per-year" placeholder="Moyenne : 100">
    <div class="input-group-append">
      <span class="input-group-text">€/an de parking</span>
    </div>
  </div>

  <div class="input-group">
    <input id="control-price-per-year-2" type="text" class="form-control control-price-per-year" placeholder="Moyenne : 46">
    <div class="input-group-append">
      <span class="input-group-text">€/an d'amendes (ouch)</span>
    </div>
  </div>

  <div class="input-group">
    <input id="wash-price-per-year-2" type="text" class="form-control wash-price-per-year" placeholder="Moyenne : 60">
    <div class="input-group-append">
      <span class="input-group-text">€/an de lavage</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="traffic-jam-time-per-year-2" type="text" class="form-control traffic-jam-time-per-year" placeholder="Moyenne : 70)">
    <div class="input-group-append">
      <span class="input-group-text">h/an dans les bouchons</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="gaz-fill-time-per-year-2" type="text" class="form-control gaz-fill-time-per-year">
    <div class="input-group-append">
      <span class="input-group-text">h/an à faire le plein</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="maintenance-time-per-year-2" type="text" class="form-control maintenance-time-per-year">
    <div class="input-group-append">
      <span class="input-group-text">h/an à entretenir la bagnole</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="maintenance-budget-year-2" type="text" class="form-control maintenance-budget-year" placeholder="1353" value="1353">
    <div class="input-group-append">
      <span class="input-group-text">Meuros/an pour les infrastructures</span>
    </div>
  </div>
  
  <div class="input-group">
    <input id="health-budget-year-2" type="text" class="form-control health-budget-year" placeholder="51600" value="51600">
    <div class="input-group-append">
      <span class="input-group-text">Meuros/an pour la santé</span>
    </div>
  </div>

  <div class="input-group">
    <input id="auto-budget-year-2" type="text" class="form-control auto-budget-year" placeholder="2000" value="2000">
    <div class="input-group-append">
      <span class="input-group-text">Millions d'euros/an</span>
    </div>
  </div>
</form>

### Résultats

Voilà, vous pouvez finalement cliquer sur *Calculer* et profiter des résultats.

<button id="calculate" type="button" class="btn btn-block btn-primary">Calculer</button>

<div class="row justify-content-center">
  <h2 class="col-12">La vitesse moyenne réelle de votre voiture est de</h2>
  <h2><code><span class="resulting-speed">X</span></code> km/h</h2>
</div>

<div class="row justify-content-center">
  <h5>Vous allez donc, en moyenne, <span class="resulting-comparison">...</span></h5>
</div>

<div class="row justify-content-center">
  <h5>et vous passez <code><span class="resulting-time">X</span></code> heures par jour dans/pour votre voiture</h5>
</div>

### Détails du calcul

Si vous voulez comprendre les détails du calcul :

* Nous avons la distance ```d``` parcourue en un an : <code><span class="distance-d">X</span></code> km.
* Nous calculons le temps ```t``` composé des éléments suivants :
    * ```t1``` le temps passé à conduire la voiture, normal : <code><span class="time-t1">X</span></code> heures.
    * ```t2``` le temps travaillé pour payer les frais de la voiture : <code><span class="time-t2">X</span></code> heures.
    * ```t3``` le temps perdu dans et pour la voiture : <code><span class="time-t3">X</span></code> heures.
    * ```t4``` le temps travaillé pour payer les impôts qui financent les routes : <code><span class="time-t4">X</span></code> heures.
    * Soit ```t = t1 + t2 + t3 + t4``` = <code><span class="time-t">X</span></code> heures.
* Les temps passés sont calculés sur votre temps horaire : <code><span class="hourly-fee">X</span></code> euros/heure.
* Enfin, pour calculer la vitesse moyenne, il n'y a plus qu'à faire ```v = d / t``` (distance totale divisée par temps total).

### Autre externalités

Au passage, tant qu'à faire des maths bêtes et méchants, calculons aussi vos émissions carbone (via cette [source](https://www.tresor.economie.gouv.fr/Articles/248d6a7c-d681-4577-9fa5-886791bfc9d1/files/9651f24c-dee1-4c2d-a54f-3aa56927e139) :

<div class="row justify-content-center">
  <h5>Votre voiture émet <code><span class="resulting-CO2">...</span></code> kg de CO2 par an, bravo !</h5>
</div>

<div class="row justify-content-center">
  <h5>Cela coûte <code><span class="resulting-CO2-cost">X</span></code> euros à la communauté.</h5>
</div>

# Aller plus loin

On peut maintenant s'amuser à se poser la question : si je faisais du vélo, plutôt ?
Parce que, comme disait Ivan Illich :

> La bicyclette élargit le rayon d'action personnel sans interdire de passer où l'on ne peut rouler : il suffit alors de pousser son vélo.

Pour que ce soit notable, prenons le cas extrême où l'on échange la voiture contre un vélo, pour tous vos déplacements (c'est peu réaliste dans notre société, mais on est là pour s'amuser, non ?).
Ce qui veut dire que vous ne payez plus d'emprunt, d'assurance, d'essence ni tout ça.
En revanche, vous payez quand même les impôts car vous êtes encore dans une société orchestrée par l'automobile et l'A 69 est toujours en construction.

Pour faire <code><span class="distance-d">X</span></code> kilomètres, à vélo, cela vous prendrait (en roulant environ à 15 km/h) : <code><span class="bike-time">X</span></code> heures.
Mais comme vous économiseriez <code><span class="time-notaxe">X</span></code> heures en moins pour et dans la voiture :

<div class="row justify-content-center">
  <h5>Votre gain à vélo serait de <code><span class="resulting-bike-time-notaxe">X</span></code> heures</h5>.
</div>

<div class="row justify-content-center">
  <h5>Et vous pourriez travailler <code><span class="resulting-bike-workless-notaxe">X</span></code> heures de moins par semaine</h5>.
</div>

Notez que votre résultat peut être négatif.
Ce qui laisse penser, dans ce cas, que votre mode de vie est totalement dépendant et inséparable du modèle tout voiture.

Bien sûr, tout cela est très théorique, étant donné qu'il faudra passer pas mal de temps sur le vélo.
Et c'est sans compter la météo.

Cela dit, nous avons tout de même ignoré d'autres temps :

* faire du sport (temps moins nécessaire lorsqu'on fait du vélo quotidiennement) ;
* aller chez le médecin (parce qu'on ne faisait pas assez de sport) ;
* travailler pour payer ces différents coûts.

# Aller moins vite

Et puis, tant qu'à faire, imaginons une société sans voiture, carrément.

Dans ce cas, je retire tous les impôts liés à l'automobile, évidemment.
Mais surtout, dans une société imaginaire de laquelle aurait été retirée la voiture, on peut aisément imaginer que les distances seraient drastiquement réduites.

En effet, qui accepterait de parcourir 15 bornes matin et soir à vélo juste pour aller bosser ?
Déjà que le faire en voiture semble aberrant...

Non, selon moi, une société sans voiture est forcément installée sur un modèle économique non capitaliste.
Pourquoi pas une [économie organique]({filename}/règles-du-jeu.md), tiens.
Je dis ça comme ça, évidemment oO.

Bref, en tout cas, dans ce cadre, les économies seraient drastiques.

<div class="row justify-content-center">
  <h5>Une société organique vous ferait gagner <code><span class="resulting-bike-time">X</span></code> heures</h5>.
</div>

<div class="row justify-content-center">
  <h5>Et vous pourriez donc travailler <code><span class="resulting-bike-workless">X</span></code> heures de moins par semaine</h5>.
</div>

Encore une fois, nous ne comptons pas moult éléments :

* la santé de la population (+ de sport, - de pollution, - d'accidents, etc) ;
* l'état de la planète (- de béton, + d'arbres, - de pollution encore, etc) ;
* et j'en passe.

# Conclusion

Cet article se veut faire réaliser que l'automobile est affublée d'une vitesse fantasmée.
Bien sûr, à l'instant t, à fond sur l'autoroute, nous allons bel et bien à 160 km/h.

Ah merde, un radar !

Mais en pratique, tous les coûts mis bout à bout, on voit bien qu'à l'échelle personnelle, nous somme déjà loin du compte.
Quant à l'échelle d'une société, c'est encore bien pire.

Prendre en compte tous les facteurs de l'automobile, c'est au moins se rendre compte :

* qu'elle est l'élément le plus dangereux au monde ;
* qu'elle pollue l'air mais aussi le silence ;
* qu'elle nous coûte sur tous les fronts : économie, espace, beauté du paysage, impact environnemental ;
* qu'elle nous a retiré le plaisir du mouvement lent, au profit du goût pour la destination rapidement atteinte ;
* qu'elle nous éloigne physiquement les uns des autres ;
* qu'elle nous oblige à faire appel à des experts pour la fabriquer, la réparer, la détruire.

Alors, sans pour autant mettre au rebut votre titine suite à cette lecture, comprenez les chaînes qui vous lient à elle car, ainsi, une nouvelle façon de penser la mobilité émerge.

Et à défaut d'accepter cela, maintenant vous savez au moins quel temps votre voiture vous siphonne.
C'est un bon départ pour se poser de nombreuses autres questions.

Allez, bisous !

Gus.
