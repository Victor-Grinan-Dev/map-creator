
const testHexMap3 = [
    "b01", "c01", "d01",
    "b02", "d02", "c02", "e02",
"b03", "c03", "d03", "e03", "f03", 
    "c04", "d04", "e04", "f04", 
        "d05", "e05", "f05",  
]

const testHexMap4 = [
            "c01", "d01", "e01", "f01",
        "d02", "c02", "e02", "f02", "g02", 
    "c03", "d03", "e03", "f03", "g03", "h03",
"c04", "d04", "e04", "f04", "g04", "h04", "i04",
    "d05", "e05", "f05",  "g05", "h05", "i05", 
        "e06", "f06", "g06", "h06", "i06", 
            "f07", "g07", "h07", "i07" 
]

const generateNewHexagonalMap = (rows) => {
    let width = (2 * rows) - 1;
    let l = rows;
    for (let i = 1; i < rows; i++){
        for (let j = 0; j < 3 * rows; j++){
            if ( j > length && j <= width){
                console.log("*");
            }else{
                console.log(" "); 
            }
            console.log("\n"); 
        }
    }

    for (let i = 0; i < rows; i++) {

    }



}


generateNewHexagonalMap(3)

/*
int main(void)
{
    int length, i=0, j=0, k, l;
    printf("Please enter the length for the sides of the hexagon:");    
    scanf("%d", &length);
 
    for(i = 1, k=length, l=2*length-1; i<length; i++, k--, l++)
    {
        for(j = 0; j < 3*length; j++)
        {
            if(j>=k && j<=l)
            {
                printf("*");
            }
 
            else
                printf(" ");
        }
                printf("\n");
    }
             
    for(i = 0, k=1, l=3*length-2; i<length; i++, k++, l--)
        {
            for(j=0; j<3*length;j++)
            {
                if(j>=k && j<=l)
                    printf("*");
                else
                    printf(" ");
            }
            printf("\n");
        }
         
 
}
*/