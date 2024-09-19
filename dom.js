function createForm() {
    const mahasiswa = document.getElementById("mahasiswa");
  
    mahasiswa.style.backgroundColor = "rgba(237, 237, 212, 0.8)";
    mahasiswa.style.borderRadius = "8px";
    mahasiswa.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    mahasiswa.style.padding = "20px";
    mahasiswa.style.maxWidth = "600px";
    mahasiswa.style.margin = "20px auto";
  
    const form = document.createElement("div");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "15px";
  
    form.innerHTML = `
          <h2 style="text-align: center; color: MediumBlue; text-shadow: 0 0 1px #ddd;">FORMULIR MAHASISWA</h2>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="no" style="width: 25%; font-weight: bold; color: Mediumblue;">NO</label>
              <input type="text" id="no" name="no" style="width: 70%; padding: 12px; border: 3px solid #161D6F; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="nim" style="width: 25%; font-weight: bold; color: mediumblue;">NIM</label>
              <input type="text" id="nim" name="nim" style="width: 70%; padding: 12px; border: 3px solid #161D6F; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="nama" style="width: 25%; font-weight: bold; color: mediumblue;">Nama</label>
              <input type="text" id="nama" name="nama" style="width: 70%; padding: 12px; border: 3px solid #161D6F; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="kelas" style="width: 25%; font-weight: bold; color: mediumblue;">Kelas</label>
              <input type="text" id="kelas" name="kelas" style="width: 70%; padding: 12px; border: 3px solid #161D6F; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="alamat" style="width: 25%; font-weight: bold; color: mediumblue;">Alamat</label>
              <input type="text" id="alamat" name="alamat" style="width: 70%; padding: 12px; border: 3px solid #161D6F; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="hobi" style="width: 25%; font-weight: bold; color: mediumblue;">Hobi</label>
              <input type="text" id="hobi" name="hobi" style="width: 70%; padding: 12px; border: 3px solid #161D6F; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <button id="submitBtn" style="width: 100%; padding: 12px; background-color: #161D6F; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px; margin-top: 10px; transition: background-color 0.5s;">Submit</button>
          <hr style="width: 100%; border-color: #161D6F;">`;
  
    mahasiswa.appendChild(form);
  
    const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "20px";
    table.style.borderRadius = "0 0 15px 15px";
  
    table.innerHTML = `
              <thead>
                  <tr style="background-color: #6495ED; color:  mediumblue;">
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">NO</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">NIM</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Nama</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Kelas</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Alamat</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Hobi</th>
                  </tr>
              </thead>
              <tbody id="tableBody"></tbody>
          `;
  
    mahasiswa.appendChild(table);
  
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("mouseover", () => {
      submitBtn.style.backgroundColor = "#0B2F9F";
    });
    submitBtn.addEventListener("mouseout", () => {
      submitBtn.style.backgroundColor = "#6495ED";
    });
  
    submitBtn.addEventListener("click", addToTable);
  }
  
  function addToTable() {
    const no = document.getElementById("no").value;
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const alamat= document.getElementById("alamat").value;
    const hobi = document.getElementById("hobi").value;
  
    if (no && nim && nama && kelas && alamat && hobi) {
      const tableBody = document.getElementById("tableBody");
      const row = document.createElement("tr");
  
      row.style.backgroundColor =
        tableBody.children.length % 2 === 0
          ? "rgba(230, 204, 178, 0.8)"
          : "rgba(237, 237, 212, 0.8)";
      row.style.border = "1px solid #ddd";
      row.style.padding = "12px";
      row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "rgba(221, 184, 146, 0.8)"; // Light highlight color on hover
      });
      row.addEventListener("mouseout", () => {
        row.style.backgroundColor =
          tableBody.children.length % 2 === 0
            ? "rgba(230, 204, 178, 0.8)"
            : "rgba(237, 237, 212, 0.8)";
      });
  
      row.innerHTML = `
                  <td style="padding: 12px; border: 3px solid #ddd;">${no}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${nim}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${nama}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${kelas}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${alamat}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${hobi}</td>
              `;
  
      tableBody.appendChild(row);
  
      document.getElementById("no").value = "";
      document.getElementById("nim").value = "";
      document.getElementById("nama").value = "";
      document.getElementById("kelas").value = "";
      document.getElementById("alamat").value = "";
      document.getElementById("hobi").value = "";

    } else {
      alert("Harap Lengkapi Biodata");
    }
  }
  
  createForm();