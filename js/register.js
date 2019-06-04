if ('serviceWorker' in navigator) {    
    navigator.serviceWorker.register('/sw.js')
    .then(reg=> {
        console.log("O registro foi carregado com sucesso: ", reg.scope);
    })
    .catch(error=> {        
        console.log("Error ao carregar Service Worker : ", error);
    });
}