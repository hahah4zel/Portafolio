let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #900C3F;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: black;">Soy una diseñadora apasionada por la tipografía, los medios impresos y las expresiones gráficas en el espacio público. Actualmente soy ayudante de investigación en el Área de Estudios Urbanos de la UAM Azcapotzalco </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
