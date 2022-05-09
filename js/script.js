var arr = [];

function addToTable() {
    let data = JSON.parse(localStorage.getItem("stam"));
    for (let i = 0; i < data.length; i++) {

        let table1 = document.getElementById("tbdy");

        let nameLabel = document.createElement("label");
        let priceLabel = document.createElement("label");
        let categoryLabel = document.createElement("label");
        let imageL = document.createElement("img");
        imageL.className="images";

        let nameTd = document.createElement("td");
        let priceTd = document.createElement("td");
        let ctegoryTd = document.createElement("td");
        let imageTd = document.createElement("td");
        

        let rowTr = document.createElement("tr");

        nameLabel.textContent = data[i].Product_name;
        priceLabel.textContent = data[i].Product_price;
        categoryLabel.textContent = data[i].category;
        imageL.src = data[i].image1;

        nameTd.appendChild(nameLabel);
        priceTd.appendChild(priceLabel);
        ctegoryTd.appendChild(categoryLabel);
        imageTd.appendChild(imageL);

        rowTr.appendChild(nameTd);
        rowTr.appendChild(priceTd);
        rowTr.appendChild(ctegoryTd);
        rowTr.appendChild(imageTd);

        table1.appendChild(rowTr);

    }
}

function addProduct() {
    if (localStorage.getItem("stam")) {

        addToTable();
    }
    else {
        alert("there is no data");
    }
}

addProduct();

function add() {
    if (localStorage.getItem("stam")) {
        let pName = document.getElementById("proName");
        let pPrise = document.getElementById("proPrice");
        let pCategory = document.getElementById("products");
        let image = document.getElementById("image");


        if (pName.value != "" && pName.value != null && pPrise.value != "" && pPrise.value != null && !pPrise.value<=0
            && pCategory.value != "" && pCategory.value != null && image.value != "" && image.value != null) {

            let obj = {

                Product_name: pName.value,
                Product_price: pPrise.value,
                category: pCategory.value,
                image1: image.value,
            }

            arr.push(obj);
            localStorage.setItem("stam", JSON.stringify(arr));
            pName.value = "";
            pPrise.value = "";
            pCategory.value = "";
            image.value = "";

            let table1 = document.getElementById("tbdy");

            let nameLabel = document.createElement("label");
            let priceLabel = document.createElement("label");
            let categoryLabel = document.createElement("label");
            let imageL = document.createElement("img");
            imageL.className="images";
    
            let nameTd = document.createElement("td");
            let priceTd = document.createElement("td");
            let ctegoryTd = document.createElement("td");
            let imageTd = document.createElement("td");
            
    
            let rowTr = document.createElement("tr");
    
            nameLabel.textContent = obj.Product_name
            priceLabel.textContent = obj.Product_price;
            categoryLabel.textContent =obj.category;
            imageL.src = obj.image1;
    
            nameTd.appendChild(nameLabel);
            priceTd.appendChild(priceLabel);
            ctegoryTd.appendChild(categoryLabel);
            imageTd.appendChild(imageL);
    
            rowTr.appendChild(nameTd);
            rowTr.appendChild(priceTd);
            rowTr.appendChild(ctegoryTd);
            rowTr.appendChild(imageTd);
    
            table1.appendChild(rowTr);
    

        }

        else {
            alert("enter again");
            pName.value = "";
            pPrise.value = "";
            pCategory.value = "";
            image.value = "";
        }

    
    }
}