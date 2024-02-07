# Mini application de recettes de cuisine

## À propos

Créer une web application single-page (Single Page Application) de gestion
simple de recettes de cuisine en utilisant Vue 3.

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 📚 [Documentation](#documentation)
- 🏷️ [Gestion des versions](#gestion-des-versions)


## Prérequis

- HtML 
- JS 
- CSS
- vue



## Documentation

Fonctionnalités
On veut pouvoir créer des recettes (ajouter à une liste) et les supprimer.
La page ne doit pas se recharger en cas de création de recette et de suppression.
L’interface doit se mettre à jour dynamiquement sans rechargement de la page.
Gestion d’erreurs
Il est impossible de créer une recette qui possède (au moins) un champ vide.
Vous devez gérer la validation du formulaire en Javascript, ajouter l’attribut
required aux champs du formulaire de création de recettes ne suffit pas.
Bonus
Gérer le “localstorage” des recettes : stocker les recettes dans le navigateur pour
qu’elles persistent même après le rechargement de la page.
Contraintes techniques
Vous êtes responsable de l’interface HTML, et vous pouvez utiliser tous les
attributs que vous voulez (id, class. . . )
Vous devez stocker les recettes dans un tableau javascript recipes.
Chaque recette sera représentée par un objet javascript recipe contenant les
propriétés suivantes :
• id : généré aléatoire à l’aide d’un timestamp
• name : nom de la recette
• ingredients : ingrédients de la recette (simple texte)
• preparation : préparation de la recette (simple texte)
• time : temps de préparation en minutes (nombre entier)
• people : nombre de personnes (nombre entier)

Interface
Vous devez réaliser une interface simple de gestion de recettes en HTML/CSS.
En terme d’interface, la création d’une recette doit se faire via un formulaire
HTML contenant les champs suivants :

• champ “Nom” (input type “text”) : nom de la recette
• champ “Ingredients” (textarea) : ingrédients de la recette
• champ “Préparation” (textarea) : préparation de la recette
• champ “Temps de préparation” (input type “number”) : temps de préparation
en minutes (nombre entier)
• champ “Nombre de personne” (input type “number”) : nombre de personnes
Vous devrez ajouter un bouton d’envoi du formulaire (type “submit”)
Vous devez afficher la liste des recettes. Chaque recette contient un bouton
permettant de supprimer cette recette.

## Gestion des versions

Afin de maintenir un cycle de publication claire et de favoriser la rétrocompatibilité, la dénomination des versions suit la spécification décrite par la [Gestion sémantique de version](https://semver.org/lang/fr/)

Les versions disponibles ainsi que les journaux décrivant les changements apportés sont disponibles depuis [la page des Releases][mettre le lien ici].






