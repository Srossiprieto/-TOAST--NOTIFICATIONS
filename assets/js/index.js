const contentBtn = document.getElementById('contenedor-botones');
const contentToast = document.getElementById('contenedor-toast');



// Event Listener detected BTN CLICK
contentBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const type = e.target.dataset.type;


    if(type === 'exito'){
        addToast({type: 'exito', title: 'Éxito!', description:'La operación fue exitosa.', autoClose: true})
    }
    if(type === 'error'){
        addToast({type: 'error', title: 'Error', description:'Hubo un error.', autoClose: true})
    }
    if(type === 'info'){
        addToast({type: 'info', title: 'Info', description:'Esta es una notificación de información.'})

    }
    if(type === 'warning'){
        addToast({type: 'warning', title: 'Warning', description:'Cuidado, esta es una notificación de peligro.'})

    }




    

});



// Event Listener detecting CLICK TO THE TOASTS

contentToast.addEventListener('click', (e) => {
    const toastId = e.target.closest('div.toast').id;



    // closest = search closer content 
    if(e.target.closest('button.btn-cerrar')){
         closeToast(toastId);
    }
} );

    // Function close the toast
    // ? en caso de que tenfa una lista de clases agregar la clase 'cerrando'.
const closeToast = (id) => {


    document.getElementById(id)?.classList.add('cerrando');

}


// Function add class to close 'toast'

const addToast = ({type, title, description, autoClose}) => {


    // create new toast  
    const newToast = document.createElement('div');


    // add class 
    newToast.classList.add('toast');
    newToast.classList.add(type);
    if(autoClose) newToast.classList.add('autoCierre');

    // add id math.random (0-1) floor (redonded number)
    // create unique ID, used to close notifications.
    const numberAzar = Math.floor(Math.random() * 100);
    const dateNow = Date.now();
    const toastId = dateNow + numberAzar;
    newToast.id = toastId;

    // Icons
const icons = {
    exito: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
                />
            </svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
            </svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
            </svg>`,
    warning: `  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    />
                </svg>`,
};

    // Templates toast

	const toastTemplate = `
    <div class="contenido">
        <div class="icono">
            ${icons[type]}
        </div>
        <div class="texto">
            <p class="titulo">${title}</p>
            <p class="descripcion">${description}</p>
        </div>
    </div>
    <button class="btn-cerrar">
        <div class="icono">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
            </svg>
        </div>
    </button>
`;


    // add template to new toast
    newToast.innerHTML = toastTemplate;

    // add new toast to container
    contentToast.appendChild(newToast);


    // function to handle closing the toast
    const handleAnimationClose = (e) => {
        if(e.animationName === 'cierre'){
            // remove the eventListener
            newToast.removeEventListener('animationend', handleAnimationClose);
            // remove = remove from dom
            newToast.remove();
        }
    };

	if (autoClose) {
		setTimeout(() => closeToast(toastId), 5000);
	}

    // add event Listener for detected finished animated
    newToast.addEventListener('animationend', handleAnimationClose)


};

