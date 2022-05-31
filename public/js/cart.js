const response = await fetch(`/api/products/newAdd`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      price,
      image,
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
;

document.querySelector(".addProducts").addEventListener("submit", newFormHandler);
