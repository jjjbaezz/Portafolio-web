const app = document.getElementById('typewriter',);

const type = new Typewriter(app,{
    loop: true,
    delay: 75
});

type.typeString('Desarrollador Full-Stack')
.pauseFor(1000)
.start();
type.typeString(' ;)')
.pauseFor(1000)
.start();



