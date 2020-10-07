// primimo broj = input
// obradimo input
// ispisemo dan u nedelji (tekstualno) na osnovu inputa= output

var input = 4

switch (input) {
    case 1: {
        console.log("Ponedeljak");
        break;
    }
    case 2: {
        console.log("Utorak");
        break;
    }
    case 3: {
        console.log("Sreda");
        break;
    }
    case 4: {
        console.log("Cetvrtak");
        break;
    }
    case 5: {
        console.log("Petak");
        break;
    }
    case 6: {
        console.log("Subota");
        break;
    }
    case 7: {
        console.log("Nedelja");
        break;
    }
    default: {
        console.log("Input mora da bude broj od 1 - 7")
        break;
    }
}


// OVO JE NEKA IZMENA