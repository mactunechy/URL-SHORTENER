import React from 'react'

const Footer = () => (
    <React.Fragment>
        <footer className="footer mt-auto bg-dark"style={{
        position : 'fixed',
        bottom :68,
        width:"100%",
        height:"15px"
    }}></footer>
        <footer className="footer mt-auto table-dark p-3" style={{
        position : 'fixed',
        bottom :0,
        width:"100%"
    }}>
        <div className="container">
            <h4 className="text-light">Linko | &copy; 2019</h4>
        </div>
    </footer>
    </React.Fragment>
)

export default Footer