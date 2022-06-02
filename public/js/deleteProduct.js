const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/allProducts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace("");
    } else {
      alert('Failed to delete the product');
    }
  }
};

  document
  .querySelector('.deleteProducts')
  .addEventListener('click', delButtonHandler);