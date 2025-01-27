document.addEventListener('DOMContentLoaded', function () {
    const products = [
      { name: "Best Vegan Banana", price: "39,90", imgSrc: "6678v5005fz11-6a7d70b892b36c3b5916120534293567102410241.png" },
      { name: "Produto 2", price: "55,90", imgSrc: "6678v5005fz11-6a7d70b892b36c3b5916120534293567102410241.png" },
      { name: "Produto 3", price: "25,90", imgSrc: "6678v5005fz11-6a7d70b892b36c3b5916120534293567102410241.png" },
      { name: "Produto 4", price: "49,90", imgSrc: "6678v5005fz11-6a7d70b892b36c3b5916120534293567102410241.png" },
      { name: "Produto 5", price: "34,90", imgSrc: "6678v5005fz11-6a7d70b892b36c3b5916120534293567102410241.png" },
    ];
  
    const productListElement = document.getElementById('product-list');
  
    // Criar os cards de produtos dinamicamente
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('aria-label', `Produto: ${product.name}`);
  
      const img = document.createElement('img');
      img.src = product.imgSrc;
      img.alt = product.name;
  
      const name = document.createElement('p');
      name.textContent = product.name;
  
      const price = document.createElement('div');
      price.classList.add('price');
      price.textContent = product.price;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(price);
  
      productListElement.appendChild(card);
    });
  });
  