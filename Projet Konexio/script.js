// 1. Déclaration unique du tableau des produits vendus (avec les prix de base de l'étape 4)
const produitsVendus = [
    {
        nom: "Salade tahitienne de poisson cru",
        quantiteCommandee: 0, // Démarre à 0 par défaut
        prixUnitaire: 18.50
    },
    {
        nom: "Riz au Rea Tahiti et Umara",
        quantiteCommandee: 0,
        prixUnitaire: 24.00
    },
    {
        nom: "Po'e tahitien à la banane",
        quantiteCommandee: 0,
        prixUnitaire: 12.00
    },
    {
        nom: "Rhum polynésien Mana'o",
        quantiteCommandee: 0,
        prixUnitaire: 15.00
    }
];

// 2. Fonction pour générer le texte récapitulatif de la commande (Etape 5)
function genererResumeCommande(nombreProduits, prixTotal) {
    if (nombreProduits === 0) {
        return "Vous n’avez pas encore commandé de produit";
    } else {
        return `Vous avez commandé ${nombreProduits} produits pour un total de ${prixTotal.toFixed(2)} euros`;
    }
}

// 3. Calculer le montant total de la commande
function calculerTotalCommande() {
    return produitsVendus.reduce((accumulateur, produitActuel) => {
        return accumulateur + (produitActuel.quantiteCommandee * produitActuel.prixUnitaire);
    }, 0);
}

// 4. Calculer le nombre total de produits dans le panier
function calculerNombreTotalProduits() {
    return produitsVendus.reduce((accumulateur, produitActuel) => {
        return accumulateur + produitActuel.quantiteCommandee;
    }, 0);
}

// 5. Mettre à jour l'affichage dynamique sur la page HTML
function mettreAJourAffichage() {
    const nouveauTotal = calculerTotalCommande();
    const elementAffichage = document.getElementById("prix-total-affichage");
    
    if (elementAffichage) {
        elementAffichage.textContent = nouveauTotal.toFixed(2);
    }

    // Affiche également un résumé textuel complet dans la console à chaque clic
    const totalProduits = calculerNombreTotalProduits();
    console.log(genererResumeCommande(totalProduits, nouveauTotal));
}

// 6. Ajouter un produit au panier au clic (Etape 9 & 10)
function ajouterAuPanier(nomProduit) {
    const produit = produitsVendus.find(item => item.nom === nomProduit);
    if (produit) {
        produit.quantiteCommandee++;
        console.log(`"${nomProduit}" ajouté ! Nouvelle quantité : ${produit.quantiteCommandee}`);
        mettreAJourAffichage(); 
    } else {
        console.error(`Erreur : Le produit "${nomProduit}" n'a pas été trouvé.`);
    }
}

// 7. Initialisation de l'affichage au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    mettreAJourAffichage();
});