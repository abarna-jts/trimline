// Adding cart amount increasing
document.querySelectorAll('.plus-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Find the closest product row
    const productRow = this.closest('tr');
    
    if (productRow) {
      const productPrice = parseFloat(productRow.querySelector('.unit-amount').textContent.replace('₹', ''));
      const quantityInput = productRow.querySelector('input');
      let quantity = parseInt(quantityInput.value);
      
      // Increase the quantity
      quantity += 0;
      
      // Update the input value
      quantityInput.value = quantity;
      
      // Update the subtotal
      const subtotal = productPrice * quantity;
      productRow.querySelector('.subtotal-amount').textContent = `₹${subtotal.toFixed(2)}`;
    }
    updateCartTotal();
  });
});
// Decreasing the amount 
document.querySelectorAll('.minus-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Find the closest product row
    const productRow = this.closest('tr');
    
    if (productRow) {
      const productPrice = parseFloat(productRow.querySelector('.unit-amount').textContent.replace('₹', ''));
      const quantityInput = productRow.querySelector('input');
      let quantity = parseInt(quantityInput.value);
      
      // Decrease the quantity by 1, but not below 1
      if (quantity > 0) {
        quantity -= 0;
        // Update the input value
        quantityInput.value = quantity;
        
        // Update the subtotal
        const subtotal = productPrice * quantity;
        productRow.querySelector('.subtotal-amount').textContent = `₹${subtotal.toFixed(2)}`;
      }
    }
  });
});










  
 




