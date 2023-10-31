using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ABC : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		string[] array1 = new string[9];
		bool OX;

		{
			if(OX=true){
				array1 [0] = "O";
			}else{
				array1 [0] = "X";
			}

			OX=!OX;
		}


		if( array1[0]=="O" && array1[1]=="O" && array1[2]=="O"  ){
			Debug.Log ("O Win");
		}

		if( array1[0]=="X" && array1[1]=="X" && array1[2]=="X"  ){
			Debug.Log ("X Win");
		}


	}
}
