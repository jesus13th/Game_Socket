var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    } 
  };
  var game = new Phaser.Game(config);
  function preload() {
    this.load.image('ship', '../assets/spaceShips_001.png');
    }
  function create() {
    let waitingText = this.add.text(400, 300, "Esperando otros jugadores...").setOrigin(0.5);
    
    /*socket.on("connect", ()=>{console.log("connect");})
    socket.on('currentPlayers', (players)=> {
        Object.keys(players).forEach((id)=>{
            waitingText.setActive(false).setVisible(false);
            console.log(id);
        })
    });
    socket.on("DisconnectPlayer", (playerId)=>{
        console.log("un jugador se salio de la sala, id: " + playerId);
    })*/
  }
  function update(){

  }