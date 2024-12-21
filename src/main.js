import './style.css'

function loadStyle(url) {
  return new Promise((resolve, reject) => {

    const stylesheetElement = document.createElement("link");

    stylesheetElement.rel="stylesheet";
    stylesheetElement.href=url;
    
    stylesheetElement.onload = () => { resolve() };
    stylesheetElement.onerror = () => { reject() };

    document.querySelector("head").appendChild(stylesheetElement);
  });
}

const setStyles = async () => {
  try {

    await loadStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
    console.log("fontawesome da cloudflare caricato");

  } catch (ex) {

    console.error("errore nel caricare fontawesome da cloudflare");

    try {

      await loadStyle("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/css/all.min.css");
      console.log("fontawesome da jsdelivr caricato");

    } catch (innerEx) {

      console.error("errore nel caricare fontawesome da jsdelivr");
      
    }

  }
};

setStyles();

