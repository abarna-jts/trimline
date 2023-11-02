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
    }updateCartTotal();
  });
});
// Deleting cart
document.querySelectorAll('.remove').forEach(button => {
  button.addEventListener('click', function() {
    // Find the closest product row and remove it
    const productRow = this.closest('tr');
    
    if (productRow) {
      // Remove the product row from the table
      productRow.remove();
    }
  });
});
function updateCartTotal() {
  const subtotals = document.querySelectorAll('.subtotal-amount');
  let total = 0;

  subtotals.forEach(subtotalsElement => {
    const subtotalValue = parseFloat(subtotalsElement.textContent.replace('₹', ''));
    total += subtotalValue;
  });

  // Add the fixed shipping charge
  total += 30; // Add the shipping charge of ₹30

  // Update the total in the HTML
  document.querySelector('.cart-totals span').textContent = `₹${total.toFixed(2)}`;
}

// Initialize the cart total when the page loads
updateCartTotal();








  
 




