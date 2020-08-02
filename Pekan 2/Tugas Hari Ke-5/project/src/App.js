import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="container">
        <h1>Form Pemblian Buah</h1>

        <form>
          <table>
            <tr>
              <td><b><label for="name">Nama Pelanggan</label></b></td>
              <td><input type="Text" id="name"></input></td>
            </tr>
            <tr>
              <td><b><label>Daftar Item</label></b></td>
              <td>
                <input type="checkbox" value="Semangka" class="chk"></input>
                <label>Semangka</label><br></br>
                <input type="checkbox" value="Jeruk"></input>
                <label>Jeruk</label><br></br>
                <input type="checkbox" value="Nanas"></input>
                <label>Nanas</label><br></br>
                <input type="checkbox" value="Salak"></input>
                <label>Salak</label><br></br>
                <input type="checkbox" value="Anggur"></input>
                <label>Anggur</label><br></br>
              </td>
            </tr>
            <tr>
              <td>
              <input type="submit" class="submited" value="Kirim"></input>
              </td>
            </tr>
          </table>
        </form>

      </div>


    </div>
  );
}

export default App;
