<script>
  //turn file into string, then into local storage
  function storeKey() {
    //take the file from the input and turn it into a string
    let file = document.getElementById("key").files[0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      //store the string in local storage
      localStorage.setItem("key", evt.target.result);
      document.getElementById("use").classList.add("btn-disabled");
    };
  }
</script>

<div class="flex justify-center">
  <input
    type="file"
    id="key"
    class="file-input file-input-bordered file-input-secondary w-full max-w-xs"
  />
  <button class="btn btn-primary" id="use" on:click={storeKey}>Use</button>
</div>
