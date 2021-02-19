const apanhaTodos = (moves) => {
    
    /*Set up*/
    const ash = {
        x: 0,
        y: 0
    };
    const visited = [[ash.x,ash.y]];
    
    /*Input String Iteration*/
    for (movesIdx=0; movesIdx<moves.length; movesIdx++){
        switch(moves[movesIdx]){
            case 'N':
                ash.y++;
                break;
            case 'S': 
                ash.y--;
                break;
            case 'E': 
                ash.x++;
                break;
            case 'O':
                ash.x--;
                break;
            default: // Input verification
                console.log('Error: Bad input');
                return;
        }

        /*Already Caught Verification*/
        if (!(alreadyVisited(visited, [ash.x, ash.y]))){ 
            visited.push([ash.x, ash.y]);
        }
    }
    console.log(visited.length);
}

/*Verification function*/
const alreadyVisited = (visited, currentPos) =>{
    for (visitedIdx=0; visitedIdx<visited.length; visitedIdx++){
        const visitedPosition = visited[visitedIdx];
        if (visitedPosition[0] == currentPos[0] && visitedPosition[1] == currentPos[1]){
            return true;
        }
    }
    return false;
}

apanhaTodos(process.argv[2]);


/*
apanhaTodos('E'); // expected:  2
apanhaTodos('NESO'); // expected: 4
apanhaTodos('NSNSNSNSNSNSNS'); //expected: 2
apanhaTodos('NNNEEE'); //expected: 7
apanhaTodos('NNNSSSEEEOOONNNSSSEEEOOONNNSSSEEEOOONNNSSSEEEOOONNNSSSEEEOOO'); // expected: 7
apanhaTodos('NNNOOOSSSEEENNNOOOSSSEEENNNOOOSSSEEENNNOOOSSSEEENNNOOOSSSEEE'); // expected: 12
apanhaTodos('NNNEEE'); //expected: 7
*/
