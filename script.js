const hamBurger = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#sidebar");

// Fungsi untuk menyimpan status sidebar di localStorage
function saveSidebarState() {
  const isExpanded = sidebar.classList.contains("expand");
  localStorage.setItem("sidebarState", isExpanded ? "expanded" : "collapsed");
}

// Fungsi untuk memuat status sidebar saat halaman dimuat
function loadSidebarState() {
  const sidebarState = localStorage.getItem("sidebarState");
  if (sidebarState === "expanded") {
    sidebar.classList.add("expand");
  } else {
    sidebar.classList.remove("expand");
  }
}

// Event listener untuk tombol toggle
hamBurger.addEventListener("click", function () {
  sidebar.classList.toggle("expand");
  saveSidebarState();
});

// Muat status sidebar pada saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadSidebarState);

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        const tableBody = document.getElementById("tableBody");
        
        searchInput.addEventListener("keyup", function () {
            const filter = searchInput.value.toLowerCase();
            const rows = tableBody.getElementsByTagName("tr");
            
            for (let i = 0; i < rows.length; i++) {
                const columns = rows[i].getElementsByTagName("td");
                let found = false;

                for (let j = 0; j < columns.length; j++) {
                    const cell = columns[j];
                    if (cell) {
                        if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                            found = true;
                            break; // No need to check other cells
                        }
                    }
                }
                
                rows[i].style.display = found ? "" : "none"; // Show or hide the row
            }
        });
    });
</script>
