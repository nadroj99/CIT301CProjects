function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   if (listA === null || listB === null){
	   	return null;
	   }

	   for (var i=0; i<listA.length; i++){
	   	var nextValue = listA[i]; // get next value in the list

		//for every element in list B
		for(var j=0; j<listB.length; j++){
			if(listB[j] === nextValue){
				resultList.push(listB[j]);
				break;
			}
		}


	   }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = new Array();
	   var AminusB = this.relativeCompliment(listA,listB);
	   var BminusA = this.relativeCompliment(listB,listA);
	   var inter = this.intersection(listA,listB);
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null){
            return null;
        }

	   resultList = resultList.concat(AminusB);
	   resultList = resultList.concat(inter);
	   resultList = resultList.concat(BminusA);

	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeCompliment = function(listA, listB) { // A - B

	   var resultList = new Array();

	   // resultList = Array.from(listA);
	   var index;
	   var inter = new Array();
	   inter = this.intersection(listA,listB);

	   /*-------------------------------Insert your code here -------------------------------------*/
        //LIST A - LIST B
        if (listA === null || listB === null){
            return null;
        }

        for (var i=0; i<listA.length; i++) {
            resultList.push(listA[i]);
        }

        for (index = resultList.length - 1; index >= 0; --index) {
            if (inter.indexOf(resultList[index]) >= 0) { // >0 find occurrences
                resultList.splice(index, 1);
            }
        }


	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symetricDifference = function(listA, listB) {

        var resultList = new Array();
        var AminusB = this.relativeCompliment(listA,listB);
        var BminusA = this.relativeCompliment(listB,listA);

		/*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null){
            return null;
        }

        resultList = resultList.concat(AminusB);
        resultList = resultList.concat(BminusA);

		/*-------------------------------Insert your code here -------------------------------------*/

        return resultList;
	}	
	

}
