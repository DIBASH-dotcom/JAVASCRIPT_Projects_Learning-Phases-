<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discount Calculator</title>
</head>
<body>
    <h1> Discount Calculator</h1>

    <label> Product Name:</label>
    <input type="text" id="name" placeholder="enter a product name"><br>
    <label>Product Price: </label>
    <input type="number" id="price" placeholder="Enter product price"><br>

    <label>Discount Percentage:</label>
    <input type="number"  id="discount" placeholder="enter your discount"><br>

    <button onclick="CalculateDiscount()">Calaculate</button>

    <p id="result"></p>

    <script>
        function CalculateDiscount(){

            let name = document.getElementById("name").value;
            let pricevalue = document.getElementById("price").value;
            let discountvalue= document.getElementById("discount").value;
            let result= document.getElementById("result");

            let missingfields =[];
            if(name ==="") {
                missingfields.push("Product Name");
            }
            if(pricevalue ===""){
                missingfields.push("Product Price");
            }
            if(discountvalue ==="" ){
                missingfields.push("Discount Percentage");
            }

           if(missingfields.length>0) {
            result.innerHTML ="Please enter the following fields:"+ missingfields.join(",");
            result.style.color="red";
            return;
           }

           let price = parseFloat(pricevalue);
           let discount =parseFloat(discountvalue);

           if(isNaN(price) ||  price<=1) {
            result.innerHTML="Please enter a vaild product price greater than 1";
            result.style.color="red";
            return;

           }
           if(isNaN(discount) || discount<0 || discount>=10000) {
            result.innerHTML="Please enter a vaild discount percentage betwwen 0 and 10000";
            result.style.color="red";
            return;
           }

           let finalPrice=price-(price *discount)/100;
result.innerHTML = ` <bold>${name}</bold> :Final Price after discount: ${finalPrice.toFixed(2)}`;
    result.style.color = "green";

           
        }
    </script>

</body>
</html>
