const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const price = document.querySelector("#price").value.trim();
  const image = document.querySelector("#image").value.trim();

  if (title && description && price && image) {
    const response = await fetch(`/api/products/delete`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete the product');
    }
  }
};

  document
  .querySelector('.product-grid8')
  .addEventListener('click', delButtonHandler)