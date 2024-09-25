// WHOPPER
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
    }
    
]

////////////////////WHOPPER FIN/////////////////////////////////////////
///////////////////// DOUBLE WHOPPER CHS /////////////////////////////////////

