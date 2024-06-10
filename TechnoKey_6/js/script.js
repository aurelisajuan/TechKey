//Model
class Model{
    constructor(){
        this.navbarActive = false;
        this.profileActive = false;
    }

    toggleNavbar(){
        this.navbarActive = !this.navbarActive;
        this.profileActive = false;
    }

    toggleProfile(){
        this.profileActive = !this.profileActive;
        this.navbarActive = false;
    }

    reset(){
        this.navbarActive = false;
        this.profileActive = false;
    }
}

//View
class View{
    constructor(){
        this.navbar = document.querySelector('.header .flex .navbar');
        this.profile = document.querySelector('.header .flex .profile');
    }

    updateNavbar(active){
        if(active){
            this.navbar.classList.add('active');
        } else{
            this.navbar.classList.remove('active');
        }
    }

    updateProfile(active){
        if(active){
            this.profile.classList.add('active');
        } else{
            this.profile.classList.remove('active');
        }
    }

    reset(){
        this.navbar.classList.remove('active');
        this.profile.classList.remove('active');
    }
}

//Controller
class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;

        document.querySelector('#menu-btn').onclick = () => this.toggleNavbar();
        document.querySelector('#user-btn').onclick = () => this.toggleProfile();
        window.onscroll = () => this.reset();
    }

    toggleNavbar(){
        this.model.toggleNavbar();
        this.view.updateNavbar(this.model.navbarActive);
        this.view.updateProfile(this.model.profileActive);
    }

    toggleProfile(){
        this.model.toggleProfile();
        this.view.updateNavbar(this.model.navbarActive);
        this.view.updateProfile(this.model.profileActive);
    }

    reset(){
        this.model.reset();
        this.view.reset();
    }
}

//Main Entry Point
document.addEventListener('DOMContentLoaded' , () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model,view);
});