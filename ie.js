function ask(cd){
  setTimeout(function(){
  console.log("---start---");
    cd();
  }, 200);
}
ask(function(){
console.log("---end---")
});