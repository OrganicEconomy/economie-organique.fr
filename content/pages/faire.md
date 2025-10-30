Title: Faire
Slug: do-it
Lang: fr
Author: Gus
Summary: Allez-y, lancez-vous dans l'économie organique et créez de suite votre clocher.
Status: draft
Custom_scripts: dataTables.js, organic-money.js, localforage.nopromises.min.js, faire.js
Custom_css: dataTables.css

<div class="d-grid gap-2">
    <button id="start-new-instance" class="btn btn-primary btn-lg btn-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCreation" aria-expanded="false" aria-controls="collapseCreation">
      Démarrer l'économie organique chez moi
    </button>
    <div class="collapse" id="collapseCreation">
        <div class="card card-body">
            <div id="creation" class="row-fluid">
              <p>C'est quoi ton petit nom ?</p>
              <input id="citizen-name" class="form-control input-creation" type="text" placeholder="Nom et prénom(s)">
              <p>Et ta date de naissance ? (format JJ/MM/AAAA)</p>
              <input id="citizen-birthDate" class="form-control input-creation" type="text" placeholder="JJ/MM/AAAA">
              <p>Choisi un nom pour ta monnaie (au moins 3 caractères)</p>
              <input id="money-name" class="form-control input-creation" type="text" placeholder="ex: 'Le doux lard', 'Le rot' ou 'L'oeuf rend Suisse'">
              <p>Et un mot de passe bien sécure que tu ne dois jamais, JAMAIS, oublier :</p>
              <input type="password" class="form-control input-creation" id="input-password" placeholder="Au moins 6 caractères, le mieux est de faire une longue phrase">
              <p>Retape le pour voir :</p>
              <input type="password" class="form-control input-creation" id="input-password-validation" placeholder="Validation">
            </div>
            <div class="row justify-content-around">
              <a class="btn btn-secondary col-3" role="button" data-bs-toggle="collapse" data-bs-target="#collapseCreation" aria-expanded="false" aria-controls="collapseCreation">
                Annuler
              </a>
              <a id="creation-valid" class="btn btn-primary col-3 disabled" role="button">
                Valider
              </a>
            </div>
          </div>
      </div>
</div>

# Liste des citoyen(ne)s

<table id="citizen-list" class="display">
    <thead>
        <tr>
            <th>Nom-prénom</th>
            <th>Identifiant</th>
            <th>Date de naissance</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>1235KLFSDJ3EKJFS</td>
            <td>12/12/1912</td>
        </tr>
        <tr>
            <td>Bob Bibon</td>
            <td>234JSKZKZ4256543JDQSF</td>
            <td>01/02/1988</td>
        </tr>
    </tbody>
</table>

Bouton : Créer un clocher et/ou sélectionner un clocher
Afficher : la liste des citoyens

Bouton : créer un citoyen

Bouton (pour chaque citoyen) : Imprimer son chéquier du mois
Bouton (pour chaque citoyen) : Encaisser des chèques

Bouton : supprimer un citoyen



