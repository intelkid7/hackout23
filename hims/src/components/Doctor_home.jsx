import React from 'react'

export default function Doctor_home() {
  return (
    <div id='tdiv'>
      <div classname="table-wrapper-scroll-y my-custom-scrollbar">
        <table classname="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th id='sno' scope="col">No</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

