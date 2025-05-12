import * as React from 'react'
import LogoSorbonne from '../images/lettres-logo.svg'

export const Introduction = () => {
    return (
        <div className="landing-block text">
            <h2><center>HDEA</center></h2>
            <p>
                L’unité Histoire et dynamique des espaces anglophones (HDEA, UR 4086) est une unité de Sorbonne Université qui rassemble principalement des membres de la 11e section du CNU, travaillant sur les questions politiques, sociales, économiques et culturelles des pays anglophones.
            </p>
            <p>Pour 2025-2030, ses travaux sont structurés en trois axes principaux:
                <ol>
                    <li><strong>Savoirs et cultures</strong></li>
                    <ul>
                        <li>
                            Circulations, échanges et transferts culturels.
                        </li>
                        <li>
                            Religion(s) et spiritualités.
                        </li>
                        <li>
                            Médias, images et cultures populaires.
                        </li>
                    </ul>
                    <li><strong>Sociétés et gouvernements</strong></li>
                    <ul>
                        <li>
                            Dynamiques économiques et sociales.
                        </li>
                        <li>
                            Politiques publiques – santé , famille, éducation.
                        </li>
                        <li>
                            Droit et relations internationales.
                        </li>

                    </ul>
                    <li><strong>Nature, Espaces et Sociétés</strong></li>
                    <ul>
                        <li>
                            Études environnementales.
                        </li>
                        <li>
                            Études californiennes.
                        </li>
                        <li>
                            Territoires urbains.
                        </li>

                    </ul>

                </ol>
            </p>
        </div>
    )
}

export const Footer = () => (
    <footer id="footer">
        <div className="footer-block">
            <p>HDEA - Histoire et dynamique des espaces anglophones</p>
            <p>Faculté des Lettres de Sorbonne Université</p>
            <a href='https://lettres.sorbonne-universite.fr/' style={{ width: "40%", display: "inline-block"}}>
                <img className="logo" src={LogoSorbonne} style={{ maxWidth: "100%", margin: 0, height: "194px", width: "500px" }} />
            </a>
        </div>
        <div className="footer-block">
            <p> Pour nous rendre visite : Maison de la Recherche, 28 rue Serpente,
                75006 Paris, Bureau S007.
            </p>
            <p>Pour nous contacter : <a href="mailto:hdea@sorbonne-universite.fr">hdea@sorbonne-universite.fr</a></p>
        </div>
    </footer>)