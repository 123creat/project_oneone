document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("searchBtn");
    const uploadBtn = document.getElementById("uploadBtn");
  
    searchBtn.addEventListener("click", function() {
      const searchInput = document.getElementById("search").value;
      const selectedKeywords = Array.from(document.querySelectorAll("#keywords option:checked")).map(option => option.value);
  
      const searchResult = document.createElement("div");
      searchResult.classList.add("search-result");
  
      const searchResultText = document.createElement("div");
      searchResultText.classList.add("search-result-text");
      searchResultText.textContent = `关键字: ${searchInput}, 选中的关键词: ${selectedKeywords.join(", ")}`;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "删除";
      deleteBtn.addEventListener("click", function() {
        searchResult.remove();
      });
  
      const editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.textContent = "编辑";
      editBtn.addEventListener("click", function() {
        const editTextarea = document.createElement("textarea");
        editTextarea.value = searchResultText.textContent;
        searchResultText.textContent = "";
        searchResultText.appendChild(editTextarea);
  
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "保存";
        saveBtn.addEventListener("click", function() {
          searchResultText.textContent = editTextarea.value;
          editTextarea.remove();
          saveBtn.remove();
        });
  
        searchResultText.appendChild(saveBtn);
      });
  
      searchResult.appendChild(searchResultText);
      searchResult.appendChild(deleteBtn);
      searchResult.appendChild(editBtn);
  
      document.getElementById("searchResults").appendChild(searchResult);
    });
  
    uploadBtn.addEventListener("click", function() {
      const fileInput = document.getElementById("file");
      const fileKeywordsInput = document.getElementById("fileKeywords");
  
      const fileResult = document.createElement("div");
      fileResult.textContent = `文件名: ${fileInput.files[0].name}, 关键词: ${fileKeywordsInput.value}`;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "删除";
      deleteBtn.addEventListener("click", function() {
        fileResult.remove();
      });
  
      fileResult.appendChild(deleteBtn);
  
      document.getElementById("uploadResults").appendChild(fileResult);
    });
  });
