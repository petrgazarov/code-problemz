// find all possible combinations for a given sum s
// n <= s <= (n * 4)
// iterate through sums and check all of them

function processData(input) {
    var allDigits = getAllDigits(input);
    var allGrids = getAllGrids(input);
    var allSums = getAllSums(input);
    var allResults = [];

    for (var i = 0; i < 4; i++) {
        for (var k = 0; k < allSums.length; k++) {
            allResults.push(numberOfSolutionsPerSum(allDigits, allSums[k], allGrids[i]));
        }
    }

    return getSum(allResults.map(function(res) { return getSum(res); });
}

function numberOfSolutionsPerSum(allDigits, sum, grid) {
    var allChecks = getColumns(grid).concat(getDiagonals(grid)).concat(grid);
    var validSolution = true;
    for (var i = 0; i < allChecks.length; i++) {
        var currentSum = getSum(allChecks[i];

        if (currentSum > sum)) {
            return 0;
        }

        if (currentSum < sum) {
            validSolution = false;
        }
    }

    if (validSolution) {
        return 1;
    }

    var result = 0;

    for (var i = 0; i < allDigits.length; i++) {
        for (var k = 0; k < 4; k++) {
            for (var l = 0; l < 4; l++) {
                // more here
            }
        }

        result += numberOfSolutionsPerSum(allDigits, sum, grid);
    }
}

function getSum(array) {
    var result = 0;

    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

function getColumns(grid) {
    var newGrid = [[], [], [], []];

    for (var i = 0; i < 4; i++) {
        for (var k = 0; k < 4; k++) {
            newGrid.push(grid[k][i])
        }
    }

    return newGrid;
}

function getDiagonals(grid) {
    var left = [];
    var right = [];

    for (var i = 0; i < grid.length; i++) {
        left.push(grid[i][i]);
    }

    var i = 0;
    for (var k = 0; k < grid.length; k++) {
        right.push(grid[i][k]);
        i += 1;
    }
    return [left, right];
}

function getAllDigits(n) {
    var result = [];

    for (var i = 0; i <= n; i++) {
        result.push(i);
    }

    return result;
}

function getAllGrids(n) {
    return [
        [
            [n,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,n,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,n,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,n],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];
}

function getAllSums(n) {
    var result = [];

    for (var i = n; i <= n * 4; n++) {
        result.push(i);
    }

    return result;
}
