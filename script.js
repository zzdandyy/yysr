var gift_number = 0;
var map = {
    tile_size: 16,
    keys: [
        {id: 0, colour: '#333', solid: 0},
        {id: 1, colour: '#888', solid: 0},
        {id: 2, colour: '#555', solid: 1, bounce: 0.35},
        {
            id: 3,
            colour: 'rgba(121, 220, 242, 0.4)',
            friction: {x: 0.9, y: 0.9},
            gravity: {x: 0, y: 0.1},
            jump: 1,
            fore: 1
        },
        {id: 4, colour: '#777', jump: 1},
        {id: 5, colour: '#db96e8', solid: 1, bounce : 1.1},
        {id: 6, colour: '#666', solid: 1, bounce: 0},
        {id: 7, colour: '#56e5ab', script: 'change_colour', solid: 0, bounce: 0},
        {id: 8, colour: '#4575e0', solid: 0, script: 'next_level'},
        {id: 9, colour: '#f34f4f', solid: 0, script: 'death'},
        {id: 10, colour: '#555', solid: 1},
        {id: 11, colour: '#7bc7a8', solid: 0, script: 'unlock'},
        {id: 12, colour: '#e8e695', solid: 0, script: 'check_chest', alive: 1},
        {id: 13, colour: '#555', solid: 0, script: 'unlock2'},
        {id: 14, colour: '#555', solid: 1},
        {id: 15, colour: '#555', solid: 0, script: 'check_chest2', alive: 1},
        {id: 16, colour: '#f34f4f', solid: 0, script: 'enemy', alive: 1},
        {id: 17, colour: 'rgba(92,209,234,0.4)', solid: 0, script: 'check_chest3', alive: 1},
        {id: 18, colour: '#888', solid: 0, script: 'unlock3', alive: 1},
        {id: 19, colour: '#bebe8a', solid: 1},
    ],
    data: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 14, 14, 14, 14, 14, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 14, 14, 14, 14, 14, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 14, 14, 14, 14, 14, 13, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 14, 14, 14, 14, 14, 13, 1, 1, 1, 1, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 14, 15, 14, 14, 14, 13, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 2, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 19, 18, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 19, 18, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 17, 2],
        [2, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
    gravity: {x: 0, y: 0.3},
    vel_limit: {x: 2, y: 16},
    movement_speed: {jump: 6, left: 0.3, right: 0.3},
    player: {x: 2, y: 2, colour: '#e3e3db'},
    scripts: {
        change_colour: `
        var randomIndex = Math.floor(Math.random() * colorChoices.length);
        game.player.colour = colorChoices[randomIndex];
        `,
        next_level: `
            showPopup("恭喜找到全部宝箱！blue boy 来啦～");
        `,
        death: 'showPopup("危⚠️！"); game.load_map(map);',
        unlock: 'game.current_map.keys[10].solid = 0; game.current_map.keys[10].colour = "#888";',
        check_chest: `
        if (game.player.colour != '#e8e695') {
            showPopup("需要 yellow gril 才能开启哦");
        } else if (game.current_map.keys[12].alive === 1) {
            game.current_map.keys[12].colour = "#888";
            showPopup("聪明！发挥你的聪明才智找到所有宝箱！");
            gift_number = gift_number + 1;
            game.current_map.keys[12].alive = 0;
        };
        `,
        unlock2: `
        if (game.current_map.keys[15].alive === 1) {
            game.current_map.keys[14].solid = 0; 
            game.current_map.keys[14].colour = "#888";
            game.current_map.keys[15].colour = "#e78abc";
        }
        `,
        check_chest2: `
        if (game.current_map.keys[15].alive === 1) {
            game.current_map.keys[15].colour = "#888";
            showPopup("意外的发现！🌸*1");
            gift_number = gift_number + 1;
            game.current_map.keys[15].alive = 0;
        };
        `,
        check_chest3: `
        if (game.current_map.keys[17].alive === 1) {
            game.current_map.keys[17].colour = 'rgba(121, 220, 242, 0.4)';
            showPopup("眼神不错嘛！ 🧦*1");
            gift_number = gift_number + 1;
            game.current_map.keys[17].alive = 0;
        };
        `,
        unlock3: `
        if (game.current_map.keys[18].alive === 1) {
            if (gift_number === 4) {
                showPopup("啦啦啦，宝贝生日快乐！🎂*1");
                game.current_map.keys[19].solid = 0;
                game.current_map.keys[18].alive = 0;
         } else {
            showPopup("还差" + (4 - gift_number) + "个宝箱哦");
            game.load_map(map);
         }
         }
        `,
    }
};
var colorChoices = ['#e1a892', '#8ce89d', '#e8e695', '#e78abc'];

var Clarity = function () {
    this.alert_errors = false;
    this.log_info = true;
    this.tile_size = 16;
    this.limit_viewport = false;
    this.jump_switch = 0;
    this.viewport = {x: 200, y: 200};
    this.camera = {x: 0, y: 0};
    this.key = {left: false, right: false, up: false};
    this.player = {loc: {x: 0, y: 0}, vel: {x: 0, y: 0}, can_jump: true};
    window.onkeydown = this.keydown.bind(this);
    window.onkeyup = this.keyup.bind(this);
};

Clarity.prototype.error = function (message) {
    if (this.alert_errors) alert(message);
    if (this.log_info) console.log(message);
};

Clarity.prototype.log = function (message) {
    if (this.log_info) console.log(message);
};

Clarity.prototype.set_viewport = function (x, y) {
    this.viewport.x = x;
    this.viewport.y = y;
};

Clarity.prototype.keydown = function (e) {
    var _this = this;
    switch (e.keyCode) {
        case 37:
            _this.key.left = true;
            break;
        case 38:
            _this.key.up = true;
            break;
        case 39:
            _this.key.right = true;
            break;
    }
};

Clarity.prototype.keyup = function (e) {
    var _this = this;
    switch (e.keyCode) {
        case 37:
            _this.key.left = false;
            break;
        case 38:
            _this.key.up = false;
            break;
        case 39:
            _this.key.right = false;
            break;
    }
};

Clarity.prototype.load_map = function (map) {
    if (typeof map === 'undefined'
        || typeof map.data === 'undefined'
        || typeof map.keys === 'undefined') {
        this.error('Error: Invalid map data!');
        return false;
    }
    this.current_map = map;
    this.current_map.background = map.background || '#333';
    this.current_map.gravity = map.gravity || {x: 0, y: 0.3};
    this.tile_size = map.tile_size || 16;
    var _this = this;
    this.current_map.width = 0;
    this.current_map.height = 0;
    map.keys.forEach(function (key) {
        map.data.forEach(function (row, y) {
            _this.current_map.height = Math.max(_this.current_map.height, y);
            row.forEach(function (tile, x) {
                _this.current_map.width = Math.max(_this.current_map.width, x);
                if (tile == key.id) _this.current_map.data[y][x] = key;
            });
        });
    });
    this.current_map.width_p = this.current_map.width * this.tile_size;
    this.current_map.height_p = this.current_map.height * this.tile_size;
    this.player.loc.x = map.player.x * this.tile_size || 0;
    this.player.loc.y = map.player.y * this.tile_size || 0;
    this.player.colour = map.player.colour || '#000';
    this.key.left = false;
    this.key.up = false;
    this.key.right = false;
    this.camera = {x: 0, y: 0};
    this.player.vel = {x: 0, y: 0};
    this.log('Successfully loaded map data.');
    return true;
};

Clarity.prototype.get_tile = function (x, y) {
    return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
};

Clarity.prototype.draw_tile = function (x, y, tile, context) {
    if (!tile || !tile.colour) return;
    context.fillStyle = tile.colour;
    context.fillRect(x, y, this.tile_size, this.tile_size);
};

Clarity.prototype.draw_map = function (context, fore) {
    for (var y = 0; y < this.current_map.data.length; y++) {
        for (var x = 0; x < this.current_map.data[y].length; x++) {
            if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {
                var t_x = (x * this.tile_size) - this.camera.x;
                var t_y = (y * this.tile_size) - this.camera.y;
                if (t_x < -this.tile_size || t_y < -this.tile_size || t_x > this.viewport.x || t_y > this.viewport.y) continue;
                this.draw_tile(t_x, t_y, this.current_map.data[y][x], context);
            }
        }
    }
    if (!fore) this.draw_map(context, true);
};

Clarity.prototype.move_player = function () {
    var tX = this.player.loc.x + this.player.vel.x;
    var tY = this.player.loc.y + this.player.vel.y;
    var offset = Math.round((this.tile_size / 2) - 1);
    var tile = this.get_tile(
        Math.round(this.player.loc.x / this.tile_size),
        Math.round(this.player.loc.y / this.tile_size)
    );

    if (tile.gravity) {
        this.player.vel.x += tile.gravity.x;
        this.player.vel.y += tile.gravity.y;
    } else {
        this.player.vel.x += this.current_map.gravity.x;
        this.player.vel.y += this.current_map.gravity.y;
    }

    if (tile.friction) {
        this.player.vel.x *= tile.friction.x;
        this.player.vel.y *= tile.friction.y;
    }

    var t_y_up = Math.floor(tY / this.tile_size);
    var t_y_down = Math.ceil(tY / this.tile_size);
    var y_near1 = Math.round((this.player.loc.y - offset) / this.tile_size);
    var y_near2 = Math.round((this.player.loc.y + offset) / this.tile_size);
    var t_x_left = Math.floor(tX / this.tile_size);
    var t_x_right = Math.ceil(tX / this.tile_size);
    var x_near1 = Math.round((this.player.loc.x - offset) / this.tile_size);
    var x_near2 = Math.round((this.player.loc.x + offset) / this.tile_size);

    var top1 = this.get_tile(x_near1, t_y_up);
    var top2 = this.get_tile(x_near2, t_y_up);
    var bottom1 = this.get_tile(x_near1, t_y_down);
    var bottom2 = this.get_tile(x_near2, t_y_down);
    var left1 = this.get_tile(t_x_left, y_near1);
    var left2 = this.get_tile(t_x_left, y_near2);
    var right1 = this.get_tile(t_x_right, y_near1);
    var right2 = this.get_tile(t_x_right, y_near2);

    if (tile.jump && this.jump_switch > 15) {
        this.player.can_jump = true;
        this.jump_switch = 0;
    } else this.jump_switch++;

    this.player.vel.x = Math.min(Math.max(this.player.vel.x, -this.current_map.vel_limit.x), this.current_map.vel_limit.x);
    this.player.vel.y = Math.min(Math.max(this.player.vel.y, -this.current_map.vel_limit.y), this.current_map.vel_limit.y);
    this.player.loc.x += this.player.vel.x;
    this.player.loc.y += this.player.vel.y;
    this.player.vel.x *= .9;

    if (left1.solid || left2.solid || right1.solid || right2.solid) {
        while (this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1).solid
        || this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x += 0.1;
        while (this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1).solid
        || this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x -= 0.1;
        var bounce = 0;
        if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
        if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
        if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
        if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;
        this.player.vel.x *= -bounce || 0;
    }
    if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {
        while (this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size)).solid
        || this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y += 0.1;
        while (this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size)).solid
        || this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y -= 0.1;
        var bounce = 0;
        if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
        if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
        if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
        if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;
        this.player.vel.y *= -bounce || 0;
        if ((bottom1.solid || bottom2.solid) && !tile.jump) {
            this.player.on_floor = true;
            this.player.can_jump = true;
        }
    }
    var c_x = Math.round(this.player.loc.x - this.viewport.x / 2);
    var c_y = Math.round(this.player.loc.y - this.viewport.y / 2);
    var x_dif = Math.abs(c_x - this.camera.x);
    var y_dif = Math.abs(c_y - this.camera.y);

    if (x_dif > 5) {
        var mag = Math.round(Math.max(1, x_dif * 0.1));
        if (c_x != this.camera.x) {
            this.camera.x += c_x > this.camera.x ? mag : -mag;
            if (this.limit_viewport) {
                this.camera.x = Math.min(this.current_map.width_p - this.viewport.x + this.tile_size, this.camera.x);
                this.camera.x = Math.max(0, this.camera.x);
            }
        }
    }
    if (y_dif > 5) {
        var mag = Math.round(Math.max(1, y_dif * 0.1));
        if (c_y != this.camera.y) {
            this.camera.y += c_y > this.camera.y ? mag : -mag;
            if (this.limit_viewport) {
                this.camera.y = Math.min(this.current_map.height_p - this.viewport.y + this.tile_size, this.camera.y);
                this.camera.y = Math.max(0, this.camera.y);
            }
        }
    }
    if (this.last_tile != tile.id && tile.script) {
        eval(this.current_map.scripts[tile.script]);
    }
    this.last_tile = tile.id;

    // 修改玩家与敌人碰撞的逻辑
    if (this.player.vel.y > 0) { // 玩家正在下降
        if ((bottom1.id === 16 && bottom1.alive) || (bottom2.id === 16 && bottom2.alive)) {
            // 玩家从敌人的上方跳下来，敌人被击败
            this.kill_enemy(bottom1);
            this.kill_enemy(bottom2);
            // 反弹跳跃机制
            this.player.vel.y = -this.current_map.movement_speed.jump / 2;
        }
    } else {
        // 检查玩家是否碰到敌人侧面
        if (
            (left1.id === 16 && left1.alive) || (left2.id === 16 && left2.alive) ||
            (right1.id === 16 && right1.alive) || (right2.id === 16 && right2.alive)
        ) {
            // 玩家碰到敌人侧面或顶部，导致死亡
            showPopup("要小心哦～");
            this.load_map(this.current_map); // 重置关卡
        }
    }
};

Clarity.prototype.kill_enemy = function (tile) {
    if (tile.id === 16 && tile.alive) {
        tile.alive = 0; // 设为死亡状态
        tile.id = 1; // 变为不可阻挡的
        tile.colour = "#888"; // 改变颜色以示区别
        showPopup("我踩！👜*1");
        gift_number = gift_number + 1;
    }
};

Clarity.prototype.update_player = function () {
    if (this.key.left) {
        if (this.player.vel.x > -this.current_map.vel_limit.x)
            this.player.vel.x -= this.current_map.movement_speed.left;
    }
    if (this.key.up) {
        if (this.player.can_jump && this.player.vel.y > -this.current_map.vel_limit.y) {
            this.player.vel.y -= this.current_map.movement_speed.jump;
            this.player.can_jump = false;
        }
    }
    if (this.key.right) {
        if (this.player.vel.x < this.current_map.vel_limit.x)
            this.player.vel.x += this.current_map.movement_speed.left;
    }
    this.move_player();
};

Clarity.prototype.draw_player = function (context) {
    context.fillStyle = this.player.colour;
    context.beginPath();
    context.arc(
        this.player.loc.x + this.tile_size / 2 - this.camera.x,
        this.player.loc.y + this.tile_size / 2 - this.camera.y,
        this.tile_size / 2 - 1,
        0,
        Math.PI * 2
    );
    context.fill();
};

Clarity.prototype.update = function () {
    this.update_player();
};

Clarity.prototype.draw = function (context) {
    this.draw_map(context, false);
    this.draw_player(context);
};

Clarity.prototype.move_enemies = function () {
    var currentTime = Date.now();

    for (var y = 0; y < this.current_map.data.length; y++) {
        for (var x = 0; x < this.current_map.data[y].length; x++) {
            var tile = this.current_map.data[y][x];
            if (tile.id === 16 && tile.alive) {
                tile.direction = tile.direction || 1; // 初始化方向
                tile.movementCooldown = tile.movementCooldown || 0; // 初始化冷却时间

                if (currentTime - tile.movementCooldown >= 150) { // 150毫秒冷却
                    var direction = tile.direction;
                    var nextX = x + direction;
                    var nextTile = this.get_tile(nextX, y);

                    // 碰到墙时反方向移动
                    if (!nextTile || nextTile.solid) {
                        tile.direction = -tile.direction;
                    } else {
                        // 如果可以移动，先将当前位置复原为空地砖，就是 id 为 1 的地砖
                        this.current_map.data[y][x] = this.current_map.keys[1];
                        // 然后将敌人移动到下一个位置
                        this.current_map.data[y][nextX] = tile;
                    }

                    tile.movementCooldown = currentTime; // 更新冷却时间戳
                }
            }
        }
    }
};

Clarity.prototype.update = function () {
    this.update_player();
    this.move_enemies(); // 新增: 调用 move_enemies 函数
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set desired game resolution
var gameWidth = 400;
var gameHeight = 400;

// Function to resize canvas and scale context
function resizeCanvas() {
    var widthToHeight = gameWidth / gameHeight;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        canvas.style.height = newHeight + 'px';
        canvas.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        canvas.style.width = newWidth + 'px';
        canvas.style.height = newHeight + 'px';
    }

    canvas.width = gameWidth;
    canvas.height = gameHeight;
    ctx.scale(canvas.width / gameWidth, canvas.height / gameHeight);
}

function showPopup(message) {
    var popup = document.getElementById('game-popup');
    var popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('game-popup');
    popup.style.display = 'none';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
var game = new Clarity();
game.set_viewport(canvas.width, canvas.height);
game.load_map(map);
game.limit_viewport = true;

function Loop() {
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    window.requestAnimationFrame(Loop);
}

Loop();