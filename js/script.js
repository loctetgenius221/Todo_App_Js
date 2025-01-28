document.getElementById("addTask").addEventListener("click", function () {
  let task = document.getElementById("taskInput").value;
  if (task) {
    let li = document.createElement("li");

    // Creer une case a cocher
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    //Ajouter la case a cocher et le texte de la tache a l'element <li>
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + task));

    // Ajouter l'element <li> a la liste
    document.getElementById("taskList").appendChild(li);

    // Vider le champ de saisie
    document.getElementById("taskInput").value = "";
  }
});
