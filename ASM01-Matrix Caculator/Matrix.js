function calcul(){
        var fa = new Array(16);

            for(var i=0;i<16;i++)
            {
                fa[i] = document.getElementById("f"+String(i));
            }

        var farray = new Array(Array(),Array(),Array(),Array());
                
            var k = 0;
            for(var i = 0; i<4; i++)
            {
                for(var j = 0;j<4;j++)
                {
                    farray[i][j] = parseInt(fa[k].value);
                    k++;
                }
            }
            
        var sa = new Array(16);

        for(var i=0;i<16;i++)
        {
            sa[i] = document.getElementById("s"+String(i));
        }

        var sarray = new Array(Array(),Array(),Array(),Array());
                
            var t = 0;
            for(var i = 0; i<4; i++)
            {
                for(var j = 0;j<4;j++)
                {
                    sarray[i][j] = parseInt(sa[t].value);
                    t++;
                }
            }

        var rarray = new Array(Array(),Array(),Array(),Array());
        
        var sum = 0;
        
        for(var f = 0; f<4; f++)
        {
            for(var s = 0; s<4; s++)
            {
                for(var r=0; r<4; r++)
                {
                    sum += farray[f][r] * sarray[r][s];
                }
                rarray[f][s] = sum;
                sum = 0;
            }
        }

       var result = new Array(16);

        for(var i=0;i<16;i++)
        {
            result[i] = document.getElementById("r"+String(i));
        }

        var l = 0;
        for(var i = 0; i<4; i++)
        {
            for(var j = 0;j<4;j++)
            {
                result[l].value = rarray[i][j];
                l++;
            }
        }
    }
