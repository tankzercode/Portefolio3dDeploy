

import React, {  } from "react";
import profil from '../assets/photoProfil.png'

export default function NavBar() {



    return (

        <div>

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">
                        <img className="rounded-circle" style={{ height: "40px" }} src={profil} />
                    </a>


                    <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#project">Projet</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-white" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )

}