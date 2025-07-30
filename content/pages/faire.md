Title: Faire
Slug: do-it
Lang: fr
Author: Gus
Summary: Allez-y, lancez-vous dans l'économie organique et créez de suite votre clocher.
Status: draft
Custom_scripts: organic-money.js, faire.js

<p>
  <button id="start-new-instance" class="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseCreation" aria-expanded="false" aria-controls="collapseCreation">
    Démarrer l'économie organique chez moi
  </button>
</p>
<div class="collapse" id="collapseCreation">
  <div class="card card-body">
    <div id="carousel-creation" class="carousel slide container-fluid">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="intro-0" class="row-fluid">
            <h5>Salut, toi !</h5>
            <p>C'est ta première et tu veux mettre en place l'économie organique chez toi ?</p>
            <p><small><em>Ça prend 5 minutes</em></small></p>
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" role="button" data-toggle="collapse" data-target="#collapseCreation" aria-expanded="false" aria-controls="collapseCreation">
              Ah non pardon
            </a>
            <a id="intro-0-valid" class="btn btn-primary col-3" href="#carousel-creation" data-slide="next">
              Allez !
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div id="intro-1" class="row-fluid">
            <h5 class="modal-title">Tu es bien équipé(e) ?</h5>
            <p>Note que cette version ne fonctionne que sur un ordinateur (pas un smartphone)</p>
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" href="#carousel-creation" role="button" data-slide="prev">
              Retour
            </a>
            <a id="intro-1-valid" class="btn btn-primary col-3" href="#carousel-creation" role="button" data-slide="next">
              C'est bon pour moi
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div id="intro-2" class="row-fluid">
            <p>Choisi un nom pour ta monnaie (au moins 3 caractères)</p>
            <p><em><small>Tu pourras toujours le modifier plus tard</small></em></p>
            <input id="money-name" class="form-control" type="text" placeholder="ex: 'Le doux lard', 'Le rot' ou 'L'oeuf rend Suisse'">
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" href="#carousel-creation" role="button" data-slide="prev">
              Retour
            </a>
            <a id="intro-2-valid" class="btn btn-primary col-3 disabled" href="#carousel-creation" role="button" data-slide="next">
              Valider
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div id="intro-3" class="row-fluid">
              <p>Et un mot de passe bien sécure que tu ne dois jamais, JAMAIS, oublier.</p>
              <p><em><small>Au moins 6 caractères, et encore 12 serait mieux</small></em></p>
              <input type="password" class="form-control input-password" id="input-password" placeholder="Mot de passe">
              <p>Retape le pour voir.</p>
              <input type="password" class="form-control input-password" id="input-password-validation" placeholder="Validation">
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" href="#carousel-creation" role="button" data-slide="prev">
              Retour
            </a>
            <a id="intro-3-valid" class="btn btn-primary col-3 disabled" href="#carousel-creation" role="button" data-slide="next">
              Valider
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div id="intro-4" class="row-fluid">
            <h5>Ok, super !</h5>
            <p>Maintenant, télécharge ce fichier et enregistre le dans un endroit où tu le retrouveras car <em>il va souvent servir</em>.</p>
            <p><a id="download-link">Clique ici</a> pour télécharger ton fichier de démarrage</p>
            <p>C'est dans ce fichier que seront enregistrées TOUTES les informations de ce qui se passe (économiquement) dans ton groupe d'économie organique.</p>
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" href="#carousel-creation" role="button" data-slide="prev">
              Retour
            </a>
            <a id="intro-4-valid" class="btn btn-primary col-3" href="#carousel-creation" role="button" data-slide="next">
              Valider
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div id="intro-5" class="row-fluid">
            <h5>Note</h5>
            <p>De temps en temps, pense à faire une sauvegarde de ton dossier (dans le cloud, sur une clé USB, gravé sur une plaque de marbre...) juste au cas où ton ordinateur aurait un souci.</p>
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" href="#carousel-creation" role="button" data-slide="prev">
              Retour
            </a>
            <a id="intro-5-valid" class="btn btn-primary col-3" href="#carousel-creation" role="button" data-slide="next">
              Compris
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div id="intro-6" class="row-fluid">
            <h5>Bravo !</h5>
            <p>C'est fait ! Maintenant, tu peux cliquer sur "charger mon groupe" et choisir le dossier que tu viens de créer, qui contient le fichier que je t'ai fait télécharger.</p>
            <p>Allez, je te laisse mettre tranquillement à bas le Capitalisme.</p>
          </div>
          <div class="row justify-content-around">
            <a class="btn btn-secondary col-3" href="#carousel-creation" role="button" data-slide="prev">
              Retour
            </a>
            <a id="intro-6-valid" class="btn btn-primary col-3" role="button" data-toggle="collapse" data-target="#collapseCreation" aria-expanded="false" aria-controls="collapseCreation">
              Valider
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<button id="load-instance" type="button" class="btn btn-lg btn-outline-primary btn-block">
    <div class="pull-left" style="text-align:center;width:calc(100% - 30px);white-space:normal;overflow:hidden;">
        Charger mon groupe
    </div>
</button>

<input id="file-import" type="file">
<div class="progress">
  <div id="progress-bar" class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div id="status"></div>

# Actions

Bouton : Créer un clocher et/ou sélectionner un clocher
Afficher : la liste des citoyens

Bouton : créer un citoyen

Bouton (pour chaque citoyen) : Imprimer son chéquier du mois
Bouton (pour chaque citoyen) : Encaisser des chèques

Bouton : supprimer un citoyen
