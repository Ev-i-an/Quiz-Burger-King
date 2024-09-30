const questions = [
    {
        question: "Quelle est la composition du Whooper ?",
        answers: [
            {text: "CB5-mayonnaise-salade-tomates x2//oignon x3-ketchup-cornichon x4- Patty W", correct: true},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x4- Patty B", correct: false},
            {text: "CB5-mayonnaise-salade//oignon x2-ketchup-cornichon x4- Patty W", correct: false},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x2- Patty 150", correct: false},
        ]
    },
    {
        question: "Quelle est l'élément ne se trouvant pas dans le Whooper ?",
        answers: [
            {text: "rondelles de cornichon", correct: false},
            {text: "salade", correct: false},
            {text: "patty whopper", correct: false},
            {text: "fromage", correct: true},
        ]
    },
    {
        question: "Quelle est l'élément se trouvant pas dans le Whooper ? II",
        answers: [
            {text: "rondelles de cornichon x4", correct: false},
            {text: "salade", correct: false},
            {text: "patty whopper", correct: false},
            {text: "rondelles de cornichon x2", correct: true},
        ]
    },
    {
        question: "Quelle est l'élément se trouvant pas dans le Whooper ? III",
        answers: [
            {text: "rondelles de cornichon x4", correct: false},
            {text: "salade", correct: false},
            {text: "moutarde", correct: false},
            {text: "rondelles de cornichon x2", correct: true},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Whopper ?",
        answers: [
            {text: "CB5", correct: true},
            {text: "CB4", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomate sont dans le Whopper ?",
        answers: [
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "1", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de rondelles d'oignon sont dans le Whopper ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "5", correct: false},
        ]
    },
    {
        question: "Quel condiment n'est pas inclus dans le Whopper ?",
        answers: [
            {text: "Moutarde", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Ketchup", correct: false},
            {text: "Cornichon", correct: false},
        ]
    },
    {
        question: "Quels sont les ingrédients du Double Whopper Cheese ?",
        answers: [
            {text: "CB5-mayonnaise-salade-tomates x2//oignon x3-ketchup-cornichon x4-fromage x2- Patty W x2", correct: true},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x4-fromage x2- Patty B x2", correct: false},
            {text: "CB5-mayonnaise-salade//oignon x2-ketchup-cornichon x4-fromage x2- Patty W x2", correct: false},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x2-fromage x2- Patty 150 x2", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Double Whopper Cheese ?",
        answers: [
            {text: "CB5", correct: true},
            {text: "CB4", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage sont dans le Double Whopper Cheese ?",
        answers: [
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "1", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de patties de bœuf sont dans le Double Whopper Cheese ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel condiment n'est pas inclus dans le Double Whopper Cheese ?",
        answers: [
            {text: "Moutarde", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Ketchup", correct: false},
            {text: "Cornichon", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le Double Bacon Cheese XXL ?",
        answers: [
            {text: "CB5", correct: true},
            {text: "CB4", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        
        question: "Combien de tranches de bacon y a-t-il dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "Moutarde", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Sauce BBQ", correct: false},
            {text: "Sauce Ranch", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de cornichons sont inclus dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de Patty Whopper sont utilisés dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de sauce est utilisé dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "Ketchup", correct: true},
            {text: "Sauce BBQ", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage sont placées entre les Patty Whopper dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Cornichons", correct: false},
            {text: "Bacon", correct: false},
            {text: "Fromage", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de tranches de fromage dans le Double Bacon Cheese XXL ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },

    {
        question: "Quel type de pain est utilisé pour le Steakhouse ?",
        answers: [
            {text: "CB4,5", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Steakhouse ?",
        answers: [
            {text: "Mayonnaise", correct: true},
            {text: "Moutarde", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Quel type d'oignons est utilisé dans le Steakhouse ?",
        answers: [
            {text: "Oignons fries", correct: true},
            {text: "Oignons crus", correct: false},
            {text: "Oignons caramélisés", correct: false},
            {text: "Oignons marinés", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomates y a-t-il dans le Steakhouse ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de sauce est utilisé dans le Steakhouse ?",
        answers: [
            {text: "Sauce BBQ", correct: true},
            {text: "Ketchup", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Combien de tranches de bacon y a-t-il dans le Steakhouse ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Steakhouse ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de Patty Whopper sont utilisés dans le Steakhouse ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Steakhouse ?",
        answers: [
            {text: "Cornichons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomates", correct: false},
            {text: "Bacon", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de tranches de fromage dans le Steakhouse ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Double Steakhouse ?",
        answers: [
            {text: "CB4,5", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Double Steakhouse ?",
        answers: [
            {text: "Mayonnaise", correct: true},
            {text: "Moutarde", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Quel type d'oignons est utilisé dans le Double Steakhouse ?",
        answers: [
            {text: "Oignons fries", correct: true},
            {text: "Oignons crus", correct: false},
            {text: "Oignons caramélisés", correct: false},
            {text: "Oignons marinés", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomates y a-t-il dans le Double Steakhouse ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de sauce est utilisé dans le Double Steakhouse ?",
        answers: [
            {text: "Sauce BBQ", correct: true},
            {text: "Ketchup", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Combien de tranches de bacon y a-t-il dans le Double Steakhouse ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Double Steakhouse ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de Patty Whopper sont utilisés dans le Double Steakhouse ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Double Steakhouse ?",
        answers: [
            {text: "Cornichons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomates", correct: false},
            {text: "Bacon", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de tranches de fromage dans le Double Steakhouse ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Big King XXL ?",
        answers: [
            {text: "CB5", correct: true},
            {text: "CB4,5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Big King XXL ?",
        answers: [
            {text: "Sauce King", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Big King XXL ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de tranches d'oignons y a-t-il dans le Big King XXL ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de cornichons sont inclus dans le Big King XXL ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de Patty Whopper sont utilisés dans le Big King XXL ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Big King XXL ?",
        answers: [
            {text: "Tomates", correct: true},
            {text: "Salade", correct: false},
            {text: "Oignons", correct: false},
            {text: "Fromage", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le Big King XXL ?",
        answers: [
            {text: "Cheddar", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la sauce King dans le Big King XXL ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Tomates", correct: false},
            {text: "Oignons", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de tranches de fromage dans le Big King XXL ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Big King ?",
        answers: [
            {text: "CB5", correct: false},
            {text: "CB4,5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB4", correct: true},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Big King ?",
        answers: [
            {text: "Sauce King", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Big King ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de tranches d'oignons y a-t-il dans le Big King ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de cornichons sont inclus dans le Big King ?",
        answers: [
            {text: "2", correct: true},
            {text: "4", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de Patty Whopper sont utilisés dans le Big King ?",
        answers: [
            {text: "2", correct: true},
            {text: "4", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le Hamburger ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Hamburger ?",
        answers: [
            {text: "Moutarde", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Sauce BBQ", correct: false},
            {text: "Sauce Ranch", correct: false},
        ]
    },
    {
        question: "Quel autre condiment est utilisé dans le Hamburger ?",
        answers: [
            {text: "Ketchup", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Sauce BBQ", correct: false},
            {text: "Sauce Ranch", correct: false},
        ]
    },
    {
        question: "Combien de cornichons sont inclus dans le Hamburger ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de Patty Burger sont utilisés dans le Hamburger ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Hamburger ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Cornichons", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Ketchup", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Hamburger ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé en plus de la moutarde dans le Hamburger ?",
        answers: [
            {text: "Ketchup", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Sauce BBQ", correct: false},
            {text: "Sauce Ranch", correct: false},
        ]
    },
    {
        question: "Combien de tranches de cornichons sont incluses dans le Hamburger ?",
        answers: [
            {text: "4", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de Patty Burger dans le Hamburger ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le BPC BBQ Bacon ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le BPC BBQ Bacon ?",
        answers: [
            {text: "Mayonnaise", correct: true},
            {text: "Moutarde", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Quel type d'oignons est utilisé dans le BPC BBQ Bacon ?",
        answers: [
            {text: "Oignons fries", correct: true},
            {text: "Oignons crus", correct: false},
            {text: "Oignons caramélisés", correct: false},
            {text: "Oignons marinés", correct: false},
        ]
    },
    {
        question: "Quel type de sauce est utilisé dans le BPC BBQ Bacon ?",
        answers: [
            {text: "Sauce BBQ", correct: true},
            {text: "Ketchup", correct: false},
            {text: "Sauce Ranch", correct: false},
            {text: "Sauce Tartare", correct: false},
        ]
    },
    {
        question: "Combien de tranches de bacon y a-t-il dans le BPC BBQ Bacon ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le BPC BBQ Bacon ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de Patty Burger sont utilisés dans le BPC BBQ Bacon ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le BPC BBQ Bacon ?",
        answers: [
            {text: "Cornichons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomates", correct: false},
            {text: "Bacon", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le BPC BBQ Bacon ?",
        answers: [
            {text: "Cheddar", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la sauce BBQ dans le BPC BBQ Bacon ?",
        answers: [
            {text: "Oignons fries", correct: true},
            {text: "Tomates", correct: false},
            {text: "Salade", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le CHK Louisiane STKS ?",
        answers: [
            {text: "CB4,5", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le CHK Louisiane STKS ?",
        answers: [
            {text: "Sauce Cajun", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type d'oignons est utilisé dans le CHK Louisiane STKS ?",
        answers: [
            {text: "Oignons fries", correct: true},
            {text: "Oignons crus", correct: false},
            {text: "Oignons caramélisés", correct: false},
            {text: "Oignons marinés", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomates y a-t-il dans le CHK Louisiane STKS ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de tranches de bacon y a-t-il dans le CHK Louisiane STKS ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le CHK Louisiane STKS ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de Patty Chicken Premium sont utilisés dans le CHK Louisiane STKS ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le CHK Louisiane STKS ?",
        answers: [
            {text: "Cornichons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomates", correct: false},
            {text: "Bacon", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le CHK Louisiane STKS ?",
        answers: [
            {text: "Cheddar", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la sauce Cajun dans le CHK Louisiane STKS ?",
        answers: [
            {text: "Oignons fries", correct: true},
            {text: "Tomates", correct: false},
            {text: "Salade", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le Chicken Spicy ?",
        answers: [
            {text: "CB4,5", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Chicken Spicy ?",
        answers: [
            {text: "Sauce Spicy Andalouse", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le Chicken Spicy ?",
        answers: [
            {text: "Cheddar", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Combien de Patty Chicken Premium sont utilisés dans le Chicken Spicy ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Chicken Spicy ?",
        answers: [
            {text: "Tomates", correct: true},
            {text: "Salade", correct: false},
            {text: "Cheddar", correct: false},
            {text: "Sauce Spicy Andalouse", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Chicken Spicy ?",
        answers: [
            {text: "CB4,5", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé en plus de la sauce Spicy Andalouse dans le Chicken Spicy ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Tomates", correct: false},
            {text: "Oignons", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    {
        question: "Combien de tranches de cheddar sont incluses dans le Chicken Spicy ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de Patty Chicken Premium dans le Chicken Spicy ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la sauce Spicy Andalouse dans le Chicken Spicy ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Tomates", correct: false},
            {text: "Oignons", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le Big Fish ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Big Fish ?",
        answers: [
            {text: "Sauce King", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type de salade est utilisé dans le Big Fish ?",
        answers: [
            {text: "Salade verte", correct: true},
            {text: "Salade romaine", correct: false},
            {text: "Salade iceberg", correct: false},
            {text: "Salade frisée", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomate y a-t-il dans le Big Fish ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le Big Fish ?",
        answers: [
            {text: "Cheddar", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Combien de Patty Fish sont utilisés dans le Big Fish ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Big Fish ?",
        answers: [
            {text: "Oignons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomate", correct: false},
            {text: "Fromage", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé en plus de la Sauce King dans le Big Fish ?",
        answers: [
            {text: "Sauce King", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage sont incluses dans le Big Fish ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de Patty Fish dans le Big Fish ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le King Fish ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le King Fish ?",
        answers: [
            {text: "Sauce Cajun", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type de salade est utilisé dans le King Fish ?",
        answers: [
            {text: "Salade verte", correct: true},
            {text: "Salade romaine", correct: false},
            {text: "Salade iceberg", correct: false},
            {text: "Salade frisée", correct: false},
        ]
    },
    {
        question: "Combien de Patty Fish sont utilisés dans le King Fish ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le King Fish ?",
        answers: [
            {text: "Tomates", correct: true},
            {text: "Salade", correct: false},
            {text: "Sauce Cajun", correct: false},
            {text: "Patty Fish", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le King Fish ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé en plus de la Sauce Cajun dans le King Fish ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Tomates", correct: false},
            {text: "Oignons", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage sont incluses dans le King Fish ?",
        answers: [
            {text: "0", correct: true},
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de Patty Fish dans le King Fish ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la Sauce Cajun dans le King Fish ?",
        answers: [
            {text: "Salade", correct: true},
            {text: "Tomates", correct: false},
            {text: "Oignons", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },

    {
        question: "Quel type de pain est utilisé pour le King Chicken ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le King Chicken ?",
        answers: [
            {text: "Sauce Cajun", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type de salade est utilisé dans le King Chicken ?",
        answers: [
            {text: "Salade verte", correct: true},
            {text: "Salade romaine", correct: false},
            {text: "Salade iceberg", correct: false},
            {text: "Salade frisée", correct: false},
        ]
    },
    {
        question: "Combien de Patty Crispy Chicken sont utilisés dans le King Chicken ?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le King Chicken ?",
        answers: [
            {text: "Tomates", correct: true},
            {text: "Salade", correct: false},
            {text: "Sauce Cajun", correct: false},
            {text: "Patty Crispy Chicken", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le King Chicken ?",
        answers: [
            {text: "CB4", correct: true},
            {text: "CB5", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    
    {
        question: "Quel type de pain est utilisé pour le Wrap CHK Louisiane ?",
        answers: [
            {text: "Tortilla", correct: true},
            {text: "CB4", correct: false},
            {text: "CB5", correct: false},
            {text: "Pain complet", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "Sauce Cajun", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type d'oignons est utilisé dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "Oignons frits", correct: true},
            {text: "Oignons crus", correct: false},
            {text: "Oignons caramélisés", correct: false},
            {text: "Oignons marinés", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomates y a-t-il dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de Patty Crispy Chicken sont utilisés dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "Cornichons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomates", correct: false},
            {text: "Fromage", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "Cheddar", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la sauce Cajun dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "Oignons frits", correct: true},
            {text: "Tomates", correct: false},
            {text: "Salade", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de tranches de fromage dans le Wrap CHK Louisiane ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Tortilla", correct: true},
            {text: "CB4", correct: false},
            {text: "CB5", correct: false},
            {text: "Pain complet", correct: false},
        ]
    },
    {
        question: "Quel condiment est utilisé dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Sauce Cajun", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Moutarde", correct: false},
            {text: "Sauce BBQ", correct: false},
        ]
    },
    {
        question: "Quel type d'oignons est utilisé dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Oignons frits", correct: true},
            {text: "Oignons crus", correct: false},
            {text: "Oignons caramélisés", correct: false},
            {text: "Oignons marinés", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomates y a-t-il dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage y a-t-il dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel type de croustillant est utilisé dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Crousty du moment", correct: true},
            {text: "Crousty de poulet", correct: false},
            {text: "Crousty de poisson", correct: false},
            {text: "Crousty de légumes", correct: false},
        ]
    },
    {
        question: "Quel ingrédient n'est pas inclus dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Cornichons", correct: true},
            {text: "Salade", correct: false},
            {text: "Tomates", correct: false},
            {text: "Fromage", correct: false},
        ]
    },
    {
        question: "Quel type de fromage est utilisé dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Chèvre", correct: true},
            {text: "Emmental", correct: false},
            {text: "Gouda", correct: false},
            {text: "Mozzarella", correct: false},
        ]
    },
    {
        question: "Quel ingrédient est utilisé en plus de la sauce Cajun dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "Oignons frits", correct: true},
            {text: "Tomates", correct: false},
            {text: "Salade", correct: false},
            {text: "Cornichons", correct: false},
        ]
    },
    {
        question: "Quel est le nombre total de tranches de fromage dans le Wrap Crousty Chèvre ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
        {
            question: "Quel type de pain est utilisé pour le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Tortilla", correct: true},
                {text: "CB4", correct: false},
                {text: "CB5", correct: false},
                {text: "Pain complet", correct: false},
            ]
        },
        {
            question: "Quel condiment est utilisé dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Mayonnaise", correct: true},
                {text: "Moutarde", correct: false},
                {text: "Sauce Ranch", correct: false},
                {text: "Sauce Tartare", correct: false},
            ]
        },
        {
            question: "Quel type d'oignons est utilisé dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Oignons frits", correct: true},
                {text: "Oignons crus", correct: false},
                {text: "Oignons caramélisés", correct: false},
                {text: "Oignons marinés", correct: false},
            ]
        },
        {
            question: "Combien de Patty Crispy Chicken sont utilisés dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "2", correct: true},
                {text: "1", correct: false},
                {text: "3", correct: false},
                {text: "4", correct: false},
            ]
        },
        {
            question: "Quel type de fromage est utilisé dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Cheddar", correct: true},
                {text: "Emmental", correct: false},
                {text: "Gouda", correct: false},
                {text: "Mozzarella", correct: false},
            ]
        },
        {
            question: "Quel type de sauce est utilisé dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Sauce BBQ", correct: true},
                {text: "Ketchup", correct: false},
                {text: "Sauce Ranch", correct: false},
                {text: "Sauce Tartare", correct: false},
            ]
        },
        {
            question: "Combien de tranches de bacon y a-t-il dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "1", correct: true},
                {text: "2", correct: false},
                {text: "3", correct: false},
                {text: "4", correct: false},
            ]
        },
        {
            question: "Quel ingrédient n'est pas inclus dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Cornichons", correct: true},
                {text: "Salade", correct: false},
                {text: "Tomates", correct: false},
                {text: "Fromage", correct: false},
            ]
        },
        {
            question: "Quel ingrédient est utilisé en plus de la sauce BBQ dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "Oignons frits", correct: true},
                {text: "Tomates", correct: false},
                {text: "Salade", correct: false},
                {text: "Cornichons", correct: false},
            ]
        },
        {
            question: "Quel est le nombre total de tranches de fromage dans le Wrap Chicken BBQ Bacon ?",
            answers: [
                {text: "1", correct: true},
                {text: "2", correct: false},
                {text: "3", correct: false},
                {text: "4", correct: false},
            ]
        },
        
        {
            question: "Quel type de pain est utilisé pour le Veggie Whopper ?",
            answers: [
                { text: "CB5", correct: true },
                { text: "CB4", correct: false },
                { text: "Tortilla", correct: false },
                { text: "Pain complet", correct: false },
            ]
        },
        {
            question: "Quel type de patty est utilisé dans le Veggie Whopper ?",
            answers: [
                { text: "Patty Rebel", correct: true },
                { text: "Patty Crispy Chicken", correct: false },
                { text: "Patty Végétale", correct: false },
                { text: "Patty Bœuf", correct: false },
            ]
        },
        {
            question: "Combien de tranches de tomates y a-t-il dans le Veggie Whopper ?",
            answers: [
                { text: "2", correct: true },
                { text: "1", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false },
            ]
        },
        {
            question: "Quel type de sauce est utilisé dans le Veggie DCB ?",
            answers: [
                { text: "Moutarde", correct: true },
                { text: "Mayonnaise", correct: false },
                { text: "Sauce BBQ", correct: false },
                { text: "Sauce Ranch", correct: false },
            ]
        },
        {
            question: "Combien de tranches de fromage sont utilisées dans le Veggie DCB ?",
            answers: [
                { text: "2", correct: false },
                { text: "1", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: true },
            ]
        },
        {
            question: "Quel ingrédient n'est pas inclus dans le Veggie Steakhouse ?",
            answers: [
                { text: "Cornichons", correct: true },
                { text: "Oignons frits", correct: false },
                { text: "Mayonnaise", correct: false },
                { text: "Sauce BBQ", correct: false },
            ]
        },
        {
            question: "Quel burger utilise la sauce Cajun ?",
            answers: [
                { text: "Veggie Louisiane", correct: true },
                { text: "Veggie DCB", correct: false },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie Steakhouse", correct: false },
            ]
        },
        {
            question: "Combien de tranches de bacon végétale sont utilisées dans le Veggie Louisiane ?",
            answers: [
                { text: "3", correct: true },
                { text: "2", correct: false },
                { text: "4", correct: false },
                { text: "1", correct: false },
            ]
        },
        {
            question: "Quel type de pain est utilisé pour le Veggie Steakhouse ?",
            answers: [
                { text: "CB4,5", correct: true },
                { text: "CB5", correct: false },
                { text: "Tortilla", correct: false },
                { text: "Pain complet", correct: false },
            ]
        },
        {
            question: "Quel ingrédient est commun entre le Veggie Steakhouse et le Veggie Whopper ?",
            answers: [
                { text: "Oignons", correct: true },
                { text: "Sauce BBQ", correct: false },
                { text: "Cornichons", correct: false },
                { text: "Bacon végétale", correct: false },
            ]
        },
        {
            question: "Combien de Patty Rebel sont utilisés dans le Veggie DCB ?",
            answers: [
                { text: "2", correct: true },
                { text: "1", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false },
            ]
        },
        {
            question: "Quel condiment est utilisé dans le Veggie Whopper ?",
            answers: [
                { text: "Ketchup", correct: true },
                { text: "Sauce BBQ", correct: false },
                { text: "Moutarde", correct: false },
                { text: "Sauce Cajun", correct: false },
            ]
        },
        {
            question: "Quel burger utilise du bacon végétale ?",
            answers: [
                { text: "Veggie DCB", correct: true },
                { text: "Veggie Louisiane", correct: false },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie Whopper et Veggie DCB", correct: false },
            ]
        },
        {
            question: "Combien de tranches de cornichons sont utilisées dans le Veggie DCB ?",
            answers: [
                { text: "4", correct: true },
                { text: "3", correct: false },
                { text: "2", correct: false },
                { text: "5", correct: false },
            ]
        },
        {
            question: "Quel type de patty est utilisé dans le Veggie Louisiane ?",
            answers: [
                { text: "Patty Chicken Veggie", correct: true },
                { text: "Patty Rebel", correct: false },
                { text: "Patty Crispy Chicken", correct: false },
                { text: "Patty Végétale", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers utilise du bacon végétal ?",
            answers: [
                { text: "Veggie Steakhouse et Veggie DCB", correct: true },
                { text: "Veggie Louisiane uniquement", correct: false },
                { text: "Veggie Whopper uniquement", correct: false },
                { text: "Veggie Whopper et Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Quel burger n'utilise pas de sauce mayonnaise ?",
            answers: [
                { text: "Veggie DCB", correct: true },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie Steakhouse", correct: false },
                { text: "Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers utilise à la fois des oignons frits et de la sauce BBQ ?",
            answers: [
                { text: "Veggie Steakhouse", correct: true },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie DCB", correct: false },
                { text: "Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Combien de tranches de tomates sont utilisées dans le Veggie Whopper et le Veggie Louisiane ?",
            answers: [
                { text: "2 dans les deux burgers", correct: true },
                { text: "1 dans les deux burgers", correct: false },
                { text: "3 dans les deux burgers", correct: false },
                { text: "2 dans le Veggie Whopper, 1 dans le Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers contient à la fois du fromage et du bacon végétal ?",
            answers: [
                { text: "Veggie DCB et Veggie Steakhouse", correct: true },
                { text: "Veggie Whopper uniquement", correct: false },
                { text: "Veggie Louisiane uniquement", correct: false },
                { text: "Veggie Whopper et Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Quel type de pain est utilisé à la fois pour le Veggie Louisiane et le Veggie Steakhouse ?",
            answers: [
                { text: "CB4,5", correct: true },
                { text: "CB5", correct: false },
                { text: "Pain complet", correct: false },
                { text: "Tortilla", correct: false },
            ]
        },
        {
            question: "Quel burger a le plus d'ingrédients croquants (oignons frits, cornichons, etc.) ?",
            answers: [
                { text: "Veggie Steakhouse", correct: true },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie DCB", correct: false },
                { text: "Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers utilise de la moutarde comme sauce ?",
            answers: [
                { text: "Veggie DCB", correct: true },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie Steakhouse", correct: false },
                { text: "Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Quel burger utilise le plus de tranches de fromage ?",
            answers: [
                { text: "Veggie DCB", correct: true },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie Steakhouse", correct: false },
                { text: "Veggie Louisiane", correct: false },
            ]
        },
        {
            question: "Quel burger utilise à la fois de la sauce Cajun et des oignons frits ?",
            answers: [
                { text: "Veggie Louisiane", correct: true },
                { text: "Veggie Steakhouse", correct: false },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie DCB", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers utilise le même type de patty (Patty Rebel) ?",
            answers: [
                { text: "Veggie Whopper, Veggie DCB, Veggie Steakhouse", correct: true },
                { text: "Veggie Louisiane uniquement", correct: false },
                { text: "Veggie Whopper uniquement", correct: false },
                { text: "Veggie Louisiane et Veggie Steakhouse", correct: false },
            ]
        },
        {
            question: "Combien de burgers utilisent de la salade comme ingrédient ?",
            answers: [
                { text: "Tous les burgers", correct: true },
                { text: "Seulement Veggie Whopper et Veggie DCB", correct: false },
                { text: "Seulement Veggie Louisiane et Veggie Steakhouse", correct: false },
                { text: "Seulement Veggie Whopper", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers utilise le plus d'oignons (frits ou crus) ?",
            answers: [
                { text: "Veggie Whopper", correct: true },
                { text: "Veggie Louisiane", correct: false },
                { text: "Veggie DCB", correct: false },
                { text: "Veggie Steakhouse", correct: false },
            ]
        },
        {
            question: "Lequel de ces burgers a le plus d'ingrédients en commun avec le Veggie Whopper ?",
            answers: [
                { text: "Veggie Steakhouse", correct: true },
                { text: "Veggie DCB", correct: false },
                { text: "Veggie Louisiane", correct: false },
                { text: "Aucun", correct: false },
            ]
        },
        {
            question: "Quel burger contient à la fois de la sauce BBQ et du bacon végétal ?",
            answers: [
                { text: "Veggie Steakhouse", correct: true },
                { text: "Veggie Whopper", correct: false },
                { text: "Veggie DCB", correct: false },
                { text: "Veggie Louisiane", correct: false },
            ]
        },
        
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Rejouer ?";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
