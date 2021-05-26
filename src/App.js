import React from 'react'
import './App.css'
import Header from './Components/Header'
import Address from './Components/Address'
import InvoiceName from './Components/InvoiceName'
import InvoiceFor from './Components/InvoiceFor'
import Price from './Components/Price'
import Total from './Components/Total'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
    // Master Branch
    <Header schName= 'christ the king college' id='#tj300395saf' />
    <Address />
    <InvoiceName />
    <InvoiceFor />
    <Price />
    <Total />
    <Footer />

    </div>
  )
}

export default App
