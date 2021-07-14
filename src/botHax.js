var stadiumFileText = `{

	"name" : "Simple",

	"width" : 600,

	"height" : 200,

	"spawnDistance" : 200,

	"bg" : { "type" : "hockey", "width" : 600, "height" : 200, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -600, "y" : 200, "trait" : "ballArea" },
		/* 1 */ { "x" : -600, "y" : -200, "trait" : "ballArea" },
		/* 2 */ { "x" : 600, "y" : 200, "trait" : "ballArea" },
		/* 3 */ { "x" : 600, "y" : -200, "trait" : "ballArea" },
		
		/* 4 */ { "x" : 0, "y" : 200, "trait" : "kickOffBarrier" },
		/* 5 */ { "x" : 0, "y" : -200, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : 451, "y" : -71, "curve" : 180, "color" : "FF0000", "vis" : true },
		/* 7 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : 453, "y" : 73, "curve" : 180, "color" : "FF0000", "vis" : true },
		/* 8 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : 451, "y" : -71, "curve" : -180, "color" : "FF0000", "vis" : true },
		/* 9 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : 453, "y" : 73, "curve" : -180, "color" : "FF0000", "vis" : true },
		/* 10 */ { "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -453, "y" : -72, "curve" : -180, "color" : "0000FF", "vis" : true },
		/* 11 */ { "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -451, "y" : 72, "curve" : -180, "color" : "0000FF", "vis" : true },
		/* 12 */ { "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -453, "y" : -72, "curve" : 180, "color" : "0000FF", "vis" : true },
		/* 13 */ { "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -451, "y" : 72, "curve" : 180, "color" : "0000FF", "vis" : true }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 0, "v1" : 2, "trait" : "ballArea" },
		{ "v0" : 1, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "trait" : "kickOffBarrier", "v0" : 6, "v1" : 7, "curve" : 180, "color" : "FF0000" },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "trait" : "kickOffBarrier", "v0" : 8, "v1" : 9, "curve" : -180, "color" : "FF0000" },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "kickOffBarrier", "v0" : 10, "v1" : 11, "curve" : -180, "color" : "0000FF" },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "kickOffBarrier", "v0" : 12, "v1" : 13, "curve" : 180, "color" : "0000FF" }

	],

	"goals" : [
		{ "team" : "blue", "p0" : [0,-200 ], "p1" : [0,200 ] },
		{ "team" : "red", "p0" : [0,-200 ], "p1" : [0,200 ] },
		{ "team" : "red", "p0" : [0,-200 ], "p1" : [0,200 ] },
		{ "team" : "red", "p0" : [0,-200 ], "p1" : [0,200 ], "_selected" : true }

	],

	"discs" : [
		

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -200, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -200, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -600, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -600, "bCoef" : 0.1 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "curve" : 110 },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	}
}`;
var room = HBInit({
  roomName: "My Room",
  noPlayer: true,
  maxPlayers: 16,
  public: false,
});
room.setCustomStadium(stadiumFileText);
room.setScoreLimit(5);
room.setTimeLimit(0);

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  // Get all players
  var players = room.getPlayerList();
  if (players.length == 0) return; // No players left, do nothing.
  if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

room.onPlayerJoin = function (player) {
  room.sendChat("O jogador " + player.name + " entrou!");
  updateAdmins();
};

room.onPlayerLeave = function (player) {
  updateAdmins();
};
