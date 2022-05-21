const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const price = document.querySelector("#price").value.trim();


  if (title && description && price) {
    const response = await fetch(`/api/products/newAdd`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        price,
       
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create new product");
    }
  }
};

document.querySelector(".addProducts").addEventListener("submit", newFormHandler);
