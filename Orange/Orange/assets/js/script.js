document.getElementById('apply-filters').addEventListener('click', function() {
    const selectedCountry = document.getElementById('country').value;
    const selectedDiscipline = document.getElementById('discipline').value;
    const selectedTuition = document.getElementById('tuition').value;
  
    const results = document.querySelectorAll('.result-item');
  
    results.forEach(function(result) {
      const resultCountry = result.getAttribute('data-country');
      const resultDiscipline = result.getAttribute('data-discipline');
      const resultTuition = result.getAttribute('data-tuition');
  
      // Check if the result matches the filters
      const matchesCountry = selectedCountry === '' || selectedCountry === resultCountry;
      const matchesDiscipline = selectedDiscipline === '' || selectedDiscipline === resultDiscipline;
      const matchesTuition = selectedTuition === '' || selectedTuition === resultTuition;
  
      // Show or hide the result based on the filters
      if (matchesCountry && matchesDiscipline && matchesTuition) {
        result.style.display = 'block';
      } else {
        result.style.display = 'none';
      }
    });
  });
  document.getElementById('country').addEventListener('change', filterResults);
  document.getElementById('discipline').addEventListener('change', filterResults);
  document.getElementById('tuition').addEventListener('change', filterResults);
  
  function filterResults() {
    const selectedCountry = document.getElementById('country').value;
    const selectedDiscipline = document.getElementById('discipline').value;
    const selectedTuition = document.getElementById('tuition').value;
  
    const results = document.querySelectorAll('.result-item');
  
    results.forEach(function(result) {
      const resultCountry = result.getAttribute('data-country');
      const resultDiscipline = result.getAttribute('data-discipline');
      const resultTuition = result.getAttribute('data-tuition');
  
      // Check if the result matches the filters
      const matchesCountry = selectedCountry === '' || selectedCountry === resultCountry;
      const matchesDiscipline = selectedDiscipline === '' || selectedDiscipline === resultDiscipline;
      const matchesTuition = selectedTuition === '' || selectedTuition === resultTuition;
  
      // Show or hide the result based on the filters
      if (matchesCountry && matchesDiscipline && matchesTuition) {
        result.style.display = 'block';
      } else {
        result.style.display = 'none';
      }
    });
  }
  document.getElementById('reset-filters').addEventListener('click', function() {
    // Reset all filters
    document.getElementById('country').value = '';
    document.getElementById('discipline').value = '';
    document.getElementById('tuition').value = '';
  
    // Show all results
    const results = document.querySelectorAll('.result-item');
    results.forEach(function(result) {
      result.style.display = 'block';
    });
  });
  const resultsPerPage = 2;
  let currentPage = 1;
  
  function paginateResults(page) {
    const results = document.querySelectorAll('.result-item');
    const totalPages = Math.ceil(results.length / resultsPerPage);
    
    // Ensure the page number is within range
    currentPage = Math.min(Math.max(page, 1), totalPages);
    
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
  
    // Show only the results for the current page
    results.forEach((result, index) => {
      if (index >= start && index < end) {
        result.style.display = 'block';
      } else {
        result.style.display = 'none';
      }
    });
  
    renderPaginationControls(totalPages);
  }
  
  function renderPaginationControls(totalPages) {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('pagination-button');
      if (i === currentPage) {
        button.disabled = true;
      }
      button.addEventListener('click', function() {
        paginateResults(i);
      });
      paginationControls.appendChild(button);
    }
  }
  
  // Initialize the pagination on page load
  paginateResults(currentPage);
  function filterResults() {
    const selectedCountry = document.getElementById('country').value;
    const selectedDiscipline = document.getElementById('discipline').value;
    const selectedTuition = document.getElementById('tuition').value;
  
    const results = document.querySelectorAll('.result-item');
  
    results.forEach(function(result) {
      const resultCountry = result.getAttribute('data-country');
      const resultDiscipline = result.getAttribute('data-discipline');
      const resultTuition = result.getAttribute('data-tuition');
  
      // Check if the result matches the filters
      const matchesCountry = selectedCountry === '' || selectedCountry === resultCountry;
      const matchesDiscipline = selectedDiscipline === '' || selectedDiscipline === resultDiscipline;
      const matchesTuition = selectedTuition === '' || selectedTuition === resultTuition;
  
      // Show or hide the result based on the filters
      if (matchesCountry && matchesDiscipline && matchesTuition) {
        result.style.display = 'block';
      } else {
        result.style.display = 'none';
      }
    });
  
    // After filtering, reapply pagination
    paginateResults(1); // Reset to the first page
  }
  document.addEventListener('DOMContentLoaded', () => {
    const totalPages = 5; // Total number of pages
    let currentPage = 1;  // Start on page 1

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageNumberSpan = document.querySelector('.pagination-number');

    function updatePagination() {
        pageNumberSpan.textContent = currentPage;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    updatePagination(); // Initialize the pagination display
});

document.getElementById('apply-filters').addEventListener('click', function() {
  const selectedCountry = document.getElementById('country').value;
  const selectedDiscipline = document.getElementById('discipline').value;
  const selectedTuition = document.getElementById('tuition').value;
  const searchTerm = document.querySelector('.search-bar').value.toLowerCase(); // Get the search term

  const results = document.querySelectorAll('.result-item');

  results.forEach(function(result) {
      const resultCountry = result.getAttribute('data-country');
      const resultDiscipline = result.getAttribute('data-discipline');
      const resultTuition = result.getAttribute('data-tuition');
      const resultTitle = result.querySelector('h3').textContent.toLowerCase(); // Get the program title for search

      // Check if the result matches the filters
      const matchesCountry = selectedCountry === '' || selectedCountry === resultCountry;
      const matchesDiscipline = selectedDiscipline === '' || selectedDiscipline === resultDiscipline;
      const matchesTuition = selectedTuition === '' || selectedTuition === resultTuition;
      const matchesSearch = searchTerm === '' || resultTitle.includes(searchTerm); // Check if search matches the title

      // Show or hide the result based on the filters and search
      if (matchesCountry && matchesDiscipline && matchesTuition && matchesSearch) {
          result.style.display = 'block';
      } else {
          result.style.display = 'none';
      }
  });

  paginateResults(1); // Reset pagination after filtering
});

// Trigger filter on 'Enter' key press in the search bar
document.querySelector('.search-bar').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      document.getElementById('apply-filters').click(); // Simulate clicking the apply filters button
  }
});

// Handle pagination as usual
function paginateResults(page) {
  const results = document.querySelectorAll('.result-item');
  const resultsPerPage = 2;
  const totalPages = Math.ceil(results.length / resultsPerPage);

  currentPage = Math.min(Math.max(page, 1), totalPages);

  const start = (currentPage - 1) * resultsPerPage;
  const end = start + resultsPerPage;

  results.forEach((result, index) => {
      if (index >= start && index < end) {
          result.style.display = 'block';
      } else {
          result.style.display = 'none';
      }
  });

  renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
  const paginationControls = document.getElementById('pagination-controls');
  paginationControls.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('pagination-button');
      if (i === currentPage) {
          button.disabled = true;
      }
      button.addEventListener('click', function() {
          paginateResults(i);
      });
      paginationControls.appendChild(button);
  }
}

// Reset filters logic
document.getElementById('reset-filters').addEventListener('click', function() {
  document.getElementById('country').value = '';
  document.getElementById('discipline').value = '';
  document.getElementById('tuition').value = '';
  document.querySelector('.search-bar').value = ''; // Clear search input

  const results = document.querySelectorAll('.result-item');
  results.forEach(function(result) {
      result.style.display = 'block';
  });

  paginateResults(1); // Reset pagination after reset
});
document.getElementById('search-button').addEventListener('click', function() {
  document.getElementById('apply-filters').click(); // Simulate clicking the apply filters button
});

document.querySelector('.search-bar').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      document.getElementById('apply-filters').click(); // Trigger search on 'Enter' key press
  }
});

document.getElementById('apply-filters').addEventListener('click', function() {
  const selectedCountry = document.getElementById('country').value;
  const selectedDiscipline = document.getElementById('discipline').value;
  const selectedTuition = document.getElementById('tuition').value;
  const searchTerm = document.querySelector('.search-bar').value.toLowerCase();

  const results = document.querySelectorAll('.result-item');

  results.forEach(function(result) {
      const resultCountry = result.getAttribute('data-country');
      const resultDiscipline = result.getAttribute('data-discipline');
      const resultTuition = result.getAttribute('data-tuition');
      const resultTitle = result.querySelector('h3').textContent.toLowerCase();

      const matchesCountry = selectedCountry === '' || selectedCountry === resultCountry;
      const matchesDiscipline = selectedDiscipline === '' || selectedDiscipline === resultDiscipline;
      const matchesTuition = selectedTuition === '' || selectedTuition === resultTuition;
      const matchesSearch = searchTerm === '' || resultTitle.includes(searchTerm);

      if (matchesCountry && matchesDiscipline && matchesTuition && matchesSearch) {
          result.style.display = 'block';
      } else {
          result.style.display = 'none';
      }
  });

  paginateResults(1);
});
