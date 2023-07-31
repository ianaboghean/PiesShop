// Code for active links
let navLinkList = document.getElementsByClassName("nav-link");

for(var i = 0; i < navLinkList.length; i++) {

    let link = navLinkList[i];

    if (link.href === window.location.href) {
        link.classList.add("active");
    }

    link.addEventListener('click', (e) => {
        for(var i = 0; i < navLinkList.length; i++) {
            let link = navLinkList[i];
            link.classList.remove('active');
        }
        
        link.classList.add('active');
      });
}

// functions
function formValidation () {

    var forms = document.querySelectorAll('.needs-validation');                                                                                                        

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
}

function contactSendMessage () {
    document.getElementById("sendMessage").onclick = function () {
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            //Creates an array of toasts (it only initializes them)
            return new bootstrap.Toast(toastEl) //No need for options; use the default options
        });
        toastList.forEach(toast => toast.show()); //This show them
    };
}

//////////////////////////////////////////////////////////////////////////////////


function readJsonFile(fileName, callback) {
    var file = './data/' + fileName + '.json';

    var rawFile = new XMLHttpRequest();

    rawFile.overrideMimeType("application/json");

    rawFile.open("GET", file, true);

    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send();
  
}

function createAllPiesPage (data) {
    let dataToObject = JSON.parse(data);



    let x = 'div';

    let i = 1;
    for (let key in dataToObject) {
        let pie = dataToObject[key];
        
        let image = '<p>' + pie.image + '</p>';

        x += image;

        if (i == 3) {

        }

        i++;
    }
    
    x += '</div>';

    //  console.log(x);
}

// readJsonFile("pies", createAllPiesPage);

function readHtmlFile(fileName) {
    let file = './pages/' + fileName + '.html';

    let httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", file, true);

    httpRequest.onreadystatechange= function() {
        if (httpRequest.readyState === 4 && httpRequest.status == "200") {
            return httpRequest.responseText;
        }
    };

    httpRequest.send();

    
}

readHtmlFile('allpies');

console.log(readHtmlFile('allpies'));



