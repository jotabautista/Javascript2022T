/**
 * Condicional switch
 */
 const fruta = "🍏";

 switch(fruta) {
    case "🥭":
        console.log("Mango");
        break;
    case "🍍":
        console.log("Piña");
        break;
    case "🍏":
    case "🍎":
        console.log("Manzanas");
        break;
    default:
        console.log("Esto no parece ser una fruta")
        break;
}



