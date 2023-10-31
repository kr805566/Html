	var xxx;
	var yyy;
	const atkValues=[0,1,9,41,169,681,2729,10921,43689];  
	const defValues=[0,2,10,42,170,682,2730,10922,43690];


	function getMaxEvaluateIndex(){
	var evaluate=new Array(chessX);
	var evaluatemax=0;
		xxx=7;
		yyy=7;
		for(var i=0;i<chessX;i++){
			evaluate[i] = new Array(chessY);
		}
	
		for(var y=0; y<15; y++){
			for(var x=0; x<15; x++){
				evaluate[x][y]=evaluatePoint(x,y);
				if (evaluatemax<evaluate[x][y]){
					evaluatemax=evaluate[x][y];
					xxx=x;
					yyy=y;
				}
			}
		}
}


function evaluatePoint(x,y){
	
	if(cheesspace[x][y] < 2){
		
		return -1;
	}

	var evaluateValue=0;

	evaluateValue+=evaluateLine(x,y,1,0);

	evaluateValue+=evaluateLine(x,y,0,-1);

	evaluateValue+=evaluateLine(x,y,-1,-1);

	evaluateValue+=evaluateLine(x,y,1,-1);

	return evaluateValue;
}


function valid(x,y){
	return(x>=0 && y>=0 && x<15 && y<15);
}

function evaluateLine(x,y,dx,dy){
	var atkValuePosIndex=0;
	var atkValueNegIndex=0;
	var defValuePosIndex=0;
	var defValueNegIndex=0;
	var atkValueAll=0;
	var defValueAll=0;
	
	atkValuePosIndex=evaluateVector(x,y,dx,dy,1);
	defValuePosIndex=evaluateVector(x,y,dx,dy,0);
	
	atkValueNegIndex=evaluateVector(x,y,dx*-1,dy*-1,1);
	defValueNegIndex=evaluateVector(x,y,dx*-1,dy*-1,0);
	
	if(atkValuePosIndex%2==1 && atkValueNegIndex%2==1){
		atkValueAll=0;
	
	}else{
		atkValueAll=atkValues[atkValuePosIndex+atkValueNegIndex];
	}
	
	if(defValuePosIndex%2==1 && defValueNegIndex%2==1){
		defValueAll=0;
	
	}else{
		defValueAll=defValues[defValuePosIndex+defValueNegIndex];
	}


	
	if(atkValueAll>defValueAll){
		return atkValueAll;
	}else{
		return defValueAll;
	}
}


function evaluateVector(x,y,dx,dy,evaluateType){
	
	var valueIndex=0;
	for(var i=0;i<4;i++){
		x+=dx;
		y+=dy;
		if(!valid(x,y)){
			return 0;
		}
		if(cheesspace[x][y] == evaluateType){
			valueIndex+=2;
		}else{
			if(cheesspace[x][y]==(1-evaluateType) && valueIndex>1){
				valueIndex-=1;
			}
			break;
		}
	}

	return valueIndex;
	
}