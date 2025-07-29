Title: Faire
Slug: do-it
Lang: fr
Author: Gus
Summary: Allez-y, lancez-vous dans l'économie organique et créez de suite votre clocher.
Status: draft
Custom_scripts: organic-money.js, faire.js

<button id="start-new-instance" type="button" class="btn btn-lg btn-outline-primary btn-block" style="">
    <div class="pull-left" style="text-align:center;width:calc(100% - 30px);white-space:normal;overflow:hidden;">
        Démarrer l'économie organique chez moi
    </div>
</button>
<button id="load-instance" type="button" class="btn btn-lg btn-outline-primary btn-block">
    <div class="pull-left" style="text-align:center;width:calc(100% - 30px);white-space:normal;overflow:hidden;">
        Charger mon groupe
    </div>
</button>

<input id="folder-import" type="file" multiple="multiple"
  webkitdirectory mozdirectory msdirectory odirectory directory>
<progress value="0" max="100" id="progress-bar"></progress>
<progress value="0" max="100" id="folder-progress-bar"></progress>
<div id="status"></div>
<div id="statusFolder"></div>

# Actions

Bouton : Créer un clocher et/ou sélectionner un clocher
Afficher : la liste des citoyens

Bouton : créer un citoyen

Bouton (pour chaque citoyen) : Imprimer son chéquier du mois
Bouton (pour chaque citoyen) : Encaisser des chèques

Bouton : supprimer un citoyen

# Mode d'emploi

<!-- Modals go there -->

<div id="intro-0" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Salut, toi</h5>
      </div>
      <div class="modal-body">
        <p>C'est ta première et tu veux mettre en place l'économie organique chez toi ?</p>
      </div>
      <div class="modal-footer">
        <button id="intro-0-valid" type="button" class="btn btn-primary btn-block">Allez !</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Ah, non, pardon</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-1" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Tu es bien équipé(e) ?</h5>
      </div>
      <div class="modal-body">
        <p>Note que cette version ne fonctionne que sur un ordinateur (pas un smartphone)</p>
      </div>
      <div class="modal-footer">
        <button id="intro-1-valid" type="button" class="btn btn-primary btn-block">C'est bon pour moi</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Ah, bah non, la prochaine fois</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-2" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p>Choisi un nom pour ta monnaie (au moins 3 caractères)</p>
        <p><em><small>Tu pourras toujours le modifier plus tard</small></em></p>
        <input id="money-name" class="form-control" type="text" placeholder="ex: 'Le doux lard', 'Le rot' ou 'L'oeuf rend Suisse'">
      </div>
      <div class="modal-footer">
        <button id="intro-2-valid" type="button" class="btn btn-primary btn-block" disabled>Valider</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">J'arrête là, ça devient trop concret</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-3" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p>Et un mot de passe bien sécure que tu ne dois jamais, JAMAIS, oublier.</p>
        <p><em><small>Au moins 6 caractères, et encore 12 serait mieux</small></em></p>
        <input type="password" class="form-control input-password" id="input-password" placeholder="Mot de passe">
        <p>Retape le pour voir.</p>
        <input type="password" class="form-control input-password" id="input-password-validation" placeholder="Validation">
      </div>
      <div class="modal-footer">
        <button id="intro-3-valid" type="button" class="btn btn-primary" disabled>C'est bon !</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Finalement j'ai piscine</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-4" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ok, super !</h5>
      </div>
      <div class="modal-body">
        <p>Maintenant, télécharge ce fichier et enregistre le dans un <u>nouveau dossier</u>, là où tu le retrouveras car <em>il va souvent servir</em>.</p>
        <p><a id="download-link">Clique ici</a> pour télécharger ton fichier de démarrage</p>
      </div>
      <div class="modal-footer">
        <button id="intro-4-valid" type="button" class="btn btn-primary">Envoi la sauce !</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Nan, j'annule</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-5" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Parfait !</h5>
      </div>
      <div class="modal-body">
        <p>C'est dans ce dossier que seront enregistrées TOUTES les informations de ce qui se passe (économiquement) dans ton groupe d'économie organique.</p>
      </div>
      <div class="modal-footer">
        <button id="intro-5-valid" type="button" class="btn btn-primary">Compris</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-6" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Note</h5>
      </div>
      <div class="modal-body">
        <p>De temps en temps, pense à faire une sauvegarde de ton dossier (dans le cloud, sur une clé USB, gravé sur une plaque de marbre, etc) juste au cas où ton ordinateur aurait un souci.</p>
      </div>
      <div class="modal-footer">
        <button id="intro-6-valid" type="button" class="btn btn-primary">Y'a bon !</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-7" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Prêt ?</h5>
      </div>
      <div class="modal-body">
        <p>Pour commencer, clique sur "Ajouter un(e) citoyen(ne)" et ajoute toi.</p>
      </div>
      <div class="modal-footer">
        <button id="intro-7-valid" type="button" class="btn btn-primary">Je vais faire ça</button>
      </div>
    </div>
  </div>
</div>

<div id="intro-8" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">C'est parti !</h5>
      </div>
      <div class="modal-body">
        <p>Voilà ! C'est fini, je te laisse mettre tranquillement à bas le Capitalisme.</p>
      </div>
      <div class="modal-footer">
        <button id="intro-8-valid" type="button" class="btn btn-primary">Banco !</button>
      </div>
    </div>
  </div>
</div>
