// let input = `
// 0	960	540	0	
// 1	948	540	0	
// 2	958.614	539.265	0	
// 3	955.325	539.183	0	
// 4	936.5	540	0	
// 5	955.255	540.065	0	
// 6	974	540	0	
// 7	953.749	540	0	
// 8	933.5	540	0	
// 9	954.863	539.97	0	
// 10	976	540	0	
// 11	955.407	540.179	0	
// 12	923.585	540.421	0	
// 13	923.636	540.54	0	
// 14	955.73	540.56	0	
// 15	976.5	540.5	0	
// 16	955.907	540.312	0	
// 17	924.085	540.076	0	
// 18	924.153	539.968	0	
// 19	956.318	539.975	0	
// 20	977	540	0	
// 21	940.066	539.94	0	
// 22	903.5	540	0	
// 23	953.75	540.515	0	
// 24	1004	541	0	
// 25	928.056	540.727	0	
// 26	930.671	540.316	0	
// 27	1014	540	0	
// 28	916.5	540	0	
// 29	1004	540	0	
// 30	926.936	541.459	0	
// 31	957.001	541.661	0	
// 32	1013.31	540.791	0	
// 33	994.223	540.439	0	
// 34	971.197	540.15	0	
// 35	960	540	0	
// `;

let input = `
0	0	
1	3	
2	-1.44444	
3	-1.44444	
4	3	
5	-1	
6	-5	
7	1.5	
8	8	
9	-4	
10	-16	
11	-6.496	
12	8.192	
13	8.192	
14	-6.496	
15	-16	
16	-6.144	
17	9.088	
18	9.088	
19	-6.144	
20	-16	
21	-2.5	
22	11	
23	-3	
24	-17	
25	4.48148	
26	4.74074	
27	-16	
28	11	
29	-16	
30	4.74074	
31	-2	
32	-15.1137	
33	-9.70262	
34	-3.17201	
35	0	
`;

let output = "";

let splitted = input.trim().split("\n"),
    lines = splitted.length,
    oneFramePercentage = Number((100 / (lines - 1)).toFixed(2));

let firstX,
    firstY;

// go through every line
for (let i = 0; i < lines; i++) {

    // split the line string into chunks
    let chunks = splitted[i].trim().split("\t");

    if (chunks.length == 4) { // transform: position

        let x = Number(chunks[1]),
            y = Number(chunks[2]);
        
        if (isNaN(x) || isNaN(y)) continue;
        else {
            if (i == 0) {
                firstX = x;
                firstY = y;
            }

            let diffX = (x - firstX).toFixed(3);
            let diffY = (y - firstY).toFixed(3);
            output += `${oneFramePercentage * i}% {
                transform: translate3d(${diffX}px, ${diffY}px, 0) 
            } `;
        }

    } else if (chunks.length == 2) { // transform: rotation

        let degrees = chunks[1];
        if (isNaN(degrees)) continue;
        else {
            output += `rotate(${degrees}deg)\n`;
        }

    }
        
}

console.log(output);
