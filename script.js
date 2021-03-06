window.onload = () => 
{ "use strict";

/**Version avec dataTransfert.setData() */

const divs = document.querySelectorAll(".box"); //selection de toutes les divs avec la classe draggable
let dragged; //servira à stocker la div dragged
for (let div of divs)
{
    div.ondragstart = (e) =>
    { 
      dragged = div;                   //copie la reference de la div qui sera dragged
      div.classList.add("dragged");   //ajout de la classe dragged
      e.dataTransfer.setData('text/plain', div.innerHTML); //option du drag permettant de sauvegarder le contenu du dragged
    };

    //Applique un effet CSS à l'entrée d'une zone de drop
    div.ondragenter = ()  =>
    {
      if (!div.classList.contains("dragged")) //si ce n'est pas l'element dragged
          div.classList.add('dropHover');    //applique la classe dropHover
      div.classList.remove('shake');        //Supprime la classe shake si présente
    };
    //Applique un effet CSS à l'a sortie d'une zone de drop
    div.ondragleave = ()  => div.classList.remove('dropHover'); //supprime la classe dropHover

    //Applique à un effet à la div qui a subit le drag d'origine
    div.ondragend   = ()  => div.classList.remove("dragged");  //supprime la classe dragged

    //Permet à la div d'etre une zone de drop (interdit par defaut)
    div.ondragover  = (e) => e.preventDefault();

    //Copie la div dragged à la zone du drop et applique un effet CSS dessus
    div.ondrop = (e) =>
    {
      dragged.innerHTML = div.innerHTML;                   //le dragged prend la valeur du drop
      div.innerHTML     = e.dataTransfer.getData('text/plain'); //le drop prend la valeur du dragged
      div.classList.remove('dropHover');               //supprime la classe dropHover
      div.classList.add("shake");                     //ajout de l'effet shake sur le drop
    };
}

//****Version sans utiliser e.dataTransfer*********************************************** */
// const divs = document.querySelectorAll(".box"); //selection de toutes les divs avec la classe draggable
// let dragged; //servira à stocker la div dragged

// for (let div of divs)
// {
//     //Lancement du Drag
//     div.ondragstart = ()  => 
//     {
//         dragged = div; //copie de la div qui sera dragged
//         div.classList.add("dragged"); //ajout de la classe dragged
//     };

//     //Applique un effet CSS à l'entrée d'une zone de drop
//     div.ondragenter = ()  =>
//     {
//         if (!div.classList.contains("dragged")) //si ce n'est pas l'element dragged
//              div.classList.add('dropHover'); //applique la classe dropHover
//         div.classList.remove('shake');        //Supprime la classe shake si présente
//     };

//     //Applique un effet CSS à l'a sortie d'une zone de drop
//     div.ondragleave = ()  => div.classList.remove('dropHover'); //supprime la classe dropHover

//     //Applique à un effet à la div qui a subit le drag d'origine
//     div.ondragend   = ()  => div.classList.remove("dragged"); //supprime la classe dragged

//     //Permet à la div d'etre une zone de drop (refusée par defaut)
//     div.ondragover  = (e) => e.preventDefault();

//     //Copie la div dragged à la zone du drop et applique un effet CSS dessus
//     div.ondrop      = (e) => 
//     {
//         [dragged.innerHTML, div.innerHTML] = [div.innerHTML,dragged.innerHTML]; //interverti les 2 divs
//         //Ex: a=1; b=2;  [a,b]=[b,a]; // maintenant a=2 et b=1
//         div.classList.remove('dropHover'); //supprime la classe dropHover
//         div.classList.add("shake");         //ajout de la classe shake
//     }
// }


};

