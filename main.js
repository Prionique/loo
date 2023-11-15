function los() {
        alert("Data updated!")
      }
      class_list = ["5А","5Б","5В","5Г","6А","6Б","6В","6Г","7А","7Б","7В","7Г","8А","8Б","8В","9А","9Б","9В","10А","10Б","10В"]
      list_values = []

      function select_all() { 
          for (let s = 0; s < class_list.length; s++) {
            console.log(class_list[s]["index"])

            if (document.getElementById("all").checked === false){
              document.getElementById(class_list[s]).checked = false;
            } else {
              document.getElementById(class_list[s]).checked = true;
            }
            }};
      

      function checkBoxCheck() {
        for (let p = 0; p < class_list.length; p++) {
          console.log(class_list[p] +
          document.getElementById(class_list[p]).checked
          );
          list_values.push([class_list[p],document.getElementById(class_list[p]).checked ])
        
        console.log("----------------------------------------------");
        }
        
      }

      function ada() {
        ad()
      }
