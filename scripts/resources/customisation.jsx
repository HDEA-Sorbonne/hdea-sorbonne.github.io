import * as React from 'react'
import LogoSorbonne from '../images/lettres-logo.svg'

export const Introduction = () => {
    return (
        <div className="landing-block text">
            <h2 style={{ textAlign: "center" }}>HDEA</h2>

            <p>
                L’unité Histoire et dynamique des espaces anglophones (HDEA, UR 4086) est une unité de Sorbonne Université qui rassemble principalement des membres de la 11e section du CNU, travaillant sur les questions politiques, sociales, économiques et culturelles des pays anglophones.
            </p>

            <p>Pour 2025-2030, ses travaux sont structurés en trois axes principaux:</p>

            <ol>
                <li><strong>Transmissions, transferts, transformations</strong></li>
                <li><strong>Société et gouvernance</strong></li>
                <li>
                    <strong>
                        <a 
                            href="https://hdea.sorbonne-universite.fr/8087a37c-4c72-483c-bf5a-a1750f69426b/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Nature et Environnements
                        </a>
                    </strong>
                </li>
            </ol>
        </div>
    )
}

export const Footer = () => (
    <footer id="footer">
        <div className="footer-block">
            <p>HDEA - Histoire et dynamique des espaces anglophones</p>
            <p>Faculté des Lettres de Sorbonne Université</p>
            <a 
                href='https://lettres.sorbonne-universite.fr/' 
                style={{ width: "40%", display: "inline-block" }}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="logo"
                    src={LogoSorbonne}
                    alt="Logo Sorbonne"
                    style={{ maxWidth: "100%", margin: 0, height: "194px", width: "500px" }}
                />
            </a>
        </div>

        <div className="footer-block">
            <p>
                Pour nous rendre visite : Maison de la Recherche, 28 rue Serpente,
                75006 Paris, Bureau S007.
            </p>
            <p>
                Pour nous contacter : <a href="mailto:hdea@sorbonne-universite.fr">hdea@sorbonne-universite.fr</a>
            </p>
        </div>
    </footer>
)
