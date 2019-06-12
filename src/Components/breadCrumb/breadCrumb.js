import React, { Component } from 'react'
import {Breadcrumb} from 'react-bootstrap'

//Pour optimiser écriture
//Prendre les valeurs et les afficher d'une façon dynamique dans BreadCrumb 

let tab = window.location.pathname.split("/")

class BreadCrumb extends Component {
    //fonction retourne qu'est ce qu'on va afficher, responsable affichage
    render() {
        // existe dans chaque fonction qui admet un résultat , retourne une valeur
        return (
            // contenu de return doit etre mis dans 1 seul tag div ou autre exemple span
            // on l'utilise si 2 ou + ieurs composants
                <Breadcrumb   expand="lg">
                {/*  chaque tab contient +ieurs fonctions prédéfinies de javascript d'après W3C 
                 le navigateur sans {} considère que le code sous balise est un HTML alors grace à {} il comprend qu'il s'agit de JSX
                 map va parcourir tous les elements du tableau et applique un traitement sur chaque element
                 () qui existe après map fonction qui contient le traitement
                 element: paramètre represente l'element qui va subir le ttt
                 i: paramètre represente l'index de cet element dans le tableau
                 (element, i): definition des paramètres
                 => {} : ttt qui va se dérouler
                 // return obligatoire dans map
                 //{element}: va afficher element dans un breadcrumb
                 //active : gris "selectionné"
                 // i == tab.length -1: dernier element comaparaison resultat  boolean = true
                 href="#" : lien si existe on l'ecrit si non #
            */}
                
                {tab.map((element, i) =>{
                    return (
                        <Breadcrumb.Item className="breadcrumbColor" active = {i == tab.length -1} href="#">{element}</Breadcrumb.Item>
                    )
                })}
                   
                </Breadcrumb>
            
        )
    }
}

// export default : permet l'import nom composant from path
// export : permet import de plusieurs composants (classes) tjrs entre {}
export default BreadCrumb