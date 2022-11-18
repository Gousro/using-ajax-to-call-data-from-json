var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    var status = xhr.status;
    if (status === 200) { 
      //Callback caso de tudo certo
      callback(null, xhr.response);
    } else {
      //Callback caso de algum erro
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

//Utilizando o método
getJSON('data.json', function(err, data) {
if (err !== null) {
  console.log('Ocorreu um erro' + err);
} else {
  const dados = JSON.stringify(data.persons);
  const list_name = document.getElementById('name');
  const list_age = document.getElementById('age');
  const list_gender = document.getElementById('gender');
  
  for (let i = 0; i < data.persons.length; i++) {
    list_name.innerHTML += `<li>${data.persons[i].name}</li>`;
    list_age.innerHTML += `<li>${data.persons[i].age}</li>`;
    list_gender.innerHTML += `<li>${data.persons[i].gender}</li>`;
  }

}
});
